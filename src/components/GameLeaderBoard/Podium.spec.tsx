import { fireEvent, render, screen } from '@testing-library/react'
import { RunGameStatus, TeamsGameData, TeamState } from 'data/interfaces'

import Podium from './Podium'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => key,
    i18n: {
      language: 'en',
    },
  }),
}))

jest.mock('components/Score/Score', () => () => <div>Score</div>)

const mockOnClick = jest.fn()

const teams: TeamState[] = [
  {
    team: 'team-a',
    rank: 1,
    score: 100,
    bingos: 1,
    completedChallenges: [],
  },
  {
    team: 'team-b',
    rank: 2,
    score: 90,
    bingos: 0,
    completedChallenges: [],
  },
  {
    team: 'team-c',
    rank: 3,
    score: 80,
    bingos: 0,
    completedChallenges: [],
  },
  {
    team: 'team-d',
    rank: 4,
    score: 70,
    bingos: 1,
    completedChallenges: [],
  },
]

const teamsData: TeamsGameData = {
  'team-a': { name: 'Team A' },
  'team-b': { name: 'Team B' },
  'team-c': { name: 'Team C' },
  'team-d': { name: 'Team D' },
  'team-e': { name: 'Team E' },
}

describe('Podium Component', () => {
  beforeEach(() => {
    mockOnClick.mockClear()
  })

  test('renders without crashing', () => {
    render(<Podium teams={teams} teamsData={teamsData} onClick={mockOnClick} />)
    expect(screen.getByText('podium.1st')).toBeInTheDocument()
  })

  test('renders correct number of cards for 1 team with correct span', () => {
    render(<Podium teams={teams.slice(0, 1)} teamsData={teamsData} onClick={mockOnClick} />)
    const firstPlaceCol = screen.getByText('podium.1st').closest('.ant-col')
    expect(firstPlaceCol).toHaveClass('ant-col-24')
    expect(screen.queryByText('podium.2nd')).toBeNull()
    expect(screen.queryByText('podium.3rd')).toBeNull()
  })

  test('renders correct number of cards for 2 teams with correct spans', () => {
    render(<Podium teams={teams.slice(0, 2)} teamsData={teamsData} onClick={mockOnClick} />)

    const firstPlaceCol = screen.getByText('podium.1st').closest('.ant-col')
    const secondPlaceCol = screen.getByText('podium.2nd').closest('.ant-col')

    expect(firstPlaceCol).toHaveClass('ant-col-12')
    expect(secondPlaceCol).toHaveClass('ant-col-12')
    expect(screen.queryByText('podium.3rd')).toBeNull()
  })

  test('renders correct number of cards for 3 or more teams with correct spans', () => {
    render(<Podium teams={teams} teamsData={teamsData} onClick={mockOnClick} />)

    const firstPlaceCol = screen.getByText('podium.1st').closest('.ant-col')
    const secondPlaceCol = screen.getByText('podium.2nd').closest('.ant-col')
    const thirdPlaceCol = screen.getByText('podium.3rd').closest('.ant-col')

    expect(firstPlaceCol).toHaveClass('ant-col-8')
    expect(secondPlaceCol).toHaveClass('ant-col-8')
    expect(thirdPlaceCol).toHaveClass('ant-col-8')
  })

  test('calls onClick with correct team data when a card is clicked', () => {
    render(<Podium teams={teams} teamsData={teamsData} onClick={mockOnClick} />)
    fireEvent.click(screen.getByText('podium.1st'))
    expect(mockOnClick).toHaveBeenCalledWith(teams[0])

    fireEvent.click(screen.getByText('podium.2nd'))
    expect(mockOnClick).toHaveBeenCalledWith(teams[1])

    fireEvent.click(screen.getByText('podium.3rd'))
    expect(mockOnClick).toHaveBeenCalledWith(teams[2])
  })

  test('applies correct class names based on team position', () => {
    render(<Podium teams={teams} teamsData={teamsData} onClick={mockOnClick} />)
    expect(screen.getByText('podium.1st').closest('.podium-card')).toHaveClass('gold')
    expect(screen.getByText('podium.2nd').closest('.podium-card')).toHaveClass('silver')
    expect(screen.getByText('podium.3rd').closest('.podium-card')).toHaveClass('bronze')
  })
})
