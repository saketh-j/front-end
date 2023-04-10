import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const Login = () => {
  return (
    <>
       <Meta title={"Login"}/>
      <BreadCrumb title='Login'/>
      <Container class1="login-wrapper home-wrapper-2 py-5">
      
            <div className="row">
                <div className="col-12">
                     <div className="auth-card">
                        <h3 className='text-center mb-4'>Login</h3>
                        <form action="" className='d-flex gap-30 flex-column'>
                          <CustomInput type="email" name='email' placeholder='Email'/>
                          <CustomInput  type="password" name='password' placeholder='Password'/>
                            <div>
                                <Link to='/forgot-password'>ForgotPassword?</Link>
                                <div className='d-flex align-items-center justify-content-center gap-15 mt-3'>
                                <button className='button border-0'>Login</button>
                                <Link className='button border-0' to='/signup'>SignUp</Link>
                           </div>
                            </div>
                        </form>
                     </div>
                </div>
            </div>
       
      </Container>
    </>
  )
}

export default Login
