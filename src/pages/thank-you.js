import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
function ThankYou() {
    const router=useRouter();
   console.log('router',router.query);
  return (
    <div>
        <Image src='/images/Thank.png' className="d-block w-100" width={600} height={480}/>
    </div>
  )
}

export default ThankYou