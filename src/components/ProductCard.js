import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const ProductCard = (props) => {
         const {grid}=props;
    let location = useLocation();
  
   
  return (
   <>
    <div className={`${location.pathname ==="/product" ? `gr-${grid}`: "col-3"}`}>
      <Link to=':id' className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
        <button className='border-0 bg-transparent'>
       <img src="images/wish.svg" alt="wishlist" />
       </button>
        </div>
         <div className="product-image">
            <img src="images/watch.jpg" className='image-fluid' alt="watch" />
            <img src="images/watch-1.jpg" className='second-img image-fluid' alt="watch" />
         </div>
         <div className="product-details">
           <h6 className='brand'>
            Fossil
           </h6>
           <h5 className='product-title'>Fossil Analog Blue Dial Men's Watch</h5>
           <ReactStars
                count={5}
                size={24}
                value='4'
                edit={false}
                activeColor="#ffd700"
            />
            <p className={`desc ${grid === 12 ? "d-block" : "d-none"}`}>
            wearable computing device that closely resembles a wristwatch or other time-keeping device. <br /> In addition to telling time, many smartwatches are Bluetooth-capable
            </p>
           <p className='price'>Deal of the Day <br />
              ₹7,145</p>
         </div>
         <div className="action-bar position-absolute">
             <div className='d-flex flex-column gap-15'>
                <button className='border-0 bg-transparent'>
                <img src="images/prodcompare.svg" alt="compare" />
                </button>
                <button className='border-0 bg-transparent'>
                <img src="images/view.svg" alt="view" />
                </button>
                <button className='border-0 bg-transparent'>
                <img src="images/add-cart.svg" alt="addtocart" />
                </button>
             </div>
         </div>
      </Link>
    </div>

    <div className={`${location.pathname ==="/product" ? `gr-${grid}`: "col-3"}`}>
      <Link className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
        <button className='border-0 bg-transparent'>
       <img src="images/wish.svg" alt="wishlist" />
       </button>
        </div>
         <div className="product-image">
            <img src="images/watch.jpg" className='image-fluid' alt="watch" />
            <img src="images/watch-1.jpg" className='second-img image-fluid' alt="watch" />
         </div>
         <div className="product-details">
           <h6 className='brand'>
            Fossil
           </h6>
           <h5 className='product-title'>Fossil Analog Blue Dial Men's Watch</h5>
           <ReactStars
                count={5}
                size={24}
                value='4'
                edit={false}
                activeColor="#ffd700"
            />
            <p className={`desc ${grid === 12 ? "d-block" : "d-none"}`}>
            wearable computing device that closely resembles a wristwatch or other time-keeping device. <br /> In addition to telling time, many smartwatches are Bluetooth-capable
            </p>
           <p className='price'>Deal of the Day <br />
              ₹7,145</p>
         </div>
         <div className="action-bar position-absolute">
             <div className='d-flex flex-column gap-15'>
                <button className='border-0 bg-transparent' >
                <img src="images/prodcompare.svg" alt="compare" />
                </button >
                <button className='border-0 bg-transparent' >
                <img src="images/view.svg" alt="view" />
                </button >
                <button  className='border-0 bg-transparent'>
                <img src="images/add-cart.svg" alt="addtocart" />
                </button >
             </div>
         </div>
      </Link>
    </div>
   </>
  )
}

export default ProductCard;
