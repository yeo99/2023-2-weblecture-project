'use client'

import React, { useState } from 'react';

const GuestQuestions = () => {
  const [isQuestionFormVisible, setQuestionFormVisibility] = useState(false);
  const [questionInput, setQuestionInput] = useState('');
  const [guestQuestions, setGuestQuestions] = useState([]);

  const showQuestionForm = () => {
    setQuestionFormVisibility(true);
  };

  const submitQuestion = () => {
    if (questionInput.trim() !== '') {
      // Add the new question to the guestQuestions array
      setGuestQuestions((prevQuestions) => [...prevQuestions, questionInput]);

      // Clear the input and hide the question form
      setQuestionInput('');
      setQuestionFormVisibility(false);
    }
  };

  return (
    <div className='border-b-2 border-black'>
      {/* Existing code for Guest's Questions */}
      <div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6'>
        {guestQuestions.map((question, index) => (
          <div key={index} className='flex relative pb-12'>
            {/* Guest's Questions content */}
            <div className='h-full w-10 absolute inset-0 flex items-center justify-center'></div>
            <div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10'></div>
            <div className='flex-grow pl-4'>
              <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                Guest
              </h2>
              <p className='leading-relaxed'>{question}</p>
              <div className='flex place-items-center '>
                {/* Like button and other icons/buttons */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button to show/hide question form */}
      <div className='flex justify-end w-full mt-4'>
        <button
          className='bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none'
          onClick={showQuestionForm}
        >
          질문하기
        </button>
      </div>

      {/* Question input form */}
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
