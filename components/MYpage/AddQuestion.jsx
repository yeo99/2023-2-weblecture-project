'use client'
// 
import React, { useState } from 'react';
import LikeButton from './Likebutton';
import CommentSection from './Comment';

const GuestQuestions = () => {
  const [isQuestionFormVisible, setQuestionFormVisibility] = useState(false);
  const [questionInput, setQuestionInput] = useState('');
  const [guestQuestions, setGuestQuestions] = useState([]);
  const showQuestionForm = () => {
    setQuestionFormVisibility(true);
  };
  const submitQuestion = () => {
    if (questionInput.trim() !== '') {
      setGuestQuestions((prevQuestions) => [...prevQuestions, questionInput]);
      setQuestionInput('');
      setQuestionFormVisibility(false);
    }
  };
  return (
    <div className='border-b-2 border-black'>
      <div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6'>
        {guestQuestions.map((question, index) => (
          <div key={index} className='flex relative pb-12'>
            <div className='h-full w-10 absolute inset-0 flex items-center justify-center'></div>
            <div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10'></div>
            <div className='flex-grow pl-4'>
            <h2 class='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Guest
                  </h2>
                  <p className='leading-relaxed'>{question}</p>
                  <div className='flex place-items-center '>
                    <LikeButton/>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      class='w-6 h-6 mx-10'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                      />
                    </svg>
                    <CommentSection/>
                  </div>

              <div className='flex place-items-center '>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-end w-full mt-4'>
        <button
          className='bg-green-500 text-white py-2 px-4 rounded-full focus:outline-none'
          onClick={showQuestionForm}
        >
          질문하기
        </button>
      </div>
      {isQuestionFormVisible && (
        <div className='mt-4 w-full'>
          <input
            type='text'
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
            className='border rounded w-full py-2 px-3'
            placeholder='Enter your question...'
          />
          <button
            className='bg-green-500 text-white py-2 px-4 rounded-full ml-2'
            onClick={submitQuestion}
          >
            등록
          </button>
        </div>
      )}
    </div>
  );
};
export default GuestQuestions;