import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsYoutube,BsGithub,BsInstagram} from 'react-icons/bs'
import newsletter from "../images/newsletter.png"

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row allign-items-center'>
            <div className='col-5'>
             <div className='footer-top-data d-flex gap-30 align-items-center'>
               <img src={newsletter} alt="newsletter"/>
               <h2 className='mb-0 text-white'>Signup for Newsletter</h2>
             </div>
            </div>
            <div className='col-7'>
             <div className="input-group ">
                <input type="text" className="form-control py-2"
                 placeholder="Your Email Address"
                  aria-label="Your Email Address"
                   aria-describedby="basic-addon2"/>
                <span className="input-group-text p-3" id="basic-addon2">SUBSCRIBE</span>
                </div>
             </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
           <div className='container-xxl'>
            <div className='row'>
              <div className='col-4'>
                <h5 className='text-white mb-4'>Contact Us</h5>
                <div>
                  <address className='text-white fs-6'>28-28 go 0024,gopanpally <br />Hyderabad, Telangana <br />
                  pincode:500017
                  </address>
                  <a href="tel:+91 72072587008" className='mt-3 d-block mb-2 text-white'>+91 72072587008</a>
                  <a href="mailto:Sakethsid@gmail.com" className='mt-4 d-block mb-2 text-white'>Sakethsid@gmail.com</a>
                   <div className='social-icons d-flex  align-items-center gap-30'>
                         <a href="/"><BsLinkedin  className='text-white fs-4'/></a>
                         <a href="/"><BsGithub className='text-white fs-4'/></a>
                         <a href="/"><BsYoutube className='text-white fs-4'/></a>
                         <a href="/"><BsInstagram className='text-white fs-4'/></a>
                   </div>
                </div>
              </div>
              <div className='col-3'>
                <h5 className='text-white mb-4'>Information</h5>
                <div  className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1' to='/privacy-policy'>Privacy Policy</Link>
                  <Link className='text-white py-2 mb-1' to='/refund-policy'>Refund Policy</Link>
                  <Link className='text-white py-2 mb-1' to='/shipping-policy'>shipping Policy</Link>
                  <Link className='text-white py-2 mb-1' to='/termsandConditions'>Terms & Conditions</Link>
                  <Link className='text-white py-2 mb-1' to='/'>Blogs</Link>
                </div>
              </div>
              <div className='col-3'>
                <h5 className='text-white mb-4'>Accounts</h5>
                <div  className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>About Us</Link>
                  <Link className='text-white py-2 mb-1'>FAQ</Link>
                  <Link className='text-white py-2 mb-1'>Contact</Link>
                  <Link className='text-white py-2 mb-1'>Size Chart</Link>
                </div>
              </div>
              <div className='col-2'>
                <h5 className='text-white mb-4'>Quick Links</h5>
                <div  className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>Laptops</Link>
                  <Link className='text-white py-2 mb-1'>Headphones</Link>
                  <Link className='text-white py-2 mb-1'>Tablets</Link>
                  <Link className='text-white py-2 mb-1'>Watches</Link>
                </div>
              </div>
            </div>
           </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white '>
                &copy;{new Date().getFullYear()}. Powered by Phoneix
              </p>
            </div>
          </div>
        </div>
      </footer>
    </> 
  )
}

export default Footer
