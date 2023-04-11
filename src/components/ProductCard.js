import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import wish from "../images/wish.svg"
import watch from "../images/watch.jpg"
import watch2 from "../images/watch-1.jpg"
import prodcompare from "../images/prodcompare.svg"
import view from "../images/view.svg"
import addcart from "../images/add-cart.svg"


const ProductCard = (props) => {
         const {grid}=props;
    let location = useLocation();
  
   
  return (
   <>
    <div className={`${location.pathname ==="/product" ? `gr-${grid}`: "col-3"}`}>
      <Link to={`${location.pathname == "/" ?  "/product/:id" : location.pathname == "/product/:id" ? "/product/1" : ":id" }`}
       className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
        <button className='border-0 bg-transparent'>
       <img src={wish} alt="wishlist" />
       </button>
        </div>
         <div className="product-image">
            <img src={watch} className='image-fluid' alt="watch" />
            <img src={watch2} className='second-img image-fluid' alt="watch" />
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
                <img src={prodcompare} alt="compare" />
                </button>
                <button className='border-0 bg-transparent'>
                <img src={view} alt="view" />
                </button>
                <button className='border-0 bg-transparent'>
                <img src={addcart} alt="addtocart" />
                </button>
             </div>
         </div>
      </Link>
    </div>

    <div className={`${location.pathname ==="/product" ? `gr-${grid}`: "col-3"}`}>
      <Link 
      to={`${location.pathname == "/" ?  "/product/:id" : location.pathname == "/product/:id" ? "/product/1" : ":id" }`}
       className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
        <button className='border-0 bg-transparent'>
       <img src={wish} alt="wishlist" />
       </button>
        </div>
         <div className="product-image">
            <img src={watch} className='image-fluid' alt="watch" />
            <img src={watch2} className='second-img image-fluid' alt="watch" />
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
                <img src={prodcompare} alt="compare" />
                </button >
                <button className='border-0 bg-transparent' >
                <img src={view} alt="view" />
                </button >
                <button  className='border-0 bg-transparent'>
                <img src={addcart} alt="addtocart" />
                </button >
             </div>
         </div>
      </Link>
    </div>
   </>
  )
}

export default ProductCard;
