import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Helmet} from "react-helmet";
import Meta from '../components/Meta';
import { SketchPicker } from 'react-color'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Container from '../components/Container';

const OurStore = () => {
    const[grid,setGrid] =useState(4);

  return (
    <>
       <Meta title={"Our Store"}/>
      <BreadCrumb title='Our Store'/>
      <Container class1="store-wrapper home-wrapper-2 py-5">
        
            <div className="row">
                <div className="col-3">
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            Shop By Categories
                        </h3>
                        <div>
                            <ul className='ps-0'>
                                <li>Watch</li>
                                <li>Tv</li>
                                <li>Camera</li>
                                <li>Laptop</li>
                            </ul>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            filter By
                        </h3>
                        <h5 className='sub-title'>
                            Availablity
                        </h5>
                      <div>
                      <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                In Stock(1)
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label className="form-check-label" for="flexCheckChecked">
                                Out Of Stock(0)
                            </label>
                            </div>
                      </div>
                      <h5 className='sub-title'>Price</h5>
                      <div className='d-flex align-items-center gap-10'>
                      <div className="form-floating mb-3">
                        <input type="email" class="form-control py-3" id="floatingInput" placeholder="From"/>
                        <label Htmlfor="floatingInput">From</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="To"/>
                        <label Htmlfor="floatingInput">To</label>
                        </div>
                      </div>

                      <h5 className='sub-title'>Colors</h5>
                      <SketchPicker />
                      <h5 className='sub-title'>Size</h5>
                      <div>
                      <div class="form-check ">
                            <input className="form-check-input" type="checkbox" value="" id="color-1"/>
                            <label className="form-check-label" Htmlfor="color-1">
                                S [1]
                            </label>
                            </div>
                      <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="color-2"/>
                            <label className="form-check-label" Htmlfor="color-2">
                                M [2]
                            </label>
                     </div>     
                      </div>
                      
                      
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                             Product Tags
                        </h3>
                        <div>
                            <div className=" product-tag d-flex flex-wrap align-items-center gap-10 ">
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                    Headphones
                                </span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                    Laptops
                                </span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                    Mobiles
                                </span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                    Speakers
                                </span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                    Electronics
                                </span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                    Tablets
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3 '>
                        <h3 className='filter-title'>
                            Random Products
                        </h3>
                        <div className='random-products mb-3 d-flex'>
                           <div className="w-50">
                             <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                           </div>
                           <div className='w-50'>
                             <h5 >
                             Apple Watch Series 8
                             </h5>
                             <ReactStars
                                count={5}
                                size={24}
                                value='4'
                                edit={false}
                                activeColor="#ffd700"
                            />
                             <p>₹45900</p>
                           </div>
                        </div>
                        <div className='random-products d-flex'>
                           <div className="w-50">
                             <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                           </div>
                           <div className='w-50'>
                             <h5 >
                             Apple Watch Series 8
                             </h5>
                             <ReactStars
                                count={5}
                                size={24}
                                value='4'
                                edit={false}
                                activeColor="#ffd700"
                            />
                             <p>₹45900</p>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="filter-sort-grid mb-4">
                        <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-10">
                           <p className='mb-0 d-block' style={{"width":"100px"}}>
                              Sort By:
                           </p>
                           <select name='' className="form-control form-select" id='' >
                            <option selected>Open this select menu</option>
                            <option value="manual">Featured</option>
                            <option value="best-selling" >best-selling</option>
                            <option value="title-ascending">Alphabetically, A-Z</option>
                            <option value='title-descending'>Alphabetically, Z-A</option>
                            <option value="price-ascending">Price, low to High</option>
                            <option value="title-descending">Price, High to low</option>
                            <option value="created-ascending">Date, old to new</option>
                            <option value="created-descending">Date, new to old</option>
                            </select>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                            <p className='totalproducts mb-0'>21 Products</p>
                            <div  className="d-flex align-items-center gap-10 grid">
                            <img src="images/gr4.svg" onClick={()=>{setGrid(3)}} className='d-block img-fluid' alt="gr" />
                            <img src="images/gr3.svg" onClick={()=>{setGrid(4)}} className='d-block img-fluid' alt='gr'/>
                            <img src="images/gr2.svg" onClick={()=>{setGrid(6)}} className='d-block img-fluid' alt="gr" />
                            <img src="images/gr.svg"  onClick={()=>{setGrid(12)}} className='d-block img-fluid' alt="gr" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="products-list pb-5 ">
                      <div className="d-flex gap-10 flex-wrap">
                      <ProductCard grid={grid}/>
                      </div>
                      

                    </div>

                </div>
            </div>
        
      </Container>
    </>
  )
}

export default OurStore
