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
        <div id="navImg" style="color:#000">
            <router-link to="/" style="color:#000">男人装</router-link>
        </div>
        <div id="navList">
          <ul id="navList-ul">
            <li v-for="(ii,index) of  navList" @click="xiala(index)" style="color:#000">
              {{ii.title}}
             <div id="xialaDiv"  :hao="index"  v-if="seen = (cc==index) ? true:false">
                <ul>
                  <li v-for="(child,inedx) of children" @click='go(index)'>
                    {{child}}
                  </li>
                </ul>
             </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="nav2"  style="color:#000">
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
          <router-link to="/account" style="color:#000;">我的账户</router-link>
        </div>
         <div class="topBarItem">
          <router-link to="/cart" style="color:#000;">购物袋</router-link>
          
        </div>
      </div>


      <!-- 内容开始 -->
        <!-- <div class="actorFour-m">
        <h1>LEGENDARY MINDS</h1>
        <p>
            <span>Brioni 与全球众多传奇男士合作已久。他们在物理、文学、化学、医学、和平与经济学等领域颇有建树。 </span>
            <span>这些典范精英紧密相连，倾情推出“Legendary Minds”访谈系列，探秘当代杰出思想。</span>
        </p>

        <div class="actorFour-m-b" >
            <div v-for="item in itemM">
              <img :src="item.src" alt="" >
                <div>
                    <p>
                        <span v-text="item.text"></span><br>
                        <span>探索更多</span>
                    </p>
                </div>
            </div>
        </div>
        </div> -->
        <div class="actorThree-m ">
          <div>
            <div v-for="i in itemM1">
              <img :src="i.src" alt="">
                 <div class="actorThree-m-b">
                    <p>
                        <span v-text="i.text"></span><br>
                        <span>探索更多</span>
                    </p>
                </div>
            </div>
          </div>
          <div>
              <div v-for="i in itemM2">
              <img :src="i.src" alt="">
                 <div class="actorThree-m-b">
                    <p>
                        <span v-text="i.text"></span><br>
                        <span>探索更多</span>
                    </p>
                </div>
            </div>
          </div>
          <div>
              <div v-for="i in itemM3">
              <img :src="i.src" alt="">
                 <div class="actorThree-m-b">
                    <p>
                        <span v-text="i.text"></span><br>
                        <span>探索更多</span>
                    </p>
                </div>
            </div>
          </div>
          <!-- <div v-for="item in itemM">
              <img :src="item.src" alt="" >
             
            </div> -->
        </div>

   
      </div>

 

      <!-- 最底下三个图 -->
      <div id="top3" style="height:50px">
      </div> 
      <div id="foot" style="margin-bottom:30px">
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
            }
          ],
          tiaozhuan:[],
          children:[],
          isFlag:true,
          syc:100,
          itemM1:[
              {src:"../../static/ActorThree-m/bg1.jpg",text:'ADAM RIESS'},
              {src:"../../static/ActorThree-m/bg2.jpg",text:'DUNCAN HALDANE'},
              {src:"../../static/ActorThree-m/bg3.jpg",text:'ROBERT KYNCL'},
              {src:"../../static/ActorThree-m/bg4.jpg",text:'SCOTT HARRISON'},
              {src:"../../static/ActorThree-m/bg5.jpg",text:'JOACHIM FRANK'},
              {src:"../../static/ActorThree-m/bg6.jpg",text:'EDVARD MOSER'},
              {src:"../../static/ActorThree-m/bg7.jpg",text:'RUFUS GIFFORD'},
              {src:"../../static/ActorThree-m/bg8.jpg",text:'ALVIN ROTH'},
              {src:"../../static/ActorThree-m/bg9.jpg",text:'MICHAEL LEVITT'},
              {src:"../../static/ActorThree-m/bg16.jpg",text:'RUFUS GIFFORD'},

          ],
          itemM2:[
              {src:"../../static/ActorThree-m/bg11.jpg",text:'DUNCAN HALDANE'},
              {src:"../../static/ActorThree-m/bg12.jpg",text:'ROBERT KYNCL'},
              {src:"../../static/ActorThree-m/bg13.jpg",text:'SCOTT HARRISON'},
              {src:"../../static/ActorThree-m/bg14.jpg",text:'JOACHIM FRANK'},
              {src:"../../static/ActorThree-m/bg15.jpg",text:'EDVARD MOSER'},
              {src:"../../static/ActorThree-m/bg17.jpg",text:'ALVIN ROTH'},
              {src:"../../static/ActorThree-m/bg19.jpg",text:'MICHAEL LEVITT'},
              {src:"../../static/ActorThree-m/bg28.jpg",text:'MICHAEL LEVITT'},
              {src:"../../static/ActorThree-m/bg10.jpg",text:'ADAM RIESS'},

              {src:"../../static/ActorThree-m/bg20.jpg",text:'ADAM RIESS'},
          ],
          itemM3:[
              {src:"../../static/ActorThree-m/bg21.jpg",text:'DUNCAN HALDANE'},
              {src:"../../static/ActorThree-m/bg22.jpg",text:'ROBERT KYNCL'},

              {src:"../../static/ActorThree-m/bg18.png",text:'MICHAEL LEVITT'},

              {src:"../../static/ActorThree-m/bg23.jpg",text:'SCOTT HARRISON'},
              {src:"../../static/ActorThree-m/bg24.jpg",text:'JOACHIM FRANK'},
              {src:"../../static/ActorThree-m/bg25.jpg",text:'EDVARD MOSER'},
              {src:"../../static/ActorThree-m/bg26.jpg",text:'RUFUS GIFFORD'},
              {src:"../../static/ActorThree-m/bg27.jpg",text:'ALVIN ROTH'},
              {src:"../../static/ActorThree-m/bg29.jpg",text:'MICHAEL LEVITT'},
              {src:"../../static/ActorThree-m/bg30.jpg",text:'MICHAEL LEVITT'}
          ]
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
                console.log("ok"+index);
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
.actorThree-m{
    width: 62%;
    margin: 90px auto 0;
    /* background-color: #000; */
    display: flex;
    justify-content: space-between;
}
.actorThree-m>div{
    width: 32.58%;
    box-sizing: border-box;
}
.actorThree-m>div>div{
  position: relative;
  cursor: pointer;
}
.actorThree-m>div>div:hover .actorThree-m-b{
  display: block;
}
.actorThree-m>div img{
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 10px;
}
.actorThree-m-b{
    display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  transform: translate(-50%,-50%);
  z-index: 1;
}
.actorThree-m-b p{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 20px;
}
</style>
