import { Empty } from 'antd'
import FormattedDate from 'components/Date/FormattedDate'
import { RunGameData } from 'data/interfaces'
import { useTranslation } from 'react-i18next'

interface Props {
  run: RunGameData
}

const PlannedRun = ({ run }: Props) => {
  const { t } = useTranslation()
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Empty />
      <p>{t('planned-run.game-not-started')}</p>
      <p>{t('planned-run.please-wait')}</p>
      {run.date && (
        <p>
          <strong>{t('planned-run.expected-start-date')}:</strong> <FormattedDate date={run.date} />
        </p>
      )}
    </div>
  )
}

export default PlannedRun
