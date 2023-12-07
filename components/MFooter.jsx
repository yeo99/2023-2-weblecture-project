import Link from "next/link"

export default function MFooter() {
  return (
    <>
      <footer className='body-font'>
        <div className=''>
          <div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
            <Link href='/' legacyBehavior>
              <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
                <span className='ml-3 text-xl'>A.M.A 서비스 </span>
              </a>
            </Link>

            <p className='text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 underline text-center '>
              서비스 이용약관, 개인정보 처리방침, 청소년 보호정책
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
