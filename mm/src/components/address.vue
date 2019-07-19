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
               
        <div id="wj-zhanghu" >
          <h2 id="wj-zhTitle">我的帐户</h2>
          <ul id="wj-zhNav" >
            <li><router-link to="/siren">我的账户</router-link></li>
            <li><router-link to="/dingdan">订单</router-link></li>
            <li><router-link to="/address"  style="font-weight:700">地址簿</router-link></li>
            <li><router-link to="/geren">个人信息</router-link></li>
            <li @click="exit">退出</li>
          </ul>
          <div id="wj-zhContent" class="wj-zhContent" style="height:auto;border:none;">
            <ul>
              <li>
                 <h6 id="wj-update"></h6>
                <div id="wj-message">
                  <h3>地址簿</h3>
                  <p v-text="addressTip" id="addressTip" :class="address.length==5 ? 'wjred':''"></p>
                </div>       
              </li>
              <li v-for="(item,index) of address">
                <h6 id="wj-update"></h6>
                <div id="wj-message">
                  <h3 v-text="item.addressTitle">新的地址</h3>
                  <p v-text="item.addressP" style="text-decoration:underLine;cursor:pointer"  v-if="seen=(address[index].form[0]==null) ? true :false"  @click="tjAddress(index)"  ></p>
                  
                  <div v-if="seen=(address[index].form[0]==null) ? false :true ">
                  <p v-text="address[index].form[0].receiverName"></p>
                  <p v-text="address[index].form[0].receiverAddress"></p>
                  <p v-text="address[index].form[0].receiverZipcode"></p>
                  <p v-text="address[index].form[0].receiverTel"></p>
                  <p>{{address[index].form[0].defaultPost}}</p>
                  <button @click="removeAddress(index)" id="removeAdd">删除</button>
                  </div>


                  <div id="wj-biaodan"  v-if="seen=(vv==index) ? true:false">
                    <form action="" id="wj-form" style="margin-top:10px;">
                      <input type="text" placeholder="收件人姓名 *" v-model="f1">
                      <input type="text" placeholder="收货地址(包含省/市/县/区/门牌号)  *"  v-model="f2">
                      <input type="text" placeholder="邮编 *"  v-model="f3">
                      <input type="tel" placeholder="联系方式 *"  v-model="f4">
                      <p>
                        <input type="checkbox" style="width:60px;ver" v-model="f5"> 
                        <label>设为默认配送地址</label>
                      </p>
                      <button id="wj-baocun" @click="wjSave(index)">保存</button>
                    </form>
                  </div>        
                </div>
              </li>

            </ul>
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
          我的账户
        </div>
         <div class="topBarItem">
           <router-link to="/cart" style="color:black;"> 购物袋</router-link>
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
           vv:100,
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
          address:[
            {
              usernameAddress:JSON.parse(localStorage.getItem("currentUser")).username,
              addressTitle:"新的地址",
              addressP:"增加新的地址" ,
              form:[]           
            }       
          ],
          isNew:true,
          f1:"",
          f2:"",
          f3:"",
          f4:"",
          f5:"",
          addressTip:"您可以再次保存您的配送地址以加快日后结算",
          kong:false,

    }
  },
  computed:{
    username:function(){
      return  JSON.parse(localStorage.getItem("currentUser")).username
    },
    email:function(){
      return  JSON.parse(localStorage.getItem("currentUser")).email
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
        tjAddress:function(addressIndex){
       
            this.vv=addressIndex;
            if(this.isNew==true){
              this.address[addressIndex].addressP="关闭";
              this.isNew=false;
            }else{
              this.address[addressIndex].addressP="增加新的地址";
              this.isNew=true; 
              this.vv=100;    
            }

        },
        wjSave:function(addressIndex){
             
            if(this.f1=="" || this.f2=="" ||  this.f3=="" || this.f4=="" ){
              alert("请完整填写信息");
            }else{
              if(this.f3.length!=6){
                alert("请输入正确格式的邮编");
              }else if(this.f4.length!=11){
                alert("请输入正确格式的联系方式");
              }else{
                var isDefault=false;
                console.log(addressIndex);
                if(this.f5==""){
                   isDefault=false;
                }else{
                  isDefault=true;
                }
                this.address[addressIndex].form.push({
                receiverName:this.f1,
                receiverAddress:this.f2,
                receiverZipcode:this.f3,
                receiverTel:this.f4,
                defaultPost:isDefault      
              });
              this.address[addressIndex].addressTitle="地址"+(addressIndex+1)+"";
              this.vv=100;
              alert("保存成功");
              localStorage.setItem("userAddress",JSON.stringify(this.address));
              console.log(this.address);    
              if(this.address.length<5){
                this.address.push({
                usernameAddress:JSON.parse(localStorage.getItem("currentUser")).username,  
                addressTitle:"新的地址",
                addressP:"增加新的地址" ,
                form:[]                   
                })
              }else{
                this.addressTip="地址簿已达到上限，若要添加新地址，请选择删除其他地址";
              }
              }
            }
        },
        removeAddress:function(rmIndex){
            this.address.forEach(function(item,index){
                if(index>rmIndex){
                  item.addressTitle="地址"+(index)+"";
                }
            })
            this.address.splice(rmIndex,1);
            console.log(this.address);        
            var that= this;
            this.address.forEach(function(item,index){
              if(item.form.length==0){
                that.kong=true;
                console.log("有空的form")
              }        
            })
            if(that.kong==false){
                  console.log("没有空");
                 this.address.push({
                usernameAddress:JSON.parse(localStorage.getItem("currentUser")).username, 
                addressTitle:"新的地址",
                addressP:"增加新的地址" ,
                form:[]                   
            })          
            }        
            localStorage.setItem("userAddress",JSON.stringify(this.address));
            this.addressTip="您可以再次保存您的配送地址以加快日后结算";
        },
      go(a){
      var that=this;
      this.tiaozhuan.forEach(function(item,index){
        if(index == a){
          that.$router.push("/"+item+"")
        }
     })
    },
     exit:function(){
      localStorage.removeItem("currentUser");
      this.$router.push("/account");
    }
  },
  mounted(){
        
         var uu=JSON.parse(localStorage.getItem("userAddress"));
         var uu2=[];
         if(uu!=null){
            uu.forEach(function(item,index){
           if(item.usernameAddress==JSON.parse(localStorage.getItem("currentUser")).username){
             uu2.push(item);
           }  
         })
         this.address=uu2;
         console.log(this.address);
         }else if(uu=="" || uu==null){
          this.address=[];
          this.address.push({
          usernameAddress:JSON.parse(localStorage.getItem("currentUser")).username,  
          addressTitle:"新的地址",
          addressP:"增加新的地址" ,
          form:[]                   
          })
          console.log("userAddress为空")
        }
  }
}
</script>

<style>
   #wj-zhanghu{
    width: 900px;
    margin: 100px auto 50px;
    min-height: 400px;
  }
  #wj-zhTitle{
    font-style: normal;
    font-size: 13px;
    letter-spacing: .2em;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-family: Arial,Verdana,sans-serif;
    font-weight: 700;
    text-align: center;
  }
  #wj-zhNav{
    width: 265px;
    margin:0 auto;
    height: 20px;

  }
  .wj-zhContent ul{
    justify-content: inherit !important;
    flex-flow: wrap;
  }
  #wj-zhNav li{
    padding: 2px 8px;
    float: left;
    font-size: 12px;
    font-family: Arial,Verdana,sans-serif;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
  }
  #wj-zhContent{
    width: 900px;
    height: auto;
    margin:30px auto 0;
    overflow: hidden;
    padding-bottom: 25px;
    border-bottom: 1px solid #000;

  }
  
  #wj-zhContent li{
    position: relative;
    width: 290px;
    vertical-align: top;
    float: left;
    margin:30px 5px;
  }
  #wj-message h3{
    font-size: 13px;
    letter-spacing: .2em;
    color: #000;
    text-transform: uppercase;
    line-height: 10px;
    font-family: Arial,Verdana,sans-serif;
    font-weight: 700;
    margin-bottom: 25px;
  }
  #wj-message p{
     font-size: 11px;
    letter-spacing: .16em;
    line-height: 20px;
  }
  #wj-update{
    font-size: 11px;
    letter-spacing: .16em;
    text-align: right;
    vertical-align: middle;

    height: 20px;
    line-height: 20px;
    font-weight: 400;
  }
  #wj-message{
    border-top: 1px solid #000;
    padding: 12px 15px;

  }
  a{
    color:black;
  }
  #wj-form input{
    max-width: 315px;
    width: 100%;
    height: 20px;
    line-height:20px;
    font-family: Arial,Verdana,sans-serif;
    font-weight: 400;
    outline: none;
    margin-bottom: 20px;
    font-size: 12px;
    vertical-align:top;
  }
  #wj-baocun{
    font-style: normal;
    font-size: 11px;
    letter-spacing: .16em;
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
    height: 25px;
    line-height: 25px;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    padding: 0 28px;
  }
  #removeAdd{
     font-style: normal;
    font-size: 11px;
    letter-spacing: .16em;
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
    height: 25px;
    line-height: 25px;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    padding: 0 28px;
    margin-top:10px;
  }
  .wjred{
    color:red;
  }
</style>
