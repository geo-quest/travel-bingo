import { FileExclamationTwoTone } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const NoPage = () => {
  const { t } = useTranslation()
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <FileExclamationTwoTone style={{ fontSize: '72px', marginTop: '20px' }} />
      <h1 style={{ fontSize: '72px', marginBottom: '20px' }}>{t('no-page.oops')}</h1>
      <h2>{t('no-page.something-went-wrong')}</h2>
      <p>{t('no-page.page-does-not-exist')}</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#007BFF', fontSize: '18px' }}>
        {t('no-page.go-back-home-page')}
      </Link>
    </div>
  )
}

export default NoPage
