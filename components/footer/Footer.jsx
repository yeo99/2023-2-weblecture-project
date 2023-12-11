import Link from "next/link"
import './footer.css'

export default function Footer() {
  return (
    <div className="relative bottom-0">
      <footer className='body-font w-full max-h-28 h-28'>
        <div className='flex justify-center gap-x-24 h-28 '>
          <div className='flex items-center sm:flex-row flex-col'>
            <Link href='/' legacyBehavior>
              <a className='flex title-font font-medium'>
                <span className='ml-3 text-xl'>A.M.A 서비스 </span>
              </a>
            </Link>
          </div>
          <div className="flex gap-x-12 h-28 items-center">
            <div className='text-center'>
              <div>
                <span><b>Jeon Yu Byeong</b></span>
              </div>
              <div>
                92015439
              </div>
              <div>
                <Link className="underline underline-offset-4" href='https://portfolio-rho-snowy-84.vercel.app/'>포트폴리오</Link>
              </div>
            </div>
            
            <div className='text-center'>
              <div>
                <span><b>Jang Jae Won</b></span>
              </div>
              <div>
                92015415
              </div>
              <div>
                <Link className="underline underline-offset-4" href='https://midpot.vercel.app/'>포트폴리오</Link>
              </div>
            </div>

            <div className='text-center'>
              <div>
                <span><b>Yeo Seung Cheol</b></span>
              </div>
              <div>
                91913775
              </div>
              <div>
                <Link className="underline underline-offset-4" href='https://web-lecture-portfolio-gycbdtyfr-yeo99.vercel.app/'>포트폴리오</Link>
              </div>
            </div>

            <div className='text-center'>
              <div>
                <span><b>Kim Myeong Gyu</b></span>
              </div>
              <div>
                92014980
              </div>
              <div>
                <Link className="underline underline-offset-4" href='https://portfolio-bice-omega-36.vercel.app/'>포트폴리오</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}