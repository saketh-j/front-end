import React from 'react'
import { Link } from 'react-router-dom'
import blog from "../images/blog-1.jpg"

const BlogCard = () => {
  return (
   
        <div className='blog-card'>
           <div className='card-image'>
              <img src={blog} className='img-fluid w-100' alt="blog" />
           </div>
           <div className='blog-content'>
              <p className='date'>02 april 2023</p>
              <h5 className='title'>ecommerce marketing and selling</h5>
              <p className='desc'>Beeketing’s ecommerce blog covers a variety of topics and is well-known for providing great marketing automation solutions.
              The blog is full of practical ecommerce guides to email marketing, conversion optimization, customer success practices, and social marketing...</p>
              <Link to='/blog/:id' className='button'>Read Me</Link>
           </div>
        </div>
        
    
  )
}

export default BlogCard
