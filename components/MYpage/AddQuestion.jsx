"use client"

import React, { useState } from "react"
import LikeButton from "./Likebutton"
import CommentSection from "./Comment"
import Link from "next/link"

const GuestQuestions = () => {
  const [isQuestionFormVisible, setQuestionFormVisibility] = useState(false)
  const [questionInput, setQuestionInput] = useState("")
  const [guestQuestions, setGuestQuestions] = useState([])

  const showQuestionForm = () => {
    setQuestionFormVisibility(true)
  }

  const submitQuestion = () => {
    if (questionInput.trim() !== "") {
      setGuestQuestions((prevQuestions) => [...prevQuestions, questionInput])
      setQuestionInput("")
      setQuestionFormVisibility(false)
    }
  }

  return (
    <div>
      <div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6'>
        {guestQuestions.map((question, index) => (
          <div key={index} className='flex relative pb-12'>
            <div className='flex-grow pl-4'>
              <p className='leading-relaxed'>{question}</p>
              <div className='flex place-items-center '>
                <LikeButton />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 mx-10'
                ></svg>
                <CommentSection />

                <div className='flex gap-2 items-center'>
                  <Link href='/mypage'>
                    <Image
                      className='rounded-full'
                      src={user?.image}
                      width={40}
                      height={40}
                      alt={user?.name}
                    />
                  </Link>
                </div>
              </div>
              <div className='flex place-items-center '></div>
            </div>
          </div>
        ))}
      </div>

      <br></br>
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
  )
}

export default GuestQuestions
