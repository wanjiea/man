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
          <router-link to="/" style="color:black">男人装</router-link>
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
          <router-link to="/cart" style="color:black">购物袋</router-link>
        </div>
      </div>
      <div id="map-j">
        <div class="wrapper-j">
          <div class="storeLocator-j">
            <h1 class="storeLocatorTitle-j">Store Locator</h1>
            <div class="storeLocator-container-j">
              <nav class="storeLocator-navigation-j">
                <h2>附近</h2>
                <div class="search-link-j">
                  <div class="search-wrapper-j">
                    <div>
                      <input v-model="location" id="searchInput-j" type="text">
                    </div>
                  </div>
                  <div class="text-j" @click="searchPlace">搜索</div>
                </div>
              </nav>
              <div class="storeLocator-page-j">
                <baidu-map center="杭州" class="storeMap-j">
                  <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                  <bm-panorama anchor="BMAP_ANCHOR_TOP_LEFT"></bm-panorama>
                  <bm-local-search class="map-details-j" :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
                </baidu-map>
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
        location: '',
        keyword: 'brioni',
        center: {lng: 0, lat: 0},
        zoom: 3,
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
            }
          ],
        tiaozhuan:[],
        children:[],
        isFlag:true,
        syc:100,

      }
    },
    methods:{
      searchPlace:function(){
        document.querySelectorAll('.search-wrapper-j')[0].style.display = "block";
        document.querySelectorAll('.search-link-j')[0].style.borderBottomColor = "#dcdcdc";
      },
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
  #map-j{
    max-width: 1200px;
    margin: 0 auto;
  }
  #searchInput-j{
    font-size: 11px;
    letter-spacing: .16em;
    border: none;
    color: #878787;
    height: auto;
    line-height: 18px;
    margin: 0;
    padding: 0;
    min-width: 163px;
    width: 100%;
    outline: none;
  }
  .wrapper-j{
    font-size: 11px;
    letter-spacing: .16em;
    width: auto;
    margin: 0 auto;
    padding-bottom: 94px;
    padding-top: 90px;
    min-height: 100%;
  }
  .storeLocatorTitle-j{
    font-weight: 700;
    letter-spacing: .2em;
    font-size: 15px;
    color: #000;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 12px;
  }
  .storeLocator-navigation-j{
    margin-bottom: 60px;
    text-align: center;
  }
  .storeLocator-navigation-j h2{
    font-size: 11px;
    letter-spacing: .16em;
    cursor: pointer;
    display: inline-block;
    margin: -5px 9px;
    padding: 5px;
    vertical-align: top;
  }
  .storeLocator-page-j{
    margin: 0 auto;
    position: relative;
    width: 600px;
  }
  .storeMap-j{
    width: 100%;
    height: 600px;
  }
  .search-link-j{
    position: relative;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    font-size: 11px;
    letter-spacing: 0.16em;
    display: inline-block;
    vertical-align: top;
    margin: -5px 9px;
    padding: 5px;
  }
  .search-link-j .search-wrapper-j{
    display: none;
    float: left;
    position: relative;
  }
  .text-j{
    cursor: pointer;
    float: left;
    z-index: 1;
  }
  .map-details-j{
    position: absolute;
    left: 600px;
    overflow-x: hidden;
    overflow-y: auto;
    top: 0;
    width: 385px;
  }
</style>
