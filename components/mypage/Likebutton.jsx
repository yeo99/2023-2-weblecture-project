'use client'

import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);  // 좋아요 상태를 저장할 state
  const [likeCount, setLikeCount] = useState(0);  // 좋아요 숫자를 저장할 state

  const handleLikeClick = () => {
    // 좋아요 상태를 토글
    setLiked(!liked);

    // 좋아요 상태에 따라 숫자를 증가 또는 감소
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className='flex place-items-center'>
      {/* 좋아요 아이콘 */}
      <svg
        id="like"
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className={`w-6 h-8 mx-10 ${liked ? 'text-red-500' : ''}`}
        onClick={handleLikeClick}
        style={{ cursor: 'pointer' }}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
        />
      </svg>

      {/* 좋아요 숫자 */}
      <span>{likeCount}</span>
    </div>
  );
};

export default LikeButton;
