import React from 'react'
import {BsSearch} from 'react-icons/bs'
import{BiCategory} from 'react-icons/bi'
import { NavLink,Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='header-top-strip py-3'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6'>
                    <p className='text-white mb-0'>Free Shipping Over 500 Rupees & Free Return</p>
                </div>
                <div className='col-6 '>
                    <p className='text-end text-white mb-0'>Call:<a className=' text-white' href="tel:+91 72072587008">+91 72072587008</a></p>
                </div>
            </div>
        </div>
    </header>
    <header className='header-upper py-3'>
        <div className='container-xxl'> 
            <div className='row'>
               <div className='col-2'>
                <h1><Link className='text-white '>Phoneix.</Link></h1>
               </div>
               <div className='col-5'>
               <div className="input-group mb-4">
                <input type="text" className="form-control py-2"
                 placeholder="Search...."
                  aria-label="Search...."
                   aria-describedby="basic-addon2"/>
                <span className="input-group-text p-3" id="basic-addon2"><BsSearch/></span>
                </div>
               </div>
               <div className='col-5 header-upper-link d-flex align-items-center justify-content-between'>
                   <div>
                    <Link to='compare-products' className='d-flex align-items-center gap-10 text-white '>
                    <img src="images/compare.svg" alt="comapre" />
                    <p className='mb-0'>Comapre <br />Products</p>
                    </Link>
                   </div>
                   <div>
                    <Link to='wishlist' className='d-flex align-items-center gap-10 text-white '>
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className='mb-0'>Favourite <br />Wishlist</p>
                    </Link>
                   </div>
                   <div>
                    <Link to='login' className='d-flex align-items-center gap-10 text-white '>
                    <img src="images/user.svg" alt="user" />
                    <p className='mb-0'>Login <br />My Account</p>
                    </Link>
                   </div>
                   <div>
                    <Link to='cart' className='d-flex align-items-center gap-10 text-white '>
                    <img src="images/cart.svg" alt="cart" />
                    <div className='d-flex flex-column'>
                     <span className='badge bg-white text-dark '>0</span>
                     <p className='mb-0'>$20</p>
                    </div>
                    </Link>
                   </div>
               </div>
            </div>
        </div>

    </header>
    <header className='header-bottom py-3'>
       <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                     type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <BiCategory/> SHOP CATEGORIES
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
                        <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                        <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                    </ul>
                </div>
                </div>
                <div className='menu-links'>
                    <div className='d-flex align-items-center gap-15'>
                     <NavLink to='/'>Home</NavLink>
                     <NavLink to='/product'>Our Store</NavLink>
                     <NavLink to='/Blogs'>Blogs</NavLink>
                     <NavLink to='/Contact'>Contact</NavLink>
                    </div>
                </div>

              </div>
            </div>
        </div>
       </div>
    </header>
    </>
  )
}

export default Header
