import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';


const SignUp = () => {
  return (
    <>
        <Meta title={"SignUp"}/>
      <BreadCrumb title='SignUp'/>
      <Container class1="login-wrapper home-wrapper-2 py-5">
      
            <div className="row">
                <div className="col-12">
                     <div className="auth-card">
                        <h3 className='text-center mb-4'>Create Account</h3>
                        <form action="" className='d-flex gap-30 flex-column'>
                            <CustomInput type="text" name='Name' placeholder='Name' />
                            <CustomInput type="Email" name='Email' placeholder='Email'/>
                            <CustomInput type="Number" name='Mobile Number' placeholder='Mobile Number'/>
                            <CustomInput  type="password" name='password' placeholder='Password'/>  
                            <div>
                                <div className='d-flex align-items-center justify-content-center gap-15 mt-3'>
                                <button className='button border-0'>SignUp</button> 
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

export default SignUp
