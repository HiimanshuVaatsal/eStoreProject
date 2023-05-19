import React from 'react'
import Link from 'next/link'
import {MdEmail} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'

function Footer() {
  return (
    <>
       <footer className='bg-dark text-white pt-5 pb-4 mt-4'>
           <div className='container text-center text-md-left'>
                 <div className='row text-center text-md-left'>
                     <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Company Name</h5>
                        <h6>Here you can buy any type of items our website . Our company eStore is founded in 2023.</h6>
                     </div>
                     <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Products</h5>
                        <h6>
                            <Link href='/' className='text-white text-decoration-none'>eStore</Link>
                        </h6>
                        <h6>
                            <Link href='#' className='text-white text-decoration-none'>About</Link>
                        </h6>
                        <h6>
                            <Link href='#' className='text-white text-decoration-none'>Support</Link>
                        </h6>
                     </div>

                     <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 '>
                          <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Contact</h5>

                          <h6 className='d-flex gap-2'>
                           <AiFillHome/>Dehradhun
                          </h6>
                          <h6 className='d-flex gap-1'>
                           <MdEmail/>vatsal38@gmail.com
                          </h6>
                          <h6 className='d-flex gap-2'>
                            <BsFillTelephoneInboundFill/>8433202934
                          </h6>
                     </div>
                 </div>
           </div>


       </footer>
    </>
  )
}

export default Footer