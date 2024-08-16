import { TravelBingoGameData } from '../interfaces'
import { NetherlandsPilotChallenges } from './challenges'
import runs from './runs'

export default {
  title: {
    en: 'Netherlands Pilot',
    nl: 'Nederlandse Pilot',
    pt: 'Piloto na Holanda',
    zh: '荷兰试点',
  },
  icon: 'FlagTwoTone',
  color: '#1890ff',
  backgroundColor: '#e6f7ff',
  rules: {
    bonusPointsPerBingo: 30,
    bonusPointsPerPlace: 10,
    bonusForFirstChallenge: 10,
  },
  shortDescription: {
    en: 'Travel bingo game in the Netherlands with challenges to complete and earn points.',
    nl: 'Reisbingospel in Nederland met uitdagingen om te voltooien en punten te verdienen.',
    pt: 'Jogo de bingo de viagem na Holanda com desafios para completar e ganhar pontos.',
    zh: '在荷兰的旅行宾果游戏，完成挑战并赚取积分。',
  },
  gamePlay: {
    en: `### Setup:

- Each team gets a \`6x6\` bingo board filled with a mix of **Normal**, **Curse**, and **Boost** challenges.
- Every team has the same board, but how you play it is up to you!

### Objective:

- Complete challenges to score points, and aim to get the highest score by the end of the game!

### Scoring:

- **Normal Challenges**: Complete a challenge and earn a point. Easy peasy! 🟢
- **Curse Challenges**: When you complete a curse challenge, you can give a nasty negative multiplier to an opponent’s next challenge. 🧙‍♂️ (Sorry, not sorry!)
- **Boost Challenges**: Complete one of these bad boys, and you get a sweet positive multiplier for your next challenge. 🚀 (Time to turbocharge your score!)
- **First Challenge Bonus**: The team that completes the first challenge gets a bonus \`10\` points. (The early bird gets the worm!)
- **Bingo Bonus**: Complete a row, column, or diagonal, and score a bonus \`30\` points. (Bingo never felt so good!)
- **Location Bonus**: Visit a new place and score a bonus \`10\` points. (Exploration is key!)
  - **City Rule**: A city is considered visited only if you get off at its train station. Make sure to step off the train and enjoy the sights!

### Submitting Challenges:

- Each team has their own WhatsApp group for submitting challenges.
- After completing a challenge, submit your proof (photo, video, etc.) to your group.
- The game admin will verify and approve the submission.
- Points are granted once the admin gives the thumbs-up! 👍

### The Finish Line:

- The game ends promptly at 6 PM. No late submissions, no exceptions!
- The team with the most points at the end wins eternal glory (or at least bragging rights until the next game). 🏆

### Tips & Tricks:

- **Plan Your Path**: Think about your next move carefully. Boosts can make you soar, while curses can send your opponents spiraling!
- **Timing is Everything**: Be strategic with when you complete your boost or curse challenges. A well-timed curse can make all the difference.
- **Have Fun!**: It’s all about the adventure. Enjoy the sights, have some laughs, and may the best team win!

Good luck, adventurers! 🌍🎉
`,
    nl: ``,
    pt: ``,
    zh: ``,
  },
  // 6x6 grid of challenges
  challenges: [
    [
      NetherlandsPilotChallenges.DomTowerSnapshot, // utrecht
      NetherlandsPilotChallenges.RepurposedHistory, // any city
      NetherlandsPilotChallenges.WindmillWonder, // utrecht
      NetherlandsPilotChallenges.Grachtenhuis, // utrecht
      NetherlandsPilotChallenges.FindMiffy, // utrecht
      NetherlandsPilotChallenges.TheLettersToUtrecht, // utrecht
    ],
    [
      NetherlandsPilotChallenges.Photobomb, // any city
      NetherlandsPilotChallenges.PublicKaraoke, // any city
      NetherlandsPilotChallenges.CheersToTheDutch, // any city
      NetherlandsPilotChallenges.StreetArtHunt, // any city
      NetherlandsPilotChallenges.SilentTrain, // any city
      NetherlandsPilotChallenges.PetsAreTheBest, // any city
    ],
    [
      NetherlandsPilotChallenges.ComplimentALocal, // any city
      NetherlandsPilotChallenges.GlassWalk, // Arnhem
      NetherlandsPilotChallenges.StatuePose, // any city
      NetherlandsPilotChallenges.GuessTheJob, // any city
      NetherlandsPilotChallenges.AlphabetCity, // any city
      NetherlandsPilotChallenges.StatueSelfie, // any city
    ],
    [
      NetherlandsPilotChallenges.InternationalCourt, // den haag
      NetherlandsPilotChallenges.ProgrammingBirthplace, // den haag
      NetherlandsPilotChallenges.BinnenhofBeauty, // den haag
      NetherlandsPilotChallenges.WindmillSpin, // any city
      NetherlandsPilotChallenges.PublicDanceDare, // any city
      NetherlandsPilotChallenges.ProvincesShowdown, // any city
    ],
    [
      NetherlandsPilotChallenges.MarketBrowsing, // any city
      NetherlandsPilotChallenges.LocalFlavor, // any city
      NetherlandsPilotChallenges.WoodenShoes, // any city
      NetherlandsPilotChallenges.InsuranceLandmark, // any city
      NetherlandsPilotChallenges.DutchChat, // any city
      NetherlandsPilotChallenges.JapaneseChristmas, // utrecht
    ],
    [
      NetherlandsPilotChallenges.BullishAdventure, // amsterdam
      NetherlandsPilotChallenges.Paparazzi, // amsterdam
      NetherlandsPilotChallenges.VOCHeritage, // amsterdam
      NetherlandsPilotChallenges.TwoCitiesOneName, // amsterdam, haarlem, breukelen (center)
      NetherlandsPilotChallenges.RoyalConnection, // amsterdam, den haag
      NetherlandsPilotChallenges.DutchMasters, // any city
    ],
  ],

  runs: runs,
} as TravelBingoGameData
