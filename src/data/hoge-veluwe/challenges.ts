import { Challenge, ChallengeType } from '../interfaces'

export enum HogeVeluweChallenge {
  PeekabooTrees = 'PeekabooTrees',
  WildlifeWhisperer = 'WildlifeWhisperer',
  GolderHourMagic = 'GolderHourMagic',
  TrailMixMoves = 'TrailMixMoves',
  FootprintsOfTheWild = 'FootprintsOfTheWild',
  NatureIdol = 'NatureIdol',
  EarthSculptor = 'EarthSculptor',
  LeafLove = 'LeafLove',
  TreeHuggerTime = 'TreeHuggerTime',
  ShadowSquad = 'ShadowSquad',
  StrangerSnap = 'StrangerSnap',
  CrownOfTheWild = 'CrownOfTheWild',
  Bingo = 'Bingo',
  BirdNerd = 'BirdNerd',
  TwistedTales = 'TwistedTales',
  SForScavenger = 'SForScavenger',
  DuneDetective = 'DuneDetective',
  TowerOfTeamwork = 'TowerOfTeamwork',
  MirrorMoments = 'MirrorMoments',
  RedRiderSpotting = 'RedRiderSpotting',
  SignLanguage = 'SignLanguage',
  SunCatcher = 'SunCatcher',
  CinematicComeback = 'CinematicComeback',
  OppositesAttract = 'OppositesAttract',
  TreeScholar = 'TreeScholar',
}

export const HogeVeluweChallenges: Record<HogeVeluweChallenge, Challenge> = {
  [HogeVeluweChallenge.PeekabooTrees]: {
    key: HogeVeluweChallenge.PeekabooTrees,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Peekaboo Trees',
    },
    description: {
      en: `Find a tree with a hole in it's trunk and take a picture of it.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.WildlifeWhisperer]: {
    key: HogeVeluweChallenge.WildlifeWhisperer,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Wildlife Whisperer',
    },
    description: {
      en: `Name two animals you see and give them the coolest names you can think of.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.GolderHourMagic]: {
    key: HogeVeluweChallenge.GolderHourMagic,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Golden Hour Magic',
    },
    description: {
      en: `Capture a dreamy sunset moment to make everyone jealous of your feed.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.TrailMixMoves]: {
    key: HogeVeluweChallenge.TrailMixMoves,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Trail Mix Moves',
    },
    description: {
      en: `Bust out a short dance on the way and let nature be your DJ.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.FootprintsOfTheWild]: {
    key: HogeVeluweChallenge.FootprintsOfTheWild,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Footprints of the Wild',
    },
    description: {
      en: `Spot an animal footprint and take a picture of it.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.NatureIdol]: {
    key: HogeVeluweChallenge.NatureIdol,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Nature Idol',
    },
    description: {
      en: `Perform a 1-minute song inspired by nature. Bonus points for originality!`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.EarthSculptor]: {
    key: HogeVeluweChallenge.EarthSculptor,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Earth Sculptor',
    },
    description: {
      en: `Build a masterpiece from natural materials and crown yourself an artist.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.LeafLove]: {
    key: HogeVeluweChallenge.LeafLove,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Leaf Love',
    },
    description: {
      en: `Find a heart-shaped leaf and share the love with your team.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.TreeHuggerTime]: {
    key: HogeVeluweChallenge.TreeHuggerTime,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Tree Hugger Time',
    },
    description: {
      en: `Group meditation meets team bonding—hug a tree and recharge together.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.ShadowSquad]: {
    key: HogeVeluweChallenge.ShadowSquad,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Shadow Squad',
    },
    description: {
      en: `Strike a pose for a creative team silhouette photo that screams teamwork.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.StrangerSnap]: {
    key: HogeVeluweChallenge.StrangerSnap,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Stranger Snap',
    },
    description: {
      en: `Take a picture with a stranger and make a new friend.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.CrownOfTheWild]: {
    key: HogeVeluweChallenge.CrownOfTheWild,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Crown of the Wild',
    },
    description: {
      en: `Craft a crown from natural materials and rule the forest runway.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.Bingo]: {
    key: HogeVeluweChallenge.Bingo,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Bingo',
    },
    description: {
      en: ``,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.BirdNerd]: {
    key: HogeVeluweChallenge.BirdNerd,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Bird Nerd',
    },
    description: {
      en: `Name a bird you see and take a picture of it.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.TwistedTales]: {
    key: HogeVeluweChallenge.TwistedTales,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Twisted Tales',
    },
    description: {
      en: `Find a twisted tree and take a picture of it.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.SForScavenger]: {
    key: HogeVeluweChallenge.SForScavenger,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'S for Scavenger',
    },
    description: {
      en: `Collect items from nature that spell out the letter 'S'—creativity counts!`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.DuneDetective]: {
    key: HogeVeluweChallenge.DuneDetective,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Dune Detective',
    },
    description: {
      en: `Spot a sand dune and and take a picture of it.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.TowerOfTeamwork]: {
    key: HogeVeluweChallenge.TowerOfTeamwork,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Tower of Teamwork',
    },
    description: {
      en: `Build a tower from natural materials and celebrate your team's strength.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.MirrorMoments]: {
    key: HogeVeluweChallenge.MirrorMoments,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Mirror Moments',
    },
    description: {
      en: `Find a reflective surface in nature and take a picture of it.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.RedRiderSpotting]: {
    key: HogeVeluweChallenge.RedRiderSpotting,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Red Rider Spotting',
    },
    description: {
      en: `Keep your eyes peeled for a red bike and snap a sneaky pic.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.SignLanguage]: {
    key: HogeVeluweChallenge.SignLanguage,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Sign Language',
    },
    description: {
      en: `Find an information sign and share a fun fact with the team.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.SunCatcher]: {
    key: HogeVeluweChallenge.SunCatcher,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Sun Catcher',
    },
    description: {
      en: `Take a picture of someone “holding” the sun like a pro illusionist.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.CinematicComeback]: {
    key: HogeVeluweChallenge.CinematicComeback,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Cinematic Comeback',
    },
    description: {
      en: `Recreate a famous movie scene in nature and make it your own.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.OppositesAttract]: {
    key: HogeVeluweChallenge.OppositesAttract,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Opposites Attract',
    },
    description: {
      en: `Find two contrasting elements in nature and take a picture of them.`,
    },
    image: 'https://via.placeholder.com/150',
  },
  [HogeVeluweChallenge.TreeScholar]: {
    key: HogeVeluweChallenge.TreeScholar,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Tree Scholar',
    },
    description: {
      en: `Name a tree you see and take a picture of it.`,
    },
    image: 'https://via.placeholder.com/150',
  },
}
