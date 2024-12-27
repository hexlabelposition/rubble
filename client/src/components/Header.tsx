import Logo from './shared/Logo'
import menu from '../assets/icons/menu.svg'

export default function Header() {
  return (
    <header className="bg-primary-0 py-[14px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <img src={menu} alt="Menu" />
        </div>
      </div>
    </header>
  )
}
