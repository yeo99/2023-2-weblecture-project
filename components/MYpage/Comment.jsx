// CommentSection.js

'use client'

import React, { useState } from 'react';
import LikeButton from './Likebutton';

const CommentSection = ({ onCommentSubmit }) => {
  const [comments, setComments] = useState([]);
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleCommentIconClick = () => {
    setIsCommenting(true);
  };

  const handleCommentInputChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    const newComment = { user: 'Guest', content: commentText };
    setComments([...comments, newComment]);
    setIsCommenting(false);
    setCommentText('');
  };

  return (
    <div>
      {/* 댓글 아이콘 */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-6 h-6 mx-10'
        onClick={handleCommentIconClick}
        style={{ cursor: 'pointer' }}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
        />
      </svg>

      {/* 댓글 입력 칸 (조건부 렌더링) */}
      {isCommenting && (
        <div>
          {/* 댓글 입력 폼 */}
          <textarea
            value={commentText}
            onChange={handleCommentInputChange}
            placeholder='댓글을 입력하세요...'
          />

          {/* 댓글 제출 버튼 */}
          <button onClick={handleCommentSubmit}>댓글 달기</button>
        </div>
      )}

      {/* 댓글 목록 표시 */}
      
      {comments.map((comment, index) => (
        <div key={index} className='flex relative pb-12'>
          <div className='flex-grow pl-4'>
            <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
              {comment.user}
            </h2>
            <p className='leading-relaxed'>{comment.content}</p>
            <div className='flex place-items-center '>
              <LikeButton />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 mx-10'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
