
const namespaced =true;
const state = {

  allShop:[
    {
      id: 30,
      img: "../../static/lzyimages/21.jpg",
      info: "蓝色、白色条纹正装衬衫 ",
      price: "4200",
      count: 1
    },
    {
      id: 31,
      img: "../../static/lzyimages/22.jpg",
      info: "海军蓝色、白色条纹正装衬衫 ",
      price: "4200",
      count: 1
    },
    {
      id: 32,
      img: "../../static/lzyimages/23.jpg",
      info: "浅蓝色人字呢衬衫 ",
      price: "6800",
      count: 1
    },
    {
      id: 33,
      img: "../../static/lzyimages/24.jpg",
      info: "浅蓝色、白色微型图案衬衫 ",
      price: "4600",
      count: 1
    },
    {
      id: 34,
      img: "../../static/lzyimages/25.jpg",
      info: "浅蓝色和白色条纹衬衫 ",
      price: "3900",
      count: 1
    },
    {
      id: 35,
      img: "../../static/lzyimages/26.jpg",
      info: "海军蓝色质感正装衬衫 ",
      price: "4200",
      count: 1
    },
    {
      id: 36,
      img: "../../static/lzyimages/27.jpg",
      info: "矢车菊蓝斜纹正装衬衫 ",
      price: "4600",
      count: 1
    },
    {
      id: 37,
      img: "../../static/lzyimages/28.jpg",
      info: "天蓝色和白色正装衬衫 ",
      price: "4600",
      count: 1
    },
    {
      id: 38,
      img: "../../static/lzyimages/29.jpg",
      info: "浅蓝色斜纹正装衬衫 ",
      price: "4600",
      count: 1
    },
    {
      id: 60,
      img: "../../static/lzyimages/48.jpg",
      info: "蓝色亚麻裤装 ",
      price: "5100",
      count: 1
    },
    {
      id: 61,
      img: "../../static/lzyimages/49.jpg",
      info: "灰褐色亚麻裤装",
      price: "5700",
      count: 1
    },
    {
      id: 62,
      img: "../../static/lzyimages/50.jpg",
      info: "蓝色 Tigullio 裤装",
      price: "6400",
      count: 1
    },
    {
      id: 63,
      img: "../../static/lzyimages/51.jpg",
      info: "米色裤装",
      price: "5400",
      count: 1
    },
    {
      id: 64,
      img: "../../static/lzyimages/52.jpg",
      info: "绿色裤装",
      price: "5400",
      count: 1
    },
    {
      id: 65,
      img: "../../static/lzyimages/53.jpg",
      info: "“Essential”海军蓝色 Tigullio 裤装",
      price: "6700",
      count: 1
    },
    {
      id: 66,
      img: "../../static/lzyimages/54.jpg",
      info: "“Essential”炭灰色 Tigullio 裤装",
      price: "6700",
      count: 1
    },
    {
      id: 67,
      img: "../../static/lzyimages/55.jpg",
      info: "“Essential”黑色 Tigullio 裤装",
      price: "6700",
      count: 1
    },
    {
      id: 68,
      img: "../../static/lzyimages/56.jpg",
      info: "绿色牛仔裤装 ",
      price: "7300",
      count: 1
    },
    {
      id: 70,
      img: "../../static/lzyimages/57.jpg",
      info: "浅灰色领带",
      price: "1850",
      count: 1
    },
    {
      id: 71,
      img: "../../static/lzyimages/58.jpg",
      info: "海军蓝色领带",
      price: "1850",
      count: 1
    },
    {
      id: 72,
      img: "../../static/lzyimages/59.jpg",
      info: "红色领带 ",
      price: "1850",
      count: 1
    },
    {
      id: 73,
      img: "../../static/lzyimages/60.jpg",
      info: "海军蓝色和黑色微型图案领带 ",
      price: "1800",
      count: 1
    },
    {
      id: 74,
      img: "../../static/lzyimages/61.jpg",
      info: "红色和海军蓝色微型图案领带 ",
      price: "1880",
      count: 1
    },
    {
      id: 75,
      img: "../../static/lzyimages/62.jpg",
      info: "红色斜纹领带 ",
      price: "1800",
      count: 1
    },
    {
      id: 76,
      img: "../../static/lzyimages/63.jpg",
      info: "蓝色微型涡纹图案领带",
      price: "2400",
      count: 1
    },
    {
      id: 77,
      img: "../../static/lzyimages/64.jpg",
      info: "灰色涡纹图案领结 ",
      price: "1860",
      count: 1
    },
    {
      id: 78,
      img: "../../static/lzyimages/65.jpg",
      info: "灰色涡纹图案领结 ",
      price: "1850",
      count: 1
    },
    {
      id: 90,
      img: "../../static/lzyimages/71.jpg",
      info: "围巾",
      price: "7100",
      count: 1
    },
    {
      id: 91,
      img: "../../static/lzyimages/72.jpg",
      info: "褐色围巾",
      price: "3700",
      count: 1
    },
    {
      id: 92,
      img: "../../static/lzyimages/73.jpg",
      info: "灰色围巾",
      price: "3600",
      count: 1
    },
    {
      id: 93,
      img: "../../static/lzyimages/74.jpg",
      info: "蓝色围巾 ",
      price: "3600",
      count: 1
    },
    {
      id: 94,
      img: "../../static/lzyimages/75.jpg",
      info: "白色印纹游泳毛巾 ",
      price: "6600",
      count: 1
    },
    {
      id: 95,
      img: "../../static/lzyimages/76.jpg",
      info: "纯黑色袜子 ",
      price: "600",
      count: 1
    },
    {
      id: 96,
      img: "../../static/lzyimages/77.jpg",
      info: "海军蓝色徽标游泳短裤 ",
      price: "3900",
      count: 1
    },
    {
      id: 97,
      img: "../../static/lzyimages/78.jpg",
      info: "白色、红色游泳短裤 ",
      price: "5200",
      count: 1
    },
    {
      id: 98,
      img: "../../static/lzyimages/79.jpg",
      info: "红色游泳短裤 ",
      price: "3200",
      count: 1
    },
    {
      id: 50,
      img: "../../static/lzyimages/39.jpg",
      info: "白色珠地布 Polo 衫 ",
      price: "3900",
      count: 1
    },
    {
      id: 51,
      img: "../../static/lzyimages/40.jpg",
      info: "浅蓝色 Polo 衫 ",
      price: "5100",
      count: 1
    },
    {
      id: 52,
      img: "../../static/lzyimages/41.jpg",
      info: "白色圆领 T 恤 ",
      price: "2300",
      count: 1
    },
    {
      id: 53,
      img: "../../static/lzyimages/42.jpg",
      info: "白色印纹 T 恤 ",
      price: "3900",
      count: 1
    },
    {
      id: 54,
      img: "../../static/lzyimages/43.jpg",
      info: "浅灰色 T 恤 ",
      price: "4100",
      count: 1
    },
    {
      id: 55,
      img: "../../static/lzyimages/44.jpg",
      info: "绿色圆领 T 恤 ",
      price: "2300",
      count: 1
    },
    {
      id: 56,
      img: "../../static/lzyimages/45.jpg",
      info: "海军蓝色 T 恤 ",
      price: "4100",
      count: 1
    },
    {
      id: 57,
      img: "../../static/lzyimages/46.jpg",
      info: "海军蓝色圆领 T 恤 ",
      price: "2300",
      count: 1
    },
    {
      id: 58,
      img: "../../static/lzyimages/47.jpg",
      info: "白色 Polo 衫式 T 恤",
      price: "3900",
      count: 1
    },
    {
      id: 20,
      img: "../../static/lzyimages/19.jpg",
      info: "蓝色正反两穿背心 ",
      price: "12800",
      count: 1
    },
    {
      id: 21,
      img: "../../static/lzyimages/20.jpg",
      info: "米色、白色正反两穿束腰衬衫 ",
      price: "11000",
      count: 1
    },
    {
      id: 80,
      img: "../../static/lzyimages/66.jpg",
      info: "褐色、白色跑步运动鞋 ",
      price: "6300",
      count: 1
    },
    {
      id: 81,
      img: "../../static/lzyimages/67.jpg",
      info: "海军蓝色、白色跑步运动鞋 ",
      price: "6300",
      count: 1
    },
    {
      id: 82,
      img: "../../static/lzyimages/68.jpg",
      info: "白色、海军蓝色跑步运动鞋",
      price: "6300",
      count: 1
    },
    {
      id: 83,
      img: "../../static/lzyimages/69.jpg",
      info: "灰色绒面革乐福鞋",
      price: "9600",
      count: 1
    },
    {
      id: 84,
      img: "../../static/lzyimages/70.jpg",
      info: "黑色 Oxford Foot Glove 鞋 ",
      price: "9000",
      count: 1
    },
    {
      id: 10,
      img: "../../static/lzyimages/10.jpg",
      info: "海军蓝色人字呢 Brunico 西服套装",
      price: "42600",
      count: 1
    },
    {
      id: 11,
      img: "../../static/lzyimages/11.jpg",
      info: "'“Essential”海军蓝色 Brunico 西装",
      price: "46700",
      count: 1
    },
    {
      id: 12,
      img: "../../static/lzyimages/12.jpg",
      info: "'“Essential”灰色 Brunico 西装",
      price: "43200",
      count: 1
    },
    {
      id: 13,
      img: "../../static/lzyimages/13.jpg",
      info: "'“Essential”黑色 Brunico 西装",
      price: "46700",
      count: 1
    },
    {
      id: 14,
      img: "../../static/lzyimages/14.jpg",
      info: "“Essential”Policleto 塔士多西服套装",
      price: "44500",
      count: 1
    },
    {
      id: 15,
      img: "../../static/lzyimages/15.jpg",
      info: "Madison 塔士多西服套装",
      price: "44500",
      count: 1
    },
    {
      id: 16,
      img: "../../static/lzyimages/16.jpg",
      info: "“Essential”海军蓝色 Ravello 夹克 ",
      price: "30500",
      count: 1
    },
    {
      id: 17,
      img: "../../static/lzyimages/17.jpg",
      info: "海军蓝色 Ravello 西装外套 ",
      price: "36300",
      count: 1
    },
    {
      id: 18,
      img: "../../static/lzyimages/18.jpg",
      info: "灰色 CONDOTTI 夹克",
      price: "37500",
      count: 1
    },
    {
      id: 0,
      img: "../../static/lzyimages/01.jpg",
      info: "海军蓝色 Primo 西服套装",
      price: "29000",
      count: 1
    },
    {
      id: 1,
      img: "../../static/lzyimages/02.jpg",
      info: "黑色皇室 西服套装",
      price: "30000",
      count: 1
    },
    {
      id: 2,
      img: "../../static/lzyimages/03.jpg",
      info: "灰色 Primo 西服套装",
      price: "29000",
      count: 1
    },
    {
      id: 3,
      img: "../../static/lzyimages/04.jpg",
      info: "灰色 CONDOTTI 夹克",
      price: "37500",
      count: 1
    },
    {
      id: 4,
      img: "../../static/lzyimages/05.jpg",
      info: "蓝色户外夹克",
      price: "27900",
      count: 1
    },
    {
      id: 5,
      img: "../../static/lzyimages/06.jpg",
      info: "灰色绗缝马甲",
      price: "17900",
      count: 1
    },
    {
      id: 6,
      img: "../../static/lzyimages/07.jpg",
      info: "灰色提花 POLO 衫 ",
      price: "7700",
      count: 1
    },
    {
      id: 7,
      img: "../../static/lzyimages/08.jpg",
      info: "黑色长袖 Polo 衫",
      price: "7100",
      count: 0
    },
    {
      id: 8,
      img: "../../static/lzyimages/09.jpg",
      info: "红色圆领毛衣",
      price: "5900",
      count: 1
    },
    {
      id: 100,
      img: "../../static/lzyimages/80.jpg",
      info: "绿色镜片金色、哈瓦那色太阳镜",
      price: "4490",
      count: 1
    },
    {
      id: 101,
      img: "../../static/lzyimages/81.jpg",
      info: "褐色镜片哈瓦那色太阳镜",
      price: "4190",
      count: 1
    },
    {
      id: 102,
      img: "../../static/lzyimages/82.jpg",
      info: "褐色镜片浅蓝色太阳镜",
      price: "4190",
      count: 1
    },
    {
      id: 103,
      img: "../../static/lzyimages/83.jpg",
      info: "绿色镜片透明沙色几何造型太阳镜",
      price: "4190",
      count: 1
    },
    {
      id: 200,
      img: "../../static/lzyimages/84.jpg",
      info: "黑色可折叠短大衣",
      price: "14400",
      count: 1
    },
    {
      id: 201,
      img: "../../static/lzyimages/85.jpg",
      info: "海军蓝色泡泡纱 Celio 西服套装",
      price: "26520",
      count: 1
    },
    {
      id: 202,
      img: "../../static/lzyimages/86.jpg",
      info: "烟灰色平纹单面针织布夹克",
      price: "11280",
      count: 1
    },
    {
      id: 203,
      img: "../../static/lzyimages/87.jpg",
      info: "灰色平纹单面针织布西装外套 ",
      price: "13800",
      count: 1
    },
    {
      id: 204,
      img: "../../static/lzyimages/88.jpg",
      info: "米色解构主义西装外套",
      price: "7560",
      count: 1
    },
    {
      id: 205,
      img: "../../static/lzyimages/89.jpg",
      info: "绿色户外夹克 ",
      price: "14700",
      count: 1
    },
    {
      id: 206,
      img: "../../static/lzyimages/90.jpg",
      info: "海军蓝色束腰上衣",
      price: "11880",
      count: 1
    },
    {
      id: 207,
      img: "../../static/lzyimages/91.jpg",
      info: "红色束腰上衣",
      price: "11880",
      count: 1
    },
    {
      id: 208,
      img: "../../static/lzyimages/92.jpg",
      info: "蓝色、白色微型图案衬衫 ",
      price: "2760",
      count: 1
    },
    {
      id: 40,
      img: "../../static/lzyimages/30.jpg",
      info: "灰色长袖 Polo 衫 ",
      price: "6900",
      count: 1
    },
    {
      id: 41,
      img: "../../static/lzyimages/31.jpg",
      info: "米色拉链套衫 ",
      price: "8700",
      count: 1
    },
    {
      id: 42,
      img: "../../static/lzyimages/32.jpg",
      info: "“Essential”海军蓝色 V 领毛衣",
      price: "6300",
      count: 1
    },
    {
      id: 43,
      img: "../../static/lzyimages/33.jpg",
      info: "“Essential”深灰色 V 领毛衣",
      price: "6300",
      count: 1
    },
    {
      id: 44,
      img: "../../static/lzyimages/34.jpg",
      info: "“Essential”黑色 V 领毛衣",
      price: "6300",
      count: 1
    },
    {
      id: 45,
      img: "../../static/lzyimages/35.jpg",
      info: "“Essential”海军蓝色圆领毛衣 ",
      price: "6300",
      count: 1
    },
    {
      id: 46,
      img: "../../static/lzyimages/36.jpg",
      info: "“Essential”灰色圆领毛衣 ",
      price: "6300",
      count: 1
    },
    {
      id: 47,
      img: "../../static/lzyimages/37.jpg",
      info: "“Essential”黑色圆领毛衣 ",
      price: "6300",
      count: 1
    },
    {
      id: 48,
      img: "../../static/lzyimages/38.jpg",
      info: "黑色樽领毛衣 ",
      price: "9700",
      count: 1
    }
  ]

  ,sxShop:[],

  keywords:""
}
const mutations={
  changeSxShop(state,sxjg){
    state.sxShop=sxjg;
  },
  changeKeywords(state,kk){
    state.keywords=kk;
  }
}
export default{
  namespaced,
  state,
  mutations
}