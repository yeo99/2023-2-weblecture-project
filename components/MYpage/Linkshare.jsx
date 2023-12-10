"use client"

import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShareAlt } from "@fortawesome/free-solid-svg-icons"

const ShareButton = ({ link }) => {
  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(link)
      alert("링크를 클립보드에 복사했습니다.")
    } catch (err) {
      console.error("클립보드 복사 실패:", err)
    }
  }

  return (
    <button onClick={handleShareClick}>
      <FontAwesomeIcon icon={faShareAlt} />
      <span>링크 공유</span>
    </button>
  )
}

export default ShareButton
