import { TravelBingoGameData } from '../interfaces'
import { HogeVeluweChallenges } from './challenges'
import runs from './runs'

export default {
  title: {
    en: 'Hoge Veluwe',
  },
  icon: 'BugTwoTone',
  color: '#2a5934', // Forest green
  backgroundColor: '#d9f2e6', // Light mint green
  rules: {
    bonusPointsPerBingo: 30,
    bonusPointsPerPlace: 10,
    bonusForFirstChallenge: 10,
  },
  shortDescription: {
    en: 'Get ready for a new adventure in the Hoge Veluwe Park. Your mission is to explore the landscapes and complete as many challenges as possible.',
  },
  gamePlay: {
    en: `### Setup:

- Each team gets a \`5x5\` bingo board filled challenges.
- Every team has the same board, but how you play it is up to you!

### Objective:

- Complete challenges to score points, and aim to get the highest score by the end of the game!

### Scoring:

- **Normal Challenges**: Complete a challenge and earn a point. Easy peasy! 🟢
- **First Challenge Bonus**: The team that completes the first challenge gets a bonus \`10\` points. (The early bird gets the worm!)
- **Bingo Bonus**: Complete a row, column, or diagonal, and score a bonus \`30\` points. (Bingo never felt so good!)

### Submitting Challenges:

- After completing a challenge, submit your proof (photo, video, etc.) to the Competition WhatsApp group.
- The group will verify and approve the submission.
- Points are granted once the group gives the thumbs-up! 👍

### The Finish Line:

- The game ends promptly at 6 PM. No late submissions, no exceptions!
- The team with the most points at the end wins eternal glory (or at least bragging rights until the next game). 🏆

Good luck, adventurers! 🌍🎉
`,
  },
  // 6x6 grid of challenges
  challenges: [
    [
      HogeVeluweChallenges.PeekabooTrees,
      HogeVeluweChallenges.WildlifeWhisperer,
      HogeVeluweChallenges.GolderHourMagic,
      HogeVeluweChallenges.TrailMixMoves,
      HogeVeluweChallenges.FootprintsOfTheWild,
    ],
    [
      HogeVeluweChallenges.NatureIdol,
      HogeVeluweChallenges.EarthSculptor,
      HogeVeluweChallenges.LeafLove,
      HogeVeluweChallenges.TreeHuggerTime,
      HogeVeluweChallenges.ShadowSquad,
    ],
    [
      HogeVeluweChallenges.StrangerSnap,
      HogeVeluweChallenges.CrownOfTheWild,
      HogeVeluweChallenges.Bingo,
      HogeVeluweChallenges.BirdNerd,
      HogeVeluweChallenges.TwistedTales,
    ],
    [
      HogeVeluweChallenges.SForScavenger,
      HogeVeluweChallenges.DuneDetective,
      HogeVeluweChallenges.TowerOfTeamwork,
      HogeVeluweChallenges.MirrorMoments,
      HogeVeluweChallenges.RedRiderSpotting,
    ],
    [
      HogeVeluweChallenges.SignLanguage,
      HogeVeluweChallenges.SunCatcher,
      HogeVeluweChallenges.CinematicComeback,
      HogeVeluweChallenges.OppositesAttract,
      HogeVeluweChallenges.TreeScholar,
    ],
  ],

  runs: runs,
} as TravelBingoGameData
