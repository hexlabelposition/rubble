import Logo from './Logo'
import Menu from './Menu'
import Container from './Container'

export default function Header() {
  return (
    <header className="bg-primary-0 py-[14px]">
      <Container>
        <nav className="flex items-center justify-between">
          <Logo />
          <Menu />
        </nav>
      </Container>
    </header>
  )
}
