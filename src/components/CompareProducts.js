import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'


const CompareProducts = () => {
  return (
    <>
       <Meta title={"Compare Products"}/>
      <BreadCrumb title='Compare Products'/>
      <div className="cp-wrapper py-5 home-wrapper-2">
         <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="cp-card position-relative ">
                        <img src="images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                        <div className='cp-card-image '>
                            <img src="images/apple.jpg" className='img-fluid' alt="watch" />
                        </div>
                        <div className="cp-details">
                          <h5 className='title'>Apple Watch Series-8</h5>
                          <h6 className='price mb-3 mt-3'>MRP ₹45000.00
                                       (Incl. of all taxes)</h6>
                        </div> 
                        <div className='cp-specs'>
                            <h5>Brand:</h5>
                            <p>Apple</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Type:</h5>
                            <p>Watch</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>SKU:</h5>
                            <p>SK00034</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Availablity:</h5>
                            <p>In Stock</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Color:</h5>
                            <p></p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Size:</h5>
                            <p>41nm   44nm</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="cp-card position-relative ">
                        <img src="images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                        <div className='cp-card-image '>
                            <img src="images/apple-1.jpg" className='img-fluid' alt="watch" />
                        </div>
                        <div className="cp-details">
                          <h5 className='title'> Apple Watch Ultra</h5>
                          <h6 className='price mb-3 mt-3'>₹89900.00*
                                       (Incl. of all taxes)</h6>
                        </div> 
                        <div className='cp-specs'>
                            <h5>Brand:</h5>
                            <p>Apple</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Type:</h5>
                            <p>Watch</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>SKU:</h5>
                            <p>SK00044</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Availablity:</h5>
                            <p>In Stock</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Color:</h5>
                            <p></p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Size:</h5>
                            <p>42nm   45nm</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="cp-card position-relative ">
                        <img src="images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                        <div className='cp-card-image '>
                            <img src="images/firebolt.webp" className='img-fluid' alt="watch" />
                        </div>
                        <div className="cp-details">
                          <h5 className='title'> Fire Bolt Fighter</h5>
                          <h6 className='price mb-3 mt-3'>₹8900.00*
                                       (Incl. of all taxes)</h6>
                        </div> 
                        <div className='cp-specs'>
                            <h5>Brand:</h5>
                            <p>Fire-bolt</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Type:</h5>
                            <p>Watch</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>SKU:</h5>
                            <p>SK00064</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Availablity:</h5>
                            <p>In Stock</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Color:</h5>
                            <p>All Colors </p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Size:</h5>
                            <p>41nm 42nm</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="cp-card position-relative ">
                        <img src="images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                        <div className='cp-card-image '>
                            <img src="images/gp.jpg" className='img-fluid' alt="watch" />
                        </div>
                        <div className="cp-details">
                          <h5 className='title'>Google Pixel Watch</h5>
                          <h6 className='price mb-3 mt-3'>₹5900.00*
                                       (Incl. of all taxes)</h6>
                        </div> 
                        <div className='cp-specs'>
                            <h5>Brand:</h5>
                            <p>Google Pixel</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Type:</h5>
                            <p>Watch</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>SKU:</h5>
                            <p>SK00087</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Availablity:</h5>
                            <p>In Stock</p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Color:</h5>
                            <p>All Colors </p>
                        </div>
                        <div className='cp-specs'>
                            <h5>Size:</h5>
                            <p>40nm 46nm</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default CompareProducts
