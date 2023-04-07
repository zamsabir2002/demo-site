import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className='container mx-auto'>
      <Link href={'/products'}>Products</Link>
    </div>
  )
}
