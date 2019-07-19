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
          <router-link to="/account" class="Item-m scroll-M">我的账户</router-link>
        </div>
         <div class="topBarItem">
          <router-link to="/cart"  class="Item-m scroll-M">购物袋</router-link>
        </div>
      </div>
      <div id="top" style="height:650px">
        <div id="fm1">
          <img src="../../static/Denims-m/bg.jpg" alt="">
        </div>
        <div id="title-wrap" class="oneTitle" style="top:50%">
          <p style="font-weight:700;font-size:18px;margin-bottom: 28px; cursor:auto">BRIONI MADE TO ORDER DENIM </p>
          <p style="font-weight:400;font-size:11px; cursor:auto">
            <span style="cursor:pointer;text-decoration: underline;font-size: 15px;letter-spacing: .16em;">预约一次会面</span> </p>
        </div>
      </div>
      <div id="top2" style="height:1300px" class="topM">
        <div id="title-wrap" style="top:55px">
          <div class="bespoke-m">
              <div>
                  <img src="../../static/Denims-m/bg1.jpg" alt="">
              </div>
              <div>
                  <div class="bespoke-m-r">
                      <h2>定制牛仔</h2>
                      <p style="cursor:auto;margin:30px 0;">呈献 Brioni 定制牛仔，全新服务升级 Brioni 绅士休闲衣橱。</p>
                      <p style="cursor:auto;font-size:11px">个性化牛仔服务仅于指定 Brioni 精品店提供，顾客可从四种款型中进行挑选，包括两个经典牛仔款与两个长裤款，更有 13 种优质牛仔面料可供选择。</p>
                  </div>
              </div>
          </div>

          <div style="width: 62%;margin: 140px auto;">
            <img src="../../static/Denims-m/bg2.jpg" alt="" style="width:100%;height:auto">
        </div>
        </div>
      </div>  
      <div class="top-m topM">
        <div id="fm1" style="height:569px" class="fm1-mm">
          <img src="../../static/Denims-m/bg3.jpg" alt="">
        </div>
      </div>
      <div class="top1-m topM" style="overflow:hidden"> 
                     <div class="top1-m-t">
                <div>
                  <div class="bespoke-m-b bespoke-m-r" style="padding-right:60px;">
                      <!-- <h2>丰富面料</h2> -->
                      <p style="cursor:auto;font-size:11px;width:358px">个性化服务包括可于服装上添加由多达三个首字母组成的交织文字、自由挑选缝线、纽扣与标签，成就真正个性造型。</p>
                      <p style="cursor:auto;font-size:11px;margin:20px 0;">精心打造每件单品，为每位顾客量身定制，保证兼具舒适与品质的穿着体验。</p>
                      <p style="cursor:auto;font-size:11px">休闲不失优雅，Brioni 绅士本色。</p>
                  </div>
              </div>
                <div>
                    <img src="../../static/Denims-m/bg4.jpg" alt="">
                </div>
          </div>
             <div class="top1-m-t">
                <div>
                    <img src="../../static/Denims-m/bg5.jpg" alt="">
                </div>
          </div>
      </div>

      <div class="clothing-m topM">
          <div>
            <img src="../../static/Denims-m/bg6.jpg" alt="">
          </div>
          <div class="clothing-m-r">
              <p style="flex: 0 100%;"><span>精品店</span></p>
              <p v-for="item in  clothingM" style="flex: 0 50%;font-size:11px;letter-spacing: .16em;">
                {{item}} 
                <a href="javascript:;" v-text="more" style="display:block;color:#000;text-decoration: underline;"></a>
              </p>
          </div>
      </div>

      <div class="top2-m topM" style="height:auto">
          <div id="fm1">
             <img src="../../static/Denims-m/bg7.jpg" alt="" style="display:block">
          </div>
          <div style="position:absolute;text-align:center;width:100%;top:50%">
              <span class="cta2-m"><a href="javascript:;">预约您的专属会面时间</a></span>
          </div>
      </div>

      <!-- 最底下三个图 -->
     <div class="top3-m topM" style="height:555px">
            <div class="top3-m-t"><h2>DISCOVER MORE</h2></div>
            <div class="top3-m-b">
                <div>
                    <img src="../../static/Denims-m/bg8.jpg" alt="">
                    <div class="top-m-c">
                        <p><span>选购牛仔</span></p>
                    </div>
                    </div>
                <div><img src="../../static/Denims-m/bg9.jpg" alt="">
                   <div class="top-m-c">
                        <p><span>BESPOKE 量身定制服务</span></p>
                    </div>
                </div>
                <div><img src="../../static/Denims-m/bg10.jpg" alt="">
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
        menu(){
          this.scroll=document.documentElement.scrollTop || document.body.scrollTop;
          var navM= document.querySelectorAll('.scroll-M>a');
          var ulM= document.getElementById('navList-ul').children;
          var top= document.getElementsByClassName('topM'); 
        if(this.scroll<top[0].offsetTop){
                for(var i=0;i<navM.length;i++){
              navM[i].style.color='#fff'
            }
            for( var j=0;j<ulM.length;j++){
              ulM[j].style.color='#fff'
            }
        }else {
            for(var i=0;i<navM.length;i++){
              navM[i].style.color='#000'
            }
            for( var j=0;j<ulM.length;j++){
              ulM[j].style.color='#000'
            }
          }

        },
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
       
      }
}
</script>

<style scoped>
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
  color : #fff;
    transition: color .4s ease;
}
</style>
