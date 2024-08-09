import { TravelBingoGameData } from "./interfaces";

export default {
  title: "Travel Bingo Netherlands",
  icon: "FlagTwoTone",
  color: "#1890ff",
  backgroundColor: "#e6f7ff",
  shortDescription: "A bingo card for a road trip through the Netherlands",
  gamePlay: `## How to Play

- The first person to get a row, column, or diagonal wins
- The winner must shout 'Bingo!'
- The winner must show their card to the other players to verify the win
`,
  challenges: [
    [
      {
        challenge: "Spot a windmill",
        description: "Find a windmill in the Netherlands",
        points: 25,
        type: "normal",
        image:
          "https://travelwithbender.com/files/4014/3664/1436/zaanse_schans_IMG_4125-2.jpg",
      },
      {
        challenge: "Spot a tulip field",
        description: "Find a field of tulips in the Netherlands",
        points: 10,
        type: "normal",
        image:
          "https://dutchwannabe.com/wp-content/uploads/2017/06/tulip-fields-netherlands.jpg",
      },
      {
        challenge: "Spot a bike",
        description: "Find a bike in the Netherlands",
        points: 5,
        type: "normal",
        image:
          "https://photography.bicyclingaroundtheworld.nl/wp-content/uploads/2019/10/amtsterdam-netherlands-bicycle-culture.jpg",
      },
      {
        challenge: "Spot a canal",
        description: "Find a canal in the Netherlands",
        image:
          "https://canalsofamsterdam.com/wp-content/uploads/2022/07/Canals-of-Amsterdam-scaled.jpg",
        points: 5,
        type: "normal",
      },
      {
        challenge: "Spot a cheese shop",
        description: "Find a shop that sells cheese in the Netherlands",
        points: 20,
        type: "normal",
        image:
          "https://images.squarespace-cdn.com/content/v1/5e386e245ec08c1b8eaa7c94/4dd6cf47-72c4-431a-bb96-9884507bf931/Cheese+Shop.jpg",
      },
    ],
    [
      {
        challenge: "Take pic with Van Gogh",
        description: "Take a picture with a Van Gogh painting",
        points: 50,
        type: "normal",
        image:
          "https://assets.vangoghmuseum.nl/f0a809b3-6a77-406f-b398-350f74b9dea1?w=400&c=b65b3ac8477509fef0fb5cf71c1235e2316f27596c3bf2365469ce4303896b0a",
      },
      {
        challenge: "Spot a wooden shoe",
        description: "Find a wooden shoe in the Netherlands",
        points: 10,
        type: "normal",
        image:
          "https://www.learndutch.org/wp-content/uploads/2019/02/86-What-about-the-woorden-shoes-.jpg",
      },
      {
        challenge: "Take a photo of a local market",
        description: "Visit a local market and capture the bustling atmosphere",
        points: 20,
        type: "normal",
        image:
          "https://www.hiddenholland.com/wp-content/uploads/amsterdam-market-albert-cuyp.jpg",
      },
      {
        challenge: "Find a famous monument",
        description: "Locate and photograph a well-known monument in the city",
        points: 30,
        type: "normal",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/oldimages/bf7bfcfede1c35c26a869945094ae3441434370213.jpg",
      },
      {
        challenge: "Spot a traditional dance performance",
        description:
          "Watch and document a traditional dance in its country of origin",
        points: 35,
        type: "normal",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dutch_Folklore_Dance_Group_in_Holambra%2C_Brazil.jpg/1200px-Dutch_Folklore_Dance_Group_in_Holambra%2C_Brazil.jpg",
      },
    ],
    [
      {
        challenge: "Capture a sunrise over the ocean",
        description: "Photograph a beautiful sunrise at the beach",
        points: 40,
        type: "normal",
        image:
          "https://t4.ftcdn.net/jpg/00/70/14/07/360_F_70140703_2f8N0lwAp67VimEab9ogx3FjvguA8Ef1.jpg",
      },
      {
        challenge: "Photograph a local street artist",
        description: "Find and take a picture of a street artist at work",
        points: 15,
        type: "normal",
        image:
          "https://tucsonartsbrigade.org/wp-content/uploads/graffiti-artist-painting.jpg",
      },
      {
        challenge: "Find a historic castle",
        description: "Visit and photograph a historic castle",
        points: 50,
        type: "normal",
        image:
          "https://annetravelfoodie.com/wp-content/uploads/2020/09/muiderslot-castle-netherlands.jpg",
      },
      {
        challenge: "Try a traditional dish",
        description: "Taste and review a traditional dish from the region",
        points: 25,
        type: "normal",
        image:
          "https://traveladdicts.net/wp-content/uploads/2016/02/Bitterballen-beer-snack-Dutch-food.jpg",
      },
      {
        challenge: "Locate a famous statue",
        description: "Find and take a picture of a renowned statue",
        points: 30,
        type: "normal",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0a/32/90/johnny-jordaanplein.jpg?w=500&h=500&s=1",
      },
    ],
    [
      {
        challenge: "Spot a rare animal in the wild",
        description:
          "Photograph a rare or exotic animal in its natural habitat",
        points: 60,
        type: "normal",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/wildlife-in-the-netherlands.png",
      },
      {
        challenge: "Find a street with colorful houses",
        description:
          "Locate a street known for its colorful houses and capture its beauty",
        points: 20,
        type: "normal",
        image:
          "https://www.shutterstock.com/image-photo/houses-amsterdam-600nw-731110921.jpg",
      },
      {
        challenge: "Attend a local festival",
        description: "Join in on a local festival and document your experience",
        points: 50,
        type: "normal",
        image:
          "https://www.spendlifetraveling.com/wp-content/uploads/2016/12/amsterdam_events_gay_pride.jpg",
      },
      {
        challenge: "Take a photo of a lighthouse",
        description: "Find and capture the grandeur of a lighthouse",
        points: 25,
        type: "normal",
        image: "https://live.staticflickr.com/8199/8242635034_076174c1be_b.jpg",
      },
      {
        challenge: "Spot a famous bridge",
        description: "Locate and photograph a world-famous bridge",
        points: 30,
        type: "normal",
        image:
          "https://images.squarespace-cdn.com/content/569e766e69492e9dd5373ef6/1553525738625-IG5QYJ8WHIVWZMDWN1H7/amsterdam-photo-tour-009.jpg?format=1500w&content-type=image%2Fjpeg",
      },
    ],
    [
      {
        challenge: "Discover a hidden gem",
        description:
          "Find a lesser-known but stunning location and document it",
        points: 35,
        type: "normal",
        image:
          "https://bymountainpeople.com/wp-content/uploads/2023/06/Discover-the-Hidden-Gem-of-Nepal-The-Shey-Phoksundo-Lake-Trek-By-Mountain-People.webp",
      },
      {
        challenge: "Capture a mountain peak",
        description: "Photograph the summit of a prominent mountain",
        points: 40,
        type: "normal",
        image:
          "https://www.ephotozine.com/resize/articles/15270/P9080276.jpg?RTUdGk5cXyJFCgsJVANtdxU+cVRdHxFYFw1Gewk0T1JYFEtzen5YdgthHHsvEVxR",
      },
      {
        challenge: "Visit a botanical garden",
        description:
          "Explore and take photos of a botanical garden's diverse flora",
        points: 20,
        type: "normal",
        image:
          "https://assets.cntraveller.in/photos/64199ada59df46f87e0a53ca/16:9/w_1024%2Cc_limit/GettyImages-470648565.jpg",
      },
      {
        challenge: "Find a local wildlife sanctuary",
        description:
          "Visit a wildlife sanctuary and capture the animals in their natural environment",
        points: 45,
        type: "normal",
        image:
          "https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/Wildlife-Sanctuaries-In-India.jpg",
      },
      {
        challenge: "Discover a natural hot spring",
        description: "Find and photograph a natural hot spring",
        points: 40,
        type: "normal",
        image:
          "https://media.cntraveler.com/photos/5eb420d241269ff2d4f2ea8b/master/pass/Pamukkale-Denizli-Turkey-GettyImages-539479634.jpg",
      },
    ],
  ],
  runs: {
    "summer-edition": {
      name: "Summer Edition",
      date: "Aug 24",
      teams: [
        {
          team: "Team One",
          challenges: [
            { name: "Discover a natural hot spring", date: "Aug 24" },
            { name: "Spot a wooden shoe", date: "Aug 24" },
            { name: "Try a traditional dish", date: "Aug 24" },
          ],
        },
        {
          team: "Team Two",
          challenges: [
            { name: "Capture a sunrise over the ocean", date: "Aug 24" },
            { name: "Find a famous monument", date: "Aug 24" },
            { name: "Locate a famous statue", date: "Aug 24" },
          ],
        },
        {
          team: "Team Three",
          challenges: [
            { name: "Spot a windmill", date: "Aug 24" },
            { name: "Take pic with Van Gogh", date: "Aug 24" },
            { name: "Capture a sunrise over the ocean", date: "Aug 24" },
            { name: "Spot a rare animal in the wild", date: "Aug 24" },
            { name: "Discover a hidden gem", date: "Aug 24" },
          ],
        },
      ],
    },
    "winter-edition": {
      name: "Winter Edition",
      date: "Feb 12",
      teams: [
        {
          team: "Team One",
          challenges: [
            { name: "Discover a natural hot spring", date: "Feb 12" },
            { name: "Spot a wooden shoe", date: "Feb 12" },
            { name: "Try a traditional dish", date: "Feb 12" },
          ],
        },
        {
          team: "Team Two",
          challenges: [
            { name: "Locate a famous statue", date: "Aug 24" },
            { name: "Spot a windmill", date: "Aug 24" },
            { name: "Take pic with Van Gogh", date: "Aug 24" },
            { name: "Capture a sunrise over the ocean", date: "Aug 24" },
          ],
        },
        {
          team: "Team Three",
          challenges: [
            { name: "Spot a rare animal in the wild", date: "Aug 24" },
            { name: "Discover a hidden gem", date: "Aug 24" },
            { name: "Capture a sunrise over the ocean", date: "Aug 24" },
            { name: "Find a famous monument", date: "Aug 24" },
          ],
        },
      ],
    },
  },
} as TravelBingoGameData;
