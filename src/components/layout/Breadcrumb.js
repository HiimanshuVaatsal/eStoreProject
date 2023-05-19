import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {HiHome} from 'react-icons/hi'
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import{MdPlayArrow}from 'react-icons/md'

function Breadcrumb({title}) {
    const router=useRouter();
    console.log('rounter',router);
  return (
    <div className='my-2 bg-light d-flex justify-content-between align-items-center'>
          <div className='d-flex align-item-center gap-1'>
                <div className='mx-2 d-flex align-items-center'>
                      <Link href='/' className='text-decoration-none text-black'>
                        <HiHome size={28}/>
                      </Link>
                      <MdPlayArrow size={15}/>
                </div>
                <h4 className='text-center py-2 text-uppercase'>{title}</h4>
          </div>
          <div class='px-2'>
              <Link href="#" className='text-decoration-none text-black'onClick={()=>router.back()}>
                <BsArrowLeftCircleFill size={28}/>
              </Link>
          </div>
    </div>
  )
}

export default Breadcrumb