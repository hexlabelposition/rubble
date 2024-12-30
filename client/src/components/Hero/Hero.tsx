import Container from '@ui/Container'

export default function Hero() {
  return (
    <section className="py-6">
      <Container>
        <div className="no-repeat h-[558px] w-[327px] rounded-[10px] bg-hero bg-cover px-3 py-[60px]">
          <h1 className="sr-only">
            Real Estate Property Search and Listings Platform
          </h1>
          <p className="mb-2 text-center text-4xl font-semibold text-primary-0">
            Discover Your Dream Home Right at Your Fingertips
          </p>
          <p className="mx-auto mb-5 max-w-[256px] text-center text-[10px] font-medium text-primary-0">
            With customized searches, we help you find properties that match
            your desired location, price and type. Start the journey to your
            ideal property!
          </p>

          <div className="flex items-center justify-center gap-2">
            <div className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[#a4a4a4] bg-[#282828] px-4 py-2">
              <div className="text-white font-['Manrope'] text-sm font-semibold leading-[21px] text-primary-0">
                Get Started
              </div>
            </div>
            <div className="bg-white inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[#eeeeee] bg-primary-0 px-4 py-2">
              <div className="font-['Manrope'] text-sm font-semibold leading-[21px] text-primary-500">
                Watch Demo
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
