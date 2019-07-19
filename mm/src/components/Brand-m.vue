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
        <div id="navImg" class="scroll-M">
            <router-link to="/" style="color:white">男人装</router-link>
        </div>
        <div id="navList">
          <ul id="navList-ul">
            <li v-for="(ii,index) of  navList" @click="xiala(index)">
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
      <div id="nav2" class="scroll-M">
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
          <router-link to="/account" class="scroll-M Item-m">我的账户</router-link>
        </div>
         <div class="topBarItem">
          <router-link to="/cart" class="scroll-M Item-m">购物袋</router-link>
        </div>
      </div>

      <!-- 第一个图开始 -->
      <div id="top" style="height:660px;position: relative; min-width:1200px " >
        <div id="fm1">
          <img src="../../static/Brand-m/bg1.jpg" alt="">
        </div>
        <div id="title-wrap" class="oneTitle" style="top:18%">
          <p style="font-weight:700;font-size:15px;margin-bottom: 28px; ">品牌传承</p>
        </div>
        <div class="brand-m">
          <div style='widht:75%'>
              <h2>1945</h2>
              <p>1945年在罗马巴贝里尼大街79号 BRIONI 首家精品店开幕，并很快成为娱乐界、政界及商界人士的品味之选</p>
              <p><span @click='downM1'>»</span></p>
          </div>
        </div>
        </div>
        <!-- 第二个图开始 -->
        <div id="top" style="height:660px;position: relative; min-width:1200px " class="big-M2">
        <div id="fm1">
          <img src="../../static/Brand-m/bg2.jpg" alt="">
        </div>
        <div class="brand-m">
          <div>
              <h2>1952</h2>
              <p>1952年 BRIONI 举办了服装史上的第一场男装秀。品牌在佛罗伦萨碧提宫的白厅（SALA BIANCA DI PALAZZO PITTI）推出崭新廓形、前卫配色与创新面料</p>
              <p ><span @click='downM2' >»</span></p>
          </div>
        </div>
        </div>

        <!-- 第三图开始 -->

    <div id="top" style="height:660px;position: relative; min-width:1200px "  class="big-M3" >
        <div id="fm1">
          <img src="../../static/Brand-m/bg3.jpg" alt="">
        </div>
        <div class="brand-m">
          <div>
              <h2>1959</h2>
              <p>1959 年 BRIONI 在阿布鲁佐大区(ABRUZZO)的佩内（PENNE）创立了一间工作室，意大利裁缝手工艺的传统根植于此。他们把努力的成果命名为 BRIONI ROMAN STYLE, 引入高级成衣细致严苛的行业标准，并以此奠定了品牌的显耀声望</p>
              <p ><span @click='downM3' >»</span></p>
          </div>
        </div>
        </div>
        <!-- 第四图开始 -->
   <div id="top" style="height:660px;position: relative; min-width:1200px " class="big-M4" >
        <div id="fm1">
          <img src="../../static/Brand-m/bg4.jpg" alt="">
        </div>
        <div class="brand-m">
          <div>
              <h2>1985</h2>
              <p>1985年，品牌在创始人之一NAZARENO FONTICOLI出生的小镇PENNE成立了缝纫学校（SCUOLA DI ALTA SARTORIA），将 BRIONI 引以为豪的缝纫方法教授给年轻一代。</p>
              <!-- <p ><span>»</span></p> -->
          </div>
        </div>
        </div>
      </div>

      <!-- <div id="top3" style="height:50px">
      </div>  -->
      <div id="foot" style="margin-bottom:20px">
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
          scorll: ''
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
        downM1(){
            document.querySelector(".big-M2").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        },
        downM2(){
            document.querySelector(".big-M3").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        },
         downM3(){
            document.querySelector(".big-M4").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        },
        // menu(){
        //   this.scroll=document.documentElement.scrollTop || document.body.scrollTop;
        //   var navM= document.querySelectorAll('.scroll-M>a');
        //   var ulM= document.getElementById('navList-ul').children;
        //   var top= document.getElementsByClassName('big-M4')[0];

        //   if(this.scroll>top.offsetTop){
        //           for(var i=0;i<navM.length;i++){
        //       navM[i].style.color='#000'
        //     }
        //     for( var j=0;j<ulM.length;j++){
        //       ulM[j].style.color='#000'
        //     }
        //   }else{
        //           for(var i=0;i<navM.length;i++){
        //       navM[i].style.color='#fff'
        //     }
        //     for( var j=0;j<ulM.length;j++){
        //       ulM[j].style.color='#fff'
        //     }
        //   }
        // },
           go(a){
      var that=this;
      this.tiaozhuan.forEach(function(item,index){
        if(index == a){
          that.$router.push("/"+item+"")
        }
     })
    }
      },
      mounted(){
        // window.addEventListener('scroll',this.menu)
      }
}
</script>

<style scoped>
.brand-m{
  height: 18%;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  bottom: 0;
  left: 0;
}
.brand-m h2{
  text-align: center;
  color: #fff;
  font-size: 14px;
  letter-spacing: .1em;
    line-height: 30px;
  
}
.brand-m p{
  text-align: center;
  color: #fff;
  font-size: 13px;
  letter-spacing: .1em;
}
.brand-m div{
  padding-top: 20px;
  width: 62%;
  margin: 0 auto;
}
.brand-m p span{
  font-size: 36px;
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translate(-50%) rotate(90deg);
  animation: M 2s .4s infinite alternate;
  cursor: pointer;
  bottom: -10px;
}
@keyframes M{
  0%{
    bottom: -10px;
  }
  50%{
    bottom: -5px;
  }
  100%{
 bottom: -10px;
  }
}
.Item-m{
  color : #fff;
    transition: color .4s ease;
}

</style>
