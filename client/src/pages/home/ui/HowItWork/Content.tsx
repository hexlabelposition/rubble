// import React from 'react'

// // UI
// import Article from '@/shared/ui/Article'
// import Icon from '@/shared/ui/Icon'

// interface Processes {
//   number: string
//   icon: string
//   title: string
//   description: string
// }

// const processes: Processes[] = [
//   {
//     number: '01',
//     icon: 'buildings',
//     title: 'Discover Property',
//     description:
//       'Find a wide selection of properties that perfectly suit your needs and preferences.\nBrowse a comprehensive list of properties that offer detailed information.',
//   },
//   {
//     number: '02',
//     icon: 'calendar',
//     title: 'Schedule Visit',
//     description:
//       'Once you find a property of interest, schedule a visit at your convenience. Choose a date and time, and our team will ensure a smooth viewing experience.',
//   },
//   {
//     number: '03',
//     icon: 'locationTick',
//     title: 'Property Visit',
//     description:
//       'Visit, explore the neighborhood, and ensure every detail meets your expectations. Our team will be on hand to answer questions and provide information.',
//   },
//   {
//     number: '04',
//     icon: 'dollarSquare',
//     title: 'Finalize The Deal',
//     description:
//       "After the visit, if you're ready, we'll guide you through a secure transaction, handling everything from negotiation to paperwork until you're the official owner.",
//   },
// ]

// export default function Content(): React.ReactNode {
//   return (
//     <ul className="latop:gap-5 grid gap-4 laptop:grid-cols-2 laptop:grid-rows-2 desktop:gap-6">
//       {processes.map(({ icon, number, title, description }: Processes, index: number) => (
//         <li key={index}>
//           <Article className="desktop:h-full">
//             <div className="mb-10 flex items-center justify-between laptop:mb-[50px]">
//               <div className="flex aspect-square h-10 items-center justify-center rounded-lg border border-secondary-200 laptop:h-12">
//                 <Icon src={icon} size={20} alt="Icon" className="laptop:h-6 laptop:w-6" />
//               </div>

//               <span className="text-lg font-semibold text-primary-500 laptop:text-2xl">
//                 {number}
//               </span>
//             </div>

//             <div>
//               <h3 className="mb-2 text-base font-semibold text-primary-500 laptop:text-2xl">
//                 {title}
//               </h3>
//               <p className="whitespace-pre-wrap text-xs font-medium text-secondary-500 laptop:whitespace-normal laptop:text-base">
//                 {description}
//               </p>
//             </div>
//           </Article>
//         </li>
//       ))}
//     </ul>
//   )
// }
