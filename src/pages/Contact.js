import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import{AiFillHome} from 'react-icons/ai'
import {IoMdCall,IoIosMail} from 'react-icons/io'
import {BsInfoLg} from 'react-icons/bs'
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact us"}/>
      <BreadCrumb title='Contact us'/>
      <Container class1="contact-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95554.97361128306!2d79.44553586441498!3d18.884177977687177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a32ca16cc2d0dcb%3A0xd28119d532d5d0dc!2sMancherial%2C%20Telangana!5e0!3m2!1sen!2sin!4v1680609140465!5m2!1sen!2sin"
             width="600" 
             height="450"
              className='border-0 w-100'
               allowFullScreen="" 
               loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
  
                </iframe>

                <div className="col-12 mt-4">
                   <div className="contact-inner-wrapper d-flex justify-content-between">
                      <div>
                        <h3 className='Contact-title mb=4'>Contact</h3>
                        <form action="" className='d-flex flex-column gap-15'>
                          <div>
                           <input type="text" className='form-control' placeholder='Name'/>
                          </div>
                          <div>
                            <input type="email" className="form-control" placeholder='Email' />
                          </div>
                          <div>
                            <input type="number" className="form-control" placeholder='Mobile' />
                          </div> 
                          <div>
                            <textarea name="" className='w-100 form-control' id="" cols="30" rows="5" placeholder='Comments'></textarea>
                          </div>
                          <div>
                          <button className='button' type='submit'>
                             Send
                            </button>
                          </div>
                        </form>
                      </div>
                      <div>
                        <h3  className='Contact-title mb-4'>Get in Touch with Us</h3>
                           <div>
                            <ul>
                              <li className='mb-3 d-flex gap-15 align-items-center'>
                                <AiFillHome className='fs-5'/>
                                  <address className='mb-0'>H.no 332-455, macherial-504208</address>                                 
                              </li>
                              <li className='mb-3 d-flex gap-15 align-items-center'>
                                <IoMdCall className='fs-5'/>
                                <a href="tel:+91 72072587008">+91 72072587008</a>                                
                              </li>
                              <li className='mb-3 d-flex gap-15 align-items-center'>
                                <IoIosMail className='fs-5'/>
                                <a href="mailto:sakethsid@gmail.com">sakethsid@gmail.com</a>                                
                              </li>
                              <li className='mb-3 d-flex gap-15 align-items-center'>
                                <BsInfoLg className='fs-5'/>
                                  <p className='mb-0'>Monday - Friday 10Am - 8Pm </p>                                 
                              </li>

                            </ul>
                           </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
      </Container>

    </>
  )
}

export default Contact
