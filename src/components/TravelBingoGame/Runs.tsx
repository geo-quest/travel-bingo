import { Button, Col, Row, Space } from 'antd'
import DynamicIcon from 'components/DynamicIcon/DynamicIcon'
import { KeyObject, TravelBingoGameData } from 'data/interfaces'
import t2 from 'utils/t2'

interface Props {
  game: TravelBingoGameData & KeyObject
}

const Runs = ({ game }: Props) => {
  const runs = Object.keys(game.runs).map(key => {
    return (
      <Row style={{ paddingBottom: '16px', width: '100%', textAlign: 'center' }} key={key}>
        <Col span={24}>
          <Button
            icon={<DynamicIcon iconName={game.icon} color={game.color} />}
            onClick={() => {
              window.location.href = `/${game.key}/${key}`
            }}
            style={{
              backgroundColor: game.backgroundColor,
              color: game.color,
              fontSize: '16px',
              fontWeight: 'bold',
              fontVariant: 'all-petite-caps',
              width: 300,
            }}
          >
            {t2(game.runs[key].name)}
          </Button>
        </Col>
      </Row>
    )
  })
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {runs}
    </Space>
  )
}

export default Runs
