import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import FormattedDate from './FormattedDate'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => key,
    i18n: {
      language: 'en',
    },
  }),
}))

describe('FormattedDate Component', () => {
  it('renders the date in default format ("date")', () => {
    const { getByText } = render(<FormattedDate date="2024-08-14T12:34:56" />)
    expect(getByText('August 14, 2024')).toBeInTheDocument()
  })

  it('renders the time when format="time"', () => {
    const { getByText } = render(<FormattedDate date="2024-08-14T12:34:56" format="time" />)
    expect(getByText('12:34 PM')).toBeInTheDocument()
  })

  it('renders the date and time when format="datetime"', () => {
    const { getByText } = render(<FormattedDate date="2024-08-14T12:34:56" format="datetime" />)
    expect(getByText('August 14, 2024 at 12:34 PM')).toBeInTheDocument()
  })

  it('renders "Invalid Date" for invalid date strings', () => {
    const { getByText } = render(<FormattedDate date="invalid-date" />)
    expect(getByText('Invalid Date')).toBeInTheDocument()
  })

  it('renders "Date not provided" when date is undefined', () => {
    const { getByText } = render(<FormattedDate date={undefined} />)
    expect(getByText('Date not provided')).toBeInTheDocument()
  })

  it('renders with the correct language formatting based on i18n language', () => {
    const spy = jest.spyOn(Intl, 'DateTimeFormat').mockImplementation(
      () =>
        ({
          format: () => '14 août 2024',
        }) as any,
    )

    const { getByText } = render(<FormattedDate date="2024-08-14T12:34:56Z" />)
    expect(getByText('14 août 2024')).toBeInTheDocument()
    spy.mockRestore()
  })

  it('renders correctly when passed a Date object', () => {
    const date = new Date('2024-08-14T12:34:56')
    const { getByText } = render(<FormattedDate date={date} />)
    expect(getByText('August 14, 2024')).toBeInTheDocument()
  })
})
