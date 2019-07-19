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
               <router-link to="/">男人装</router-link>
        </div>
        <div id="navList">
          <ul id="navList-ul">
            <li v-for="(ii,index) of  navList" @click="xiala(index)" style="color:black">
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
               
        <div id="wj-cart">
          <h2 id="wj-cartTitle">购物袋</h2>
          <div id="wj-cartList">
            <ul>
              <li v-for="(item,index) of cartList">
                <div id="wj-imgCol">
                  <img :src="item.img" alt="" width="150" height="180" style="margin:0 50px;">
                </div>
                <div id="wj-descCol">
                  <p id="wj-brand" v-text="item.info">
                   
                  </p>

                  <div id="wj-amount">
                    <label style="float:left" >数量:</label>
                    <div id="wj-jiajian">
                      <span @click="wjJian(index)">-</span>
                      <label id="wj-shuliang" v-text="item.count"></label>
                       <span @click="wjJia(index)">+</span>
                    </div>
            
                  </div>
                  <div id="wj-deleteCol">
                     <label  style="float:right;cursor:pointer" @click="shanchu(index)"><i class="iconfont icon-lajitong" style="font-size:20px"></i></label>
                  </div>
                   <div id="wj-priceCol">
                     <label style="float:left">总价:</label>
                     <label  style="float:right">{{item.count * item.price}}</label>
                  </div>
                </div>
              </li>
            </ul>

          </div>

          <div id="wj-zongji">
                    <label style="float:left">总计:</label>
                    <span style="float:right">￥ {{allPrice}}</span>
          </div> 
  
          <div id="wj-zongji">
                   
                   <span style="float:left">请选择地址簿</span>
                    <span style="float:right; display:block;">
                      <select  ref="selected">
                        <option v-for="dd of dizhi">
                          &nbsp;
                         收件地址:
                         {{dd.receiverAddress}}
                         &nbsp;
                         收件人:
                         {{dd.receiverName}}
                         &nbsp;
                         联系方式
                         {{dd.receiverTel}}
                         &nbsp;
                        邮编号:
                        {{dd.receiverZipcode}}
                         &nbsp;
                        </option>
                      </select>
                    </span>
          </div> 

          <div id="wj-jiesuan">
            <div id="jiesuan" @click="jiesuan()">结算</div>
          </div>

        </div>


      <div id="nav2" style="color:black">
        <div id="search">
            <input type="text" id="searchInput" style="border-bottom-color:black;">
        </div>
        <div class="topBarItem" @click="search">
         搜索
        </div>
        <div class="topBarItem" @click="kehu">
          客户服务
        </div>
        <div class="topBarItem">
          <router-link to="/account">我的账户</router-link>
        </div>
         <div class="topBarItem">
          购物袋
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
          cartList:[      
          ],
          jsList:[],
          dizhi:[]
    }
  },
  computed:{
    username:function(){
      return  JSON.parse(localStorage.getItem("currentUser")).username
    },
    email:function(){
      return  JSON.parse(localStorage.getItem("currentUser")).email
    },
    allPrice:function(){
      var he=0;
      this.cartList.forEach(function(item,index){
        he=he+item.count*item.price;
      })
      return he;
    }
  },
  mounted(){
    
      var uu=JSON.parse(localStorage.getItem("shopcar"));
      var jiesuan=JSON.parse(localStorage.getItem("jiesuanList"));

      var uu2=JSON.parse(localStorage.getItem("currentUser"));
      var unique=[];
      if(uu==null){
        this.cartList=[]
      }else{
        uu.forEach(function(item,index){
           if(item.user==uu2.username){
             unique.push(item);
           }
        })    
        this.cartList=unique;
      }

      var that=this;
      if(jiesuan==null){
        this.jsList=[]
      }else{
        this.jsList=jiesuan;        
      }

    var  uu3=JSON.parse(localStorage.getItem("userAddress"));
    uu3.forEach(function(item,push){
        if(item.usernameAddress==uu2.username){
          that.dizhi.push({
            defaultPost:item.form[0].defaultPost,
            receiverAddress:item.form[0].receiverAddress,
            receiverName:item.form[0].receiverName,
            receiverTel:item.form[0].receiverTel,
            receiverZipcode:item.form[0].receiverZipcode
          });
        }
    })

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
        wjJia:function(jiaIndex){
          this.cartList[jiaIndex].count++;
          localStorage.setItem("shopcar",JSON.stringify(this.cartList));
           this.jisuan();
        },

        wjJian:function(jianIndex){
        if(this.cartList[jianIndex].count>1){
             this.cartList[jianIndex].count--;
        }
        localStorage.setItem("shopcar",JSON.stringify(this.cartList));
         this.jisuan();
      },
      shanchu:function(shanchuIndex){
        this.cartList.splice(shanchuIndex,1);
        this.jisuan();
        localStorage.setItem("shopcar",JSON.stringify(this.cartList));
      },
      jisuan:function(){
         var he=0;
          this.cartList.forEach(function(item,index){
            he=he+item.count*item.price;
          })
          this.allPrice=he;       
      },
      go(a){
      var that=this;
     this.tiaozhuan.forEach(function(item,index){
        if(index == a){
          that.$router.push("/"+item+"")
        }
     })
    },
    jiesuan(){

      var that=this;
      var time=new Date();
       this.cartList.forEach(function(item,index){
          item.date=time.toLocaleString();
          item.dzxx=that.$refs.selected.value;
          that.jsList.push(item);
          
       })
       localStorage.setItem("jiesuanList",JSON.stringify(this.jsList));

        var uu=JSON.parse(localStorage.getItem("shopcar"));
        var uu2=JSON.parse(localStorage.getItem("currentUser"));
        uu.forEach(function(item,index){
           if(item.user==uu2.username){
             uu.splice(index,1,"");
            //  uu.length=uu.length-1;
           }
        })
      localStorage.setItem("shopcar",JSON.stringify(uu));
       alert("结算成功");
       this.$router.push("/dingdan");
    }
  }
}
</script>

<style>
  #wj-cart{
     width: 900px;
    margin: 100px auto 50px;
    height: auto;
    min-width: 900px;
    min-height: 500px;
  }
  a{
    color:black;
  }
  #wj-cartTitle{
    font-family: Arial,Verdana,sans-serif;
    font-weight: 700;
     font-size: 15px;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: #000;
    line-height: 26px;
    margin-bottom: 50px;
    text-align: center;
  }
  #wj-cartList{
    width: 100%;
    height: auto;

  }
  #wj-cartList li{
    width: 900px;
    border-bottom: 1px solid #eaeaea;
    height: 200px;
    margin:20px 0;
  }
  #wj-imgCol{
    float: left;
    width: 250px;
    height: 200px;
  }
  #wj-descCol{
    width: 650px;
    height: 200px;;
    font-size: 12px;
    float: left;
  }
  #wj-brand{
    font-weight: 700;
    color:black;
  }
  #wj-color,#wj-amount,#wj-priceCol,#wj-deleteCol{
    width: 600px;
    margin:10px 0;
    line-height: 20px;
    height: 20px;
  }

  #wj-jiajian{
    width: auto;
    height: 20px;
    float: right;
    font-weight: 700;
  }
  #wj-jiajian span{
    display: inline-block;
    width:20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border: 1px solid black;
    box-sizing: border-box;
    cursor: pointer;
  }
#wj-shuliang{
  margin:0 5px;
}
#wj-zongji{
    border-bottom: 1px solid #eaeaea;
    height: 40px;
    line-height: 40px;
    width: 100%;
    font-size: 12px;
}
#wj-jiesuan{
    height: 60px;
    width: 100%;
    font-size: 14px; 
    border-bottom: 1px solid #eaeaea;
}
#jiesuan{
    font-style: normal;
    font-size: 11px;
    letter-spacing: .16em;
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
    line-height: 30px;
    cursor: pointer;
    text-align: center;
    padding: 0 15px;
    margin-top: 15px;
    float: right;
}
select{
  outline: none;
  height: 20px;

}
select label{
  font-weight: 700;
}
</style>
