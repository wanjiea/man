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
      <router-link to="/">男人装</router-link>
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
          <input type="text" id="searchInput" style="border-bottom-color:#000">
        </div>
        <div class="topBarItem" @click="search">
          搜索
        </div>
        <div class="topBarItem" @click="kehu">
          客户服务
        </div>
        <div class="topBarItem">
          <router-link to="/account" style="color:black">我的账户</router-link>
        </div>
        <div class="topBarItem">
         <router-link to="/cart" style="color:black"> 购物袋</router-link>
        </div>
      </div>
      <div id="content">
        <div class="content-box-j">
          <div class="title-wrap-j">
            <h1>
              <span class="bigLineHeight">2019春夏</span>
            </h1>
            <p>
              <span class="bigLineHeight">Brioni 坚持发展其制衣工艺，跟随时代的步伐，同时不忘初心。超然物外的罗马式态度是时装屋理念不可或缺的一部分，随着衣物于身体之上轻盈流转，其义自见。正装引入 Primo 西服套装，呈现全新修身廓形，摩登演绎 Brioni 标志精裁。</span>
              <br>
              <span class="bigLineHeight">珍贵面料，精致细节，显而不扬。庄重自信，格致阳刚，奢侈，更多地是一种个人兴趣。</span>
              <br>
              <span class="bigLineHeight">2019 秋冬系列尽显自在从容的绅士风范，而衣物则化身为个人社会身份的广义象征。</span>
            </p>
            <p>&nbsp;</p>
            <p>
              <span class="expFontBold">
                <a href="https://cdn3.yoox.biz/cloud/brioniwp/uploads/2019/06/Brioni_Fall_Winter_2019_Catalogue.pdf">下载商品手</a>
              </span>
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
          <div class="img-box-j">
            <div class="look1-2-j">
              <img v-lazy="'../../static/Jwf/look1-look2.jpg'" alt="">
            </div>
            <div class="title-wrap-j">
              <div class="caption-j">
                <p>
                  <span class="expFontBold">LOOK 1, LOOK 2</span>
                </p>
                <p>&nbsp</p>
                <p>&nbsp</p>
              </div>
            </div>
          </div>
          <div class="img-box-j">
            <div class="look1-2-j">
              <img v-lazy="'../../static/Jwf/look3-look4.jpg'"  alt="">
            </div>
            <div class="title-wrap-j">
              <div class="caption-j">
                <p>
                  <span class="expFontBold">LOOK 3, LOOK 4</span>
                </p>
                <p>&nbsp</p>
                <p>&nbsp</p>
              </div>
            </div>
          </div>
          <div class="img-box-j">
            <div class="look1-2-j">
              <img v-lazy="'../../static/Jwf/look5.jpg'" alt="">
            </div>
            <div class="title-wrap-j">
              <div class="caption-j">
                <p>
                  <span class="expFontBold">LOOK 5</span>
                </p>
                <p>&nbsp</p>
                <p>&nbsp</p>
              </div>
            </div>
          </div>
          <div class="img-box-j">
            <div class="look1-2-j">
              <img v-lazy="'../../static/Jwf/look6-look7.jpg'" alt="">
            </div>
            <div class="title-wrap-j">
              <div class="caption-j">
                <p>
                  <span class="expFontBold">LOOK 6, LOOK 7</span>
                </p>
                <p>&nbsp</p>
                <p>&nbsp</p>
              </div>
            </div>
          </div>
          <div class="img-box-j">
            <div class="look1-2-j">
              <img v-lazy="'../../static/Jwf/look8-look9.jpg'" alt="">
            </div>
            <div class="title-wrap-j">
              <div class="caption-j">
                <p>
                  <span class="expFontBold">LOOK 8, LOOK 9</span>
                </p>
                <p>&nbsp</p>
                <p>&nbsp</p>
              </div>
            </div>
          </div>
          <div class="img-box-j">
            <div class="look1-2-j">
              <img v-lazy="'../../static/Jwf/look10.jpg'" alt="">
            </div>
            <div class="title-wrap-j">
              <div class="caption-j">
                <p>
                  <span class="expFontBold">LOOK 10</span>
                </p>
                <p>&nbsp</p>
                <p>&nbsp</p>
              </div>
            </div>
          </div>
          <div class="img-box-j">
            <div class="look1-2-j">
              <img v-lazy="'../../static/Jwf/look11-look12.jpg'" alt="">
            </div>
            <div class="title-wrap-j">
              <div class="caption-j">
                <p>
                  <span class="expFontBold">LOOK 11, LOOK 12</span>
                </p>
                <p>&nbsp</p>
                <p>&nbsp</p>
              </div>
            </div>
          </div>
          <div class="img-box-j">
            <div class="look1-2-j">
              <img v-lazy="'../../static/Jwf/look13-look14.jpg'" alt="">
            </div>
            <div class="title-wrap-j">
              <div class="caption-j">
                <p>
                  <span class="expFontBold">LOOK 13, LOOK 14</span>
                </p>
                <p>&nbsp</p>
                <p>&nbsp</p>
              </div>
            </div>
          </div>
          <div class="img-box-j">
            <div class="look1-2-j">
              <img v-lazy="'../../static/Jwf/look15.jpg'" alt="">
            </div>
            <div class="title-wrap-j">
              <div class="caption-j">
                <p>
                  <span class="expFontBold-j">LOOK 15</span>
                </p>
                <p>&nbsp</p>
                <p>&nbsp</p>
              </div>
            </div>
          </div>
          <div class="img-box-j">
            <div class="look1-2-j">
              <img v-lazy="'../../static/Jwf/look16-look17.jpg'" alt="">
            </div>
            <div class="title-wrap-j">
              <div class="caption-j">
                <p>
                  <span class="expFontBold">LOOK 16, LOOK 17</span>
                </p>
                <p>&nbsp</p>
                <p>&nbsp</p>
              </div>
            </div>
          </div>
          <div class="img-box-j">
            <div class="look1-2-j">
              <img v-lazy="'../../static/Jwf/look18-look19.jpg'" alt="">
            </div>
            <div class="title-wrap-j">
              <div class="caption-j">
                <p>
                  <span class="expFontBold">LOOK 18, LOOK 19</span>
                </p>
                <p>&nbsp</p>
                <p>&nbsp</p>
              </div>
            </div>
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
              ] ,
              childs2:['store-locator']  
            }
          ],
           tiaozhuan:[],
        children:[],
        isFlag:true,
        syc:100,

      }
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

<style scoped>
  #navList-ul>li {
    color: black;
  }
  #nav2{
    color: black;
  }
  #navImg{
    color: black;
  }
  #content{
    max-width: 1200px;
    margin: 90px auto 0;
  }
  .content-box-j{
    width: 941px;
    margin: 0 auto;
    text-align: center;
    min-height: 64px;
  }
  .title-wrap-j{
    margin-top: 0;
  }
  .title-wrap-j > h1{
    text-align: center;
    font-size: 15px;
    color: #000;
    margin-bottom: 12px;
    letter-spacing: .2em;
  }
  .title-wrap-j .bigLineHeight{
    line-height: 2.25;
  }
  .title-wrap-j > p{
    font-size: 11px;
    letter-spacing: .16em;
    line-height: 1;
  }
  .expFontBold-j{
    font-weight: 700;
  }
  .title-wrap-j > p a{
    color: black;
  }
  .content-box-j img{
    width: 100%;
  }
  .caption-j{
    margin-top: 20px;
    padding: 0 30px;
  }
  .caption-j p{
    text-align: left;
    font-size: 11px;
    letter-spacing: .16em;
  }
  .img-box-j{
    margin-bottom: 60px;
    position: relative;
  }
a{
    color:black ;
}
</style>
