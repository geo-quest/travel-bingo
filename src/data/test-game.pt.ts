import { TravelBingoGameData } from "./interfaces";

export default {
  title: "Bingo de viagens na Holanda",
  icon: "FlagTwoTone",
  color: "#1890ff",
  backgroundColor: "#e6f7ff",
  shortDescription: "Um cartão de bingo para uma viagem pela Holanda",
  gamePlay:
    "\n- A primeira pessoa a obter uma linha, coluna ou diagonal vence\n\n",
  challenges: [
    [
      {
        challenge: "Descubra um moinho de vento",
        description: "Encontre um moinho de vento na Holanda",
        points: 25,
        type: "normal",
        image:
          "https://travelwithbender.com/files/4014/3664/1436/zaanse_schans_IMG_4125-2.jpg",
      },
      {
        challenge: "Descubra um campo de tulipas",
        description: "Encontre um campo de tulipas na Holanda",
        points: 10,
        type: "normal",
        image:
          "https://dutchwannabe.com/wp-content/uploads/2017/06/tulip-fields-netherlands.jpg",
      },
      {
        challenge: "Localize uma bicicleta",
        description: "Encontre uma bicicleta na Holanda",
        points: 5,
        type: "normal",
        image:
          "https://photography.bicyclingaroundtheworld.nl/wp-content/uploads/2019/10/amtsterdam-netherlands-bicycle-culture.jpg",
      },
      {
        challenge: "Descubra um canal",
        description: "Encontre um canal na Holanda",
        image:
          "https://canalsofamsterdam.com/wp-content/uploads/2022/07/Canals-of-Amsterdam-scaled.jpg",
        points: 5,
        type: "normal",
      },
      {
        challenge: "Encontre uma loja de queijos",
        description: "Encontre uma loja que venda queijo na Holanda",
        points: 20,
        type: "normal",
        image:
          "https://images.squarespace-cdn.com/content/v1/5e386e245ec08c1b8eaa7c94/4dd6cf47-72c4-431a-bb96-9884507bf931/Cheese+Shop.jpg",
      },
    ],
    [
      {
        challenge: "Tire uma foto com Van Gogh",
        description: "Tire uma foto com uma pintura de Van Gogh",
        points: 50,
        type: "normal",
        image:
          "https://assets.vangoghmuseum.nl/f0a809b3-6a77-406f-b398-350f74b9dea1?w=400&c=b65b3ac8477509fef0fb5cf71c1235e2316f27596c3bf2365469ce4303896b0a",
      },
      {
        challenge: "Identifique um sapato de madeira",
        description: "Encontre um sapato de madeira na Holanda",
        points: 10,
        type: "normal",
        image:
          "https://www.learndutch.org/wp-content/uploads/2019/02/86-What-about-the-woorden-shoes-.jpg",
      },
      {
        challenge: "Tire uma foto de um mercado local",
        description:
          "Visite um mercado local e capture a atmosfera movimentada",
        points: 20,
        type: "normal",
        image:
          "https://www.hiddenholland.com/wp-content/uploads/amsterdam-market-albert-cuyp.jpg",
      },
      {
        challenge: "Encontre um monumento famoso",
        description: "Localize e fotografe um monumento conhecido na cidade",
        points: 30,
        type: "normal",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/oldimages/bf7bfcfede1c35c26a869945094ae3441434370213.jpg",
      },
      {
        challenge: "Assista a uma apresentação de dança tradicional",
        description:
          "Assista e documente uma dança tradicional em seu país de origem",
        points: 35,
        type: "normal",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dutch_Folklore_Dance_Group_in_Holambra%2C_Brazil.jpg/1200px-Dutch_Folklore_Dance_Group_in_Holambra%2C_Brazil.jpg",
      },
    ],
    [
      {
        challenge: "Capture um nascer do sol sobre o oceano",
        description: "Fotografe um lindo nascer do sol na praia",
        points: 40,
        type: "normal",
        image:
          "https://t4.ftcdn.net/jpg/00/70/14/07/360_F_70140703_2f8N0lwAp67VimEab9ogx3FjvguA8Ef1.jpg",
      },
      {
        challenge: "Fotografe um artista de rua local",
        description:
          "Encontre e tire uma foto de um artista de rua trabalhando",
        points: 15,
        type: "normal",
        image:
          "https://tucsonartsbrigade.org/wp-content/uploads/graffiti-artist-painting.jpg",
      },
      {
        challenge: "Encontre um castelo histórico",
        description: "Visite e fotografe um castelo histórico",
        points: 50,
        type: "normal",
        image:
          "https://annetravelfoodie.com/wp-content/uploads/2020/09/muiderslot-castle-netherlands.jpg",
      },
      {
        challenge: "Experimente um prato tradicional",
        description: "Prove e avalie um prato tradicional da região",
        points: 25,
        type: "normal",
        image:
          "https://traveladdicts.net/wp-content/uploads/2016/02/Bitterballen-beer-snack-Dutch-food.jpg",
      },
      {
        challenge: "Localize uma estátua famosa",
        description: "Encontre e tire uma foto de uma estátua famosa",
        points: 30,
        type: "normal",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0a/32/90/johnny-jordaanplein.jpg?w=500&h=500&s=1",
      },
    ],
    [
      {
        challenge: "Descubra um animal raro na natureza",
        description:
          "Fotografe um animal raro ou exótico em seu habitat natural",
        points: 60,
        type: "normal",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/wildlife-in-the-netherlands.png",
      },
      {
        challenge: "Encontre uma rua com casas coloridas",
        description:
          "Localize uma rua conhecida por suas casas coloridas e capture sua beleza",
        points: 20,
        type: "normal",
        image:
          "https://www.shutterstock.com/image-photo/houses-amsterdam-600nw-731110921.jpg",
      },
      {
        challenge: "Participe de um festival local",
        description:
          "Participe de um festival local e documente sua experiência",
        points: 50,
        type: "normal",
        image:
          "https://www.spendlifetraveling.com/wp-content/uploads/2016/12/amsterdam_events_gay_pride.jpg",
      },
      {
        challenge: "Tire uma foto de um farol",
        description: "Encontre e capture a grandiosidade de um farol",
        points: 25,
        type: "normal",
        image: "https://live.staticflickr.com/8199/8242635034_076174c1be_b.jpg",
      },
      {
        challenge: "Descubra uma ponte famosa",
        description: "Localize e fotografe uma ponte mundialmente famosa",
        points: 30,
        type: "normal",
        image:
          "https://images.squarespace-cdn.com/content/569e766e69492e9dd5373ef6/1553525738625-IG5QYJ8WHIVWZMDWN1H7/amsterdam-photo-tour-009.jpg?format=1500w&content-type=image%2Fjpeg",
      },
    ],
    [
      {
        challenge: "Descubra uma joia escondida",
        description:
          "Encontre um local menos conhecido, mas impressionante, e documente-o",
        points: 35,
        type: "normal",
        image:
          "https://bymountainpeople.com/wp-content/uploads/2023/06/Discover-the-Hidden-Gem-of-Nepal-The-Shey-Phoksundo-Lake-Trek-By-Mountain-People.webp",
      },
      {
        challenge: "Capture o pico de uma montanha",
        description: "Fotografe o cume de uma montanha proeminente",
        points: 40,
        type: "normal",
        image:
          "https://www.ephotozine.com/resize/articles/15270/P9080276.jpg?RTUdGk5cXyJFCgsJVANtdxU+cVRdHxFYFw1Gewk0T1JYFEtzen5YdgthHHsvEVxR",
      },
      {
        challenge: "Visite um jardim botânico",
        description:
          "Explore e tire fotos da flora diversificada de um jardim botânico",
        points: 20,
        type: "normal",
        image:
          "https://assets.cntraveller.in/photos/64199ada59df46f87e0a53ca/16:9/w_1024%2Cc_limit/GettyImages-470648565.jpg",
      },
      {
        challenge: "Encontre um santuário de vida selvagem local",
        description:
          "Visite um santuário de vida selvagem e capture os animais em seu ambiente natural",
        points: 45,
        type: "normal",
        image:
          "https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/Wildlife-Sanctuaries-In-India.jpg",
      },
      {
        challenge: "Descubra uma fonte termal natural",
        description: "Encontre e fotografe uma fonte termal natural",
        points: 40,
        type: "normal",
        image:
          "https://media.cntraveler.com/photos/5eb420d241269ff2d4f2ea8b/master/pass/Pamukkale-Denizli-Turkey-GettyImages-539479634.jpg",
      },
    ],
  ],
  runs: {
    "summer-edition": {
      name: "Edição de verão",
      date: "2024-08-24T12:00:00",
      lastUpdate: "2024-08-24T12:00:00",
      teams: {
        "team-a": {
          name: "Equipe A",
          challenges: [
            {
              name: "Descubra uma fonte termal natural",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-3.gif",
            },
            {
              name: "Identifique um sapato de madeira",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "Experimente um prato tradicional",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-1.gif",
            },
          ],
        },
        "team-b": {
          name: "Equipe B",
          challenges: [
            {
              name: "Capture um nascer do sol sobre o oceano",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-5.gif",
            },
            {
              name: "Encontre um monumento famoso",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-4.gif",
            },
            {
              name: "Localize uma estátua famosa",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-3.gif",
            },
          ],
        },
        "team-c": {
          name: "Equipe C",
          challenges: [
            {
              name: "Descubra um moinho de vento",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "Tire uma foto com Van Gogh",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-1.gif",
            },
            {
              name: "Capture um nascer do sol sobre o oceano",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-5.gif",
            },
            {
              name: "Descubra um animal raro na natureza",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-4.gif",
            },
            {
              name: "Descubra uma joia escondida",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-3.gif",
            },
          ],
        },
        "team-d": {
          name: "Equipe D",
          challenges: [
            {
              name: "Descubra um moinho de vento",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "Tire uma foto com Van Gogh",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-1.gif",
            },
            {
              name: "Descubra um animal raro na natureza",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-5.gif",
            },
            {
              name: "Descubra uma joia escondida",
              date: "2024-08-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-4.gif",
            },
          ],
        },
      },
    },
    "winter-edition": {
      name: "Edição de inverno",
      date: "2024-02-24T12:00:00",
      lastUpdate: "2024-02-24T12:00:00",
      teams: {
        "team-a": {
          name: "Equipe A",
          challenges: [
            {
              name: "Descubra uma fonte termal natural",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-3.gif",
            },
            {
              name: "Identifique um sapato de madeira",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "Experimente um prato tradicional",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-1.gif",
            },
          ],
        },
        "team-b": {
          name: "Equipe B",
          challenges: [
            {
              name: "Localize uma estátua famosa",
              date: "2024-02-24T12:00:00",
              comment: "Resolvido!!!",
            },
            {
              name: "Descubra um moinho de vento",
              date: "2024-02-24T12:00:00",
              comment: "Resolvido!!!",
            },
            {
              name: "Tire uma foto com Van Gogh",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-5.gif",
            },
            {
              name: "Capture um nascer do sol sobre o oceano",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-4.gif",
            },
          ],
        },
        "team-c": {
          name: "Equipe C",
          challenges: [
            {
              name: "Descubra um animal raro na natureza",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-3.gif",
            },
            {
              name: "Descubra uma joia escondida",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "Capture um nascer do sol sobre o oceano",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-1.gif",
            },
            {
              name: "Encontre um monumento famoso",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-5.gif",
            },
          ],
        },
        "team-d": {
          name: "Equipe D",
          challenges: [
            {
              name: "Descubra um animal raro na natureza",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-4.gif",
            },
          ],
        },
        "team-e": {
          name: "Equipe E",
          challenges: [
            {
              name: "Descubra um animal raro na natureza",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-3.gif",
            },
            {
              name: "Capture um nascer do sol sobre o oceano",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "Encontre um monumento famoso",
              date: "2024-02-24T12:00:00",
              comment: "_Ótimo trabalho_!!!",
              image: "/images/clapping-1.gif",
            },
          ],
        },
      },
    },
  },
} as TravelBingoGameData;
