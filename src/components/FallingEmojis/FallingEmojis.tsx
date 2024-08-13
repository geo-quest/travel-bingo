import './FallingEmojis.css'

import React, { useEffect, useState } from 'react'

interface Props {
  emojiList: string[]
  milliseconds: number
}

const FallingEmojis: React.FC<Props> = ({ emojiList, milliseconds }) => {
  const [emojis, setEmojis] = useState<{ emoji: string; left: number }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)]
      const randomLeft = Math.random() * window.innerWidth

      setEmojis(prevEmojis => [...prevEmojis, { emoji: randomEmoji, left: randomLeft }])
    }, 200)

    const timeout = setTimeout(() => clearInterval(interval), milliseconds)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [emojiList, milliseconds])

  return (
    <div className="falling-emojis-container">
      {emojis.map((emoji, index) => (
        <span key={index} className="falling-emoji" style={{ left: `${emoji.left}px` }}>
          {emoji.emoji}
        </span>
      ))}
    </div>
  )
}

export default FallingEmojis
