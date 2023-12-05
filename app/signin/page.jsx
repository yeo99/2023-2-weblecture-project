import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignInBtn from "@/components/SignInBtn";
import Image from 'next/image';
export default async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='flex flex-wrap w-full'>
          <div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6'>
            <div className='flex relative pb-12'>
              <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
              </div>
              <div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10'></div>
              <div className='flex-grow pl-4'>
                <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                  STEP 1
                </h2>
                <p className='leading-relaxed'>
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
            <div className='flex relative pb-12'>
              <div className='h-full w-10 absolute inset-0 flex items-center justify-center'></div>
              <div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10'></div>
              <div className='flex-grow pl-4'>
                <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                  STEP 2
                </h2>
                <p className='leading-relaxed'>
                  Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                  slow-carb health goth, vape typewriter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
    <div className="mt-16">
      <SignInBtn />
    </div>
  );
}

