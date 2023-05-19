import SameLayout from '@/components/layout/SameLayout';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <SameLayout>
         {/* This is work like a childern; */}
       <Component {...pageProps} />
       <Toaster position='top-center'/>
    </SameLayout>
  )
}
