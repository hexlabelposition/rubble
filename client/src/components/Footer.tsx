import Container from './Container'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-primary-0 py-6">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-xs font-medium text-secondary-500">
              We are dedicated to helping you find the perfect property with
              ease. Explore a variety of options and let our expert team guide
              you to your ideal home in a efficient way.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-[100px]">
              <div className="min-w-[86px]">
                <p className="mb-5 text-xs font-semibold text-primary-500">
                  Company
                </p>
                <div className="flex flex-col gap-4 text-xs font-medium text-secondary-500">
                  <a href="">Blog</a>
                  <a href="">Careers</a>
                  <a href="">Contact</a>
                  <a href="">About Us</a>
                </div>
              </div>
              <div className="min-w-[86px]">
                <p className="mb-5 text-xs font-semibold text-primary-500">
                  Social Media
                </p>
                <div className="flex flex-col gap-4 text-xs font-medium text-secondary-500">
                  <a href="">Twitter</a>
                  <a href="">LinkedIn</a>
                  <a href="">Facebook</a>
                  <a href="">Instagram</a>
                </div>
              </div>
            </div>
            <div className="flex gap-[100px]">
              <div className="min-w-[86px]">
                <p className="mb-5 text-xs font-semibold text-primary-500">
                  Services
                </p>
                <div className="flex flex-col gap-4 text-xs font-medium text-secondary-500">
                  <a href="">Buy Property</a>
                  <a href="">Sell Property</a>
                  <a href="">Rent Property</a>
                  <a href="">Property Agent</a>
                </div>
              </div>
              <div className="min-w-[86px]">
                <p className="mb-5 text-xs font-semibold text-primary-500">
                  Contact
                </p>
                <div className="flex flex-col gap-4 text-xs font-medium text-secondary-500">
                  <a href="">Chat Our Support</a>
                  <a href="">rubble@gmail.com</a>
                  <a href="">+1 814 637 1529</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-secondary-200 pt-4">
          <a className="text-xs font-medium text-secondary-500">
            Privacy Policy & Terms Of Use
          </a>
          <a className="text-xs font-medium text-secondary-500">
            &copy; Rubble 2024, All Rights Reserved.
          </a>
        </div>
      </Container>
    </footer>
  )
}
