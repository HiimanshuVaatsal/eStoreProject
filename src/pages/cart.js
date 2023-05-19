import React, { useEffect,useState } from 'react'
import Head from 'next/head'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { getCartItems, removeItemsFromCart, updateCartItems } from '@/utils/cartItems'
import Image from 'next/image'
import { BiRupee } from 'react-icons/bi'
import {MdDeleteForever} from 'react-icons/md'
import Cookies from 'js-cookie'
import Router from 'next/router'




function Cart() {
    const [cart,setCart]=useState(getCartItems());
    const [yourCart,setYourCart]=useState({
      SubTotal:0,
      GSTAmount:0,
      GrandTotal:0
    });

//decrementQty
const decrementQty=(product)=>{
    const newQty=product?.qty-1;

    if(newQty>0){
        const productId=product?.id
        updateCartItems(productId,newQty);
        setCart(getCartItems())
    }
}



//increment
const incrementQyt=(product)=>{
    const newQty=product?.qty+1;

    if(newQty<=100){
        const productId=product?.id
        updateCartItems(productId,newQty);
        setCart(getCartItems())
    }
}

//remove item

 const removeHandler=(productId)=>{
    removeItemsFromCart(productId);
    setCart(getCartItems());
 }

 //get total bill useing useEffect

 useEffect(()=>{
  let Total=0
  let GSTAmount=0
  cart.map((item)=>{
    Total+=item.price*item.qty
  })
  GSTAmount=Total*18/100;
  setYourCart({...yourCart,SubTotal:Total,GSTAmount:GSTAmount,GrandTotal:Total+GSTAmount})

 },[cart])

 //checkout

 const checkoutHandler=()=>{
  Cookies.set('yourCart',JSON.stringify(yourCart));
  Router.push('/checkout')
 }

  return (
    <>
      <Head>
        <title>Your Cart</title>
      </Head>
      <Breadcrumb title={'Your Cart'}/>
      <div className='table-responsive mt-4'>
           <table className='table table-borderless'>
              <thead className='text-center'>
                <tr className='border-bottom'>
                    <th scope='col'>Item</th>
                    <th scope='col'>Price</th>
                    <th className='text-end' scope='col'>Quantity</th>
                    <th scope='col'>Total</th>
                </tr>
              </thead>
              <tbody>
                 {cart?.map((item)=>{
                    return(
                         <tr className='border-bottom' key={item.id}>
                              <div className='d-flex gap-3'>
                              <td >
                                <Image src={item?.image} className='rounded-circle' width={40} height={40} alt={item?.title}/>
                                {item?.title}
                              </td>
                              </div>
                              <td className='text-center'>
                                <span className='d-flex align-items-center'>
                                    <BiRupee size={21}/>{item?.price}
                                </span>
                              </td>
                              <td className='text-center'>
                                     <div className='input-group input-group-sm w-25 mb-3  border'>
                                       <button className='input-group-text btn btn-sm btn-outline-dark' onClick={()=>decrementQty(item)}>-</button>
                                       <input type='tel'className='form-control ' value={item.qty}/>
                                       <button className='input-group-text btn btn-sm btn-outline-dark' onClick={()=>incrementQyt(item)}>+</button>

                                    </div>  
                                    </td>

                              <td className='text-center d-flex justify-content-between'>
                                <div className='d-flex align-items-center text-center'>
                                  <BiRupee size={21}/>
                                  {(item?.price * item?.qty).toFixed(2)}
                                </div>
                                <button className='btn btn-sm btn-danger' onClick={()=>removeHandler(item?.id)}><MdDeleteForever size={21}/></button>
                              </td> 
                         </tr>
                    )
                 })}


                 {/* sum all item bill */}
                 {(cart.length>0)&&
                 <>
                 <tr>
                  <td></td>
                  <th className='border-bottom' colspan={2}>Subtotal</th>
                  <th className='border-bottom'>
                   <div className='d-flex align-items-center text-center'>
                     <BiRupee size={18}/>{yourCart?.SubTotal?.toFixed(2)}
                   </div>
                  </th>
                </tr>
                <tr>
                  <td></td>
                  <th className='border-bottom' colspan={2}>18% GST</th>
                  <th className='border-bottom'>
                   <div className='d-flex align-items-center text-center'>
                     <BiRupee size={18}/>{yourCart?.GSTAmount?.toFixed(2)}
                   </div>
                  </th>
                </tr>
                <tr>
                  <td></td>
                  <th className='border-bottom' colspan={2}>Shipping Charge</th>
                  <th className='border-bottom'> FREE
                  </th>
                </tr>
                <tr>
                  <td></td>
                  <th className='border-bottom' colspan={2}>GrandTotal</th>
                  <th className='border-bottom'>
                   <div className='d-flex align-items-center text-center'>
                     <BiRupee size={18}/>{yourCart?.GrandTotal?.toFixed(2)}
                   </div>
                  </th>
                </tr>
                 <tr>
                  <td></td>
                  <th className='border-bottom' colspan={3}>
                  <button className='btn btn-sm btn-primary float-end'onClick={()=>checkoutHandler()}>Checkout</button>
                  </th>
                 </tr>
                 </>
                 } 
                 
              </tbody>
           </table>
      </div>
    </>
  )
}

export default Cart