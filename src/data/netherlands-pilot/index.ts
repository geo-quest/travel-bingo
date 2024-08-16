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
      NetherlandsPilotChallenges.WindmillWonder,
      NetherlandsPilotChallenges.StatueSelfie,
      NetherlandsPilotChallenges.Grachtenhuis,
      NetherlandsPilotChallenges.Paparazzi,
      NetherlandsPilotChallenges.PetsAreTheBest,
      NetherlandsPilotChallenges.AlphabetCity,
    ],
    [
      NetherlandsPilotChallenges.PublicKaraoke,
      NetherlandsPilotChallenges.Photobomb,
      NetherlandsPilotChallenges.JapaneseChristmas,
      NetherlandsPilotChallenges.TwoCitiesOneName,
      NetherlandsPilotChallenges.DutchChat,
      NetherlandsPilotChallenges.GlassWalk,
    ],
    [
      NetherlandsPilotChallenges.CheersToTheDutch,
      NetherlandsPilotChallenges.TheLettersToUtrecht,
      NetherlandsPilotChallenges.PublicDanceDare,
      NetherlandsPilotChallenges.CityOfBikes,
      NetherlandsPilotChallenges.BullishAdventure,
      NetherlandsPilotChallenges.FindMiffy,
    ],
    [
      NetherlandsPilotChallenges.DomTowerSnapshot,
      NetherlandsPilotChallenges.MarketBrowsing,
      NetherlandsPilotChallenges.WindmillSpin,
      NetherlandsPilotChallenges.DutchMasters,
      NetherlandsPilotChallenges.VOCHeritage,
      NetherlandsPilotChallenges.ProgrammingBirthplace,
    ],
    [
      NetherlandsPilotChallenges.SilentTrain,
      NetherlandsPilotChallenges.RoyalConnection,
      NetherlandsPilotChallenges.StreetArtHunt,
      NetherlandsPilotChallenges.ComplimentALocal,
      NetherlandsPilotChallenges.ProvincesShowdown,
      NetherlandsPilotChallenges.WoodenShoes,
    ],
    [
      NetherlandsPilotChallenges.InsuranceLandmark,
      NetherlandsPilotChallenges.InternationalCourt,
      NetherlandsPilotChallenges.StatuePose,
      NetherlandsPilotChallenges.BinnenhofBeauty,
      NetherlandsPilotChallenges.GuessTheJob,
      NetherlandsPilotChallenges.RepurposedHistory,
    ],
  ],
  runs: runs,
} as TravelBingoGameData
