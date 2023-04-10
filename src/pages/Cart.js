import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import {MdDelete} from 'react-icons/md'
import { Link } from 'react-router-dom';
import Container from '../components/Container';


const Cart = () => {
  return (
    <>
       <Meta title={"Cart"}/>
      <BreadCrumb title='Cart'/>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="cart-header d-flex justify-content-between align-items-center">
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className="cart-data  mb-2 d-flex justify-content-between py-3 align-items-center ">
                        <div className ="cart-col-1 gap-15 d-flex align-items-center">
                            <div >
                                <img src="images/watch.jpg" alt="watch" />
                            </div>
                            <div className='w-25'> 
                                <p >saketh</p>
                                <p >fff</p>
                                <p >gggg</p>
                            </div>
                        </div>
                        <div className ="cart-col-2 d-flex align-items-center gap-15 ">
                            <h5 className='price'>3500</h5>
                        </div>
                        <div className ="cart-col-3 d-flex align-items-center gap-15  ">
                            <div>
                                <input type="Number" className='form-control' min={1} max={20} />
                            </div>
                            <div>
                                <MdDelete className='text-danger '/>
                            </div>
                        </div>
                        <div className ="cart-col-4 d-flex align-items-center gap-15 ">
                            <h5>3500</h5>
                        </div>
                    </div>
                </div>
                <div className='col-12 py-2'>
                    <div className='d-flex justify-content-between align-items-baseline'>
                    <Link to='/product' className='button'> Continue To Shopping</Link>
                        <div className='d-flex flex-column align-items-end'  >
                            <h4>SubTotal: 3500</h4>
                            <p>
                              Taxes and Shipping calculated at Discount
                            </p>
                            <Link to='/checkout' className='button'>
                              checkout
                            </Link>
                        </div>
                    </div>
               </div>
            </div>
      </Container>
    </>
  )
}

export default Cart
