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
            <router-link to="/" style="color:#fff">男人装</router-link>
        </div>
        <div id="navList">
          <ul id="navList-ul" class="scroll-M">
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
      <div class="topBarItem ">
          <router-link to="/account" class="scroll-M Item-m">我的账户</router-link>
        </div>
         <div class="topBarItem">
          <router-link to="/cart" class="scroll-M Item-m">购物袋</router-link>
        </div>
      </div>
      <div id="top" style="height:650px">
        <div id="fm1">
          <img src="../../static/Atr-m/bg.jpg" alt="">
        </div>
        <div id="title-wrap" class="oneTitle" style="top:50%">
          <p style="font-weight:700;font-size:18px;margin-bottom: 28px; ">THE ART OF TAILORING </p>
          <p style="font-weight:400;font-size:11px; ">
            <span style="cursor:pointer;font-size: 12px;letter-spacing: .16em;">WATCH THE VIDEO</span> </p>
        </div>
     </div>

  <div class="top1-m topM"> 
             <div class="top1-m-t">
                <div>
                    <img src="../../static/Atr-m/bg1.jpg" alt="">
                </div>

                <div>
                  <div class="bespoke-m-b bespoke-m-r" style="padding:100px 0 0 60px;">
                      <h2>创作中的匠师</h2>
                      <p style="cursor:auto;font-size:11px;width:328px">Brioni的裁缝师们为制衣艺术先驱, 锐意突破传统丶创新裁剪工艺。他们精通裁剪缝制：精湛工艺的浸润每个隐秘细节，品质彰显Brioni个性化服装。从裁剪到整烫，每一步工序的精益求精赋予Brioni西装灵魂和生命力。匠师们的创意丶渊博知识与精湛技艺,代代相传。每一套西装皆是Brioni式制衣工艺的结晶，品牌细致考究的制作流程需经过220道工序丶耗时至少22小时精细手工打造。</p>
                  </div>
              </div>
          </div>

          <div class="top1-m-t">
                <div>
                  <div class="bespoke-m-b bespoke-m-r" style="padding:100px 0 60px 0;">
                      <h2>&nbsp;</h2>
                      <p style="cursor:auto;font-size:11px;width:358px">西装的廓形隐藏着在专业工匠的严格层层监管下丶不下于6000步一丝不苟和严谨的手工针脚。根植精湛手工技艺，Brioni的西装轻柔地抚摸着身体並精妙构成整体廓形。塑造的过程，需要Brioni裁缝匠师与顾客共同创造别出心裁的艺术作品，与身体丶个性丶所需与所想间寻求平衡。</p>
                  </div>
              </div>
                <div>
                    <img src="../../static/Atr-m/bg2.jpg" alt="">
                </div>
          </div>
      </div>

        <div class="top-m topM">
        <div id="fm1" style="height:569px" class="fm1-mm">
          <img src="../../static/Atr-m/bg3.jpg" alt="">
        </div>
      </div>

      <div id="top2" style="height:850px" class="topM">
        <div id="title-wrap" style="top:55px">
          <div class="bespoke-m">
                        <div>
                  <div class="bespoke-m-r" style="padding:0 20px 0 0 ">
                      <h2>人杰地灵</h2>
                      <p style="cursor:auto;font-size:11px">
                          佩内(Penne)与Brioni互为左右 – 佩内等同Brioni，Brioni等同佩内。鹅卵石道丶巍峨城堡与迷人风景，漫长的冬季伴随着宁静的夏季，意大利阿布鲁佐(Abruzzo)大区的静谧小镇孕育出专注精神与手工技艺。意大利裁缝手工艺的传统根植于此。事实上，裁剪缝制工艺一直融于这个热情奔放民族的血液之中，成就蜚声于世的匠心技艺。
                      </p>
                  </div>
              </div>
              <div>
                  <div class="bespoke-m-r" style="padding:0 0 0 20px">
                      <h2>&nbsp;</h2>
                      <p style="cursor:auto;font-size:11px">
                        1959 年，Brioni品牌创始人之一丶其中一位在罗马颇具声望的裁缝 -Nazareno Fonticoli与他的合伙人Gaetano Savini（Prêt-á-Couture高级定制成衣理念的先驱），在佩内创立了一间工业化的高级成衣工作室。雄心壮志的 Fonticoli 不遗余力地召集当地出色的工匠，在家乡开启了他的寻梦之旅。他们把努力的成果命名为 Brioni Roman Style，将罗马美学和谐融入阿布鲁佐本土理念。
                        </p>
                  </div>
              </div>
          </div>

          <div style="width: 62%;margin: 80px auto 0; display:flex;justify-content: space-between">
            <!-- <img src="../../static/Denims-m/bg2.jpg" alt="" style="width:100%;height:auto"> -->
            <div style="width:32%"><img src="../../static/Atr-m/bg4.jpg" alt="" style="width:100%;height:auto"></div>
            <div style="width:32%"><img src="../../static/Atr-m/bg5.jpg" alt="" style="width:100%;height:auto"></div>
            <div style="width:32%"><img src="../../static/Atr-m/bg6.jpg" alt="" style="width:100%;height:auto"></div>
        </div>
        </div>
      </div>  
      <div class="top-m topM">
        <div id="fm1" style="height:569px" class="fm1-mm">
          <img src="../../static/Atr-m/bg7.jpg" alt="">
        </div>
      </div>
      <div class="top1-m topM"> 

             <div class="top1-m-t">
                <div>
                    <img src="../../static/Atr-m/bg8.jpg" alt="">
                </div>

                <div>
                  <div class="bespoke-m-b bespoke-m-r" style="padding:100px 0 0 60px;">
                      <!-- <h2>丰富面料</h2> -->
                      <p style="cursor:auto;font-size:11px;width:358px">通过自己的学校培养专属的裁缝师，Brioni 以此奠定其在男装制衣领域举足轻重的地位，跻身时尚翘楚。每四年仅有16名学员通过层层严格筛选，在位于城镇中心一座古朴的历史建筑内的校舍开始他们的课程。伴随着希冀与艺术使命，裁缝培训学校(Scuola di Alta Sartoria)的训练超越普通的制衣课程：将信念贯彻始终，坚信美好的未来源于深厚的历史传承。</p>
                  </div>
              </div>
          </div>

          <div class="top1-m-t">
                <div>
                  <div class="bespoke-m-b bespoke-m-r" style="padding:100px 0 60px 0;">
                      <!-- <h2>丰富面料</h2> -->
                      <p style="cursor:auto;font-size:11px;width:358px">通过自己的学校培养专属的裁缝师，Brioni 以此奠定其在男装制衣领域举足轻重的地位，跻身时尚翘楚。每四年仅有16名学员通过层层严格筛选，在位于城镇中心一座古朴的历史建筑内的校舍开始他们的课程。伴随着希冀与艺术使命，裁缝培训学校(Scuola di Alta Sartoria)的训练超越普通的制衣课程：将信念贯彻始终，坚信美好的未来源于深厚的历史传承。</p>
                  </div>
              </div>
                <div>
                    <img src="../../static/Atr-m/bg9.jpg" alt="">
                </div>
          </div>
      </div>

 

      <!-- 最底下三个图 -->
     <div class="top3-m topM" style="height:555px">
            <div class="top3-m-t"><h2>DISCOVER MORE</h2></div>
            <div class="top3-m-b">
                <div>
                    <img src="../../static/Atr-m/bg10.jpg" alt="">
                    <div class="top-m-c">
                        <p><span>选购牛仔</span></p>
                    </div>
                    </div>
                <div><img src="../../static/Atr-m/bg11.jpg" alt="">
                   <div class="top-m-c">
                        <p><span>BESPOKE 量身定制服务</span></p>
                    </div>
                </div>
                <div><img src="../../static/Atr-m/bg12.jpg" alt="">
                   <div class="top-m-c">
                        <p><span>店铺搜寻</span></p>
                    </div>
                </div>
            </div>
     </div>    
      <div id="top3" style="height:50px">
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
          clothingM:[
            'BAL HARBOUR',
            'MILANO',
            'BEIJING',
            'NEW YORK',
            'HONG KONG IFC MALL',
            'PARIS ',
            'LONDON BRUTON STREET ',
            'ROMA ',
            'LONDON HARRODS',
            'TOKYO GINZA ',
            'LOS ANGELES ',
            'TOKYO ISETAN SHINJUKU',
            ],
          more:'查看更多',
          scroll:''
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
        // menu(){
        //   //监听滚动条事件
        //   this.scroll=document.documentElement.scrollTop || document.body.scrollTop;
          
        //   var navM= document.querySelectorAll('.scroll-M>a');
        //   var domA= document.getElementsByClassName('Item-m');
        //   var ulM= document.getElementById('navList-ul').children;
        //   var top= document.getElementsByClassName('topM');
        //   // 获取当前元素距离页面顶部的距离
        //   // console.log(top1.offsetTop)
        //   if(this.scroll<top[0].offsetTop){
        //         for(var i=0;i<navM.length;i++){
        //         navM[i].style.color='#fff'
        //     }
        //     for( var j=0;j<ulM.length;j++){
        //       ulM[j].style.color='#fff'
        //     }
        //   }else if(this.scroll>=top[0].offsetTop && this.scroll<=top[1].offsetTop){
        //     for(var i=0;i<navM.length;i++){
        //       navM[i].style.color='#000'
        //     }
        //     for( var j=0;j<ulM.length;j++){
        //       ulM[j].style.color='#000'
        //     }
        //   }else if(this.scroll>=top[1].offsetTop && this.scroll<=top[2].offsetTop){
        //      for(var i=0;i<navM.length;i++){
        //       navM[i].style.color='#fff'
        //     }
        //     for( var j=0;j<ulM.length;j++){
        //       ulM[j].style.color='#fff'
        //     }
        //   }else if(this.scroll>=top[2].offsetTop && this.scroll<=top[3].offsetTop){
        //      for(var i=0;i<navM.length;i++){
        //       navM[i].style.color='#000'
        //     }
        //     for( var j=0;j<ulM.length;j++){
        //       ulM[j].style.color='#000'
        //     }
        //   }else if(this.scroll>=top[3].offsetTop && this.scroll<=top[4].offsetTop){
        //      for(var i=0;i<navM.length;i++){
        //       navM[i].style.color='#fff'
        //     }
        //     for( var j=0;j<ulM.length;j++){
        //       ulM[j].style.color='#fff'
        //     }
        //   }else if(this.scroll>=top[4].offsetTop && this.scroll<=top[5].offsetTop){
        //      for(var i=0;i<navM.length;i++){
        //       navM[i].style.color='#000'
        //     }
        //     for( var j=0;j<ulM.length;j++){
        //       ulM[j].style.color='#000'
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
.top1-m{
  overflow: hidden;
}
.cta2-m{
display: inline-block;
    width: 238px;
    height: 38px;
    line-height: 34px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 2px solid #fff;
    background: #fff;
}
.cta2-m:hover{
    border: 2px solid #fff;
    background: #000;
}
.cta2-m:hover a{
  color: #fff;
}
.cta2-m a{
  font-weight: normal;
    color: #000;
}
.clothing-m{
  overflow: hidden;
    width: 100%;
    padding: 115px 19% 180px;
    background-color: #dedede;
    display: flex;
    box-sizing: border-box;
}
.clothing-m>div{
  flex: 1;
}
.clothing-m>div img{
  width: 100%;
  height: auto;
}
.clothing-m-r{
  margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
}
.clothing-m-r>p>span{
    font-style: normal;
    font-size: 13px;
    letter-spacing: .2em;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-weight: 700;
}
.clothing-m-r>p~p{
    padding: 0;
    box-sizing: border-box;
    padding-right: 10px;
    line-height: 19px;
    font-style: normal;
    text-align: left;
}
.Item-m{
  color:#fff;
      transition: color .4s ease;
}

</style>
