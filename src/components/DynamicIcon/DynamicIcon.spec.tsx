import { setTwoToneColor } from '@ant-design/icons'
import { render, screen } from '@testing-library/react'

import DynamicIcon from './DynamicIcon'

jest.mock('@ant-design/icons', () => ({
  ...jest.requireActual('@ant-design/icons'),
  setTwoToneColor: jest.fn(),
}))

describe('DynamicIcon', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the correct icon when a valid iconName is provided', () => {
    const { container } = render(<DynamicIcon iconName="HomeOutlined" />)
    const IconComponent = container.querySelector('[data-icon="home"]')
    expect(IconComponent).toBeInTheDocument()
  })

  it('displays an error message when an invalid iconName is provided', () => {
    render(<DynamicIcon iconName="InvalidIconName" />)
    expect(screen.getByText('Icon not found!')).toBeInTheDocument()
  })

  it('applies custom styles to the icon', () => {
    const style = { color: 'red', fontSize: '24px' }
    const { container } = render(<DynamicIcon iconName="HomeOutlined" style={style} />)
    const IconComponent = container.querySelector('[role="img"]')
    expect(IconComponent).toHaveStyle(style)
  })

  it('calls setTwoToneColor with the correct color when color prop is provided', () => {
    const color = '#1890ff'
    render(<DynamicIcon iconName="HomeOutlined" color={color} />)
    expect(setTwoToneColor).toHaveBeenCalledWith(color)
  })

  it('does not call setTwoToneColor when color prop is not provided', () => {
    render(<DynamicIcon iconName="HomeOutlined" />)
    expect(setTwoToneColor).not.toHaveBeenCalled()
  })
})
