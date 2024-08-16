import './ChallengeModal.css'

import { Modal, Typography } from 'antd'
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

const ChallengeModal = ({ challenge, onClose }: Props) => {
  const { t } = useTranslation()

  const getTitle = () => {
    let title = t2(challenge.challenge)
    if ((challenge.points ?? 0) > 0) title += `[${challenge.points} ${t('pts')}]`
    if (challenge.curseMultiplier)
      title += ` [${challenge.curseMultiplier}x ${t('challenge-modal.curse')}]`
    if (challenge.boostMultiplier)
      title += ` [${challenge.boostMultiplier}x ${t('challenge-modal.boost')}]`
    return title
  }

  const getClassName = () => {
    if (challenge.curseMultiplier) return 'curse'
    if (challenge.boostMultiplier) return 'boost'
    return ''
  }

  return (
    <Modal
      title={getTitle()}
      open={!!challenge}
      onCancel={onClose}
      centered
      footer={false}
      closeIcon={true}
      className={getClassName()}
    >
      <Paragraph>
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
