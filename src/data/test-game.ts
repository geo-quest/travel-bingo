import { TravelBingoGameData } from "./interfaces";

export default {
  title: { en: "Travel Bingo Netherlands" },
  icon: "FlagTwoTone",
  color: "#1890ff",
  backgroundColor: "#e6f7ff",
  shortDescription: {
    en: "A bingo card for a road trip through the Netherlands",
  },
  gamePlay: {
    en: `
- The first person to get a row, column, or diagonal wins
- The winner must shout 'Bingo!'
- The winner must show their card to the other players to verify the win
`,
  },
  challenges: [
    [
      {
        key: "Spot a windmill",
        challenge: { en: "Spot a windmill" },
        description: { en: "Find a windmill in the Netherlands" },
        points: 25,
        type: "normal",
        image:
          "https://travelwithbender.com/files/4014/3664/1436/zaanse_schans_IMG_4125-2.jpg",
      },
      {
        key: "Spot a tulip field",
        challenge: { en: "Spot a tulip field" },
        description: { en: "Find a field of tulips in the Netherlands" },
        points: 10,
        type: "normal",
        image:
          "https://dutchwannabe.com/wp-content/uploads/2017/06/tulip-fields-netherlands.jpg",
      },
      {
        key: "Spot a bike",
        challenge: { en: "Spot a bike" },
        description: { en: "Find a bike in the Netherlands" },
        points: 5,
        type: "normal",
        image:
          "https://photography.bicyclingaroundtheworld.nl/wp-content/uploads/2019/10/amtsterdam-netherlands-bicycle-culture.jpg",
      },
      {
        key: "Spot a canal",
        challenge: { en: "Spot a canal" },
        description: { en: "Find a canal in the Netherlands" },
        image:
          "https://canalsofamsterdam.com/wp-content/uploads/2022/07/Canals-of-Amsterdam-scaled.jpg",
        points: 5,
        type: "normal",
      },
      {
        key: "Spot a cheese shop",
        challenge: { en: "Spot a cheese shop" },
        description: "Find a shop that sells cheese in the Netherlands",
        points: 20,
        type: "normal",
        image:
          "https://images.squarespace-cdn.com/content/v1/5e386e245ec08c1b8eaa7c94/4dd6cf47-72c4-431a-bb96-9884507bf931/Cheese+Shop.jpg",
      },
    ],
    [
      {
        key: "Take pic with Van Gogh",
        challenge: { en: "Take pic with Van Gogh" },
        description: { en: "Take a picture with a Van Gogh painting" },
        points: 50,
        type: "normal",
        image:
          "https://assets.vangoghmuseum.nl/f0a809b3-6a77-406f-b398-350f74b9dea1?w=400&c=b65b3ac8477509fef0fb5cf71c1235e2316f27596c3bf2365469ce4303896b0a",
      },
      {
        key: "Spot a wooden shoe",
        challenge: { en: "Spot a wooden shoe" },
        description: { en: "Find a wooden shoe in the Netherlands" },
        points: 10,
        type: "normal",
        image:
          "https://www.learndutch.org/wp-content/uploads/2019/02/86-What-about-the-woorden-shoes-.jpg",
      },
      {
        key: "Take a photo of a local market",
        challenge: { en: "Take a photo of a local market" },
        description: {
          en: "Visit a local market and capture the bustling atmosphere",
        },
        points: 20,
        type: "normal",
        image:
          "https://www.hiddenholland.com/wp-content/uploads/amsterdam-market-albert-cuyp.jpg",
      },
      {
        key: "Find a famous monument",
        challenge: { en: "Find a famous monument" },
        description: {
          en: "Locate and photograph a well-known monument in the city",
        },
        points: 30,
        type: "normal",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/oldimages/bf7bfcfede1c35c26a869945094ae3441434370213.jpg",
      },
      {
        key: "Spot a traditional dance performance",
        challenge: { en: "Spot a traditional dance performance" },
        description: {
          en: "Watch and document a traditional dance in its country of origin",
        },
        points: 35,
        type: "normal",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dutch_Folklore_Dance_Group_in_Holambra%2C_Brazil.jpg/1200px-Dutch_Folklore_Dance_Group_in_Holambra%2C_Brazil.jpg",
      },
    ],
    [
      {
        key: "Capture a sunrise over the ocean",
        challenge: { en: "Capture a sunrise over the ocean" },
        description: { en: "Photograph a beautiful sunrise at the beach" },
        points: 40,
        type: "normal",
        image:
          "https://t4.ftcdn.net/jpg/00/70/14/07/360_F_70140703_2f8N0lwAp67VimEab9ogx3FjvguA8Ef1.jpg",
      },
      {
        key: "Photograph a local street artist",
        challenge: { en: "Photograph a local street artist" },
        description: {
          en: "Find and take a picture of a street artist at work",
        },
        points: 15,
        type: "normal",
        image:
          "https://tucsonartsbrigade.org/wp-content/uploads/graffiti-artist-painting.jpg",
      },
      {
        key: "Find a historic castle",
        challenge: { en: "Find a historic castle" },
        description: { en: "Visit and photograph a historic castle" },
        points: 50,
        type: "normal",
        image:
          "https://annetravelfoodie.com/wp-content/uploads/2020/09/muiderslot-castle-netherlands.jpg",
      },
      {
        key: "Try a traditional dish",
        challenge: { en: "Try a traditional dish" },
        description: {
          en: "Taste and review a traditional dish from the region",
        },
        points: 25,
        type: "normal",
        image:
          "https://traveladdicts.net/wp-content/uploads/2016/02/Bitterballen-beer-snack-Dutch-food.jpg",
      },
      {
        key: "Locate a famous statue",
        challenge: { en: "Locate a famous statue" },
        description: { en: "Find and take a picture of a renowned statue" },
        points: 30,
        type: "normal",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0a/32/90/johnny-jordaanplein.jpg?w=500&h=500&s=1",
      },
    ],
    [
      {
        key: "Spot a rare animal in the wild",
        challenge: { en: "Spot a rare animal in the wild" },
        description: {
          en: "Photograph a rare or exotic animal in its natural habitat",
        },
        points: 60,
        type: "normal",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/wildlife-in-the-netherlands.png",
      },
      {
        key: "Find a street with colorful houses",
        challenge: { en: "Find a street with colorful houses" },
        description: {
          en: "Locate a street known for its colorful houses and capture its beauty",
        },
        points: 20,
        type: "normal",
        image:
          "https://www.shutterstock.com/image-photo/houses-amsterdam-600nw-731110921.jpg",
      },
      {
        key: "Attend a local festival",
        challenge: { en: "Attend a local festival" },
        description: {
          en: "Join in on a local festival and document your experience",
        },
        points: 50,
        type: "normal",
        image:
          "https://www.spendlifetraveling.com/wp-content/uploads/2016/12/amsterdam_events_gay_pride.jpg",
      },
      {
        key: "Take a photo of a lighthouse",
        challenge: { en: "Take a photo of a lighthouse" },
        description: { en: "Find and capture the grandeur of a lighthouse" },
        points: 25,
        type: "normal",
        image: "https://live.staticflickr.com/8199/8242635034_076174c1be_b.jpg",
      },
      {
        key: "Spot a famous bridge",
        challenge: { en: "Spot a famous bridge" },
        description: { en: "Locate and photograph a world-famous bridge" },
        points: 30,
        type: "normal",
        image:
          "https://images.squarespace-cdn.com/content/569e766e69492e9dd5373ef6/1553525738625-IG5QYJ8WHIVWZMDWN1H7/amsterdam-photo-tour-009.jpg?format=1500w&content-type=image%2Fjpeg",
      },
    ],
    [
      {
        key: "Discover a hidden gem",
        challenge: { en: "Discover a hidden gem" },
        description: {
          en: "Find a lesser-known but stunning location and document it",
        },
        points: 35,
        type: "normal",
        image:
          "https://bymountainpeople.com/wp-content/uploads/2023/06/Discover-the-Hidden-Gem-of-Nepal-The-Shey-Phoksundo-Lake-Trek-By-Mountain-People.webp",
      },
      {
        key: "Capture a mountain peak",
        challenge: { en: "Capture a mountain peak" },
        description: { en: "Photograph the summit of a prominent mountain" },
        points: 40,
        type: "normal",
        image:
          "https://www.ephotozine.com/resize/articles/15270/P9080276.jpg?RTUdGk5cXyJFCgsJVANtdxU+cVRdHxFYFw1Gewk0T1JYFEtzen5YdgthHHsvEVxR",
      },
      {
        key: "Visit a botanical garden",
        challenge: { en: "Visit a botanical garden" },
        description: {
          en: "Explore and take photos of a botanical garden's diverse flora",
        },
        points: 20,
        type: "normal",
        image:
          "https://assets.cntraveller.in/photos/64199ada59df46f87e0a53ca/16:9/w_1024%2Cc_limit/GettyImages-470648565.jpg",
      },
      {
        key: "Find a local wildlife sanctuary",
        challenge: { en: "Find a local wildlife sanctuary" },
        description: {
          en: "Visit a wildlife sanctuary and capture the animals in their natural environment",
        },
        points: 45,
        type: "normal",
        image:
          "https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/Wildlife-Sanctuaries-In-India.jpg",
      },
      {
        key: "Discover a natural hot spring",
        challenge: { en: "Discover a natural hot spring" },
        description: { en: "Find and photograph a natural hot spring" },
        points: 40,
        type: "normal",
        image:
          "https://media.cntraveler.com/photos/5eb420d241269ff2d4f2ea8b/master/pass/Pamukkale-Denizli-Turkey-GettyImages-539479634.jpg",
      },
    ],
  ],
  runs: {
    "summer-edition": {
      name: { en: "Summer Edition" },
      date: "2024-08-24T12:00:00",
      lastUpdate: "2024-08-24T12:00:00",
      teams: {
        "team-a": {
          name: { en: "Team A" },
          challenges: [
            {
              key: "Discover a natural hot spring",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-3.gif",
            },
            {
              key: "Spot a wooden shoe",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-2.gif",
            },
            {
              key: "Try a traditional dish",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-1.gif",
            },
          ],
        },
        "team-b": {
          name: { en: "Team B" },
          challenges: [
            {
              key: "Capture a sunrise over the ocean",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-5.gif",
            },
            {
              key: "Find a famous monument",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-4.gif",
            },
            {
              key: "Locate a famous statue",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-3.gif",
            },
          ],
        },
        "team-c": {
          name: { en: "Team C" },
          challenges: [
            {
              key: "Spot a windmill",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-2.gif",
            },
            {
              key: "Take pic with Van Gogh",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-1.gif",
            },
            {
              key: "Capture a sunrise over the ocean",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-5.gif",
            },
            {
              key: "Spot a rare animal in the wild",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-4.gif",
            },
            {
              key: "Discover a hidden gem",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-3.gif",
            },
          ],
        },
        "team-d": {
          name: { en: "Team D" },
          challenges: [
            {
              key: "Spot a windmill",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-2.gif",
            },
            {
              key: "Take pic with Van Gogh",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-1.gif",
            },
            {
              key: "Spot a rare animal in the wild",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-5.gif",
            },
            {
              key: "Discover a hidden gem",
              date: "2024-08-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-4.gif",
            },
          ],
        },
      },
    },
    "winter-edition": {
      name: { en: "Winter Edition" },
      date: "2024-02-24T12:00:00",
      lastUpdate: "2024-02-24T12:00:00",
      teams: {
        "team-a": {
          name: { en: "Team A" },
          challenges: [
            {
              key: "Discover a natural hot spring",
              date: "2024-02-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-3.gif",
            },
            {
              key: "Spot a wooden shoe",
              date: "2024-02-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-2.gif",
            },
            {
              key: "Try a traditional dish",
              date: "2024-02-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-1.gif",
            },
          ],
        },
        "team-b": {
          name: { en: "Team B" },
          challenges: [
            {
              key: "Locate a famous statue",
              date: "2024-02-24T12:00:00",
              comment: { en: `Solved!!!` },
            },
            {
              key: "Spot a windmill",
              date: "2024-02-24T12:00:00",
              comment: { en: `Solved!!!` },
            },
            {
              key: "Take pic with Van Gogh",
              date: "2024-02-24T12:00:00",
              comment: `_Great job_!!!`,
              image: { en: "/images/clapping-5.gif" },
            },
            {
              key: "Capture a sunrise over the ocean",
              date: "2024-02-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-4.gif",
            },
          ],
        },
        "team-c": {
          name: { en: "Team C" },
          challenges: [
            {
              key: "Spot a rare animal in the wild",
              date: "2024-02-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-3.gif",
            },
            {
              key: "Discover a hidden gem",
              date: "2024-02-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-2.gif",
            },
            {
              key: "Capture a sunrise over the ocean",
              date: "2024-02-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-1.gif",
            },
            {
              key: "Find a famous monument",
              date: "2024-02-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-5.gif",
            },
          ],
        },
        "team-d": {
          name: { en: "Team D" },
          challenges: [
            {
              key: "Spot a rare animal in the wild",
              date: "2024-02-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-4.gif",
            },
          ],
        },
        "team-e": {
          name: { en: "Team E" },
          challenges: [
            {
              key: "Spot a rare animal in the wild",
              date: "2024-02-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-3.gif",
            },
            {
              key: "Capture a sunrise over the ocean",
              date: "2024-02-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-2.gif",
            },
            {
              key: "Find a famous monument",
              date: "2024-02-24T12:00:00",
              comment: { en: `_Great job_!!!` },
              image: "/images/clapping-1.gif",
            },
          ],
        },
      },
    },
  },
} as TravelBingoGameData;
