import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';
import{HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import Container from '../components/Container';
import blog from "../images/blog-1.jpg"

const SingleBlog = () => {
  return (
    <>
      <Meta title={"blog"}/>
      <BreadCrumb title='blog'/>
      <Container class1="blog-wrapper home-wrapper-2 py-5">
       
            <div className="row">
               
                <div className="col-12">
                 <div className="sb-card">
                    <Link to='/blogs' className='d-flex align-items-center gap-10'> <HiOutlineArrowNarrowLeft/>Go back to Blogs</Link>
                    <h3 className="title">ecommerce marketing and selling</h3>
                    <img src={blog} className='img-fluid my-4 w-75' alt="Blog" />
                    <p >Beeketing’s ecommerce blog covers a variety of topics and is well-known for providing great marketing automation solutions.
              The blog is full of practical ecommerce guides to email marketing, conversion optimization, customer success practices, and social marketing...</p>
                 </div>
                </div>

            </div>
        
       </Container>
    </>
  )
}

export default SingleBlog
