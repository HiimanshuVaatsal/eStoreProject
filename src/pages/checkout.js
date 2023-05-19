import Breadcrumb from '@/components/layout/Breadcrumb'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { BiRupee } from 'react-icons/bi'
import {useForm} from 'react-hook-form'
import { useState } from 'react'
import { getCartItems } from '@/utils/cartItems'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'



function checkout() {
    const{register,handleSubmit,watch,formState:{errors}}=useForm();
    const [cart,setCart]=useState(getCartItems());
    const [yourCart,setYourCart]=useState({});
    const[cartItems,setCartItems]=useState(0);
    const router=useRouter();
    useEffect(()=>{
        const tempYourCart=Cookies.get('yourCart');
         if(!tempYourCart){
          router.push('/');
         }
         setYourCart(tempYourCart ?? JSON.parse(Cookies.get('yourCart')))
         setCartItems(cart?.length)
    },[cart])
    const checkoutHandler=(data)=>{
      console.log(data)
      router.push({
        pathname:'/thank-you',
        query:{
          cart:JSON.stringify(cart),
          yourCart:JSON.stringify(yourCart),
          shipping:JSON.stringify(data)
        }
      })
      Cookies.remove('yourCart');
      Cookies.remove('cartItems');
    }

  return (
    <>
     <Head>
        <title>
            Checkout
        </title>
     </Head>
     <Breadcrumb title={'Checkout'}/>

 <form onSubmit={handleSubmit(checkoutHandler)}>
        
  <div className="row g-5">
    <div className="col-md-4 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary rounded-pill">{cartItems}</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between ">
          
            <div className="my-0">SubTotal(<BiRupee size={21}/>)</div>
            <strong >{yourCart?.SubTotal?.toFixed(2)}</strong>
          
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div className="my-0">GST 18%(<BiRupee size={21}/>)</div>
            <strong >{yourCart?.GSTAmount?.toFixed(2)}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-conden~sed">
        <div className="my-0">Total(<BiRupee size={21}/>)</div>
            <strong >{yourCart?.GrandTotal?.toFixed(2)}</strong>
        </li>
      </ul>

      <div className="card p-2">
        <div className="input-group">
          <button  type='submit' className='w-100 btn btn-primary btn-lg'>Order Place</button>
        </div>
        </div>
    </div>
    <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Billing address</h4>
      
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="firstName">First name</label>
            <input type="text" className="form-control" id="firstName" {...register('firstName',{required:true})} required/>
            {errors.firstName && <div className="text-danger">
              Valid first name is required.
            </div>}
          </div>
          <div className="col-sm-6">
            <label for="lastName">Last name</label>
            <input type="text" className="form-control" id="lastName" {...register('firstName',{required:true})} required/>
            {errors.firstName && <div className="text-danger">
              Valid  last name is required.
            </div>}
          </div>
          <div className="col-12">
          <label for="mobile">Mobile</label>
          <div class='input-group'>
          <input type="text" className="form-control" id="mobile" placeholder="+91" {...register('mobile',{required:true})} required/>
          {errors.mobile && <div className="text-danger">
              Valid 10 digit mobile number is required.
            </div>}
            </div>
        </div>
        <div className="col-12">
          <label for="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com"{...register('email',{required:true})}/>
          {errors.email && <div className="text-danger">
              write valid email  required.
            </div>}
        </div>
        <div className="col-12">
          <label for="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" {...register('address',{required:true})} required/>
          {errors.address && <div className="text-danger">
                Please enter your shipping address.
            </div>}
        </div>
        <div className="col-12">
          <label for="landmark">Landmark</label>
          <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" {...register('landmark',{required:true})}/>
          {errors.lankmark && <div className="text-danger">
                Please enter your landmark.
            </div>}
        </div>
        <div className="col-md-5">
            <label for="country">Country</label>
            <select className="custom-select d-block w-100" value='india' id="country"{...register('country',{required:true})} required>
              <option value='india'>India</option>
            </select>
            {errors.country&& <div className="text-danger">
            Please select a valid country.
            </div>}
          </div>
          <div className="col-md-4 ">
            <label for="state">State</label>
            <select className="form-select" id="state" {...register('state',{required:true})} required>
              <option>Choose...</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option vlaue="Uttrakhand">Uttrakhand</option>
            </select>
             {errors.state && <div className="text-danger">
            Please select a valid State.
            </div>}
          </div>
          <div className="col-md-3">
            <label for="zip">Zip</label>
            <input type="text" className="form-control" id="zip" {...register('zip',{required:true})}required/>
            {errors. zip && <div className="text-danger">
            Please select a valid zip.
            </div>}
          </div>
        </div>

        <hr className="mb-4"/>
        <h4 className="mb-3">Payment</h4>

        <div className=" my-3">
        
          <div className="form-check">
            <input id="cod" name="paymentMethod" type="radio" {...register('payementMethod',{required:true})} className="form-check-input" ckecked='true' required/>
            <label className="form-check-label" for="cod">Cash on Delivery</label>
          </div>
        </div>
        <hr className="my-4"/>
    </div>
  </div>
  </form>    



    </>
  )
}

export default checkout