import React from 'react'
import { RoughNotation } from 'react-rough-notation'

export const RainbowHighlight = ({ color, children }: { color: string; children: React.ReactNode }) => {
  if (!children) {
    return null
  }

  const animationDuration = Math.floor(30 * 4)

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  )
}
