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
               
        <div id="wj-zhanghu">
          <h2 id="wj-zhTitle">我的帐户</h2>
          <ul id="wj-zhNav">
            <li><router-link to="/siren">我的账户</router-link></li>
            <li><router-link to="/dingdan">订单</router-link></li>
            <li><router-link to="/address">地址簿</router-link></li>
            <li  style="font-weight:700"><router-link to="/geren">个人信息</router-link></li>
            <li @click="exit">退出</li>
          </ul>
          <div id="wj-grContent" >
            <div id="grContent-l">
                <div id="wj-updateEmail">
                  <p>电子邮件地址   <span style="float:right;cursor:pointer" @click="xgIndex=0">修改</span></p>
                  <p v-text="email" id="wj-showP"></p>
                  <p>密码<span style="float:right;cursor:pointer" @click="xgIndex=1">修改</span></p>
                  <p id="wj-showP" class="wj-showP">XXXXXXXX</p>
                </div>

                <div id="wj-updateMessage">
                  <p>用户名</p>
                  <input type="text" v-model="username" style="margin-bottom:20px">
                  <p>生日</p>
                  <input type="date" v-model="birthday">
                </div>

                <button id="wj-updateSave" @click="againSave()">保存</button>
            </div>
            <div id="grContent-r">
              <div id="wj-xiugaiA" v-if="seen=(xgIndex==0) ? true:false">
                <h2>请为“我的帐户”输入新的邮件地址</h2>
                <p>当前邮件地址 {{email}}</p>
                <input type="text" placeholder="新的电子邮件 *" v-model="newEmail">
                <input type="text" placeholder="确认新的电子邮件 *" v-model="ckNewEmail">
                <input type="password" placeholder="原密码 *" v-model="oldPwd">

                <button id="wj-updateSave" @click="saveNewEmail">保存</button>
                <button id="wj-updateSave" @click="xgIndex=100">关闭</button>
              </div>

              <div id="wj-xiugaiB" v-if="seen=(xgIndex==1) ? true:false">
                <h2>修改密码</h2>
                <input type="password" placeholder="原密码 *" v-model="yuanPwd">
                <input type="password" placeholder="新密码 *" v-model="newPwd">
                <input type="password" placeholder="确认新密码 *" v-model="ckNewPwd">

                <button id="wj-updateSave" @click="saveNewPwd()">保存</button>
                <button id="wj-updateSave" style="margin-left:30px;" @click="xgIndex=100">关闭</button>
              </div>

            </div>
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
          username:JSON.parse(localStorage.getItem("currentUser")).username,
          birthday:JSON.parse(localStorage.getItem("currentUser")).birth,
          email:JSON.parse(localStorage.getItem("currentUser")).email,
          usernameZan:JSON.parse(localStorage.getItem("currentUser")).username,
          newEmail:"",
          oldPwd:"",
          ckNewEmail:"",
          yuanPwd:"",
          newPwd:"",
          ckNewPwd:"",
          xgIndex:100,

    }
  },
  mounted(){

  },
  methods:{
          xiala:function(a){
          var that= this;
          this.cc=a;

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
        againSave:function(){
          var jwj=JSON.parse(localStorage.getItem("userList"));
          var jwj2=JSON.parse(localStorage.getItem("currentUser"));
          var jwj3 =JSON.parse(localStorage.getItem("userAddress"))
          console.log(jwj2);
          var that=this;
          jwj.forEach(function(item,index){
              if(item.username==that.usernameZan){
          
                  jwj[index].username=that.username;
                  jwj[index].birth=that.birthday;

                  jwj2.username=that.username;
                  jwj2.birth=that.birthday;
              }
          })
          jwj3.forEach(function(item,index){
             if(item.usernameAddress==that.usernameZan){
                jwj3[index].usernameAddress=that.username;
             }
          })
          localStorage.setItem("userList",JSON.stringify(jwj));
          localStorage.setItem("currentUser",JSON.stringify(jwj2));
          localStorage.setItem("userAddress",JSON.stringify(jwj3));

          this.usernameZan=JSON.parse(localStorage.getItem("currentUser")).username;
          alert("个人信息更新成功");
          Object.freeze(null);
        },
        saveNewEmail:function(){
           var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
            if(this.newEmail =="" || this.ckNewEmail=="" || this.oldPwd==""){
              alert("请完整填写信息");
            }else if(this.newEmail!=this.ckNewEmail){
              alert("请保证两次邮件地址相同");
            }else if(re.test(this.newEmail)==false || re.test(this.ckNewEmail)==false){
              alert("请输入正确的邮箱格式");
            }else{
                  var jiuPwd = JSON.parse(localStorage.getItem("currentUser")).password;
                if(this.oldPwd!=jiuPwd){
                  alert("请输入正确的密码");
                }else{
                  
                  var jwj=JSON.parse(localStorage.getItem("userList"));
                  var jwj2=JSON.parse(localStorage.getItem("currentUser"));  
                  var that=this;
                  jwj.forEach(function(item,index){
                        if(item.username==jwj2.username){      
                            jwj[index].email=that.newEmail;
                            jwj2.email=that.newEmail;

                        }
                    })
                  localStorage.setItem("userList",JSON.stringify(jwj));
                  localStorage.setItem("currentUser",JSON.stringify(jwj2));
                  this.email=this.newEmail;
                  this.newEmail="";
                  this.ckNewEmail="";
                  this.oldPwd="";
                  alert("邮箱修改成功");
                }
            }
        },
        saveNewPwd:function(){
           
            if(this.newPwd =="" || this.ckNewPwd=="" || this.yuanPwd==""){
              alert("请完整填写信息");
            }else if(this.newPwd!=this.ckNewPwd){
              alert("请保证两次密码相同");
            }else{
                var jiuPwd = JSON.parse(localStorage.getItem("currentUser")).password;
                if(this.yuanPwd!=jiuPwd){
                  alert("请输入正确的密码");
                }else{
           
                  var jwj=JSON.parse(localStorage.getItem("userList"));
                  var jwj2=JSON.parse(localStorage.getItem("currentUser"));  
                  var that=this;
                  jwj.forEach(function(item,index){
                        if(item.username==jwj2.username){      
                            jwj[index].password=that.newPwd;
                            jwj2.password=that.newPwd;
                        }
                    })
                  localStorage.setItem("userList",JSON.stringify(jwj));
                  localStorage.setItem("currentUser",JSON.stringify(jwj2));

                  this.yuanPwd="";
                  this.ckNewPwd="";
                  this.newPwd="";
                  alert("密码修改成功");
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
    },
    exit:function(){
      localStorage.removeItem("currentUser");
      this.$router.push("/account");
    }
  }
}
</script>

<style>
  #wj-zhanghu{
    width: 900px;
    margin: 100px auto;
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
  #wj-grContent{
    width: 700px;
    height: 400px;
    margin:70px auto 0;
    overflow: hidden;

  }
 a{
   color:black;
 }
 #grContent-l{
    width: 300px;
    font-size: 11px;
    letter-spacing: .16em;
    height: 400px;
    border: 1px solid #eaeaea;
    box-sizing: border-box;
    float: left;
 }
 #wj-updateEmail{
   width: 260px;
   margin:20px;
   height:auto;
   
 }
 #wj-showP{
   margin-bottom:15px;
   line-height: 20px;
 }
 .wj-showP{
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 35px;
 }
 #wj-updateMessage{
   width: 260px;
   margin:0px 20px;
   height: auto;
 }
 #wj-updateMessage input{
    outline: none;
    padding: 0 5px;
    line-height: 25px;
    border: 1px solid #b0b0b0;
    display: inline-block;
    color: #000;
    width: 250px;
    letter-spacing: .075em;
    font-size: 11px;
 }
 #wj-updateMessage p{
       color: #878787;
       padding: 5px 0;
 }
 #wj-updateSave{
     font-style: normal;
    font-size: 11px;
    letter-spacing: .16em;
    background-color: #000;
    border-radius: 0;
    border: 1px solid #000;
    color: #fff;
    text-transform: uppercase;
    height: 28px;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    margin:20px;
    padding: 0 30px;
 }
 #grContent-r{
    width: 400px;
    font-size: 11px;
    letter-spacing: .16em;
    height: 400px;
    float: left;

 }
 #wj-xiugaiA{
   width: 300px;
   height: 250px;
   margin:50px;
   
 }
 #wj-xiugaiA h2{
   font-size: 13px;
   color:black;
   text-align: center;
   margin-bottom: 20px;
 }
 #wj-xiugaiA p{
   text-align: center;
 }
 #wj-xiugaiA input{
    outline: none;
    padding: 0 5px;
    line-height: 25px;
    border: 1px solid #b0b0b0;
    display: inline-block;
    color: #000;
    width: 250px;
    letter-spacing: .075em;
    font-size: 11px;
    margin:15px 20px 5px 20px;
 }


 #wj-xiugaiB{
   width: 300px;
   height: 250px;
   margin:50px;
 
 }
 #wj-xiugaiB h2{
   font-size: 13px;
   color:black;
   text-align: center;
   margin-bottom: 20px;
 }
 #wj-xiugaiB p{
   text-align: center;
 }
 #wj-xiugaiB input{
    outline: none;
    padding: 0 5px;
    line-height: 25px;
    border: 1px solid #b0b0b0;
    display: inline-block;
    color: #000;
    width: 250px;
    letter-spacing: .075em;
    font-size: 11px;
    margin:15px 20px 5px 20px;
 }
</style>
