import { useTranslation } from 'react-i18next'

interface Props {
  date: string | undefined
  showTime?: boolean
}

const FormattedDate = ({ date, showTime }: Props) => {
  const { i18n } = useTranslation()

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }

  if (showTime) {
    options.hour = '2-digit'
    options.minute = '2-digit'
  }

  const formattedDate = new Intl.DateTimeFormat(i18n.language, options).format(
    Date.parse(date || ''),
  )

  return <span>{formattedDate}</span>
}

export default FormattedDate
