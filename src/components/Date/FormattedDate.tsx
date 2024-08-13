import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

type DateFormatOption = 'date' | 'time' | 'datetime'

interface Props {
  date: Date | string | undefined
  format?: DateFormatOption
}

const FormattedDate: React.FC<Props> = ({ date, format = 'date' }) => {
  const { i18n } = useTranslation()

  const formattedDate = useMemo(() => {
    if (!date) return 'Date not provided'

    const parsedDate = typeof date === 'string' ? new Date(date) : date
    if (isNaN(parsedDate.getTime())) return 'Invalid Date'

    const options: Intl.DateTimeFormatOptions = (() => {
      switch (format) {
        case 'time':
          return { hour: '2-digit', minute: '2-digit' }
        case 'datetime':
          return {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          }
        case 'date':
        default:
          return { year: 'numeric', month: 'long', day: '2-digit' }
      }
    })()

    return new Intl.DateTimeFormat(i18n.language, options).format(parsedDate)
  }, [date, i18n.language, format])

  return <span>{formattedDate}</span>
}

export default FormattedDate
