import { render, screen } from '@testing-library/react'
import { TeamsGameData, TeamState } from 'data/interfaces'

import TeamName from './TeamName'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => key,
    i18n: {
      language: 'en',
    },
  }),
}))

describe('TeamName Component', () => {
  const teamsData: TeamsGameData = {
    team1: { name: 'Team 1' },
    team2: { name: 'Team 2' },
    team3: { name: 'Team 3' },
    team4: { name: 'Team 4' },
  }

  it('renders with cursed styling and title when curseMultiplier is defined and boostMultiplier is undefined', () => {
    const team: TeamState = {
      team: 'team1',
      rank: 1,
      score: 100,
      bingos: [],
      places: [],
      completedChallenges: ['challenge-1'],
      curseMultiplier: 2,
      boostMultiplier: undefined,
    }

    render(<TeamName team={team} teamsData={teamsData} />)

    const spanElement = screen.getByText('Team 1')
    expect(spanElement).toHaveClass('cursed')
    expect(spanElement).toHaveAttribute('title', 'Team 1 team-results.is-cursed')
  })

  it('renders with boosted styling and title when boostMultiplier is defined and curseMultiplier is undefined', () => {
    const team: TeamState = {
      team: 'team2',
      rank: 1,
      score: 100,
      bingos: [],
      places: [],
      completedChallenges: ['challenge-1'],
      curseMultiplier: undefined,
      boostMultiplier: 3,
    }

    render(<TeamName team={team} teamsData={teamsData} />)

    const spanElement = screen.getByText('Team 2')
    expect(spanElement).toHaveClass('boosted')
    expect(spanElement).toHaveAttribute('title', 'Team 2 team-results.is-boosted')
  })

  it('renders without special styling when neither curseMultiplier nor boostMultiplier are defined', () => {
    const team: TeamState = {
      team: 'team3',
      rank: 1,
      score: 100,
      bingos: [],
      places: [],
      completedChallenges: ['challenge-1'],
      curseMultiplier: undefined,
      boostMultiplier: undefined,
    }

    render(<TeamName team={team} teamsData={teamsData} />)

    const spanElement = screen.getByText('Team 3')
    expect(spanElement).not.toHaveClass('cursed', 'boosted')
    expect(spanElement).not.toHaveAttribute('title')
  })

  it('renders without special styling when both curseMultiplier and boostMultiplier are defined', () => {
    const team: TeamState = {
      team: 'team4',
      rank: 1,
      score: 100,
      bingos: [],
      places: [],
      completedChallenges: ['challenge-1'],
      curseMultiplier: 0.5,
      boostMultiplier: 2,
    }

    render(<TeamName team={team} teamsData={teamsData} />)

    const spanElement = screen.getByText('Team 4')
    expect(spanElement).not.toHaveClass('cursed', 'boosted')
    expect(spanElement).not.toHaveAttribute('title')
  })
})
