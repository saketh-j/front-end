import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';
import catbanner1 from "../images/catbanner-01.jpg"
import catbanner2 from "../images/catbanner-02.jpg"
import catbanner3 from "../images/catbanner-03.jpg"
import catbanner4 from "../images/catbanner-04.jpg"


const Home = () => {
  return (
    <>
      <Container class1='home-wrapper-1 py-5'>
      <div className="row">
          <div className="col-6">
          <div className="main-banner position-relative p-2">
            <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
          </div>
          <div className='main-banner-content position-absolute'>
             <h4>SUPER CHARGED FOR PROS</h4>
             <h1>IPHONE 14+</h1>
             <p>From ₹129900.00*</p>
             <Link className='button'>Buy Now</Link>
          </div>
        </div>
        <div className='col-6'>
          <div className='d-flex flex-wrap justify-content-between align-items-center '>
          <div className="small-banner position-relative p-2">
            <img src={catbanner1} className='img-fluid rounded-3' alt="catbanner" />
         
          <div className='small-banner-content position-absolute'>
             <h4>BEST SALE</h4>
             <h1>Mac Book pro</h1>
             <p>From ₹229900.00*</p>
          </div>
          </div>

          <div className="small-banner position-relative p-2">
            <img src={catbanner2} className='img-fluid rounded-3' alt="catbanner" />
         
          <div className='small-banner-content position-absolute'>
             <h4>NEW ARRAIVAL</h4>
             <h1>Smart Watch 2</h1>
             <p>From ₹1900.00*</p>
          </div>
          </div>
          <div className="small-banner position-relative p-2">
            <img src={catbanner3} className='img-fluid rounded-3' alt="catbanner" />
         
          <div className='small-banner-content position-absolute'>
             <h4>15% OFF</h4>
             <h1>Buy Ipad Air</h1>
             <p>From ₹22900.00*</p>
          </div>
          </div>
          <div className="small-banner position-relative p-2">
            <img src={catbanner4} className='img-fluid rounded-3' alt="catbanner" />
         
          <div className='small-banner-content position-absolute'>
             <h4>FREE ENGRAVING</h4>
             <h1>AirPods Max</h1>
             <p> From ₹10425.00/mo. <br />
               Per Monthwith EMI</p>
          </div>
          </div>
          </div>
        </div>
        </div>
      </Container>
     <Container class1="home-wrapper-2 py-5">
     <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
               { services?.map((i,j)=> {
                  return(
                    <div className='d-flex align-items-center gap-15' key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                </div>
                  )
                })
              }
              </div>
            </div>
          </div>
     </Container>
     <Container class1="home-wrapper-2 py-5">
     <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Laptops</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Accessories</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/acc.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Speakers</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Home Appliance</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/homeapp.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/watch.jpg" className='watch' alt="camera" />
              </div>
              
            </div>
            
          </div>
        </div>
     </Container>
  <Container class1 ="featured-wrapper py-5 home-wrapper-2"> 
  <div className="row">
          <div className='col-12' >
            <h3 className="section-heading">Featured Collection</h3>
          </div>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
  </Container>
  <Container class1='famous-wrapper py-5 home-wrapper-2'>
  <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img src="images/dark-1.jpg" className='img-fluid' alt="dark" />
               <div className="famous-content position-absolute">
               <h5>SMART SCREENS</h5>
               <h2>Best watch Series 5</h2>
               <p>₹1,299 <strike>₹9,999</strike> (87% off)</p>
               
               </div>
            </div>
          </div> 
          <div className="col-3">
            <div className="famous-card-2 position-relative ">
              <img src="images/dark-3.jpg" className='img-fluid bg-dark' alt="dark" />
               <div className="famous-content position-absolute">
               <h5>IPHONE 14 PRO</h5>
               <h2>Pro.Beyond </h2>
               <p>₹1,32,299 <strike>₹1,49999</strike> (7% off)</p>
               
               </div>
            </div>
          </div> 
          <div className="col-3">
            <div className="famous-card-3 position-relative ">
              <img src="images/dark-2.jpg" className='img-fluid bg-dark ' alt="dark" />
               <div className="famous-content position-absolute">
               <h5>IPAD PRO</h5>
               <h2>SuperCharged by M2</h2>
               <p>₹92,990 <strike>₹99,999</strike> (10% off)</p>
               
               </div>
            </div>
          </div> 
          <div className="col-3">
            <div className="famous-card-4 position-relative ">
              <img src="images/dark-4.jpg" className='img-fluid' alt="dark" />
               <div className="famous-content position-absolute">
               <h5>HOMEPOD</h5>
               <h2>Profound Sound</h2>
               <p>₹32,299 <strike>₹38,999</strike> (27% off)</p>
               
               </div>
            </div>
          </div> 
          
        </div>
  </Container>
   
     <Container class1="special-wrapper py-5 home-wrapper-2">
          <div className="row gap-10">
            <div className="col-12">
               <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
              <SpecialProduct/>
              <SpecialProduct/>
              <SpecialProduct/> 
          </div>
     </Container>
  <Container className="popular-wrapper py-5 home-wrapper-2">
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
     <Container class1="marquee-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className='d-flex'>
              <div className='mx-4 w-25'>
                <img src="images/brand-01.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/brand-02.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/brand-03.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/brand-04.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/brand-05.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/brand-06.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/brand-07.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/brand-08.png" alt="brand" />
              </div>
            </Marquee>
            </div>
          </div>
        </div>
     </Container>
  
     <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div >
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
           <div className="col-3"><BlogCard /></div>
           <div className="col-3"><BlogCard /></div>
           <div className="col-3"><BlogCard /></div> 
           <div className="col-3"><BlogCard /></div>
        </div>
     </Container>
    </>
  )
}


  

export default Home



    