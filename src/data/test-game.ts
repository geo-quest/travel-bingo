import { TravelBingoGameData } from "./interfaces";

export default {
  title: {
    en: "Travel Bingo Netherlands",
    pt: "Bingo de viagens na Holanda",
    nl: "Reisbingo Nederland",
  },
  icon: "FlagTwoTone",
  color: "#1890ff",
  backgroundColor: "#e6f7ff",
  shortDescription: {
    en: "A bingo card for a road trip through the Netherlands",
    pt: "Um cartão de bingo para uma viagem pela Holanda",
    nl: "Een bingokaart voor een roadtrip door Nederland",
  },
  gamePlay: {
    en: `
- The first person to get a row, column, or diagonal wins
- The winner must shout 'Bingo!'
- The winner must show their card to the other players to verify the win
`,
    pt: `
- A primeira pessoa a obter uma linha, coluna ou diagonal vence"
- O vencedor deve gritar 'Bingo!'
- O vencedor deve mostrar seu cartão aos outros jogadores para verificar a vitória
`,
    nl: `
- De eerste persoon die een rij, kolom of diagonaal krijgt, wint
- De winnaar moet 'Bingo!' roepen
- De winnaar moet zijn kaart aan de andere spelers laten zien om de winst te verifiëren`,
  },
  challenges: [
    [
      {
        key: "Spot a windmill",
        challenge: {
          en: "Spot a windmill",
          pt: "Descubra um moinho de vento",
          nl: "Zoek een windmolen",
        },
        description: {
          en: "Find a windmill in the Netherlands",
          pt: "Encontre um moinho de vento na Holanda",
          nl: "Zoek een windmolen in Nederland",
        },
        points: 25,
        type: "normal",
        image:
          "https://travelwithbender.com/files/4014/3664/1436/zaanse_schans_IMG_4125-2.jpg",
      },
      {
        key: "Spot a tulip field",
        challenge: {
          en: "Spot a tulip field",
          pt: "Descubra um campo de tulipas",
          nl: "Ontdek een tulpenveld",
        },
        description: {
          en: "Find a field of tulips in the Netherlands",
          pt: "Encontre um campo de tulipas na Holanda",
          nl: "Zoek een tulpenveld in Nederland",
        },
        points: 10,
        type: "normal",
        image:
          "https://dutchwannabe.com/wp-content/uploads/2017/06/tulip-fields-netherlands.jpg",
      },
      {
        key: "Spot a bike",
        challenge: {
          en: "Spot a bike",
          pt: "Localize uma bicicleta",
          nl: "Zoek een fiets",
        },
        description: {
          en: "Find a bike in the Netherlands",
          pt: "Encontre uma bicicleta na Holanda",
          nl: "Zoek een fiets in Nederland",
        },
        points: 5,
        type: "normal",
        image:
          "https://photography.bicyclingaroundtheworld.nl/wp-content/uploads/2019/10/amtsterdam-netherlands-bicycle-culture.jpg",
      },
      {
        key: "Spot a canal",
        challenge: {
          en: "Spot a canal",
          pt: "Descubra um canal",
          nl: "Zoek een kanaal",
        },
        description: {
          en: "Find a canal in the Netherlands",
          pt: "Encontre um canal na Holanda",
          nl: "Zoek een kanaal in Nederland",
        },
        image:
          "https://canalsofamsterdam.com/wp-content/uploads/2022/07/Canals-of-Amsterdam-scaled.jpg",
        points: 5,
        type: "normal",
      },
      {
        key: "Spot a cheese shop",
        challenge: {
          en: "Spot a cheese shop",
          pt: "Encontre uma loja de queijos",
          nl: "Ontdek een kaaswinkel",
        },
        description: {
          en: "Find a shop that sells cheese in the Netherlands",
          pt: "Encontre uma loja que venda queijo na Holanda",
          nl: "Zoek een winkel die kaas verkoopt in Nederland",
        },
        points: 20,
        type: "normal",
        image:
          "https://images.squarespace-cdn.com/content/v1/5e386e245ec08c1b8eaa7c94/4dd6cf47-72c4-431a-bb96-9884507bf931/Cheese+Shop.jpg",
      },
    ],
    [
      {
        key: "Take pic with Van Gogh",
        challenge: {
          en: "Take pic with Van Gogh",
          pt: "Tire uma foto com Van Gogh",
          nl: "Ga op de foto met Van Gogh",
        },
        description: {
          en: "Take a picture with a Van Gogh painting",
          pt: "Tire uma foto com uma pintura de Van Gogh",
          nl: "Ga op de foto met een schilderij van Van Gogh",
        },
        points: 50,
        type: "normal",
        image:
          "https://assets.vangoghmuseum.nl/f0a809b3-6a77-406f-b398-350f74b9dea1?w=400&c=b65b3ac8477509fef0fb5cf71c1235e2316f27596c3bf2365469ce4303896b0a",
      },
      {
        key: "Spot a wooden shoe",
        challenge: {
          en: "Spot a wooden shoe",
          pt: "Identifique um sapato de madeira",
          nl: "Zoek een klomp",
        },
        description: {
          en: "Find a wooden shoe in the Netherlands",
          pt: "Encontre um sapato de madeira na Holanda",
          nl: "Vind een klomp in Nederland",
        },
        points: 10,
        type: "normal",
        image:
          "https://www.learndutch.org/wp-content/uploads/2019/02/86-What-about-the-woorden-shoes-.jpg",
      },
      {
        key: "Take a photo of a local market",
        challenge: {
          en: "Take a photo of a local market",
          pt: "Tire uma foto de um mercado local",
          nl: "Maak een foto van een lokale markt",
        },
        description: {
          en: "Visit a local market and capture the bustling atmosphere",
          pt: "Visite um mercado local e capture a atmosfera movimentada",
          nl: "Bezoek een lokale markt en proef de bruisende sfeer",
        },
        points: 20,
        type: "normal",
        image:
          "https://www.hiddenholland.com/wp-content/uploads/amsterdam-market-albert-cuyp.jpg",
      },
      {
        key: "Find a famous monument",
        challenge: {
          en: "Find a famous monument",
          pt: "Encontre um monumento famoso",
          nl: "Zoek een beroemd monument",
        },
        description: {
          en: "Locate and photograph a well-known monument in the city",
          pt: "Localize e fotografe um monumento conhecido na cidade",
          nl: "Zoek en fotografeer een bekend monument in de stad",
        },
        points: 30,
        type: "normal",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/oldimages/bf7bfcfede1c35c26a869945094ae3441434370213.jpg",
      },
      {
        key: "Spot a traditional dance performance",
        challenge: {
          en: "Spot a traditional dance performance",
          pt: "Assista a uma apresentação de dança tradicional",
          nl: "Ontdek een traditionele dansvoorstelling",
        },
        description: {
          en: "Watch and document a traditional dance in its country of origin",
          pt: "Assista e documente uma dança tradicional em seu país de origem",
          nl: "Bekijk en documenteer een traditionele dans in het land van herkomst",
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
        challenge: {
          en: "Capture a sunrise over the ocean",
          pt: "Capture um nascer do sol sobre o oceano",
          nl: "Leg een zonsopgang boven de oceaan vast",
        },
        description: {
          en: "Photograph a beautiful sunrise at the beach",
          pt: "Fotografe um lindo nascer do sol na praia",
          nl: "Fotografeer een prachtige zonsopgang op het strand",
        },
        points: 40,
        type: "normal",
        image:
          "https://t4.ftcdn.net/jpg/00/70/14/07/360_F_70140703_2f8N0lwAp67VimEab9ogx3FjvguA8Ef1.jpg",
      },
      {
        key: "Photograph a local street artist",
        challenge: {
          en: "Photograph a local street artist",
          pt: "Fotografe um artista de rua local",
          nl: "Fotografeer een lokale straatkunstenaar",
        },
        description: {
          en: "Find and take a picture of a street artist at work",
          pt: "Encontre e tire uma foto de um artista de rua trabalhando",
          nl: "Zoek en maak een foto van een straatkunstenaar aan het werk",
        },
        points: 15,
        type: "normal",
        image:
          "https://tucsonartsbrigade.org/wp-content/uploads/graffiti-artist-painting.jpg",
      },
      {
        key: "Find a historic castle",
        challenge: {
          en: "Find a historic castle",
          pt: "Encontre um castelo histórico",
          nl: "Zoek een historisch kasteel",
        },
        description: {
          en: "Visit and photograph a historic castle",
          pt: "Visite e fotografe um castelo histórico",
          nl: "Bezoek en fotografeer een historisch kasteel",
        },
        points: 50,
        type: "normal",
        image:
          "https://annetravelfoodie.com/wp-content/uploads/2020/09/muiderslot-castle-netherlands.jpg",
      },
      {
        key: "Try a traditional dish",
        challenge: {
          en: "Try a traditional dish",
          pt: "Experimente um prato tradicional",
          nl: "Probeer een traditioneel gerecht",
        },
        description: {
          en: "Taste and review a traditional dish from the region",
          pt: "Prove e avalie um prato tradicional da região",
          nl: "Proef en beoordeel een traditioneel gerecht uit de regio",
        },
        points: 25,
        type: "normal",
        image:
          "https://traveladdicts.net/wp-content/uploads/2016/02/Bitterballen-beer-snack-Dutch-food.jpg",
      },
      {
        key: "Locate a famous statue",
        challenge: {
          en: "Locate a famous statue",
          pt: "Localize uma estátua famosa",
          nl: "Zoek een beroemd standbeeld",
        },
        description: {
          en: "Find and take a picture of a renowned statue",
          pt: "Encontre e tire uma foto de uma estátua famosa",
          nl: "Zoek en maak een foto van een beroemd standbeeld",
        },
        points: 30,
        type: "normal",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0a/32/90/johnny-jordaanplein.jpg?w=500&h=500&s=1",
      },
    ],
    [
      {
        key: "Spot a rare animal in the wild",
        challenge: {
          en: "Spot a rare animal in the wild",
          pt: "Descubra um animal raro na natureza",
          nl: "Ontdek een zeldzaam dier in het wild",
        },
        description: {
          en: "Photograph a rare or exotic animal in its natural habitat",
          pt: "Fotografe um animal raro ou exótico em seu habitat natural",
          nl: "Fotografeer een zeldzaam of exotisch dier in zijn natuurlijke habitat",
        },
        points: 60,
        type: "normal",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/wildlife-in-the-netherlands.png",
      },
      {
        key: "Find a street with colorful houses",
        challenge: {
          en: "Find a street with colorful houses",
          pt: "Encontre uma rua com casas coloridas",
          nl: "Zoek een straat met kleurrijke huizen",
        },
        description: {
          en: "Locate a street known for its colorful houses and capture its beauty",
          pt: "Localize uma rua conhecida por suas casas coloridas e capture sua beleza",
          nl: "Zoek een straat die bekend staat om zijn kleurrijke huizen en leg de schoonheid ervan vast",
        },
        points: 20,
        type: "normal",
        image:
          "https://www.shutterstock.com/image-photo/houses-amsterdam-600nw-731110921.jpg",
      },
      {
        key: "Attend a local festival",
        challenge: {
          en: "Attend a local festival",
          pt: "Participe de um festival local",
          nl: "Woon een plaatselijk festival bij",
        },
        description: {
          en: "Join in on a local festival and document your experience",
          pt: "Participe de um festival local e documente sua experiência",
          nl: "Neem deel aan een lokaal festival en documenteer je ervaring",
        },
        points: 50,
        type: "normal",
        image:
          "https://www.spendlifetraveling.com/wp-content/uploads/2016/12/amsterdam_events_gay_pride.jpg",
      },
      {
        key: "Take a photo of a lighthouse",
        challenge: {
          en: "Take a photo of a lighthouse",
          pt: "Tire uma foto de um farol",
          nl: "Maak een foto van een vuurtoren",
        },
        description: {
          en: "Find and capture the grandeur of a lighthouse",
          pt: "Encontre e capture a grandiosidade de um farol",
          nl: "Vind en leg de grootsheid van een vuurtoren vast",
        },
        points: 25,
        type: "normal",
        image: "https://live.staticflickr.com/8199/8242635034_076174c1be_b.jpg",
      },
      {
        key: "Spot a famous bridge",
        challenge: {
          en: "Spot a famous bridge",
          pt: "Descubra uma ponte famosa",
          nl: "Ontdek een beroemde brug",
        },
        description: {
          en: "Locate and photograph a world-famous bridge",
          pt: "Localize e fotografe uma ponte mundialmente famosa",
          nl: "Lokaliseer en fotografeer een wereldberoemde brug",
        },
        points: 30,
        type: "normal",
        image:
          "https://images.squarespace-cdn.com/content/569e766e69492e9dd5373ef6/1553525738625-IG5QYJ8WHIVWZMDWN1H7/amsterdam-photo-tour-009.jpg?format=1500w&content-type=image%2Fjpeg",
      },
    ],
    [
      {
        key: "Discover a hidden gem",
        challenge: {
          en: "Discover a hidden gem",
          pt: "Descubra uma joia escondida",
          nl: "Ontdek een verborgen juweeltje",
        },
        description: {
          en: "Find a lesser-known but stunning location and document it",
          pt: "Encontre um local menos conhecido, mas impressionante, e documente-o",
          nl: "Zoek een minder bekende maar prachtige locatie en documenteer deze",
        },
        points: 35,
        type: "normal",
        image:
          "https://bymountainpeople.com/wp-content/uploads/2023/06/Discover-the-Hidden-Gem-of-Nepal-The-Shey-Phoksundo-Lake-Trek-By-Mountain-People.webp",
      },
      {
        key: "Capture a mountain peak",
        challenge: {
          en: "Capture a mountain peak",
          pt: "Capture o pico de uma montanha",
          nl: "Leg een bergtop vast",
        },
        description: {
          en: "Photograph the summit of a prominent mountain",
          pt: "Fotografe o cume de uma montanha proeminente",
          nl: "Fotografeer de top van een prominente berg",
        },
        points: 40,
        type: "normal",
        image:
          "https://www.ephotozine.com/resize/articles/15270/P9080276.jpg?RTUdGk5cXyJFCgsJVANtdxU+cVRdHxFYFw1Gewk0T1JYFEtzen5YdgthHHsvEVxR",
      },
      {
        key: "Visit a botanical garden",
        challenge: {
          en: "Visit a botanical garden",
          pt: "Visite um jardim botânico",
          nl: "Bezoek een botanische tuin",
        },
        description: {
          en: "Explore and take photos of a botanical garden's diverse flora",
          pt: "Explore e tire fotos da flora diversificada de um jardim botânico",
          nl: "Verken en maak foto's van de gevarieerde flora van een botanische tuin",
        },
        points: 20,
        type: "normal",
        image:
          "https://assets.cntraveller.in/photos/64199ada59df46f87e0a53ca/16:9/w_1024%2Cc_limit/GettyImages-470648565.jpg",
      },
      {
        key: "Find a local wildlife sanctuary",
        challenge: {
          en: "Find a local wildlife sanctuary",
          pt: "Encontre um santuário de vida selvagem local",
          nl: "Zoek een plaatselijk natuurreservaat",
        },
        description: {
          en: "Visit a wildlife sanctuary and capture the animals in their natural environment",
          pt: "Visite um santuário de vida selvagem e capture os animais em seu ambiente natural",
          nl: "Bezoek een natuurreservaat en leg de dieren vast in hun natuurlijke omgeving",
        },
        points: 45,
        type: "normal",
        image:
          "https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/Wildlife-Sanctuaries-In-India.jpg",
      },
      {
        key: "Discover a natural hot spring",
        challenge: {
          en: "Discover a natural hot spring",
          pt: "Descubra uma fonte termal natural",
          nl: "Ontdek een natuurlijke warmwaterbron",
        },
        description: {
          en: "Find and photograph a natural hot spring",
          pt: "Encontre e fotografe uma fonte termal natural",
          nl: "Zoek en fotografeer een natuurlijke warmwaterbron",
        },
        points: 40,
        type: "normal",
        image:
          "https://media.cntraveler.com/photos/5eb420d241269ff2d4f2ea8b/master/pass/Pamukkale-Denizli-Turkey-GettyImages-539479634.jpg",
      },
    ],
  ],
  runs: {
    "summer-edition": {
      name: { en: "Summer Edition", pt: "Edição de verão", nl: "Zomer editie" },
      date: "2024-08-24T12:00:00",
      lastUpdate: "2024-08-24T12:00:00",
      teams: {
        "team-a": {
          name: { en: "Team A", pt: "Equipe A", nl: "Team A" },
          challenges: [
            {
              key: "Discover a natural hot spring",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-3.gif",
            },
            {
              key: "Spot a wooden shoe",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-2.gif",
            },
            {
              key: "Try a traditional dish",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-1.gif",
            },
          ],
        },
        "team-b": {
          name: { en: "Team B", pt: "Equibe B", nl: "Team B" },
          challenges: [
            {
              key: "Capture a sunrise over the ocean",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-5.gif",
            },
            {
              key: "Find a famous monument",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-4.gif",
            },
            {
              key: "Locate a famous statue",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-3.gif",
            },
          ],
        },
        "team-c": {
          name: { en: "Team C", pt: "Equibe C", nl: "Team C" },
          challenges: [
            {
              key: "Spot a windmill",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-2.gif",
            },
            {
              key: "Take pic with Van Gogh",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-1.gif",
            },
            {
              key: "Capture a sunrise over the ocean",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-5.gif",
            },
            {
              key: "Spot a rare animal in the wild",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-4.gif",
            },
            {
              key: "Discover a hidden gem",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-3.gif",
            },
          ],
        },
        "team-d": {
          name: { en: "Team D", pt: "Equibe D", nl: "Team D" },
          challenges: [
            {
              key: "Spot a windmill",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-2.gif",
            },
            {
              key: "Take pic with Van Gogh",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-1.gif",
            },
            {
              key: "Spot a rare animal in the wild",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-5.gif",
            },
            {
              key: "Discover a hidden gem",
              date: "2024-08-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-4.gif",
            },
          ],
        },
      },
    },
    "winter-edition": {
      name: {
        en: "Winter Edition",
        pt: "Edição de inverno",
        nl: "Wintereditie",
      },
      date: "2024-02-24T12:00:00",
      lastUpdate: "2024-02-24T12:00:00",
      teams: {
        "team-a": {
          name: { en: "Team A", pt: "Equibe A", nl: "Team A" },
          challenges: [
            {
              key: "Discover a natural hot spring",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-3.gif",
            },
            {
              key: "Spot a wooden shoe",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-2.gif",
            },
            {
              key: "Try a traditional dish",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-1.gif",
            },
          ],
        },
        "team-b": {
          name: { en: "Team B", pt: "Equibe B", nl: "Team B" },
          challenges: [
            {
              key: "Locate a famous statue",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
            },
            {
              key: "Spot a windmill",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
            },
            {
              key: "Take pic with Van Gogh",
              date: "2024-02-24T12:00:00",
              comment: `_Great job_!!!`,
              image: "/images/clapping-5.gif",
            },
            {
              key: "Capture a sunrise over the ocean",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-4.gif",
            },
          ],
        },
        "team-c": {
          name: { en: "Team C", pt: "Equibe C", nl: "Team C" },
          challenges: [
            {
              key: "Spot a rare animal in the wild",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-3.gif",
            },
            {
              key: "Discover a hidden gem",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-2.gif",
            },
            {
              key: "Capture a sunrise over the ocean",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-1.gif",
            },
            {
              key: "Find a famous monument",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-5.gif",
            },
          ],
        },
        "team-d": {
          name: { en: "Team D", pt: "Equibe D", nl: "Team D" },
          challenges: [
            {
              key: "Spot a rare animal in the wild",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-4.gif",
            },
          ],
        },
        "team-e": {
          name: { en: "Team E", pt: "Equibe E", nl: "Team E" },
          challenges: [
            {
              key: "Spot a rare animal in the wild",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-3.gif",
            },
            {
              key: "Capture a sunrise over the ocean",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-2.gif",
            },
            {
              key: "Find a famous monument",
              date: "2024-02-24T12:00:00",
              comment: {
                en: `_Great job_!!!`,
                pt: "_Ótimo trabalho_!!!",
                nl: "_Geweldig gedaan_!!!",
              },
              image: "/images/clapping-1.gif",
            },
          ],
        },
      },
    },
  },
} as TravelBingoGameData;
