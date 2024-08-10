import { TravelBingoGameData } from "./interfaces";

export default {
  title: "旅行宾果荷兰",
  icon: "FlagTwoTone",
  color: "#1890ff",
  backgroundColor: "#e6f7ff",
  shortDescription: "一个荷兰公路旅行的宾果卡",
  gamePlay: `
- 第一个完成一行、一列或对角线的人获胜
- 获胜者必须喊'宾果！'
- 获胜者必须向其他玩家展示他们的卡片以验证胜利
`,
  challenges: [
    [
      {
        challenge: "发现一个风车",
        description: "在荷兰找到一个风车",
        points: 25,
        type: "normal",
        image:
          "https://travelwithbender.com/files/4014/3664/1436/zaanse_schans_IMG_4125-2.jpg",
      },
      {
        challenge: "发现一个郁金香田",
        description: "在荷兰找到一个郁金香田",
        points: 10,
        type: "normal",
        image:
          "https://dutchwannabe.com/wp-content/uploads/2017/06/tulip-fields-netherlands.jpg",
      },
      {
        challenge: "发现一辆自行车",
        description: "在荷兰找到一辆自行车",
        points: 5,
        type: "normal",
        image:
          "https://photography.bicyclingaroundtheworld.nl/wp-content/uploads/2019/10/amtsterdam-netherlands-bicycle-culture.jpg",
      },
      {
        challenge: "发现一条运河",
        description: "在荷兰找到一条运河",
        image:
          "https://canalsofamsterdam.com/wp-content/uploads/2022/07/Canals-of-Amsterdam-scaled.jpg",
        points: 5,
        type: "normal",
      },
      {
        challenge: "发现一家奶酪店",
        description: "在荷兰找到一家卖奶酪的商店",
        points: 20,
        type: "normal",
        image:
          "https://images.squarespace-cdn.com/content/v1/5e386e245ec08c1b8eaa7c94/4dd6cf47-72c4-431a-bb96-9884507bf931/Cheese+Shop.jpg",
      },
    ],
    [
      {
        challenge: "与梵高合影",
        description: "与梵高的画作合影",
        points: 50,
        type: "normal",
        image:
          "https://assets.vangoghmuseum.nl/f0a809b3-6a77-406f-b398-350f74b9dea1?w=400&c=b65b3ac8477509fef0fb5cf71c1235e2316f27596c3bf2365469ce4303896b0a",
      },
      {
        challenge: "发现一只木鞋",
        description: "在荷兰找到一只木鞋",
        points: 10,
        type: "normal",
        image:
          "https://www.learndutch.org/wp-content/uploads/2019/02/86-What-about-the-woorden-shoes-.jpg",
      },
      {
        challenge: "拍摄当地市场照片",
        description: "参观当地市场并捕捉其热闹的氛围",
        points: 20,
        type: "normal",
        image:
          "https://www.hiddenholland.com/wp-content/uploads/amsterdam-market-albert-cuyp.jpg",
      },
      {
        challenge: "找到著名的纪念碑",
        description: "定位并拍摄城市中著名的纪念碑",
        points: 30,
        type: "normal",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/oldimages/bf7bfcfede1c35c26a869945094ae3441434370213.jpg",
      },
      {
        challenge: "观看传统舞蹈表演",
        description: "观看并记录在其原产国的传统舞蹈",
        points: 35,
        type: "normal",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dutch_Folklore_Dance_Group_in_Holambra%2C_Brazil.jpg/1200px-Dutch_Folklore_Dance_Group_in_Holambra%2C_Brazil.jpg",
      },
    ],
    [
      {
        challenge: "捕捉海上日出",
        description: "在海边拍摄一张美丽的日出照片",
        points: 40,
        type: "normal",
        image:
          "https://t4.ftcdn.net/jpg/00/70/14/07/360_F_70140703_2f8N0lwAp67VimEab9ogx3FjvguA8Ef1.jpg",
      },
      {
        challenge: "拍摄当地街头艺术家",
        description: "找到并拍摄一位正在工作的街头艺术家",
        points: 15,
        type: "normal",
        image:
          "https://tucsonartsbrigade.org/wp-content/uploads/graffiti-artist-painting.jpg",
      },
      {
        challenge: "发现一座历史城堡",
        description: "参观并拍摄一座历史城堡",
        points: 50,
        type: "normal",
        image:
          "https://annetravelfoodie.com/wp-content/uploads/2020/09/muiderslot-castle-netherlands.jpg",
      },
      {
        challenge: "尝试当地的传统美食",
        description: "品尝并评价当地的传统美食",
        points: 25,
        type: "normal",
        image:
          "https://traveladdicts.net/wp-content/uploads/2016/02/Bitterballen-beer-snack-Dutch-food.jpg",
      },
      {
        challenge: "找到著名雕像",
        description: "找到并拍摄一座著名的雕像",
        points: 30,
        type: "normal",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0a/32/90/johnny-jordaanplein.jpg?w=500&h=500&s=1",
      },
    ],
    [
      {
        challenge: "在野外发现稀有动物",
        description: "在自然栖息地拍摄一只稀有或异国动物",
        points: 60,
        type: "normal",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/wildlife-in-the-netherlands.png",
      },
      {
        challenge: "发现彩色房屋街道",
        description: "找到以彩色房屋闻名的街道并捕捉其美丽",
        points: 20,
        type: "normal",
        image:
          "https://www.shutterstock.com/image-photo/houses-amsterdam-600nw-731110921.jpg",
      },
      {
        challenge: "参加当地节日",
        description: "参与当地节日并记录你的体验",
        points: 50,
        type: "normal",
        image:
          "https://www.spendlifetraveling.com/wp-content/uploads/2016/12/amsterdam_events_gay_pride.jpg",
      },
      {
        challenge: "拍摄灯塔照片",
        description: "找到并捕捉灯塔的壮丽景象",
        points: 25,
        type: "normal",
        image: "https://live.staticflickr.com/8199/8242635034_076174c1be_b.jpg",
      },
      {
        challenge: "发现著名桥梁",
        description: "定位并拍摄世界著名的桥梁",
        points: 30,
        type: "normal",
        image:
          "https://images.squarespace-cdn.com/content/569e766e69492e9dd5373ef6/1553525738625-IG5QYJ8WHIVWZMDWN1H7/amsterdam-photo-tour-009.jpg?format=1500w&content-type=image%2Fjpeg",
      },
    ],
    [
      {
        challenge: "发现一个隐藏的宝藏",
        description: "找到一个不太知名但令人惊艳的地方并记录下来",
        points: 35,
        type: "normal",
        image:
          "https://bymountainpeople.com/wp-content/uploads/2023/06/Discover-the-Hidden-Gem-of-Nepal-The-Shey-Phoksundo-Lake-Trek-By-Mountain-People.webp",
      },
      {
        challenge: "捕捉山峰",
        description: "拍摄著名山峰的峰顶",
        points: 40,
        type: "normal",
        image:
          "https://www.ephotozine.com/resize/articles/15270/P9080276.jpg?RTUdGk5cXyJFCgsJVANtdxU+cVRdHxFYFw1Gewk0T1JYFEtzen5YdgthHHsvLh0fdAV5PAZ+WTB8eFxiG1Y6RWNgYy82KEtiGSoTKFIhDlMGdCZKbWxiHQZcP0FuJUZxMlADYw==",
      },
      {
        challenge: "发现独特的街道标志",
        description: "拍摄一张有趣或独特的街道标志",
        points: 10,
        type: "normal",
        image:
          "https://live.staticflickr.com/2845/11460425834_3652d6e4c8_b.jpg",
      },
      {
        challenge: "参观博物馆",
        description: "在博物馆参观一个有趣的展览",
        points: 30,
        type: "normal",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0d/Naturalis_main_hall.jpg",
      },
      {
        challenge: "拍摄夜景",
        description: "拍摄一张夜景照片，展现城市的迷人夜晚",
        points: 15,
        type: "normal",
        image:
          "https://live.staticflickr.com/65535/50931489087_761a29f1e8_b.jpg",
      },
    ],
  ],
  runs: {
    "summer-edition": {
      name: "夏季版",
      date: "2024-08-24T12:00:00",
      lastUpdate: "2024-08-24T12:00:00",
      teams: {
        "team-a": {
          name: "A队",
          challenges: [
            {
              name: "发现一个天然温泉",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-3.gif",
            },
            {
              name: "找到一只木鞋",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-2.gif",
            },
            {
              name: "尝试一道传统菜",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-1.gif",
            },
          ],
        },
        "team-b": {
          name: "B队",
          challenges: [
            {
              name: "拍摄海上日出",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-5.gif",
            },
            {
              name: "找到一个著名的纪念碑",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-4.gif",
            },
            {
              name: "找到一个著名雕像",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-3.gif",
            },
          ],
        },
        "team-c": {
          name: "C队",
          challenges: [
            {
              name: "找到一个风车",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-2.gif",
            },
            {
              name: "和梵高合影",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-1.gif",
            },
            {
              name: "拍摄海上日出",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-5.gif",
            },
            {
              name: "在野外发现一只稀有动物",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-4.gif",
            },
            {
              name: "发现一个隐藏的宝藏",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-3.gif",
            },
          ],
        },
        "team-d": {
          name: "D队",
          challenges: [
            {
              name: "找到一个风车",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-2.gif",
            },
            {
              name: "和梵高合影",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-1.gif",
            },
            {
              name: "在野外发现一只稀有动物",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-5.gif",
            },
            {
              name: "发现一个隐藏的宝藏",
              date: "2024-08-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-4.gif",
            },
          ],
        },
      },
    },
    "winter-edition": {
      name: "冬季版",
      date: "2024-02-24T12:00:00",
      lastUpdate: "2024-02-24T12:00:00",
      teams: {
        "team-a": {
          name: "A队",
          challenges: [
            {
              name: "发现一个天然温泉",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-3.gif",
            },
            {
              name: "找到一只木鞋",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-2.gif",
            },
            {
              name: "尝试一道传统菜",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-1.gif",
            },
          ],
        },
        "team-b": {
          name: "B队",
          challenges: [
            {
              name: "找到一个著名雕像",
              date: "2024-02-24T12:00:00",
              comment: `已解决!!!`,
            },
            {
              name: "找到一个风车",
              date: "2024-02-24T12:00:00",
              comment: `已解决!!!`,
            },
            {
              name: "和梵高合影",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-5.gif",
            },
            {
              name: "拍摄海上日出",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-4.gif",
            },
          ],
        },
        "team-c": {
          name: "C队",
          challenges: [
            {
              name: "在野外发现一只稀有动物",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-3.gif",
            },
            {
              name: "发现一个隐藏的宝藏",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-2.gif",
            },
            {
              name: "拍摄海上日出",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-1.gif",
            },
            {
              name: "找到一个著名的纪念碑",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-5.gif",
            },
          ],
        },
        "team-d": {
          name: "D队",
          challenges: [
            {
              name: "在野外发现一只稀有动物",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-4.gif",
            },
          ],
        },
        "team-e": {
          name: "E队",
          challenges: [
            {
              name: "在野外发现一只稀有动物",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-3.gif",
            },
            {
              name: "拍摄海上日出",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-2.gif",
            },
            {
              name: "找到一个著名的纪念碑",
              date: "2024-02-24T12:00:00",
              comment: `_干得好_!!!`,
              image: "/images/clapping-1.gif",
            },
          ],
        },
      },
    },
  },
} as TravelBingoGameData;
