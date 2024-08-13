import { useTranslation } from 'react-i18next'

interface Props {
  date: string | undefined
  showTime?: boolean
  onlyTime?: boolean
}

const FormattedDate = ({ date, showTime, onlyTime }: Props) => {
  const { i18n } = useTranslation()

  if (onlyTime) {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
    }

    const formattedDate = new Intl.DateTimeFormat(i18n.language, options).format(
      Date.parse(date || ''),
    )

    return <span>{formattedDate}</span>
  }

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
