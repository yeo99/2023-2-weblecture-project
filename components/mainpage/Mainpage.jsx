import React from "react"
import './mainpage.css'


export default function Mainpage() {
  return (
    <section className='mainpage'>
      <div className='container px-5 pt-7 pb-20 mx-auto flex flex-col'>
        <div className='title'>
          <h2>익명 질문 공간</h2>
        </div>
        <div className='lg:w-4/6 mx-auto'>
          <div className='flex flex-row sm:flex-row'>
            <div className='sm:w-1/3 text-center sm:pr-8'>
              <div className='semi-title'>
                익명으로 질문해보세요
              </div>
                <br></br>
                <div className="sm:rounded-b-lg border-slate-500 w-full text-brown-900 dark:tet-slate-400 dark:border-slate-700">
                  <div class="flex">
                    <div class="flex flex-col mr-2 shrink-0 divide-brown-900 dark:divide-slate-400 items-center">
                      <img src="guest.png"></img>
                    <div class="grow"></div>
                    </div>
                    <div class='flex flex-col space-y-12 w-full'>
                    <div class="flex flex-col w-full">
                      <div class="flex justify-between mb-1">
                        <div class='flex items-center space-x-1 w-full mr-2'> 
                          <span class="text-lg font-bold dark:text-slate-300 text-brown-900">Guest</span>
                          <span class="shrink-0 text-xs">3일 전</span>
                        </div>
                      </div>   
                    <p>질문</p>
                    <div class="pb-10 flex flex-row pt-3 justify-between items-start"></div>
                  </div>
                </div>
              </div>
            </div>    
            <div>
              <div class='flex'>
                <div class='flex flex-col divide-x-2 items-center divide-brown-900 dark:divide-slate-400 shrink-0 mr-2'>
                  <div class='rounded-full'>
                    <img src="host.png"></img>
                  </div>
                </div>
                <div class='flex flex-col w-full'>
                  <div class='flex justify-between'>
                    <div class='flex items-center space-x-1'>
                      <span class='block text-lg font-bold text-brown-900 dark:text-slate-200'>Host</span>
                      <span class='shrink-0 text-xs'>2일 전</span>
                    </div>
                  </div>
                <p>답변</p>
                </div>
              </div>
            </div>
            </div>
            <div class='explain'>
              <p className='mb-4'>
                <span id="bold-text">익</span>
                명 질문과 답변 서비스에 오신 것을 환영합니다.
                A.M.A는 사용자가 익명으로 질문하고 답변을 받을 수 있는
                플랫폼입니다.
                A.M.A의 목표는 다른 사람에 대한 두려움 없이 자신의 생각과 감정을
                공유할 수 있는 개방적이고 솔직한 소통을 위한 안전한 공간을
                만드는 것입니다.
              </p>
              <p className='mb-4'>
                A.M.A의 익명성을 중요하게 생각합니다. 우리는 사용자가 두려움 없이
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
