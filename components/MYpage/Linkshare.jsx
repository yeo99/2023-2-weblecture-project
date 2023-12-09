import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const ShareButton = () => {
  const [currentURL, setCurrentURL] = useState('');

  useEffect(() => {
    // 컴포넌트가 마운트될 때 한 번만 실행되는 코드
    setCurrentURL(window.location.href);
  }, []);

  const handleShareClick = async () => {
    try {
      if (currentURL) {
        await navigator.clipboard.writeText(currentURL);
        alert('링크를 클립보드에 복사했습니다.');
      } else {
        alert('유효한 링크가 없습니다.');
      }
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
    }
  };

  return (
    <button onClick={handleShareClick}>
      <FontAwesomeIcon icon={faShareAlt} />
      <span>링크 공유</span>
    </button>
  );
};

export default ShareButton;
