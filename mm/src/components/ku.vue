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
        <div id="navImg" style="color:black;">
           <router-link to="/" style="color:black">男人装</router-link>
        </div>
        <div id="navList">
          <ul id="navList-ul" >
            <li v-for="(ii,index) of  navList" @click="xiala(index)" style="color:black ;">
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
      <div id="nav2" style="color:black ;">
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
          <router-link to="/account" style="color:black !important">我的账户</router-link>
        </div>
         <div class="topBarItem">
          <router-link to="/cart"  style="color:black !important">购物袋</router-link>
        </div>
      </div>
     <div class="clothes">
      <div class="ltitle">
     <h1>裤装</h1>
      </div>
           <div class="lshaixuan">
        <ul class="lul1">
          <li>
           <h6>{{msg}}<i class="iconfont icon-jiahao"></i></h6>
           <ul class="lul2">
             <li v-for="(item,index) in big.color" v-text="item"    @click="choose('color',item,index)"></li>
            <span @click="qingchu">全部颜色 <i class="iconfont icon-dislike"></i></span>
           </ul>
          </li>
          <li>
               <h6>{{msg1}}<i class="iconfont icon-jiahao"></i></h6>
           <ul class="lul2">
             <li v-for="(item,index) in big.leibie" v-text="item"    @click="choose('leibie',item,index)"></li>
         <span @click="qingchu2">全部类别 <i class="iconfont icon-dislike"></i></span>
           </ul>
          </li>
        </ul>
      </div>
      <div class="lbottom">
          <ul>
              <li v-for="(item,index) in ku">
                  <img :src="item.img" alt="">
                  <div class="lxinxi">
                      <div class="linfo">
                        <span v-text="item.info"></span>
                      </div>
                      <div class="linfohover">
                         ￥ <span v-text="item.price"></span>
                      </div>
                  </div>
                  <button class="lbtn" @click="add(index)">
                      <span>添加至购物袋</span>
                  </button>
              </li>
           
          </ul>
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
              msg:"颜色",
           msg1:"类别",
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
         ku:[
              {
                  id:60,
                  img:"../../static/lzyimages/48.jpg",
                  info:"蓝色亚麻裤装 ",
                  price:"5100",
                  count:1
              },
              {
                  id:61,
                  img:"../../static/lzyimages/49.jpg",
                  info:"灰褐色亚麻裤装",
                  price:"5700",
                   count:1
              },
              {
                  id:62,
                  img:"../../static/lzyimages/50.jpg",
                  info:"蓝色 Tigullio 裤装",
                  price:"6400",
                   count:1
              },
              {
                  id:63,
                  img:"../../static/lzyimages/51.jpg",
                  info:"米色裤装",
                  price:"5400",
                   count:1
              },
              {
                  id:64,
                  img:"../../static/lzyimages/52.jpg",
                  info:"绿色裤装",
                  price:"5400",
                   count:1
              },
              {
                  id:65,
                  img:"../../static/lzyimages/53.jpg",
                  info:"“Essential”海军蓝色 Tigullio 裤装",
                  price:"6700",
                   count:1
              },
              {
                  id:66,
                  img:"../../static/lzyimages/54.jpg",
                  info:"“Essential”炭灰色 Tigullio 裤装",
                  price:"6700",
                   count:1
              },
              {
                  id:67,
                  img:"../../static/lzyimages/55.jpg",
                  info:"“Essential”黑色 Tigullio 裤装",
                  price:"6700",
                   count:1
              },
              {
                  id:68,
                  img:"../../static/lzyimages/56.jpg",
                  info:"绿色牛仔裤装 ",
                  price:"7300",
                  count:1
              }
          ],
          shopcar:[],
          
          tiaozhuan:[],
                big:{
            color:["棕色","灰色","白色","米色","红色","绿色","蓝色","黑色"],
           leibie:["牛仔","裤装"]
          },
          have:[],
          cloth2:[],
          shai:[]
        
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
                console.log("ok"+index);
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

    add(index){
        if(localStorage.getItem('shopcar')==null){
        this.shopcar=[];
    }else{
        var data=JSON.parse(localStorage.getItem('shopcar'));
        this.shopcar=data;
    }
    for(var i =0;i<this.shopcar.length;i++)
      {
          if(this.ku[index].info===this.shopcar[i].info)
          {
              alert('已存在商品');
              this.shopcar[i].count++;
              localStorage.setItem('shopcar',JSON.stringify(this.shopcar));
              break;
              
          }
      }

        if(i>=this.shopcar.length)
        {
           if(localStorage.getItem("currentUser") == null){
          alert("请登录");
          }else{
              this.shopcar.push({
              id:this.ku[index].id,
              img:this.ku[index].img,
              info:this.ku[index].info,
              price:this.ku[index].price,
              count:this.ku[index].count,
              user:JSON.parse(localStorage.getItem("currentUser")).username
            });
        localStorage.setItem('shopcar',JSON.stringify(this.shopcar));
                alert('添加成功');
          }
        }
        else
        {
            return;
        }

    },
     go(a){
      var that=this;
     this.tiaozhuan.forEach(function(item,index){
        if(index == a){
          that.$router.push("/"+item+"")
        }
     })
    },
  choose(key,value,index){
  var that=this;
  this.have=[];
  var arr=[];
  this.ku=this.cloth2;
    if(this.big.color.indexOf(value) !=-1){
    this.msg = this.big.color[index] 
    if( this.big.color.indexOf(value) !=-1){
      this.$set(this.shai,key,value)
     }
    }
    else if(this.big.leibie.indexOf(value) !=-1){
    this.msg1 = this.big.leibie[index]
     if( this.big.leibie.indexOf(value) !=-1){
      this.$set(this.shai,key,value)
     } 
     }
  for(var i in this.shai){
    arr.push(this.shai[i]);
  }
  this.ku.forEach(function(item,index){
      var count=0;
      for(var i=0;i<arr.length;i++){
        if(item.info.indexOf(arr[i])!=-1){
          count++;
        }
      }  
      if(count==arr.length){
        that.have.push(item);
      }
  })
  this.ku=this.have;

  },
     qingchu(){
      for(var i in this.shai){
        if(this.big.color.indexOf(this.shai[i])!=-1){
         delete this.shai.color
        }
      }
      this.common();
    this.msg = "颜色";
     },
     qingchu2(){
    
      for(var i in this.shai){
        if(this.big.leibie.indexOf(this.shai[i])!=-1){
         delete this.shai.leibie
        }
      }
    this.common();
    this.msg1 = "类别";
     },
     common(){
        var that=this;
       var arr2=[];
         this.have=[];
         this.ku=this.cloth2;
          for(var i in this.shai){
        arr2.push(this.shai[i]);
     }
      this.ku.forEach(function(item,index){
      var count=0;
      for(var i=0;i<arr2.length;i++){
        if(item.info.indexOf(arr2[i])!=-1){
          count++;
        }
      }  
      if(count==arr2.length){
        that.have.push(item);
      }
  })
   this.ku=this.have;
     }
        },
        mounted(){
    this.cloth2=this.ku;

        }
      
}
</script>
<style>
.lul2 span{
    margin-top: 15px;
    font-size: 14px;
    display:block;
}
.lshaixuan{
      position: relative;
      
}
.lshaixuan ul{
  text-align: center;
    list-style: none;
}
.lshaixuan h6{
      display: block;
          font-family: Arial,Verdana,sans-serif;
    font-weight: 700;
    cursor: pointer;
}
.lshaixuan h6 i{
     vertical-align: middle
}
.lul1 li{
      display: inline-block;
    margin: 0 22px;
    max-width: 25%;
    padding-bottom: 30px;
    position: relative;
    vertical-align: top;
    white-space: nowrap;
    list-style: none;
    list-style-type: none;
}
.lul2{
      margin-left: -89px;
          font-family: Arial,Verdana,sans-serif;
    font-weight: 400;
        box-shadow: 0 0 8px #eaeaea;
    font-style: normal;
    background: #fff;
    display: none;
    left: 50%;
    padding: 32px 55px;
    position: absolute;
    top: 30px;
    z-index: 2;
    list-style: none;
}
.lul2 li{
  cursor: pointer;
}
.lul1 .lul2 li{
  font-size:12px;
      display: block;
    text-transform: lowercase;
       padding-bottom: 3px;
}
.lul1 li:hover .lul2{
  display: block;
}
.clothes{
    width:836.38px;
      min-height: 500px;
  height: auto;
    margin: 0 auto;
    padding-bottom: 94px;
    padding-top: 90px;
}
.ltitle{
    margin-bottom: 37px;
}
.ltitle h1{
     font-family: LabGrotesque-Bold,sans-serif;
    font-style: normal;
    font-size: 15px;
    letter-spacing: .2em;
    color: #000;
    text-transform: uppercase;
    line-height: 1;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
}
.lbottom ul{
    list-style: none;
    overflow: hidden;
    padding-right: 20px;
}
.lbottom ul li{
     display: inline-block;
    margin-right: -4px;
    width: 249.39px;
    text-align: center;
    padding-left: 22px;
    vertical-align: bottom;
    cursor: pointer;
}
.lbottom ul img{
        min-height: 270px;
            width: 249.39px;
    position: relative;
}
.lxinxi{
        margin-top: 5px;
    min-height: 25px;
    font-size: 11px;
    letter-spacing: .16em;
        width: 100%;
    position: relative;
}
.linfo{
    opacity: 1;
    visibility: visible;
}
.linfohover{
        opacity: 0;
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    visibility:hidden;
    letter-spacing: 2px;
    width: 100%;
}
.lbottom ul li:hover .linfo{
    opacity: 0;
   visibility: hidden;
}
.lbottom ul li:hover .linfohover{
    opacity: 1;
    visibility: visible;
}
.lbtn{
    font-family: LabGrotesque-Regular,sans-serif;
    font-style: normal;
    font-size: 11px;
    letter-spacing: .16em;
    background-color: #000;
    border-radius: 0;
    border: 1px solid #000;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    padding: 0 10px;
      width: 150px;
    margin-bottom: 10px;
     height: 35px;
     outline: none;
    box-sizing: border-box;
}
</style>
