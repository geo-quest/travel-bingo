import * as Icons from '@ant-design/icons'
import { setTwoToneColor } from '@ant-design/icons'
import React from 'react'

interface Props {
  iconName: string
  style?: React.CSSProperties
  color?: string
}

const DynamicIcon = ({ iconName, style, color }: Props) => {
  const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{
    style?: React.CSSProperties
  }>

  if (!IconComponent) return <p>Icon not found!</p>

  if (color) setTwoToneColor(color)

  return <IconComponent style={style} />
}

export default DynamicIcon
