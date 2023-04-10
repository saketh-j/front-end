import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';

const WishList = () => {
  return (
    <>
       <Meta title={"wishlist"}/>
      <BreadCrumb title='wishlist'/>
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="wl-card position-relative">
                         <img src="images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                        <div className="wl-card-img">
                            <img src="images/apple.jpg" className='img-fluid w-100'  alt="watch" />
                        </div>
                        <div className='wl-details py-3 px-3'>
                        <h5 className='title mt-2'>Apple Watch Series-8</h5>
                          <h6 className='price mb-3 mt-3'>MRP ₹45000.00
                                       (Incl. of all taxes)</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wl-card position-relative">
                         <img src="images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                        <div className="wl-card-img">
                            <img src="images/apple.jpg" className='img-fluid w-100'  alt="watch" />
                        </div>
                        <div className='wl-details py-3 px-3'>
                        <h5 className='title mt-2'>Apple Watch Series-8</h5>
                          <h6 className='price mb-3 mt-3'>MRP ₹45000.00
                                       (Incl. of all taxes)</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wl-card position-relative">
                         <img src="images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                        <div className="wl-card-img">
                            <img src="images/apple.jpg" className='img-fluid w-100'  alt="watch" />
                        </div>
                        <div className='wl-details py-3 px-3'>
                        <h5 className='title mt-2'>Apple Watch Series-8</h5>
                          <h6 className='price mb-3 mt-3'>MRP ₹45000.00
                                       (Incl. of all taxes)</h6>
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    </>
  )
}

export default WishList
