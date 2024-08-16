import { Empty, Statistic } from 'antd'
import FormattedDate from 'components/Date/FormattedDate'
import { KeyObject, RunGameData, TravelBingoGameData } from 'data/interfaces'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import t2 from 'utils/t2'

const { Countdown } = Statistic

interface Props {
  run: RunGameData & KeyObject
  game: TravelBingoGameData & KeyObject
}

const PlannedRun = ({ run, game }: Props) => {
  const { t } = useTranslation()
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Empty />
      <p>{t('planned-run.game-not-started')}</p>
      {run.date && (
        <p>
          <strong>{t('planned-run.expected-start-date')}:</strong>{' '}
          <FormattedDate date={run.date} format="datetime" />
        </p>
      )}
      <Countdown title="Countdown" value={new Date(run.date).getTime()} />
      <br />
      <Link
        to={`/${game.key}`}
        style={{ textDecoration: 'none', color: '#007BFF', fontSize: '18px' }}
      >
        {t2(game.title)}
      </Link>
    </div>
  )
}

export default PlannedRun
