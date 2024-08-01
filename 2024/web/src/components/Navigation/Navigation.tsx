import HamburgerBtn from 'src/components/HamburgerBtn/HamburgerBtn'

  const NavigationComponent = () => {
    return (
      <nav className="sticky top-0 z-50 bg-white p-4 shadow-xl">
        <div className="flex w-full items-center justify-between">
          <div className="order-2 flex flex-grow justify-center">
          </div>
          <div className="order-3 md:hidden">
            <HamburgerBtn />
          </div>
          <div className="order-1 hidden space-x-4 font-gfs_didot_regular text-darkBlue md:order-3 md:flex">
            <a
              href="/#about"
              className="rounded-[12px] border border-darkBlue px-6 py-3 font-sans text-base font-bold transition duration-300 hover:bg-darkBlue hover:text-white md:text-lg lg:text-xl"
            >
              About
            </a>
            <a
              href="/#projects"
              className="rounded-[12px] border border-darkBlue px-6 py-3 font-sans text-base font-bold transition duration-300 hover:bg-darkBlue hover:text-white md:text-lg lg:text-xl"
            >
              Projects
            </a>
            <a
              href="/#contact"
              className="rounded-[12px] border border-darkBlue px-6 py-3 font-sans text-base font-bold transition duration-300 hover:bg-darkBlue hover:text-white md:text-lg lg:text-xl"
            >
              Contact
            </a>
            <a
              href="/#blog"
              className="rounded-[12px] border border-darkBlue px-6 py-3 font-sans text-base font-bold transition duration-300 hover:bg-darkBlue hover:text-white md:text-lg lg:text-xl"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    )
  }

export default NavigationComponent
