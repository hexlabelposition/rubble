import path from 'path'
import fs from 'fs-extra'
import signale from 'signale'
import { upperFirst } from 'lodash-es'
import { camelCase } from 'lodash-es'
import { transform } from '@svgr/core'
import { format } from 'prettier'

// Get config dynamic because svgr use cjs but script and project mjs
const { default: prettierConfig } = await import('../prettier.config.mjs')

const PUBLIC_PATH = 'public/svg'
const SHARED_PATH = 'src/shared/ui/svg'

const INPUT_DIR = path.resolve(PUBLIC_PATH)
const OUTPUT_DIR = path.resolve(SHARED_PATH)

const INDEX_PATH = 'src/shared/ui/index.ts'
const INDEX_FILE = path.resolve(INDEX_PATH)
const INDEX_MARKER = '// module: svg'

if (!fs.existsSync(INPUT_DIR)) {
  signale.error(
    `Input directory "${PUBLIC_PATH}" does not exist.`,
    'Please create folder and add SVG files to it.',
  )
  process.exit(1)
}

if (!fs.existsSync(OUTPUT_DIR)) {
  signale.error(
    `Output directory "${SHARED_PATH}" does not exist.`,
    'Please create folder.',
  )
  process.exit(1)
}

const files = fs.readdirSync(INPUT_DIR).filter((file) => file.endsWith('.svg'))

if (files.length === 0) {
  signale.error(
    'The SVG files were not found.',
    `Please add them to "${PUBLIC_PATH}".`,
  )
  process.exit(1)
} else {
  signale.info(
    `Found ${files.length} SVG ${files.length === 1 ? 'file' : 'files'}.`,
  )
}

if (!fs.existsSync(INDEX_FILE)) {
  signale.error(
    `Index file "${INDEX_PATH}" does not exist.`,
    'Please create file.',
  )
  process.exit(1)
}

// delete properties that are unnecessary or unstable for svgr(cjs)
const safePrettierConfig = { ...prettierConfig }
delete safePrettierConfig.plugins
delete safePrettierConfig.tailwindFunctions

let generatedCount = 0
let skippedCount = 0

signale.start('Generating components...')

for (const file of files) {
  const svgPath = path.join(INPUT_DIR, file)
  const svgCode = fs.readFileSync(svgPath, 'utf-8')
  const baseName = path.basename(file, '.svg')
  const componentName = upperFirst(camelCase(baseName)) + 'Icon'
  const filePath = path.join(OUTPUT_DIR, componentName + '.tsx')

  if (fs.existsSync(filePath)) {
    signale.warn(
      `The component "${componentName}" already exists.`,
      'It will be skipped. Remove it if you want to regenerate.',
    )
    skippedCount += 1
    continue
  }

  const tsxCode = await transform(
    svgCode,
    {
      icon: true,
      typescript: true,
      prettier: true,
      prettierConfig: {
        parser: 'typescript',
        ...safePrettierConfig,
      },
      svgo: true,
      exportType: 'named',
      namedExport: componentName,
      jsxRuntime: 'automatic',
      plugins: [
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier',
      ],
    },
    { componentName, filePath },
  )

  fs.writeFileSync(filePath, tsxCode, 'utf-8')
  generatedCount += 1

  let indexContent = fs.readFileSync(INDEX_FILE, 'utf-8')
  const exportLine = `export { ${componentName} } from './svg/${componentName}'`

  if (indexContent.trim() === '') {
    indexContent = `${INDEX_MARKER}\n${exportLine}\n`
  }

  if (!indexContent.includes(INDEX_MARKER)) {
    const lines = indexContent.trimEnd().split('\n')
    indexContent =
      lines.join('\n') + '\n\n' + `${INDEX_MARKER}\n${exportLine}\n`
  }

  if (indexContent.includes(INDEX_MARKER)) {
    const lines = indexContent.split('\n')
    const markerIndex = lines.indexOf(INDEX_MARKER)
    let endMarkerBlock = markerIndex + 1

    while (
      endMarkerBlock < lines.length &&
      lines[endMarkerBlock].startsWith('export ')
    ) {
      endMarkerBlock += 1
    }

    const markerBlock = lines.slice(markerIndex, endMarkerBlock)

    if (!markerBlock.includes(exportLine)) {
      markerBlock.unshift(exportLine)
      lines.splice(markerIndex + 1, 0, exportLine.trim())
      indexContent = lines.join('\n')
    }
  }

  indexContent = await format(indexContent, {
    ...safePrettierConfig,
    parser: 'typescript',
  })

  fs.writeFileSync(INDEX_FILE, indexContent)
}

signale.complete('The generation was successful.')

signale.info(`Generated ${generatedCount} components.`)
signale.info(`Skipped ${skippedCount} components.`)
