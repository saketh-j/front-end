import React, { useState } from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import {IoIosGitCompare} from 'react-icons/io'
import {AiOutlineHeart} from 'react-icons/ai'
import Container from '../components/Container';


const SingleProduct = () => {
    const props = {width: 400, height: 250, zoomWidth: 600, img: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600"};

    const [orderedproduct ,setorderedProduct] =useState(true)
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
      <Meta title={"product-name"}/>
      <BreadCrumb title='product-name'/>
        <Container class1="main-product-wrapper py-5 home-wrapper-2">
            
                <div className="row">
                    <div className="col-6"> 
                    <div className="main-product-image">
                        <div><ReactImageZoom {...props} /></div>
                    </div>
                    <div className='other-product-images d-flex gap-15 flex-wrap'>
                        <div className=""><img src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" /></div>
                        <div className=""><img src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" /></div>
                        <div className=""><img src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" /></div>
                        <div className=""><img src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" /></div>
                     </div>
                     </div>
                    
                    <div className="col-6"> 
                    <div className="main-product-details">
                      <div className='border-bottom'>
                      <h4 className='title'>Laptop brand New powerful</h4>
                      </div>
                      <div className="border-bottom py-3">
                        <p className='price'>₹36,990</p>
                      
                      <div className='d-flex align-items-center gap-15'>
                      <ReactStars
                                count={5}
                                size={24}
                                value='4'
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className='mb-0 t-review'>(3 reviews)</p>
                      </div>
                      <a href="#bring" className='review-btn'  >Write a Review</a>
                      </div>
                      <div className="border-bottom">
                        <div className='d-flex gap-10 align-items-center'>
                            <h4 className='product-heading'>Type:</h4> <p className='product-data'>laptop</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center'>
                            <h4 className='product-heading'>Brand:</h4> <p className='product-data'>Hp</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center'>
                            <h4 className='product-heading'>Category:</h4> <p className='product-data'>Electronic</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center'>
                            <h4 className='product-heading'>Tags:</h4> <p className='product-data'>Laptop</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center'>
                            <h4 className='product-heading'>Availabilty:</h4> <p className='product-data'>In Stock</p>
                        </div>
                        <div className='d-flex gap-10 flex-column mt-3'>
                            <h4 className='product-heading'>Size:</h4> 
                            <div className='d-flex flex-wrap gap-15'>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>  
                                <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                            </div>
                        </div>
                        <div className='d-flex gap-10 flex-column mt-4 mb-3'>
                            <h4 className='product-heading'>Color:</h4> <p className='product-data'>All colors</p>
                        </div>
                        <div className='d-flex gap-15 mt-4 flex-row'>
                            <h4 className='product-heading'>Quantity:</h4> 
                            <div className='d-flex align-items-center gap-30'>
                                <input type="Number" className='form-control' min={1} max={20} style={{"width":"70px"}} />
                                <button className='button border-0'>AddToCart</button>
                            <button className='button border-0' to='/signup'>BuyNow</button>
                            </div>
                            
                        </div>
                        <div className='d-flex align-items-center gap-30'>
                            <div>
                                <a href="" ><AiOutlineHeart/>Add to WishList</a>
                            </div>
                            <div>
                                <a href="" ><IoIosGitCompare/>Add to Compare</a>
                            </div>
                        </div>
                        <div className='d-flex gap-10 flex-column my-3'>
                            <h4 className='product-heading'>Shipping & Returning</h4>
                             <p className='product-data'> We offer refund and/or exchange within the first 30 days of your purchase, <br /> if 30 days have passed since your purchase, you will not be offered a refund and/or exchange of any kind.</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center my-3'>
                            <h4 className='product-heading'>Product Link:</h4>
                             <a href="javascript:void(0);" onClick={()=>{copyToClipboard("https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600")}}>
                               Copy Product Link
                             </a>
                        </div>


                        
                      </div>
                    </div>
                     </div>

                </div>
           
        </Container>
         <Container class1="description-wrapper py-5 home-wrapper-2">
            
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <p className="bg-white p-3">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi adipisci cupiditate laborum officiis repellat neque, officia, sed ipsam accusantium harum sit, non ullam ducimus! Voluptatibus hic reiciendis optio error delectus.
                        </p>
                    </div>
                </div>
           
         </Container>
        <Container class1='reviews-wrapper py-5 home-wrapper-2'>
          
            <div className="row">
                <div className="col-12">
                    <div className='review-inner-wrapper'>
                    <div className="review-head py-5 d-flex justify-content-between align-items-end">
                         <div>
                            <h4 className='mb-2'>Customer Reviews</h4>
                           <div className='d-flex align-items-center gap-10'>
                           <ReactStars
                                count={5}
                                size={24}
                                value='4'
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className='mb-0'> Based on 3 reviews</p>
                           </div>
                         </div>
                         {
                                orderedproduct&&(
                                    <div>
                                    <a  className='text-dark text-decoration-underline'>Write Review</a>
                                </div>
                                )
                               }
                     </div>
                     <div className="review-form py-4">
                     <h4 className='mb-2'> Write a Review</h4>
                     <form action="" className='d-flex flex-column gap-15'>
                         <div>
                         <ReactStars
                                count={5}
                                size={24}
                                value='4'
                                edit={true}
                                activeColor="#ffd700"
                            />
                         </div>
                          <div>
                            <textarea name="" className='w-100 form-control' id="bring" cols="30" rows="5" placeholder='Write Review'></textarea>
                          </div>
                          <div>
                          <button className='button' type='submit'>
                             Submit
                            </button>
                          </div>
                          
                        </form>
                     </div>
                     <div className="reviews mt-3">
                            <div className="review">
                           <div className='d-flex gap-10 align-itemms-center'>
                               <h6 className='mt-2'>Saketh</h6>
                               <ReactStars
                                count={5}
                                size={24}
                                value='4'
                                edit={true}
                                activeColor="#ffd700"
                            />
                           </div>
                            <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At velit provident esse deserunt eos suscipit voluptatibus quos molestiae amet? Pariatur unde reprehenderit quae soluta quasi animi earum mollitia molestiae cumque!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </Container>
        <Container class1="popular-wrapper py-5 home-wrapper-2">
   
        <div className="row">
          <div className='col-12' >
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
    
     </Container>
    </>
  )
}

export default SingleProduct
