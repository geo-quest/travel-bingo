import { fireEvent, render, screen } from '@testing-library/react'

import { TeamLeaderBoardData } from '../../data/interfaces'
import Podium from './Podium'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => key,
    i18n: {
      language: 'en',
    },
  }),
}))

jest.mock('../Score/Score', () => () => <div>Score</div>)

const mockOnClick = jest.fn()

const teams: TeamLeaderBoardData[] = [
  {
    name: 'Team A',
    score: 100,
    key: 'team-a',
    rank: 1,
    bingos: 0,
  },
  {
    name: 'Team B',
    score: 90,
    key: 'team-b',
    rank: 2,
    bingos: 0,
  },
  {
    name: 'Team C',
    score: 80,
    key: 'team-c',
    rank: 3,
    bingos: 0,
  },
  {
    name: 'Team D',
    score: 70,
    key: 'team-d',
    rank: 4,
    bingos: 0,
  },
]

describe('Podium Component', () => {
  beforeEach(() => {
    mockOnClick.mockClear()
  })

  test('renders without crashing', () => {
    render(<Podium teams={teams} onClick={mockOnClick} />)
    expect(screen.getByText('podium.1st')).toBeInTheDocument()
  })

  test('renders correct number of cards for 1 team with correct span', () => {
    render(<Podium teams={[teams[0]]} onClick={mockOnClick} />)
    const firstPlaceCol = screen.getByText('podium.1st').closest('.ant-col')
    expect(firstPlaceCol).toHaveClass('ant-col-24')
    expect(screen.queryByText('podium.2nd')).toBeNull()
    expect(screen.queryByText('podium.3rd')).toBeNull()
  })

  test('renders correct number of cards for 2 teams with correct spans', () => {
    render(<Podium teams={teams.slice(0, 2)} onClick={mockOnClick} />)

    const firstPlaceCol = screen.getByText('podium.1st').closest('.ant-col')
    const secondPlaceCol = screen.getByText('podium.2nd').closest('.ant-col')

    expect(firstPlaceCol).toHaveClass('ant-col-12')
    expect(secondPlaceCol).toHaveClass('ant-col-12')
    expect(screen.queryByText('podium.3rd')).toBeNull()
  })

  test('renders correct number of cards for 3 or more teams with correct spans', () => {
    render(<Podium teams={teams} onClick={mockOnClick} />)

    const firstPlaceCol = screen.getByText('podium.1st').closest('.ant-col')
    const secondPlaceCol = screen.getByText('podium.2nd').closest('.ant-col')
    const thirdPlaceCol = screen.getByText('podium.3rd').closest('.ant-col')

    expect(firstPlaceCol).toHaveClass('ant-col-8')
    expect(secondPlaceCol).toHaveClass('ant-col-8')
    expect(thirdPlaceCol).toHaveClass('ant-col-8')
  })

  test('calls onClick with correct team data when a card is clicked', () => {
    render(<Podium teams={teams} onClick={mockOnClick} />)
    fireEvent.click(screen.getByText('podium.1st'))
    expect(mockOnClick).toHaveBeenCalledWith(teams[0])

    fireEvent.click(screen.getByText('podium.2nd'))
    expect(mockOnClick).toHaveBeenCalledWith(teams[1])

    fireEvent.click(screen.getByText('podium.3rd'))
    expect(mockOnClick).toHaveBeenCalledWith(teams[2])
  })

  test('applies correct class names based on team position', () => {
    render(<Podium teams={teams} onClick={mockOnClick} />)
    expect(screen.getByText('podium.1st').closest('.podium-card')).toHaveClass('gold')
    expect(screen.getByText('podium.2nd').closest('.podium-card')).toHaveClass('silver')
    expect(screen.getByText('podium.3rd').closest('.podium-card')).toHaveClass('bronze')
  })
})
