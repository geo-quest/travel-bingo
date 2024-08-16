import { Challenge, ChallengeType } from '../interfaces'

export enum NetherlandsPilotChallenge {
  CheersToTheDutch = 'CheersToTheDutch',
  PublicDanceDare = 'PublicDanceDare',
  WindmillWonder = 'WindmillWonder',
  SilentTrain = 'SilentTrain',
  TheLettersToUtrecht = 'TheLettersToUtrecht',
  StreetArtHunt = 'StreetArtHunt',
  LocalFlavor = 'LocalFlavor',
  ComplimentALocal = 'ComplimentALocal',
  BullishAdventure = 'BullishAdventure',
  InternationalCourt = 'InternationalCourt',
  WindmillSpin = 'WindmillSpin',
  DomTowerSnapshot = 'DomTowerSnapshot',
  ProvincesShowdown = 'ProvincesShowdown',
  FindMiffy = 'FindMiffy',
  HistoricTrade = 'HistoricTrade',
  JapaneseChristmas = 'JapaneseChristmas',
  ProgrammingBirthplace = 'ProgrammingBirthplace',
  RepurposedHistory = 'RepurposedHistory',
  Grachtenhuis = 'Grachtenhuis',
  DutchMasters = 'DutchMasters',
  TwoCitiesOneName = 'TwoCitiesOneName',
  GlassWalk = 'GlassWalk',
  WoodenShoes = 'WoodenShoes',
  VOCHeritage = 'VOCHeritage',
  InsuranceLandmark = 'InsuranceLandmark',
  StatueSelfie = 'StatueSelfie',
  BinnenhofBeauty = 'BinnenhofBeauty',
  MarketBrowsing = 'MarketBrowsing',
  StatuePose = 'StatuePose',
  Photobomb = 'Photobomb',
  GuessTheJob = 'GuessTheJob',
  DutchChat = 'DutchChat',
  Papparazzi = 'Papparazzi',
  RoyalConnection = 'RoyalConnection',
  PetsAreTheBest = 'PetsAreTheBest',
  CityOfBikes = 'CityOfBikes',
  AlphabetCity = 'AlphabetCity',
}

export const NetherlandsPilotChallenges: Record<NetherlandsPilotChallenge, Challenge> = {
  [NetherlandsPilotChallenge.CheersToTheDutch]: {
    key: NetherlandsPilotChallenge.CheersToTheDutch,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Cheers to the Dutch',
      nl: 'Proost op de Nederlanders',
      pt: 'Saúde aos Holandeses',
      zh: '为荷兰人干杯',
    },
    description: {
      en: 'Try a local Dutch beverage.',
      nl: 'Probeer een lokaal Nederlands drankje.',
      pt: 'Experimente uma bebida holandesa local.',
      zh: '尝试当地荷兰饮料。',
    },
  },
  [NetherlandsPilotChallenge.PublicDanceDare]: {
    key: NetherlandsPilotChallenge.PublicDanceDare,
    type: ChallengeType.Boost,
    boostMultiplier: 2.0,
    challenge: {
      en: 'Public Dance Dare',
      nl: 'Openbare Dans Uitdaging',
      pt: 'Desafio de Dança Pública',
      zh: '公共舞蹈挑战',
    },
    description: {
      en: 'Perform a short dance (min 1 min) routine in a public area.',
      nl: 'Voer een korte dansroutine (min 1 min) uit op een openbare plek.',
      pt: 'Realize uma rotina de dança curta (min 1 min) em uma área pública.',
      zh: '在公共区域表演一段短舞蹈（最少1分钟）。',
    },
  },
  [NetherlandsPilotChallenge.WindmillWonder]: {
    key: NetherlandsPilotChallenge.WindmillWonder,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Windmill Wonder',
      nl: 'Molenwonder',
      pt: 'Maravilha do Moinho de Vento',
      zh: '风车奇观',
    },
    description: {
      en: 'Take a selfie with a windmill.',
      nl: 'Maak een selfie met een molen.',
      pt: 'Tire uma selfie com um moinho de vento.',
      zh: '与风车合影。',
    },
  },
  [NetherlandsPilotChallenge.SilentTrain]: {
    key: NetherlandsPilotChallenge.SilentTrain,
    type: ChallengeType.Curse,
    curseMultiplier: 0.8,
    challenge: {
      en: 'Silent Train',
      nl: 'Stille Trein',
      pt: 'Trem Silencioso',
      zh: '无声火车',
    },
    description: {
      en: 'Talk to someone in the silent compartment of a train.',
      nl: 'Praat met iemand in de stiltecoupe van een trein.',
      pt: 'Converse com alguém no compartimento silencioso de um trem.',
      zh: '与火车的无声车厢里的某人交谈。',
    },
  },
  [NetherlandsPilotChallenge.TheLettersToUtrecht]: {
    key: NetherlandsPilotChallenge.TheLettersToUtrecht,
    type: ChallengeType.Normal,
    points: 20,
    challenge: {
      en: 'The Letters of Utrecht',
      nl: 'De Letters van Utrecht',
      pt: 'As Letras de Utrecht',
      zh: '乌得勒支的字母',
    },
    description: {
      en: 'Find and read a segment of the "Letters of Utrecht" poem.',
      nl: 'Vind en lees een segment van het gedicht "De Letters van Utrecht".',
      pt: 'Encontre e leia um segmento do poema "As Letras de Utrecht".',
      zh: '找到并阅读《乌得勒支的字母》诗歌的一部分。',
    },
  },
  [NetherlandsPilotChallenge.StreetArtHunt]: {
    key: NetherlandsPilotChallenge.StreetArtHunt,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Street Art Hunt',
      nl: 'Straatkunstjacht',
      pt: 'Caça à Arte de Rua',
      zh: '寻找街头艺术',
    },
    description: {
      en: 'Find and photograph a piece of street art or graffiti.',
      nl: 'Vind en fotografeer een stuk straatkunst of graffiti.',
      pt: 'Encontre e fotografe uma peça de arte de rua ou grafite.',
      zh: '找到并拍摄一件街头艺术品或涂鸦。',
    },
  },
  [NetherlandsPilotChallenge.LocalFlavor]: {
    key: NetherlandsPilotChallenge.LocalFlavor,
    type: ChallengeType.Normal,
    points: 20,
    challenge: {
      en: 'Local Flavor',
      nl: 'Lokale Smaak',
      pt: 'Sabor Local',
      zh: '当地风味',
    },
    description: {
      en: 'Try a traditional Dutch food.',
      nl: 'Probeer een traditioneel Nederlands gerecht.',
      pt: 'Experimente uma comida tradicional holandesa.',
      zh: '尝试一种传统荷兰食物。',
    },
  },
  [NetherlandsPilotChallenge.ComplimentALocal]: {
    key: NetherlandsPilotChallenge.ComplimentALocal,
    type: ChallengeType.Boost,
    boostMultiplier: 1.6,
    challenge: {
      en: 'Compliment a Local',
      nl: 'Complimenteer een Lokale',
      pt: 'Elogie um Local',
      zh: '赞美当地人',
    },
    description: {
      en: 'Compliment a local person in Dutch.',
      nl: 'Complimenteer een lokale persoon in het Nederlands.',
      pt: 'Elogie uma pessoa local em holandês.',
      zh: '用荷兰语赞美当地人。',
    },
  },
  [NetherlandsPilotChallenge.BullishAdventure]: {
    key: NetherlandsPilotChallenge.BullishAdventure,
    type: ChallengeType.Normal,
    points: 30,
    challenge: {
      en: 'Bullish Adventure',
      nl: 'Stierig Avontuur',
      pt: 'Aventura Taurina',
      zh: '公牛冒险',
    },
    description: {
      en: 'Seek out a prominent financial building in a major Dutch city, and take a group photo with a statue representing market success.',
      nl: 'Zoek een prominent financieel gebouw in een grote Nederlandse stad en maak een groepsfoto met een standbeeld dat marktsucces vertegenwoordigt.',
      pt: 'Procure um prédio financeiro proeminente em uma grande cidade holandesa e tire uma foto em grupo com uma estátua que represente o sucesso do mercado.',
      zh: '在荷兰主要城市中寻找一个著名的金融建筑，并与代表市场成功的雕像合影。',
    },
  },
  [NetherlandsPilotChallenge.InternationalCourt]: {
    key: NetherlandsPilotChallenge.InternationalCourt,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'International Court',
      nl: 'Internationaal Gerechtshof',
      pt: 'Tribunal Internacional',
      zh: '国际法院',
    },
    description: {
      en: 'Find the International Court of Justice building and take a picture outside.',
      nl: 'Vind het gebouw van het Internationaal Gerechtshof en maak een foto buiten.',
      pt: 'Encontre o prédio do Tribunal Internacional de Justiça e tire uma foto do lado de fora.',
      zh: '找到国际法院大楼并在外面拍照。',
    },
  },
  [NetherlandsPilotChallenge.WindmillSpin]: {
    key: NetherlandsPilotChallenge.WindmillSpin,
    type: ChallengeType.Curse,
    curseMultiplier: 0.4,
    challenge: {
      en: 'Windmill Spin',
      nl: 'Molen Draai',
      pt: 'Giro do Moinho de Vento',
      zh: '风车旋转',
    },
    description: {
      en: 'Spin around 10 times and then walk 10 meters in a straight line without falling.',
      nl: 'Draai 10 keer rond en loop dan 10 meter in een rechte lijn zonder te vallen.',
      pt: 'Dê 10 voltas e depois ande 10 metros em linha reta sem cair.',
      zh: '转10圈，然后直线走10米而不摔倒。',
    },
  },
  [NetherlandsPilotChallenge.DomTowerSnapshot]: {
    key: NetherlandsPilotChallenge.DomTowerSnapshot,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Dom Tower Snapshot',
      nl: 'Domtoren Snapshot',
      pt: 'Foto da Torre Dom',
      zh: '多姆塔快照',
    },
    description: {
      en: 'Take a group selfie with the iconic Dom Tower in the background.',
      nl: 'Maak een groepsselfie met de iconische Domtoren op de achtergrond.',
      pt: 'Tire uma selfie em grupo com a icônica Torre Dom ao fundo.',
      zh: '与标志性的多姆塔背景合影。',
    },
  },
  [NetherlandsPilotChallenge.ProvincesShowdown]: {
    key: NetherlandsPilotChallenge.ProvincesShowdown,
    type: ChallengeType.Normal,
    points: 40,
    challenge: {
      en: 'Provinces Showdown',
      nl: 'Provincies Showdown',
      pt: 'Confronto das Províncias',
      zh: '省份对决',
    },
    description: {
      en: 'Recite all the provinces of the Netherlands in front of the city hall of the capital of one of the provinces.',
      nl: 'Reciteer alle provincies van Nederland voor het stadhuis van de hoofdstad van een van de provincies.',
      pt: 'Recite todas as províncias dos Países Baixos em frente à prefeitura da capital de uma das províncias.',
      zh: '在荷兰一个省的省会市政厅前背诵荷兰所有省份。',
    },
  },
  [NetherlandsPilotChallenge.FindMiffy]: {
    key: NetherlandsPilotChallenge.FindMiffy,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Find Miffy',
      nl: 'Vind Nijntje',
      pt: 'Encontre Miffy',
      zh: '找米菲',
    },
    description: {
      en: 'Locate and take a picture with Miffy.',
      nl: 'Vind en maak een foto met Nijntje.',
      pt: 'Localize e tire uma foto com Miffy.',
      zh: '找到米菲并拍照。',
    },
  },
  [NetherlandsPilotChallenge.HistoricTrade]: {
    key: NetherlandsPilotChallenge.HistoricTrade,
    type: ChallengeType.Normal,
    points: 30,
    challenge: {
      en: 'Historic Trade',
      nl: 'Historische Handel',
      pt: 'Comércio Histórico',
      zh: '历史贸易',
    },
    description: {
      en: 'Take a photo at a historical site linked to Dutch trade or risk management.',
      nl: 'Maak een foto op een historische locatie die is verbonden met Nederlandse handel of risicobeheer.',
      pt: 'Tire uma foto em um local histórico ligado ao comércio ou gerenciamento de riscos holandês.',
      zh: '在与荷兰贸易或风险管理有关的历史遗址拍照。',
    },
  },
  [NetherlandsPilotChallenge.JapaneseChristmas]: {
    key: NetherlandsPilotChallenge.JapaneseChristmas,
    type: ChallengeType.Normal,
    points: 30,
    challenge: {
      en: 'Japanese Christmas',
      nl: 'Japanse Kerst',
      pt: 'Natal Japonês',
      zh: '日本圣诞',
    },
    description: {
      en: "Find the establishment that plays a significant role in Japan's Christmas customs.",
      nl: 'Vind de instelling die een belangrijke rol speelt in de kerstgebruiken van Japan.',
      pt: 'Encontre o estabelecimento que desempenha um papel significativo nos costumes de Natal do Japão.',
      zh: '找到在日本圣诞习俗中起重要作用的机构。',
    },
  },
  [NetherlandsPilotChallenge.ProgrammingBirthplace]: {
    key: NetherlandsPilotChallenge.ProgrammingBirthplace,
    type: ChallengeType.Normal,
    points: 30,
    challenge: {
      en: 'Programming Birthplace',
      nl: 'Geboorteplaats Programmeren',
      pt: 'Local de Nascimento da Programação',
      zh: '编程诞生地',
    },
    description: {
      en: 'Visit the birthplace of a famous Dutch computer programmer.',
      nl: 'Bezoek de geboorteplaats van een beroemde Nederlandse computerprogrammeur.',
      pt: 'Visite o local de nascimento de um famoso programador de computador holandês.',
      zh: '参观一位著名的荷兰计算机程序员的出生地。',
    },
  },
  [NetherlandsPilotChallenge.RepurposedHistory]: {
    key: NetherlandsPilotChallenge.RepurposedHistory,
    type: ChallengeType.Normal,
    points: 20,
    challenge: {
      en: 'Repurposed History',
      nl: 'Herbestemde Geschiedenis',
      pt: 'História Reprocessada',
      zh: '历史再利用',
    },
    description: {
      en: 'Take a group photo with a church that has been repurposed for a modern use.',
      nl: 'Maak een groepsfoto met een kerk die is herbestemd voor een modern gebruik.',
      pt: 'Tire uma foto em grupo com uma igreja que foi reutilizada para um uso moderno.',
      zh: '与一座被重新用于现代用途的教堂合影。',
    },
  },
  [NetherlandsPilotChallenge.Grachtenhuis]: {
    key: NetherlandsPilotChallenge.Grachtenhuis,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Dutch Canal House',
      nl: 'Nederlands Grachtenhuis',
      pt: 'Casa de Canal Holandesa',
      zh: '荷兰运河房屋',
    },
    description: {
      en: 'Take a group picture with a classic Dutch canal house in the background.',
      nl: 'Maak een groepsfoto met een klassiek Nederlands grachtenhuis op de achtergrond.',
      pt: 'Tire uma foto em grupo com uma casa de canal clássica holandesa ao fundo.',
      zh: '与背景中的经典荷兰运河房屋合影。',
    },
  },
  [NetherlandsPilotChallenge.DutchMasters]: {
    key: NetherlandsPilotChallenge.DutchMasters,
    type: ChallengeType.Normal,
    points: 40,
    challenge: {
      en: 'Dutch Masters',
      nl: 'Nederlandse Meesters',
      pt: 'Mestres Holandeses',
      zh: '荷兰大师',
    },
    description: {
      en: 'Find a piece of art by a Dutch Master',
      nl: 'Vind een kunstwerk van een Nederlandse Meester',
      pt: 'Encontre uma obra de arte de um Mestre Holandês',
      zh: '找到一件荷兰大师的作品',
    },
  },
  [NetherlandsPilotChallenge.TwoCitiesOneName]: {
    key: NetherlandsPilotChallenge.TwoCitiesOneName,
    type: ChallengeType.Normal,
    points: 40,
    challenge: {
      en: 'Two Cities, One Name',
      nl: 'Twee Steden, Één Naam',
      pt: 'Duas Cidades, Um Nome',
      zh: '两个城市，一个名字',
    },
    description: {
      en: 'Visit two cities in the Netherlands that inspired U.S. city names.',
      nl: 'Bezoek twee steden in Nederland die Amerikaanse stadnamen hebben geïnspireerd.',
      pt: 'Visite duas cidades nos Países Baixos que inspiraram nomes de cidades dos EUA.',
      zh: '访问荷兰的两个城市，这两个城市启发了美国的城市名称。',
    },
  },
  [NetherlandsPilotChallenge.GlassWalk]: {
    key: NetherlandsPilotChallenge.GlassWalk,
    type: ChallengeType.Normal,
    points: 50,
    challenge: {
      en: 'Glass Walk',
      nl: 'Glaswandeling',
      pt: 'Caminhada de Vidro',
      zh: '玻璃走道',
    },
    description: {
      en: 'Walk on the glass platform at Eusebius Church',
      nl: 'Loop op het glazen platform bij de Eusebiuskerk',
      pt: 'Caminhe na plataforma de vidro na Igreja de Eusebius',
      zh: '在欧塞比乌斯教堂的玻璃平台上行走',
    },
  },
  [NetherlandsPilotChallenge.WoodenShoes]: {
    key: NetherlandsPilotChallenge.WoodenShoes,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Wooden Shoes',
      nl: 'Houten Schoenen',
      pt: 'Sapatos de Madeira',
      zh: '木鞋',
    },
    description: {
      en: 'Find a traditional Dutch wooden shoe.',
      nl: 'Vind een traditionele Nederlandse houten schoen.',
      pt: 'Encontre um sapato de madeira tradicional holandês.',
      zh: '找到一双传统的荷兰木鞋。',
    },
  },
  [NetherlandsPilotChallenge.VOCHeritage]: {
    key: NetherlandsPilotChallenge.VOCHeritage,
    type: ChallengeType.Normal,
    points: 40,
    challenge: {
      en: 'VOC Heritage',
      nl: 'VOC Erfgoed',
      pt: 'Herança da VOC',
      zh: 'VOC遗产',
    },
    description: {
      en: 'Photograph a building or place connected to the Dutch East India Company (VOC)',
      nl: 'Fotografeer een gebouw of plek die verbonden is met de Verenigde Oost-Indische Compagnie (VOC)',
      pt: 'Fotografe um prédio ou local conectado à Companhia Holandesa das Índias Orientais (VOC)',
      zh: '拍摄与荷兰东印度公司（VOC）有关的建筑或地点',
    },
  },
  [NetherlandsPilotChallenge.InsuranceLandmark]: {
    key: 'insurance_company',
    type: ChallengeType.Normal,
    challenge: {
      en: 'Insurance Landmark',
      nl: 'Verzekeringslandmark',
      pt: 'Marco do Seguro',
      zh: '保险地标',
    },
    description: {
      en: 'Find a building or office associated with a major Dutch insurance company.',
      nl: 'Vind een gebouw of kantoor dat is verbonden met een grote Nederlandse verzekeringsmaatschappij.',
      pt: 'Encontre um prédio ou escritório associado a uma grande empresa de seguros holandesa.',
      zh: '找到与一家荷兰大型保险公司相关的建筑或办公室。',
    },
    points: 20,
  },
  [NetherlandsPilotChallenge.StatueSelfie]: {
    key: NetherlandsPilotChallenge.StatueSelfie,
    type: ChallengeType.Normal,
    challenge: {
      en: 'Statue Selfie',
      nl: 'Standbeeld Selfie',
      pt: 'Selfie de Estátua',
      zh: '雕像自拍',
    },
    description: {
      en: 'Take a Selfie with a Statue of a Famous Dutch Artist or Writer',
      nl: 'Maak een selfie met een standbeeld van een beroemde Nederlandse kunstenaar of schrijver',
      pt: 'Tire uma selfie com uma estátua de um famoso artista ou escritor holandês',
      zh: '与一位著名荷兰艺术家或作家的雕像自拍',
    },
    points: 20,
  },
  [NetherlandsPilotChallenge.BinnenhofBeauty]: {
    key: NetherlandsPilotChallenge.BinnenhofBeauty,
    type: ChallengeType.Normal,
    challenge: {
      en: 'Binnenhof Beauty',
      nl: 'Binnenhof Beauty',
      pt: 'Beleza do Binnenhof',
      zh: '国会大厦之美',
    },
    description: {
      en: 'Photograph the Hofvijver with the Binnenhof in the Background',
      nl: 'Fotografeer de Hofvijver met het Binnenhof op de achtergrond',
      pt: 'Fotografe o Hofvijver com o Binnenhof ao fundo',
      zh: '拍摄背景为国会大厦的Hofvijver',
    },
    points: 40,
  },
  [NetherlandsPilotChallenge.MarketBrowsing]: {
    key: NetherlandsPilotChallenge.MarketBrowsing,
    type: ChallengeType.Normal,
    challenge: {
      en: 'Market Browsing',
      nl: 'Marktbezoek',
      pt: 'Visita ao Mercado',
      zh: '逛市场',
    },
    description: {
      en: 'Visit a Local Market and Take a Picture of a Unique Item',
      nl: 'Bezoek een lokale markt en maak een foto van een uniek item',
      pt: 'Visite um mercado local e tire uma foto de um item único',
      zh: '参观当地市场并拍摄一件独特的物品',
    },
    points: 10,
  },
  [NetherlandsPilotChallenge.StatuePose]: {
    key: NetherlandsPilotChallenge.StatuePose,
    type: ChallengeType.Boost,
    boostMultiplier: 1.8,
    challenge: {
      en: 'Statue Pose',
      nl: 'Standbeeld Pose',
      pt: 'Pose de Estátua',
      zh: '雕像姿势',
    },
    description: {
      en: 'Strike a Pose with a random Statue for 1 minute',
      nl: 'Neem een pose aan met een willekeurig standbeeld gedurende 1 minuut',
      pt: 'Faça uma pose com uma estátua aleatória por 1 minuto',
      zh: '与随机雕像摆姿势1分钟',
    },
  },
  [NetherlandsPilotChallenge.Photobomb]: {
    key: NetherlandsPilotChallenge.Photobomb,
    type: ChallengeType.Boost,
    boostMultiplier: 1.5,
    challenge: {
      en: 'Photobomb',
      nl: 'Photobomb',
      pt: 'Photobomb',
      zh: 'Photobomb',
    },
    description: {
      en: 'Successfully photobomb a stranger’s photo at a tourist spot.',
      nl: 'Photobomb succesvol een foto van een vreemdeling op een toeristische plek.',
      pt: 'Photobomb com sucesso a foto de um estranho em um ponto turístico.',
      zh: '在旅游景点成功photobomb一个陌生人的照片。',
    },
  },
  [NetherlandsPilotChallenge.GuessTheJob]: {
    key: NetherlandsPilotChallenge.GuessTheJob,
    type: ChallengeType.Curse,
    curseMultiplier: 0.3,
    challenge: {
      en: "Guess the Stranger's Job",
      nl: 'Raad het beroep van een vreemdeling',
      pt: 'Adivinhe o trabalho do estranho',
      zh: '猜陌生人的职业',
    },
    description: {
      en: 'Approach a stranger and guess their job within three attempts.',
      nl: 'Benader een vreemdeling en raad hun beroep binnen drie pogingen.',
      pt: 'Aborde um estranho e adivinhe o trabalho dele em três tentativas.',
      zh: '接近陌生人并在三次尝试内猜出他们的职业。',
    },
  },
  [NetherlandsPilotChallenge.DutchChat]: {
    key: NetherlandsPilotChallenge.DutchChat,
    type: ChallengeType.Boost,
    boostMultiplier: 1.7,
    challenge: {
      en: 'Dutch Chat',
      nl: 'Nederlands Gesprek',
      pt: 'Conversa em Holandês',
      zh: '荷兰语聊天',
    },
    description: {
      en: 'Have a 1-minute conversation in Dutch with a native speaker without using any English.',
      nl: 'Heb een gesprek van 1 minuut in het Nederlands met een moedertaalspreker zonder Engels te gebruiken.',
      pt: 'Tenha uma conversa de 1 minuto em holandês com um falante nativo sem usar inglês.',
      zh: '与荷兰母语人士进行一分钟的荷兰语对话，不使用任何英语。',
    },
  },
  [NetherlandsPilotChallenge.Papparazzi]: {
    key: NetherlandsPilotChallenge.Papparazzi,
    type: ChallengeType.Boost,
    boostMultiplier: 1.8,
    challenge: {
      en: 'Papparazzi',
      nl: 'Papparazzi',
      pt: 'Papparazzi',
      zh: '狗仔队',
    },
    description: {
      en: 'Take a group photo with a celebrity.',
      nl: 'Maak een groepsfoto met een beroemdheid.',
      pt: 'Tire uma foto em grupo com uma celebridade.',
      zh: '与名人合影。',
    },
  },
  [NetherlandsPilotChallenge.RoyalConnection]: {
    key: NetherlandsPilotChallenge.RoyalConnection,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Royal Connection',
      nl: 'Koninklijke Connectie',
      pt: 'Conexão Real',
      zh: '皇家联系',
    },
    description: {
      en: 'Find and photograph a building or landmark associated with Dutch royalty, such as a palace or royal residence.',
      nl: 'Vind en fotografeer een gebouw of monument dat is verbonden met de Nederlandse koninklijke familie, zoals een paleis of koninklijke residentie.',
      pt: 'Encontre e fotografe um prédio ou marco associado à realeza holandesa, como um palácio ou residência real.',
      zh: '找到并拍摄与荷兰皇室有关的建筑或地标，例如宫殿或皇家住所。',
    },
  },
  [NetherlandsPilotChallenge.PetsAreTheBest]: {
    key: NetherlandsPilotChallenge.PetsAreTheBest,
    type: ChallengeType.Normal,
    points: 10,
    challenge: {
      en: 'Pets Are The Best',
      nl: 'Huisdieren Zijn De Beste',
      pt: 'Animais de Estimação São os Melhores',
      zh: '宠物是最棒的',
    },
    description: {
      en: 'Take a picture with a pet in a public place.',
      nl: 'Maak een foto met een huisdier op een openbare plek.',
      pt: 'Tire uma foto com um animal de estimação em um local público.',
      zh: '在公共场所与宠物合影。',
    },
  },
  [NetherlandsPilotChallenge.CityOfBikes]: {
    key: NetherlandsPilotChallenge.CityOfBikes,
    type: ChallengeType.Normal,
    points: 20,
    challenge: {
      en: 'City of Bikes',
      nl: 'Fietsstad',
      pt: 'Cidade das Bicicletas',
      zh: '自行车之城',
    },
    description: {
      en: 'Photograph a street or area filled with atleast a 100 bicycles.',
      nl: 'Fotografeer een straat of gebied gevuld met minstens 100 fietsen.',
      pt: 'Fotografe uma rua ou área cheia de pelo menos 100 bicicletas.',
      zh: '拍摄一条或一个区域至少有100辆自行车。',
    },
  },
  [NetherlandsPilotChallenge.AlphabetCity]: {
    key: NetherlandsPilotChallenge.AlphabetCity,
    type: ChallengeType.Normal,
    points: 20,
    challenge: {
      en: 'Alphabet City',
      nl: 'Alfabetstad',
      pt: 'Cidade do Alfabeto',
      zh: '字母城市',
    },
    description: {
      en: 'Find three different places or landmarks whose names start with consecutive letters of the Dutch alphabet (e.g., A, B, C). Take a photo of each.',
      nl: 'Vind drie verschillende plaatsen of bezienswaardigheden waarvan de namen beginnen met opeenvolgende letters van het Nederlandse alfabet (bijv. A, B, C). Maak van elk een foto.',
      pt: 'Encontre três lugares ou marcos diferentes cujos nomes comecem com letras consecutivas do alfabeto holandês (por exemplo, A, B, C). Tire uma foto de cada um.',
      zh: '找到三个不同的地方或地标，其名称以荷兰字母表的连续字母开头（例如，A，B，C）。 每个拍照。',
    },
  },
}
