import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const ResetPassword = () => {
  return (
    <>
       <Meta title={"reset-password"}/>
      <BreadCrumb title='reset-password'/>
      <Container class1="login-wrapper home-wrapper-2 py-5">
      
            <div className="row">
                <div className="col-12">
                     <div className="auth-card">
                        <h3 className='text-center mb-4'>Reset Password</h3>
                        <form action="" className='d-flex gap-30 flex-column'>
                           <CustomInput type="Password" name='Password' placeholder='Password'/>
                           <CustomInput  type="Password" name='conf Password' placeholder='Confirm Password'/>
                            <div>

                                <div className='d-flex align-items-center justify-content-center gap-15 mt-3'>
                                <button className='button border-0'>Submit</button>
                               
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

export default ResetPassword
