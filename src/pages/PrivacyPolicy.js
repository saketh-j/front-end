import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';

const PrivacyPolicy = () => {
  return (
    <>
       <Meta title={"privacy-policy"}/>
      <BreadCrumb title='privacy-policy'/>
      <Container class1='policy-wrapper py-5 home-wrapper-2'>
         
                <div className="row">
                    <div className="col-12">
                        <div className="policy">

                        </div>
                    </div>
                </div>
             
      </Container>
    </>
  )
}

export default PrivacyPolicy
