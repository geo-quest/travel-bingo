import TimeAgo from 'javascript-time-ago'
import { useTranslation } from 'react-i18next'

interface Props {
  date: string | undefined
}

const RelativeDate = ({ date }: Props) => {
  const { i18n } = useTranslation()
  return <span>{new TimeAgo(i18n.language).format(Date.parse(date ?? ''))}</span>
}

export default RelativeDate
