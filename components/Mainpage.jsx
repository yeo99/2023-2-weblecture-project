import React from "react"

export default function Mainpage() {
  return (
    <section class='text-gray-600 body-font bg-green-100'>
      <div class='container px-5 py-24 mx-auto flex flex-col'>
        <div class='text-left text-3xl'>
          <h2>익명 질문 공간</h2>
        </div>
        <div class='lg:w-4/6 mx-auto'>
          <div class='flex flex-col sm:flex-row mt-10'>
            <div class='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
              <h3 class='font-medium title-font mt-4 text-gray-900 text-lg px-2 '>
                익명으로 질문해보세요
              </h3>
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
                            Guest
                          </h2>
                          <p class='leading-relaxed'>질문</p>
                        </div>
                      </div>
                      <div class='flex relative pb-12'>
                        <div class='h-full w-10 absolute inset-0 flex items-center justify-center'></div>
                        <div class='flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10'></div>
                        <div class='flex-grow pl-4'>
                          <h2 class='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                            Host
                          </h2>
                          <p class='leading-relaxed'>답변</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left text-sm'>
              <p className='mb-4'>
                익명 질문과 답변 서비스에 오신 것을 환영합니다.
              </p>
              <p className='mb-4'>
                ama는 사용자가 익명으로 질문하고 답변을 받을 수 있는
                플랫폼입니다.
              </p>
              <p className='mb-4'>
                ama의 목표는 다른 사람에 대한 두려움 없이 자신의 생각과 감정을
                공유할 수 있는 개방적이고 솔직한 소통을 위한 안전한 공간을
                만드는 것입니다.
              </p>
              <p className='mb-4'>
                ama의 익명성을 중요하게 생각합니다. 우리는 사용자가 두려움 없이
                자유롭게 자신을 표현할 수 있는 환경을 조성하기 위해 노력합니다.
              </p>
              <p className='mb-4'>
                궁금한 점이나 피드백이 있으시다면 언제든지 문의해 주세요 언제나
                도와드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}