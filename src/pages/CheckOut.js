import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import Container from '../components/Container'


const CheckOut = () => {
  return (
    <>
    
      <Container class1='checkout-wrapper py-5 home-wrapper-2'>
          
            <div className="row">
                <div className="col-7">
                    <div className='.checkout-left-data'>
                      <h3 className='website-name'>Phoneix</h3>
                      <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/cart" className='text-dark'>Cart</Link></li> <IoIosArrowForward className='mt-1 gap-30'/>
                            <li className="breadcrumb-item active" aria-current="page" active>Information</li> <IoIosArrowForward className='mt-1 gap-30'/>
                            <li className="breadcrumb-item" active>Shipping</li>  <IoIosArrowForward  className='mt-1 gap-30'/>
                            <li className="breadcrumb-item active" aria-current="page" active>Payment</li>
                        </ol>
                        </nav>
                        <h5 className='title total'> Contact Information</h5>
                        <p className="user-details">Saketh (sakethsid@gmail.com)</p>
                        <h4 className='me-4'>Shipping Address</h4>
                        <form action=""  className='d-flex gap-15 flex-wrap justify-content-between'>
                           <div className='w-100'>
                           <select name="" className='form-control form-select' id="">
                            <option value="" selected disabled>
                                Select Country
                            </option>
                           </select>
                           </div>
                           <div className='flex-grow-1'>
                             <input type="text" placeholder='Firstname' className='form-control' />
                           </div>
                           <div className='flex-grow-1'>
                             <input type="text" placeholder='Lastname' className='form-control' />
                           </div>
                           <div className='w-100'>
                             <input type="text"  placeholder='Address' className='form-control' />
                           </div >
                           <div className='w-100'> 
                             <input type="text" placeholder='Apartment,Suite,etc(Optional)' className='form-control' />
                           </div>
                           <div className='flex-grow-1'> <input type="text" placeholder='City' className='form-control' /></div>
                          <div className='flex-grow-1'> <select name="" className='form-control form-select' id="">
                            <option value="" selected disabled>Select State</option>
                            </select></div>   
                           <div className='flex-grow-1'><input type="text" placeholder='Zipcode' className='form-control' /></div>
                           <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to='/cart' className='text-dark'> <IoIosArrowBack/>  Return to Cart</Link>
                                <Link className='button'> Continue to Shipping</Link>

                            </div>
                           </div>
                        </form>
                    </div>

                </div>
                <div className="col-5">
                   <div className='border-bottom py-4'>
                   <div className='d-flex gap-10 mb-2 align-items-center'> 
                  <div className='w-75 d-flex gap-10'>
                  <div className='w-25 position-relative'>
                    <span style={{top:"-10px",right:"2px"}}
                    className='badge bg-secondary text-white rounded-circle p-1 position-absolute'>1</span>
                        <img className='img-fluid' src="images/watch.jpg" alt="watch" />
                    </div>
                 
                    <div >
                        <h5 className='total-price'> Best watch series Ever</h5>
                        <p className='total-price'>$$$$iubbsbd</p>
                    </div>
                    </div>
                    <div>
                        <h5 className='total-price'>₹ 2,000</h5>
                    </div>
                   </div>
                   </div>
                    <div className='border-bottom py-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='total'>Subtotal</p>
                        <p className='total-price'>₹ 2,000 </p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='total'>Shipping</p>
                        <p className='total-price'>₹500 </p>
                    </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>₹ 2,500 </h5>
                    </div>
                </div>
            </div>
           
      </Container>
    </>
  )
}

export default CheckOut
