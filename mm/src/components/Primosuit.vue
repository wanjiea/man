<template>
  <div id="big">
    <div id="khfwTop">
      <div id="inner">
        <h2>客户服务</h2>
        <div id="inner-item">
          <div id="inner-item-div">
            <span class="iconfont icon-liaotian"></span>
            <div id="itemContent">
              <p style="font-weight: 700;">聊天客服</p>
              <p>（周一至周六7:00 – 21:00）</p>
            </div>
          </div>
          <div id="inner-item-div">
            <span class="iconfont icon-weibiaoti-"></span>
            <div id="itemContent">
              <p style="font-weight: 700;">号码为  +86 218 036 0432</p>
              <p>（周一至周六7:00 – 21:00）</p>
            </div>
          </div>
          <div id="inner-item-div">
            <span class="iconfont icon-icon-p-xinfeng"></span>
            <div id="itemContent">
              <p style="font-weight: 700;">发送邮件</p>
              <p>我们将在24小时内给予回复</p>
            </div>
          </div>
          <div id="inner-item-div" class="fourInner">
            <ul>
              <li>配送时间</li>
              <li>追踪您的订单</li>
              <li>退货与退款</li>
              <li>查看全部“常见问答”</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="close" @click="close">
        X
      </div>
    </div>

    <div id="bigContent">
      <div id="nav">
        <div id="navImg">
          男人装
        </div>
        <div id="navList">
          <ul id="navList-ul">
            <li v-for="(ii,index) of  navList" @click="xiala(index)">
              {{ii.title}}
              <div id="xialaDiv"  :hao="index"  v-if="seen = (cc==index) ? true:false">
                <ul>
                  <li v-for="(child,index) of children" @click="go(index)">
                    {{child}}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="nav2">
        <div id="search">
          <input type="text" id="searchInput">
        </div>
        <div class="topBarItem" @click="search">
          搜索
        </div>
        <div class="topBarItem" @click="kehu">
          客户服务
        </div>
        <div class="topBarItem">
          <router-link to="/account" style="color:white !important" >我的账户</router-link>
        </div>
        <div class="topBarItem">
          <router-link to="/cart" style="color:white !important" >购物袋</router-link>
        </div>
      </div>
      <div id="top">
        <div id="fm1">
          <h2>
            <span class="titleBanner-j">携手 ARMIE HAMMER 倾情呈献 PRIMO 西服套装</span>
            <br />
            <span>WATCH THE VIDEO</span>
          </h2>
          <img v-lazy="'../../static/Jwf/bg2.jpg'" alt="">
        </div>
      </div>
      <div id="showTime-j">
        <div style="margin-bottom: 60px"></div>
        <div class="word-box-j">
          <div class="outer-j">
            <div class="inner-j">
              <div class="title-wrap-j">
                <p>
                  Brioni 倾情呈献“Primo”，摩登演绎品牌标志精裁。
                  <br />
                  取名自意大利语单词“第一”，“Primo”西服套装带你走进罗马制衣工艺的写意优雅。
                </p>
                <p>
                  精妙构造结合修身廓形，“Primo”将摩登韵味融入 Brioni 标志特色，匠艺与精确并重，优质羊毛面料与处理工艺锦上添花，包括斜纹、鲨鱼纹、条纹、鸟眼纹及微型图案。
                  <br />
                  Brioni 与时装屋挚友 Armie Hammer 携手演绎此系列。广告大片摄于洛杉矶，以清新的笔触描绘这位美国演员身着“Primo”西服套装的迷人风采，他翩翩而至，款款而行，尽显 Brioni 摩登精髓。
                  <br />
                  #BeginYourLegend
                </p>
              </div>
            </div>
          </div>
          <div class="img-box-j">
            <div class="outer-j">
              <div class="inner-j ">
                <div class="image">
                  <img v-lazy="'../../static/Jwf/man4.jpg'" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-bottom: 120px"></div>
        <div class="shopList-j">
          <div class="slot-image-j">
            <div>
              <a href="javascript:">
                <div class="image-j">
                  <img v-lazy="'../../static/Jwf/close10.jpg'" alt="">
                </div>
                <div class="title-wrap-j">
                  <div class="caption-j">
                    <h3>海军蓝色 Primo 西服套装</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="slot-image-j">
            <div>
              <a href="javascript:">
                <div class="image-j">
                  <img v-lazy="'../../static/Jwf/close11.jpg'" alt="">
                </div>
                <div class="title-wrap-j">
                  <div class="caption-j">
                    <h3>灰色 Primo 西服套装</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="img-box-j">
          <div class="allImg-j">
            <img v-lazy="'../../static/Jwf/man6.jpg'" alt="">
          </div>
        </div>
      </div>
      <div id="foot">
        <div id="footInner">
          <p>
            <span style="float: left;padding-right: 60px;">Copyright © 2019 Brioni S.p.A. All Rights Reserved</span>

          <ul id="footUl">
            <li v-for="i of items">
              {{i.title}}
            </li>
          </ul>


          <div id="cn">
            CN:
            <span>Change Region +</span>
          </div>
          </p>
          <p id="p2">
            <span>关注我们</span>
          </p>
          <p id="p3">
            <span>沪B2-20100090-38   |  </span>
            <span>
                沪公网安备 31010602002561号
            </span>
          </p>
          <p id="p4">
            <span id="gongshang"></span>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        cc:100,
        items:[
          {
            id:0,
            title:"客户服务",
          },
          {
            id:1,
            title:"法律问题",
          },
          {
            id:2,
            title:"关于公司"
          },
          {
            id:3,
            title:"职业"
          },
          {
            id:4,
            title:"订阅时事通讯"
          }
        ],
        navList:[
            {
              title:"官方网络旗舰店",
              liLength:12,
              childs:[
                '新品上架','西服套装与夹克','外套','衬衫','针织衫','Polo 衫与 T 恤','裤装','领带及口袋巾','鞋履','配饰','太阳镜','优惠'
              ],
              childs2:[
                'xinpin','xifu','waitao','chenshan','zhenzhishan','poloshan','ku','lindai','xiezi','peishi','yanjing','youhui'
              ]
            },
            {
              title:"系列",
              liLength:3,
              childs:[
                '2019 春夏','Essential','Primo Suit'
              ],
              childs2:[
                'fall-winter-2019_section','essential_section','primosuit_section'
              ]
            },
           {
              title:"Bespoke量身定制",
              liLength:2,
               childs:[
                'Bespoke 量身定制服务','MADE TO ORDER DENIM'
              ],
              childs2:[
                'bespoke','denims'
              ]
            },
             {
              title:"传世精裁",
              liLength:6,
              childs:[
                'Pierce Brosnan 与 Brioni','Armie Hammer 与 Brioni','BRIONI 传奇','Legendary Minds',
                '裁剪的艺术','品牌传承'
              ],
              childs2:[
                'actor','actor-two','actor-three','actor-four','art','brand'
              ]
            },
            {
              title:"精品店查询",
               liLength:1,
               childs:[
                ''
              ],
              childs2:['store-locator']    
            }
          ],
        children:[],
        isFlag:true,
        syc:100,
         tiaozhuan:["xinpin","xifu","waitao","chenshan","zhenzhishan","poloshan","ku","lindai","xiezi","peishi","yanjing","youhui"],
      }
    },
    mounted: function(){

    },
    methods:{

      xiala:function(a){
        var that= this;
        this.cc=a;
        console.log(a);
        this.navList.forEach(function(item,index){
          if(a==index){
            if(that.syc!=index){

             that.syc=index;
              that.children=item.childs;
              that.tiaozhuan=that.navList[index].childs2;
               if(index==4){
                  that.$router.push("/store-locator");
                }
            }else{
              that.syc=100;
              that.children=[];
              that.cc=100;
              console.log("ok123");
            }
          }
        })
      },
      search:function(){
        var a=document.getElementById("searchInput");
        if(this.isFlag==true){
          a.style.right="0px";
          this.isFlag=false;
        }else{
          a.style.right="-120px";
          this.isFlag=true;
        }
      },
      close:function(){
        var a=document.getElementById("khfwTop");
        var bc=document.getElementById("bigContent");
        var n1=document.getElementById("nav");
        var n2=document.getElementById("nav2");

        bc.style.marginTop="0px";
        n1.style.top="0px";
        n2.style.top="0px";

        a.style.top="-300px"

      },
      kehu:function(){
        var a=document.getElementById("khfwTop");
        var bc=document.getElementById("bigContent");
        var n1=document.getElementById("nav");
        var n2=document.getElementById("nav2");

        bc.style.marginTop="300px";
        n1.style.top="300px";
        n2.style.top="300px";
        a.style.top="0";

      },
       go(a){
      var that=this;
      this.tiaozhuan.forEach(function(item,index){
        if(index == a){
          that.$router.push("/"+item+"")
        }
     })
    }
    }
  }
</script>

<style>
  #fm1 h2{
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto auto 10px auto;
    text-align: center;
    padding: 0 36px 0 40px;
    color: #fff;
  }
  #fm1 .titleBanner-j{
    font-size: 18px;
    letter-spacing: .16em;
    display: inline-block;
    margin-bottom: 28px;
  }
  #fm1 span{
    font-size: 11px;
    letter-spacing: .16em;
  }
  #showTime-j{
    max-width: 1200px;
    margin: 0 auto;
  }
  div{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    letter-spacing: .16em;
    vertical-align: baseline;
  }
  .title-wrap-j{
    margin-top: 8px;
  }
  .title-wrap-j h1{
    text-align: center;
    font-size: 18px;
    letter-spacing: .16em;
    margin-bottom: 40px;
  }
  .title-wrap-j p{
    text-align: center;
    line-height: 1;
  }
  .word-box-j{
    display: flex;
    justify-content: space-between;
    width: 941px;
    margin: 0 auto;
    position: relative;
  }
  .word-box-j > .outer-j{
    width: 50%;
    height: 100%;
    margin:auto
  }
  .word-box-j .inner-j{
    display: table-cell;
    position: relative;
    vertical-align: middle;
  }
  .inner-j .title-wrap-j{
    padding: 0 30px;
  }
  .inner-j .title-wrap-j p{
    text-align: justify;
    font-size: 11px;
    letter-spacing: .16em;
    color: #000;
    line-height: 1.4;
  }
  .img-box-j img{
    display: block;
    width: 78%;
    margin: 0 auto;
  }
  .shopList-j{
    width: 78%;
    padding: 103px 0 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    margin: 0 auto;
  }
  .slot-image-j{
    position: relative;
    text-align: center;
    width: 31.5%;
    height: 42.11%;
    left: 0;
    top: 14.47%;
    margin-bottom: 70px;
  }
  .image-j img{
    width: 100%;
  }
  .caption-j{
    color: #000;
    margin-top: 15px;
    padding: 0 30px;
    display: inline-block;
    font-size: 14px;
  }
  .allImg-j{
    margin-bottom: 60px;
  }
  .topBarItem a{
    color:white;
  }
</style>
