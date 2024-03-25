import Link from "next/link"
import "./style.css"
import Image from "next/image"
import Logo from '@/public/logo/Logodesktop.svg'
import { NAV_LINKS } from "@/constance/constance"

const Navbar = () => {
  return (
    <>
      <div className="max-container padding-container bg-grey-8 mb-12">
        <div className="nav-pattern flex justify-center text-ub-base p-3">
          <p>Discover your dream home with Estatein <Link href='www.google.com' className="underline p-2">Learn More</Link></p>
        </div>

      
        <div className="bg-grey-8 max-container padding-container flex justify-between items-center p-5">
          <div>
            <Image src={Logo} alt="page_logo" />
          </div>

          <div className="flex">
              {NAV_LINKS.map((link) => (
                  <Link href={link.href} key={link.key} className="text-ub-base text-grey-30 px-3 py-1.5 cursor-pointer transition-all hover:text-grey-60 hover:font-bold ">
                      {link.label}
                  </Link>
              ))}
          </div>

          <div>
              <Link href='/' className="text-ub-base text-grey-30 flex justify-center items-center cursor-pointer transition-all hover:text-grey-60 hover:font-bold">
                  Contact Us
              </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar