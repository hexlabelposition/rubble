import logo from '../../assets/icons/logo.svg'

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img width={36} height={36} src={logo} alt="Rubble logo" />
      <span className="text-2xl font-bold text-primary-500">Rubble</span>
    </div>
  )
}
