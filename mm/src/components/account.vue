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
          <router-link to="/account" style="color:black">我的账户</router-link>
        </div>
         <div class="topBarItem">
          <router-link to="/cart" style="color:black">购物袋</router-link>
        </div>
      </div>

      <div id="wj-account">
        <div id="wj-loginWrapper">
          <div id="wj-loginInner">
            <h2>已注册用户</h2>
            <p>如您已是注册会员，请立即登录。</p>
            <input type="text" placeholder="用户名 *" class="wj-input" v-model="dlUser">
            <input type="password" placeholder="密码 *"  class="wj-input" v-model="dlPwd">

            <span id="wj-forget">您忘记了密码?</span>
            <br>
            <button id="wj-submit" @click="denglu">登录</button>
          </div>
        </div>
         <div id="wj-registerWrapper">
           <div id="wj-loginInner">
            <h2>新用户</h2>
            <p>
                创建账户以购物，乐享在线购物独家尊贵服务，如：实时订单追踪、快捷支付、保存您喜爱的商品的空间以及特别优惠提醒。
            </p>
            <input type="text" placeholder="用户名 *"  class="wj-input" v-model="wjUser">
            <p id="wj-shengri" >生日 *</p>
            <input type="date"   class="wj-input" v-model="wjBirth">
            <input type="email" placeholder="电子邮件地址 *"  class="wj-input" v-model="wjEmail">
            <input type="password" placeholder="密码 *"  class="wj-input" v-model="wjPwd">
            <input type="password" placeholder="确认密码 *"  class="wj-input" v-model="wjCkpwd">

            <button id="wj-zhuce" @click="zhuce()">注册</button>
           </div>
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
          wjUser:"",
          wjEmail:"",
          wjPwd:"",
          wjBirth:"",
          wjCkpwd:"",
          userList:[],
          dlUser:"",
          dlPwd:"",

        }
      },
      mounted(){    
        var uu=JSON.parse(localStorage.getItem("userList"));

        if(uu==null){
          this.userList=[]
        }else{
          this.userList=uu;
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
        zhuce:function(){  
           var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
           var chongfu=false;
           var that=this;
           this.userList.forEach(function(item,index){
              if(item.username==that.wjUser){
                chongfu=true;    
              }
           })        
          if(this.wjUser=="" || this.wjEmail=="" || this.wjPwd=="" || this.wjBirth=="" || this.wjCkpwd==""){
            alert("请完整填写注册信息");
          }else{
            if(re.test(this.wjEmail)==false){
              alert("请输入正确的邮箱格式");
            }else if(this.wjPwd!=this.wjCkpwd){
              alert("两次密码输入不一致");
            }else if(this.wjUser.length<4 || this.wjUser.length>10){
              alert("请输入4-10位的用户名");
            }else if(this.wjPwd.length<6 || this.wjPwd.length>12){
              alert("请输入6-12位的密码");
            }else{
              if(chongfu==true){
                alert("用户名已重复");
                chongfu=false;
              }else{
                this.userList.push({
                username:this.wjUser,
                password:this.wjPwd,
                email:this.wjEmail,
                birth:this.wjBirth
              })
              localStorage.setItem("userList",JSON.stringify(this.userList));
              alert("注册成功");
              this.wjUser="",           
              this.wjEmail="",
              this.wjPwd="",
              this.wjBirth="",
              this.wjCkpwd=""
              }
            }
          }    
        },
        denglu:function(){
           var exist=false;
           var that=this;
           this.userList.forEach(function(item,index){
              if(item.username==that.dlUser){
                 exist=true;
              }
           })
            if(this.dlUser=="" || this.dlPwd==""){
              alert("请完整输入信息");
            }else{
              if(exist==true){
                this.userList.forEach(function(item,index){
                    if(item.username==that.dlUser){
                        if(item.password==that.dlPwd){    
                         
                          localStorage.setItem("currentUser",JSON.stringify(item));
                          that.$router.push("/siren");
                        }else{
                          alert("密码不正确");
                        }
                    }
                })
              }else{
                alert("用户名不存在");
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
    }
      }
}
</script>

<style>

  #wj-account{
    width: 800px;
    margin: 100px auto 0px;
    
    height: 500px;
    
  }
  #wj-loginWrapper{
    width: 400px;
    height: 400px;
    float: left;
    
  }
  #wj-registerWrapper{
    width: 400px;
    height: 400px;
    float: left;
    
  }
  #wj-loginInner{
    width: 250px;
    margin:0 75px;
    height: 350px;
  }
  #wj-loginInner h2{
     font-size: 13px;
    letter-spacing: .2em;
    color: #000;
  
    margin-bottom: 25px;
     font-family: Arial,Verdana,sans-serif;
    font-weight: 700;
  }
  #wj-loginInner  p{
     margin-bottom: 15px;
    font-size: 11px;
    letter-spacing: .16em;
  }
  .wj-input{
    line-height: 20px;
    max-width: 315px;
    width: 100%;
    height: 20px;
    padding: 0 5px;
     font-family: Arial,Verdana,sans-serif;
    font-weight: 400;
    font-size:12px;
      margin-bottom: 20px;
      outline: none;
  }
  #wj-forget{
    text-decoration: underline;
    font-family: Arial,Verdana,sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 10px;
    letter-spacing: .16em;
    cursor: pointer;
  }
  #wj-submit{
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
   margin-top: 15px;
  }
  #wj-registerWrapper{
    border-left: 1px solid #eaeaea;
    box-sizing: border-box;
  }
  #wj-shengri{
     font-family: Arial,Verdana,sans-serif;
    font-weight: 400;
    font-size:12px ;
      margin-bottom: 5px !important;
  }
  #wj-zhuce{
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
     margin-top: 15px; 
  }
  a{
    color:black ;
}
</style>
