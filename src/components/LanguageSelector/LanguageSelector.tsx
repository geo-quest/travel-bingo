import { Select } from 'antd'
import { useTranslation } from 'react-i18next'

const { Option } = Select
const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const handleChange = (value: string) => {
    i18n.changeLanguage(value)
  }

  return (
    <Select id="language-select" defaultValue={i18n.language} onChange={handleChange}>
      <Option value="en">English</Option>
      <Option value="pt">Português</Option>
      <Option value="nl">Nederlands</Option>
      <Option value="zh">中文</Option>
    </Select>
  )
}

export default LanguageSelector
