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
           <router-link to="/">男人装</router-link>
        </div>
      </div>

      <div id="bigContent">
        <div id="nav">
        <div id="navImg" style="color:#000">
           男人装
        </div>
        <div id="navList">
          <ul id="navList-ul">
            <li v-for="(ii,index) of  navList" @click="xiala(index)" style="color:#000">
              {{ii.title}}
             <div id="xialaDiv"  :hao="index"  v-if="seen = (cc==index) ? true:false">
                <ul>
                  <li v-for="(child,index) of children" @click='go(index)'>
                    {{child}}
                  </li>
                </ul>
             </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="nav2" style="color:#000">
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

      <!-- 顶部 -->
      <!-- <div id="top" style="height:650px">
        <div id="fm1">
          <img src="../../static/Atr-m/bg.jpg" alt="">
        </div>
        <div id="title-wrap" class="oneTitle" style="top:50%">
          <p style="font-weight:700;font-size:18px;margin-bottom: 28px; ">THE ART OF TAILORING </p>
          <p style="font-weight:400;font-size:11px; ">
            <span style="cursor:pointer;font-size: 12px;letter-spacing: .16em;">WATCH THE VIDEO</span> </p>
        </div>
      </div> -->
      <!-- 内容开始 -->
        <div class="actor-m">
            <div>
                <div>
                    <img src="../../static/Actor-m/bg.jpg" alt="">
                    </div>
                <div class="actor-m-r">
                 <div>
                   <h2>PIERCE BROSNAN 与 BRIONI</h2>
                    <p>
                        Brioni 宣布 Pierce Brosnan 将代言 2019 春夏“传世精裁”广告特辑。 <br>
                        Brosnan 是时装屋的多年老友，也是好莱坞标志性演员之一，他代表并加强了品牌与电影业的紧密联系。<br>
                        Brioni 与 Brosnan 的合作始于1995年，当时品牌负责他于电影《黄金眼》中的着装，这是他出演詹姆斯·邦德的首部电影，伴随着 007 系列电影，两者的合作也一直延续至今。
                    </p> 
                 </div>

                </div>
                
            </div>

            <div>
                <img src="../../static/Actor-m/bg1.jpg" alt="">
            </div>

            <div>
                <div style="width:54%;margin:0 auto;">
                <img src="../../static/Actor-m/bg2.jpg" alt="">
                </div>
            </div>

            <div>
                <img src="../../static/Actor-m/bg3.jpg" alt="">
            </div>
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
          isFlag:true,
          syc:100
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
.actor-m{
    width: 62%;
    margin: 90px auto 0;
    /* height: 500px; */
    /* background:#000; */
        font-family: Arial,Verdana,sans-serif;
}
.actor-m>div:nth-child(1){
    display: flex;
    justify-content: space-around;
}
.actor-m>div:nth-child(1)>div{
    flex:1;
}
.actor-m img{
    width: 100%;
    height: auto;
    cursor: pointer;
    display: block;
}
.actor-m-r >div{
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
}
.actor-m-r{
    position: relative;
}
.actor-m-r h2{
    text-align:center;
    font-size:13px;
    letter-spacing: .16em;
    margin-bottom:10px;
}
.actor-m-r p{
    padding: 0 30px;
    line-height: 18px;
    box-sizing: border-box;
    font-size:12px;
    text-align: justify;
    letter-spacing: .16em;
}
.actor-m>div{
    margin-bottom: 60px;
}
</style>
