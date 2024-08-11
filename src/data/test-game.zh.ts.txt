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
        challenge: "发现风车",
        description: "在荷兰寻找风车",
        points: 25,
        type: "普通的",
        image:
          "https://travelwithbender.com/files/4014/3664/1436/zaanse_schans_IMG_4125-2.jpg",
      },
      {
        challenge: "发现郁金香田",
        description: "在荷兰寻找郁金香田",
        points: 10,
        type: "普通的",
        image:
          "https://dutchwannabe.com/wp-content/uploads/2017/06/tulip-fields-netherlands.jpg",
      },
      {
        challenge: "发现一辆自行车",
        description: "在荷兰寻找自行车",
        points: 5,
        type: "普通的",
        image:
          "https://photography.bicyclingaroundtheworld.nl/wp-content/uploads/2019/10/amtsterdam-netherlands-bicycle-culture.jpg",
      },
      {
        challenge: "发现一条运河",
        description: "在荷兰寻找一条运河",
        image:
          "https://canalsofamsterdam.com/wp-content/uploads/2022/07/Canals-of-Amsterdam-scaled.jpg",
        points: 5,
        type: "普通的",
      },
      {
        challenge: "发现一家奶酪店",
        description: "查找在荷兰出售奶酪的商店",
        points: 20,
        type: "普通的",
        image:
          "https://images.squarespace-cdn.com/content/v1/5e386e245ec08c1b8eaa7c94/4dd6cf47-72c4-431a-bb96-9884507bf931/Cheese+Shop.jpg",
      },
    ],
    [
      {
        challenge: "与梵高合影",
        description: "与梵高画作合影",
        points: 50,
        type: "普通的",
        image:
          "https://assets.vangoghmuseum.nl/f0a809b3-6a77-406f-b398-350f74b9dea1?w=400&c=b65b3ac8477509fef0fb5cf71c1235e2316f27596c3bf2365469ce4303896b0a",
      },
      {
        challenge: "发现一只木鞋",
        description: "在荷兰寻找木鞋",
        points: 10,
        type: "普通的",
        image:
          "https://www.learndutch.org/wp-content/uploads/2019/02/86-What-about-the-woorden-shoes-.jpg",
      },
      {
        challenge: "拍一张当地市场的照片",
        description: "参观当地市场并捕捉熙熙攘攘的气氛",
        points: 20,
        type: "普通的",
        image:
          "https://www.hiddenholland.com/wp-content/uploads/amsterdam-market-albert-cuyp.jpg",
      },
      {
        challenge: "寻找著名的纪念碑",
        description: "找到并拍摄城市中著名的纪念碑",
        points: 30,
        type: "普通的",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/oldimages/bf7bfcfede1c35c26a869945094ae3441434370213.jpg",
      },
      {
        challenge: "观看传统舞蹈表演",
        description: "观看并记录原产国的传统舞蹈",
        points: 35,
        type: "普通的",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dutch_Folklore_Dance_Group_in_Holambra%2C_Brazil.jpg/1200px-Dutch_Folklore_Dance_Group_in_Holambra%2C_Brazil.jpg",
      },
    ],
    [
      {
        challenge: "捕捉海上日出",
        description: "在海滩拍摄美丽的日出",
        points: 40,
        type: "普通的",
        image:
          "https://t4.ftcdn.net/jpg/00/70/14/07/360_F_70140703_2f8N0lwAp67VimEab9ogx3FjvguA8Ef1.jpg",
      },
      {
        challenge: "拍摄当地街头艺术家的照片",
        description: "寻找并拍摄正在工作的街头艺术家的照片",
        points: 15,
        type: "普通的",
        image:
          "https://tucsonartsbrigade.org/wp-content/uploads/graffiti-artist-painting.jpg",
      },
      {
        challenge: "寻找一座历史悠久的城堡",
        description: "参观并拍摄历史悠久的城堡",
        points: 50,
        type: "普通的",
        image:
          "https://annetravelfoodie.com/wp-content/uploads/2020/09/muiderslot-castle-netherlands.jpg",
      },
      {
        challenge: "尝试传统菜肴",
        description: "品尝并回顾该地区的传统菜肴",
        points: 25,
        type: "普通的",
        image:
          "https://traveladdicts.net/wp-content/uploads/2016/02/Bitterballen-beer-snack-Dutch-food.jpg",
      },
      {
        challenge: "找到著名的雕像",
        description: "找到著名雕像并拍照",
        points: 30,
        type: "普通的",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0a/32/90/johnny-jordaanplein.jpg?w=500&h=500&s=1",
      },
    ],
    [
      {
        challenge: "发现野外的稀有动物",
        description: "在自然栖息地拍摄稀有或外来动物",
        points: 60,
        type: "普通的",
        image:
          "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/wildlife-in-the-netherlands.png",
      },
      {
        challenge: "寻找一条有色彩缤纷的房子的街道",
        description: "找到一条以其色彩缤纷的房屋而闻名的街道，捕捉它的美丽",
        points: 20,
        type: "普通的",
        image:
          "https://www.shutterstock.com/image-photo/houses-amsterdam-600nw-731110921.jpg",
      },
      {
        challenge: "参加当地的节日",
        description: "参加当地的节日并记录您的经历",
        points: 50,
        type: "普通的",
        image:
          "https://www.spendlifetraveling.com/wp-content/uploads/2016/12/amsterdam_events_gay_pride.jpg",
      },
      {
        challenge: "拍摄灯塔照片",
        description: "寻找并捕捉灯塔的宏伟",
        points: 25,
        type: "普通的",
        image: "https://live.staticflickr.com/8199/8242635034_076174c1be_b.jpg",
      },
      {
        challenge: "发现一座著名的桥梁",
        description: "找到并拍摄一座世界著名的桥梁",
        points: 30,
        type: "普通的",
        image:
          "https://images.squarespace-cdn.com/content/569e766e69492e9dd5373ef6/1553525738625-IG5QYJ8WHIVWZMDWN1H7/amsterdam-photo-tour-009.jpg?format=1500w&content-type=image%2Fjpeg",
      },
    ],
    [
      {
        challenge: "发现隐藏的宝石",
        description: "找到一个鲜为人知但令人惊叹的地点并记录下来",
        points: 35,
        type: "普通的",
        image:
          "https://bymountainpeople.com/wp-content/uploads/2023/06/Discover-the-Hidden-Gem-of-Nepal-The-Shey-Phoksundo-Lake-Trek-By-Mountain-People.webp",
      },
      {
        challenge: "捕捉一座山峰",
        description: "拍摄一座著名山峰的顶峰",
        points: 40,
        type: "普通的",
        image:
          "https://www.ephotozine.com/resize/articles/15270/P9080276.jpg?RTUdGk5cXyJFCgsJVANtdxU+cVRdHxFYFw1Gewk0T1JYFEtzen5YdgthHHsvEVxR",
      },
      {
        challenge: "参观植物园",
        description: "探索植物园的多样化植物并拍摄照片",
        points: 20,
        type: "普通的",
        image:
          "https://assets.cntraveller.in/photos/64199ada59df46f87e0a53ca/16:9/w_1024%2Cc_limit/GettyImages-470648565.jpg",
      },
      {
        challenge: "寻找当地的野生动物保护区",
        description: "参观野生动物保护区并在自然环境中捕捉动物",
        points: 45,
        type: "普通的",
        image:
          "https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/Wildlife-Sanctuaries-In-India.jpg",
      },
      {
        challenge: "探索天然温泉",
        description: "寻找并拍摄天然温泉",
        points: 40,
        type: "普通的",
        image:
          "https://media.cntraveler.com/photos/5eb420d241269ff2d4f2ea8b/master/pass/Pamukkale-Denizli-Turkey-GettyImages-539479634.jpg",
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
              name: "探索天然温泉",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-3.gif",
            },
            {
              name: "发现一只木鞋",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "尝试传统菜肴",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-1.gif",
            },
          ],
        },
        "team-b": {
          name: "B队",
          challenges: [
            {
              name: "捕捉海上日出",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-5.gif",
            },
            {
              name: "寻找著名的纪念碑",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-4.gif",
            },
            {
              name: "找到著名的雕像",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-3.gif",
            },
          ],
        },
        "team-c": {
          name: "C队",
          challenges: [
            {
              name: "发现风车",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "与梵高合影",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-1.gif",
            },
            {
              name: "捕捉海上日出",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-5.gif",
            },
            {
              name: "发现野外的稀有动物",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-4.gif",
            },
            {
              name: "发现隐藏的宝石",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-3.gif",
            },
          ],
        },
        "team-d": {
          name: "D队",
          challenges: [
            {
              name: "发现风车",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "与梵高合影",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-1.gif",
            },
            {
              name: "发现野外的稀有动物",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-5.gif",
            },
            {
              name: "发现隐藏的宝石",
              date: "2024-08-24T12:00:00",
              comment: "_干得好_!!!",
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
              name: "探索天然温泉",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-3.gif",
            },
            {
              name: "发现一只木鞋",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "尝试传统菜肴",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-1.gif",
            },
          ],
        },
        "team-b": {
          name: "B队",
          challenges: [
            {
              name: "找到著名的雕像",
              date: "2024-02-24T12:00:00",
              comment: "解决了！！！",
            },
            {
              name: "发现风车",
              date: "2024-02-24T12:00:00",
              comment: "解决了！！！",
            },
            {
              name: "与梵高合影",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-5.gif",
            },
            {
              name: "捕捉海上日出",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-4.gif",
            },
          ],
        },
        "team-c": {
          name: "C队",
          challenges: [
            {
              name: "发现野外的稀有动物",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-3.gif",
            },
            {
              name: "发现隐藏的宝石",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "捕捉海上日出",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-1.gif",
            },
            {
              name: "寻找著名的纪念碑",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-5.gif",
            },
          ],
        },
        "team-d": {
          name: "D队",
          challenges: [
            {
              name: "发现野外的稀有动物",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-4.gif",
            },
          ],
        },
        "team-e": {
          name: "E队",
          challenges: [
            {
              name: "发现野外的稀有动物",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-3.gif",
            },
            {
              name: "捕捉海上日出",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-2.gif",
            },
            {
              name: "寻找著名的纪念碑",
              date: "2024-02-24T12:00:00",
              comment: "_干得好_!!!",
              image: "/images/clapping-1.gif",
            },
          ],
        },
      },
    },
  },
} as TravelBingoGameData;
