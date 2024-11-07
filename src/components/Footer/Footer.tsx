import { CiMail } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
      <section className="w-full bg-black text-white flex flex-col items-center justify-center gap-10 pt-10 bottom-0">
         
          <div className="w-full px-5 md:px-20">
              <div className="w-full flex flex-col md:flex-row md:justify-between gap-9">
                  <div className="w-full max-w-[170px] flex flex-col gap-3">
                      <b className="text-2xl">Quick Links</b>
                      <Link to='/' className="text-gray-300 text-md">Home</Link>
                      <Link to='practices' className="text-gray-300 text-md">Our Practices</Link>
                      <Link to='contact' className="text-gray-300 text-md">Contact Us</Link>
                      <Link to='reviews' className="text-gray-300 text-md">Customers Reviews</Link>
                  </div>
                  <div className="w-full max-w-[150px] flex flex-col gap-3">
                      <b className="text-2xl">About</b>
                      <Link to='about' className="text-gray-300 text-md">About Us</Link>
                      <Link to='team' className="text-gray-300 text-md">Our Team</Link>
                  </div>
                  <div className="w-full max-w-[170px] flex flex-col gap-3">
                      <b className="text-2xl">More</b>
                      <Link to='#'className="text-gray-300 text-md">Pricacy policy</Link>
                      <a href="#" className="text-gray-300 text-md w-full max-w-[50rem]">Terms & Conditions</a>
                  </div>
                  <div className="w-full max-w-[300px] flex flex-col gap-3">
                      <b className="text-2xl">Contacts</b>
                      <p className="text-gray-300 w-full max-w-[15rem] text-md">Do have a question you need help? Get in touch:</p>
                      <p className="text-gray-300 text-md">Mon - Fri (8am - 4pm)</p>
                      <a href="mailto:Geraldconsultant@proton.me" className="flex items-center gap-2 text-gray-300 text-md"><CiMail className="font-bold text-white"/> <span>Email:</span> Geraldconsultant@proton.me</a>
                      <a href="tel:+12702902019" className="flex items-center gap-2 text-gray-300 text-md"><HiOutlinePhone /><span>Phone:</span> +1 270-290-2019</a>
                  </div>
              </div>
          </div>
          <div className="py-5 border-t-2 w-full text-center border-gray-600 text-gray-500">Copyright © 2022 MoritZ</div>
    </section>
  )
}
