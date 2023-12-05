import React from "react"

export default function page() {
  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-24 mx-auto flex flex-wrap'>
        <div class='flex flex-wrap w-full'>
          <div class='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6'>
            <div class='flex relative pb-12'>
              <div class='h-full w-10 absolute inset-0 flex items-center justify-center'>
                <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
              </div>
              <div class='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10'></div>
              <div class='flex-grow pl-4'>
                <h2 class='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                  STEP 1
                </h2>
                <p class='leading-relaxed'>
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
            <div class='flex relative pb-12'>
              <div class='h-full w-10 absolute inset-0 flex items-center justify-center'></div>
              <div class='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10'></div>
              <div class='flex-grow pl-4'>
                <h2 class='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                  STEP 2
                </h2>
                <p class='leading-relaxed'>
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