import './ChallengeModal.css'

import { Divider, Modal, Typography } from 'antd'
import Image from 'components/Image/Image'
import { Challenge } from 'data/interfaces'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Markdown from 'react-markdown'
import t2 from 'utils/t2'

const { Paragraph } = Typography

interface Props {
  challenge: Challenge
  onClose: () => void
}

const ChallengeModal: React.FC<Props> = ({ challenge, onClose }) => {
  const { t } = useTranslation()

  return (
    <Modal
      title={`${t2(challenge.challenge)} ${challenge.points > 0 ? `[${challenge.points} ${t('pts')}]` : ''}`}
      open={!!challenge}
      onCancel={onClose}
      centered
      footer={false}
      closeIcon={false}
      className={
        challenge.curseMultiplier !== undefined
          ? 'curse'
          : challenge.boostMultiplier !== undefined
            ? 'boost'
            : ''
      }
    >
      <Paragraph>
        {challenge.curseMultiplier && (
          <>
            <Divider style={{ marginBottom: 4, marginTop: 4 }} />
            <p>
              <i>{t('challenge-modal.is-a-curse')}</i>
            </p>
            <p>
              <strong>{t('challenge-modal.curse-multiplier')}:</strong>{' '}
              <span>{challenge.curseMultiplier}</span>
            </p>
            <Divider style={{ marginBottom: 4, marginTop: 4 }} />
          </>
        )}
        {challenge.boostMultiplier && (
          <>
            <Divider style={{ marginBottom: 4, marginTop: 4 }} />
            <p>
              <i>{t('challenge-modal.is-a-boost')}</i>
            </p>
            <p>
              <strong>{t('challenge-modal.boost-multiplier')}:</strong>{' '}
              <span>{challenge.boostMultiplier}</span>
            </p>
            <Divider style={{ marginBottom: 4, marginTop: 4 }} />
          </>
        )}
        <Markdown>{t2(challenge.description)}</Markdown>
        {challenge.image && (
          <Image
            src={challenge.image}
            alt={t2(challenge.challenge)}
            style={{ width: '100%', marginTop: '10px' }}
          />
        )}
      </Paragraph>
    </Modal>
  )
}

export default ChallengeModal
