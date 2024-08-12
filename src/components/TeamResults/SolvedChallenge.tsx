import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import Markdown from 'react-markdown'

import { Challenge, RunGameData, TeamChallenge } from '../../data/interfaces'
import t2 from '../../utils/t2'
import FormattedDate from '../Date/FormattedDate'
import Image from '../Image/Image'

interface Props {
  teamChallenge: TeamChallenge
  challenge: Challenge | undefined
  run: RunGameData
}

const { Title, Paragraph } = Typography

function SolvedChallenge({ teamChallenge, challenge, run }: Props) {
  const { t } = useTranslation()
  return (
    <div className="solved-challenge">
      <Title level={3}>{t2(challenge?.challenge)}</Title>
      <Paragraph>
        <strong>{t('solved-at')}:</strong>&nbsp;
        <FormattedDate date={teamChallenge.date} showTime />
      </Paragraph>
      <Markdown>{t2(teamChallenge.comment)}</Markdown>
      {run.finished && teamChallenge.image && (
        <Image
          src={teamChallenge.image}
          alt={t2(challenge?.challenge)}
          style={{ width: '100%', marginTop: '10px' }}
        />
      )}
    </div>
  )
}

export default SolvedChallenge
