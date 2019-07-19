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
            <router-link to="/" style="color:white;">男人装</router-link>
        </div>
        <div id="navList">
          <ul id="navList-ul" class="scroll-M">
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
          <router-link to="/account" class="scroll-M Item-m" style="  color:#fff !important;">我的账户</router-link>
        </div>
         <div class="topBarItem">
          <router-link to="/cart" class="scroll-M Item-m" style="  color:#fff !important;">购物袋</router-link>
        </div>
      </div>
      <div id="top">
        <div id="fm1">
          <img src="../../static/Bespoke-m/bg.jpg" alt="">
        </div>
        <div id="title-wrap" class="oneTitle" style="top:50%">
          <p style="font-weight:700;font-size:18px;margin-bottom: 28px;">探索BRIONI的BESPOKE量身定制服务</p>
          <p style="font-weight:400;font-size:11px;">观看视频</p>
        </div>
       <video controls="controls" autoplay="autoplay" style="position:absolute;left:0;top:0;width:100%;height:auto;z-index:800">
             <source src="../../static/Bespoke-m/vdo.mp4" type="video/mp4" />
       </video>

      </div>
      <div id="top2" class="topM">
        <div id="fm1">
          <!-- <img src="../assets/logo2.jpg" alt=""> -->
        </div>
        <div id="title-wrap" style="top:150px">
          <p style="font-weight:700;margin-bottom:30px;font-size:18px;cursor: auto;">BESPOKE量身定制</p>
          <p style="font-weight:400;font-size:11px;cursor: auto;">
              <span class="cta-m"><a href="javascript:;" class="time-m">预约您的专属会面时间</a></span>
          </p>

          <div class="bespoke-m">
              <div>
                  <img src="../../static/Bespoke-m/bg1.jpg" alt="">
              </div>
              <div>
                  <div class="bespoke-m-r">
                      <h2>BESPOKE量身定制的世界</h2>
                      <p style="cursor:auto;margin:0">&nbsp;</p>
                      <p style="cursor:auto;font-size:11px">欢迎来到 Brioni Bespoke量身定制的世界。这是一项专为全球具影响力的男士所提供的个性化服务，旨在满足绅士们对剪裁工艺的个人品味和着装需求。Bespoke量身定制服务将以其尊贵的专享体验、灵活的个性化选择及精湛的手工匠艺向 Brioni 绅士致敬。</p>
                  </div>
              </div>
          </div>
        </div>
      </div>  
      <div class="top-m topM">
        <div id="fm1" style="height:569px" class="fm1-mm">
          <img src="../../static/Bespoke-m/bg2.jpg" alt="">
          <div class="fm1-m">
              <span>
               Brioni邀请您探索Bespoke的新天地。在品牌自家的资深制衣工匠的专业指导下，客户可以自主选择服装的每个微小细节——从面料、剪裁，款式、廓形，到纽扣、翻领和衬里——每一项元素都将化身成个性符号。您的私人裁缝将施展精湛工艺，用独具匠心的艺术作品塑造您的个人风格。
              </span>
          </div>
        </div>
      </div>
      <div class="top1-m navM" style="overflow:hidden"> 
             <div class="top1-m-t">
                <div>
                    <img src="../../static/Bespoke-m/bg3.jpg" alt="">
                </div>
                <div>
                  <div class="bespoke-m-r">
                      <h2>丰富面料</h2>
                      <p style="cursor:auto;margin:0">&nbsp;</p>
                      <p style="cursor:auto;font-size:11px">Brioni 品牌提供各类丰富的面料以供挑选；800多款面料或稀有或特别，或传统或典雅，总有一款契合您与众不同的气质和品味。Bespoke量身定制客户可以从种类繁多的轻质羊绒、羊绒及精细的羊毛面料中选择所钟情的颜色与图案。</p>
                  </div>
              </div>
          </div>
           <div class="top1-m-t">
                <div>
                  <div class="bespoke-m-b bespoke-m-r">
                      <h2>丰富面料</h2>
                      <p style="cursor:auto;margin:0">&nbsp;</p>
                      <p style="cursor:auto;font-size:11px">Brioni 品牌提供各类丰富的面料以供挑选；800多款面料或稀有或特别，或传统或典雅，总有一款契合您与众不同的气质和品味。Bespoke量身定制客户可以从种类繁多的轻质羊绒、羊绒及精细的羊毛面料中选择所钟情的颜色与图案。</p>
                  </div>
              </div>
                <div>
                    <img src="../../static/Bespoke-m/bg4.jpg" alt="">
                </div>
          </div>
      </div>

      <div class="top2-m topM">
          <div id="fm1">
             <img src="../../static/Bespoke-m/bg5.jpg" alt="">
          </div>
          <div class="top2-m-t">
              <div>
                <p style="cursor:auto">您可亲自前往店内了解BESPOKE量身定制服务；BRIONI 的裁缝大师还可按您的意愿，前往您的家中、酒店、办公室或其他场所竭诚为您提供贴心的服务。</p>
                <p><span><a href="javascript:;" title="预约您的专属会面时间">预约您的专属会面时间</a></span></p>
              </div>
          </div>
      </div>

     <div class="top3-m topM" style="height:555px">
            <div class="top3-m-t"><h2>DISCOVER MORE</h2></div>
            <div class="top3-m-b">
                <div>
                    <img src="../../static/Bespoke-m/bg6.jpg" alt="">
                    <div class="top-m-c">
                        <p><span>全新广告特辑</span></p>
                    </div>
                    </div>
                <div><img src="../../static/Bespoke-m/bg7.jpg" alt="">
                   <div class="top-m-c">
                        <p><span>裁剪的艺术</span></p>
                    </div>
                </div>
                <div><img src="../../static/Bespoke-m/bg8.jpg" alt="">
                   <div class="top-m-c">
                        <p><span>店铺搜寻</span></p>
                    </div>
                </div>
            </div>
     </div>    
      <div id="top3" style="height:50px">
        <!-- <div id="title-wrap">
          <p style="font-weight:700;margin-top:10px;">店铺搜寻</p>
          <p style="font-weight:400;font-size:11px;">探索更多</p>
        </div> -->
      </div> 
      <div id="foot" style="margin-bottom:50px">
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
          scroll: ''
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
      //   menu(){
      //     this.scroll=document.documentElement.scrollTop || document.body.scrollTop;
      //     var navM= document.querySelectorAll('.scroll-M>a');
      //     var ulM= document.getElementById('navList-ul').children;
      //     var top= document.getElementsByClassName('topM');
      //     if(this.scroll<top[0].offsetTop){
      //         for(var i=0;i<navM.length;i++){
      //         navM[i].style.color='#fff'
      //       }
      //       for( var j=0;j<ulM.length;j++){
      //         ulM[j].style.color='#fff'
      //       }
      //   }else{
      //       for(var i=0;i<navM.length;i++){
      //         navM[i].style.color='#000'
      //       }
      //       for( var j=0;j<ulM.length;j++){
      //         ulM[j].style.color='#000'
      //       }
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

.Item-m{

   transition: color .4s ease;
}
</style>
