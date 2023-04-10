import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const ForgotPassword = () => {
  return (
    <>
        <Meta title={"ForgotPassword"}/>
      <BreadCrumb title='ForgotPassword'/>
      <Container class1="login-wrapper home-wrapper-2 py-5">
   
            <div className="row">
                <div className="col-12">
                     <div className="auth-card">
                        <h3 className='text-center mb-3'>Reset Password</h3>
                        <h6 className='text-center mb-3'>we will send Email to Reset your Password</h6>
                        <form action="" className='d-flex gap-30 flex-column'>
                          <CustomInput type="email" name='email' placeholder='Email'/>
                            <div>
                                <div className='d-flex align-items-center justify-content-center gap-15 mt-3'>
                                    <button className='button border-0' type='submit'>Submit</button> 
                                        <Link to='/login'>Cancel</Link> 
                             
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

export default ForgotPassword
