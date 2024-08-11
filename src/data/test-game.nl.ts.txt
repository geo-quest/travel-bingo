import { TravelBingoGameData } from "./interfaces";

export default {
  title: "Reisbingo Nederland",
  icon: "FlagTwoTone",
  color: "#1890ff",
  backgroundColor: "#e6f7ff",
  shortDescription: "Een bingokaart voor een roadtrip door Nederland",
  gamePlay:
    "\n- De eerste persoon die een rij, kolom of diagonaal heeft, wint\n\n",
  challenges: [
    [
      {
        challenge: "Zoek een windmolen",
        description: "Zoek een windmolen in Nederland",
        points: 25,
        type: "normaal",
        image:
          "https://travelwithbender.com/files/4014/3664/1436/zaanse_schans_IMG_4125-2.jpg",
      },
      {
        challenge: "Ontdek een tulpenveld",
        description: "Zoek een tulpenveld in Nederland",
        points: 10,
        type: "normaal",
        image:
          "https://dutchwannabe.com/wp-content/uploads/2017/06/tulip-fields-netherlands.jpg",
      },
      {
        challenge: "Zoek een fiets",
        description: "Zoek een fiets in Nederland",
        points: 5,
        type: "normaal",
        image:
          "https://photography.bicyclingaroundtheworld.nl/wp-content/uploads/2019/10/amtsterdam-netherlands-bicycle-culture.jpg",
      },
      {
        challenge: "Zoek een kanaal",
        description: "Zoek een kanaal in Nederland",
        image:
          "https://canalsofamsterdam.com/wp-content/uploads/2022/07/Canals-of-Amsterdam-scaled.jpg",
        points: 5,
        type: "normaal",
      },
      {
        challenge: "Ontdek een kaaswinkel",
        description: "Zoek een winkel die kaas verkoopt in Nederland",
        points: 20,
        type: "normaal",
        image:
          "https://images.squarespace-cdn.com/content/v1/5e386e245ec08c1b8eaa7c94/4dd6cf47-72c4-431a-bb96-9884507bf931/Cheese+Shop.jpg",
      },
    ],
    [
      {
        challenge: "Ga op de foto met Van Gogh",
        description: "Ga op de foto met een schilderij van Van Gogh",
        points: 50,
        type: "normaal",
        image:
          "https://assets.vangoghmuseum.nl/f0a809b3-6a77-406f-b398-350f74b9dea1?w=400&c=b65b3ac8477509fef0fb5cf71c1235e2316f27596c3bf2365469ce4303896b0a",
      },
      {
        challenge: "Zoek een klomp",
        description: "Vind een klomp in Nederland",
        points: 10,
        type: "normaal",
        image:
          "https://www.learndutch.org/wp-content/uploads/2019/02/86-What-about-the-woorden-shoes-.jpg",
      },
      {
        challenge: "Maak een foto van een lokale markt",
        description: "Bezoek een lokale markt en proef de bruisende sfeer",
        points: 20,
        type: "normaal",
        image:
          "https://www.hiddenholland.com/wp-content/uploads/amsterdam-market-albert-cuyp.jpg",
      },
      {
        challenge: "Zoek een beroemd monument",
        description: "Zoek en fotografeer een bekend monument in de stad",
        points: 30,
        type: "normaal",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/oldimages/bf7bfcfede1c35c26a869945094ae3441434370213.jpg",
      },
      {
        challenge: "Ontdek een traditionele dansvoorstelling",
        description:
          "Bekijk en documenteer een traditionele dans in het land van herkomst",
        points: 35,
        type: "normaal",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dutch_Folklore_Dance_Group_in_Holambra%2C_Brazil.jpg/1200px-Dutch_Folklore_Dance_Group_in_Holambra%2C_Brazil.jpg",
      },
    ],
    [
      {
        challenge: "Leg een zonsopgang boven de oceaan vast",
        description: "Fotografeer een prachtige zonsopgang op het strand",
        points: 40,
        type: "normaal",
        image:
          "https://t4.ftcdn.net/jpg/00/70/14/07/360_F_70140703_2f8N0lwAp67VimEab9ogx3FjvguA8Ef1.jpg",
      },
      {
        challenge: "Fotografeer een lokale straatkunstenaar",
        description:
          "Zoek en maak een foto van een straatkunstenaar aan het werk",
        points: 15,
        type: "normaal",
        image:
          "https://tucsonartsbrigade.org/wp-content/uploads/graffiti-artist-painting.jpg",
      },
      {
        challenge: "Zoek een historisch kasteel",
        description: "Bezoek en fotografeer een historisch kasteel",
        points: 50,
        type: "normaal",
        image:
          "https://annetravelfoodie.com/wp-content/uploads/2020/09/muiderslot-castle-netherlands.jpg",
      },
      {
        challenge: "Probeer een traditioneel gerecht",
        description: "Proef en beoordeel een traditioneel gerecht uit de regio",
        points: 25,
        type: "normaal",
        image:
          "https://traveladdicts.net/wp-content/uploads/2016/02/Bitterballen-beer-snack-Dutch-food.jpg",
      },
      {
        challenge: "Zoek een beroemd standbeeld",
        description: "Zoek en maak een foto van een beroemd standbeeld",
        points: 30,
        type: "normaal",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0a/32/90/johnny-jordaanplein.jpg?w=500&h=500&s=1",
      },
    ],
    [
      {
        challenge: "Ontdek een zeldzaam dier in het wild",
        description:
          "Fotografeer een zeldzaam of exotisch dier in zijn natuurlijke habitat",
        points: 60,
        type: "normaal",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/wildlife-in-the-netherlands.png",
      },
      {
        challenge: "Zoek een straat met kleurrijke huizen",
        description:
          "Zoek een straat die bekend staat om zijn kleurrijke huizen en leg de schoonheid ervan vast",
        points: 20,
        type: "normaal",
        image:
          "https://www.shutterstock.com/image-photo/houses-amsterdam-600nw-731110921.jpg",
      },
      {
        challenge: "Woon een plaatselijk festival bij",
        description:
          "Neem deel aan een lokaal festival en documenteer je ervaring",
        points: 50,
        type: "normaal",
        image:
          "https://www.spendlifetraveling.com/wp-content/uploads/2016/12/amsterdam_events_gay_pride.jpg",
      },
      {
        challenge: "Maak een foto van een vuurtoren",
        description: "Vind en leg de grootsheid van een vuurtoren vast",
        points: 25,
        type: "normaal",
        image: "https://live.staticflickr.com/8199/8242635034_076174c1be_b.jpg",
      },
      {
        challenge: "Ontdek een beroemde brug",
        description: "Lokaliseer en fotografeer een wereldberoemde brug",
        points: 30,
        type: "normaal",
        image:
          "https://images.squarespace-cdn.com/content/569e766e69492e9dd5373ef6/1553525738625-IG5QYJ8WHIVWZMDWN1H7/amsterdam-photo-tour-009.jpg?format=1500w&content-type=image%2Fjpeg",
      },
    ],
    [
      {
        challenge: "Ontdek een verborgen juweeltje",
        description:
          "Zoek een minder bekende maar prachtige locatie en documenteer deze",
        points: 35,
        type: "normaal",
        image:
          "https://bymountainpeople.com/wp-content/uploads/2023/06/Discover-the-Hidden-Gem-of-Nepal-The-Shey-Phoksundo-Lake-Trek-By-Mountain-People.webp",
      },
      {
        challenge: "Leg een bergtop vast",
        description: "Fotografeer de top van een prominente berg",
        points: 40,
        type: "normaal",
        image:
          "https://www.ephotozine.com/resize/articles/15270/P9080276.jpg?RTUdGk5cXyJFCgsJVANtdxU+cVRdHxFYFw1Gewk0T1JYFEtzen5YdgthHHsvEVxR",
      },
      {
        challenge: "Bezoek een botanische tuin",
        description:
          "Verken en maak foto's van de gevarieerde flora van een botanische tuin",
        points: 20,
        type: "normaal",
        image:
          "https://assets.cntraveller.in/photos/64199ada59df46f87e0a53ca/16:9/w_1024%2Cc_limit/GettyImages-470648565.jpg",
      },
      {
        challenge: "Zoek een plaatselijk natuurreservaat",
        description:
          "Bezoek een natuurreservaat en leg de dieren vast in hun natuurlijke omgeving",
        points: 45,
        type: "normaal",
        image:
          "https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/Wildlife-Sanctuaries-In-India.jpg",
      },
      {
        challenge: "Ontdek een natuurlijke warmwaterbron",
        description: "Zoek en fotografeer een natuurlijke warmwaterbron",
        points: 40,
        type: "normaal",
        image:
          "https://media.cntraveler.com/photos/5eb420d241269ff2d4f2ea8b/master/pass/Pamukkale-Denizli-Turkey-GettyImages-539479634.jpg",
      },
    ],
  ],
  runs: {
    "summer-edition": {
      name: "Zomer editie",
      date: "2024-08-24T12:00:00",
      lastUpdate: "2024-08-24T12:00:00",
      teams: {
        "team-a": {
          name: "Team A",
          challenges: [
            {
              name: "Ontdek een natuurlijke warmwaterbron",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-3.gif",
            },
            {
              name: "Zoek een klomp",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "Probeer een traditioneel gerecht",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-1.gif",
            },
          ],
        },
        "team-b": {
          name: "Team B",
          challenges: [
            {
              name: "Leg een zonsopgang boven de oceaan vast",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-5.gif",
            },
            {
              name: "Zoek een beroemd monument",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-4.gif",
            },
            {
              name: "Zoek een beroemd standbeeld",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-3.gif",
            },
          ],
        },
        "team-c": {
          name: "Team C",
          challenges: [
            {
              name: "Zoek een windmolen",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "Ga op de foto met Van Gogh",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-1.gif",
            },
            {
              name: "Leg een zonsopgang boven de oceaan vast",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-5.gif",
            },
            {
              name: "Ontdek een zeldzaam dier in het wild",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-4.gif",
            },
            {
              name: "Ontdek een verborgen juweeltje",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-3.gif",
            },
          ],
        },
        "team-d": {
          name: "Team D",
          challenges: [
            {
              name: "Zoek een windmolen",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "Ga op de foto met Van Gogh",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-1.gif",
            },
            {
              name: "Ontdek een zeldzaam dier in het wild",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-5.gif",
            },
            {
              name: "Ontdek een verborgen juweeltje",
              date: "2024-08-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-4.gif",
            },
          ],
        },
      },
    },
    "winter-edition": {
      name: "Wintereditie",
      date: "2024-02-24T12:00:00",
      lastUpdate: "2024-02-24T12:00:00",
      teams: {
        "team-a": {
          name: "Team A",
          challenges: [
            {
              name: "Ontdek een natuurlijke warmwaterbron",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-3.gif",
            },
            {
              name: "Zoek een klomp",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "Probeer een traditioneel gerecht",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-1.gif",
            },
          ],
        },
        "team-b": {
          name: "Team B",
          challenges: [
            {
              name: "Zoek een beroemd standbeeld",
              date: "2024-02-24T12:00:00",
              comment: "Opgelost!!!",
            },
            {
              name: "Zoek een windmolen",
              date: "2024-02-24T12:00:00",
              comment: "Opgelost!!!",
            },
            {
              name: "Ga op de foto met Van Gogh",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-5.gif",
            },
            {
              name: "Leg een zonsopgang boven de oceaan vast",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-4.gif",
            },
          ],
        },
        "team-c": {
          name: "Team C",
          challenges: [
            {
              name: "Ontdek een zeldzaam dier in het wild",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-3.gif",
            },
            {
              name: "Ontdek een verborgen juweeltje",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "Leg een zonsopgang boven de oceaan vast",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-1.gif",
            },
            {
              name: "Zoek een beroemd monument",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-5.gif",
            },
          ],
        },
        "team-d": {
          name: "Team D",
          challenges: [
            {
              name: "Ontdek een zeldzaam dier in het wild",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-4.gif",
            },
          ],
        },
        "team-e": {
          name: "Team E",
          challenges: [
            {
              name: "Ontdek een zeldzaam dier in het wild",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-3.gif",
            },
            {
              name: "Leg een zonsopgang boven de oceaan vast",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "Zoek een beroemd monument",
              date: "2024-02-24T12:00:00",
              comment: "_Geweldig gedaan_!!!",
              image: "/images/clapping-1.gif",
            },
          ],
        },
      },
    },
  },
} as TravelBingoGameData;
