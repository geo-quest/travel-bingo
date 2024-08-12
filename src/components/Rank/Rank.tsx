import { Tag } from 'antd'

interface Props {
  rank: number
}

function Rank({ rank }: Props) {
  const rankColors: { [index: string]: string } = {
    '1': '#FFD700', // Gold
    '2': '#C0C0C0', // Silver
    '3': '#CD7F32', // Bronze
  }
  const color = rankColors[rank.toString()] || 'black'
  return (
    <Tag color={color} style={{ fontWeight: 'bold' }}>
      {rank}
    </Tag>
  )
}

export default Rank
