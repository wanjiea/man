<template>
  <div id="app">
 
    <router-view/>
  </div>
</template>

<script>
import { watch } from 'fs';
export default {
  name: 'App',
  watch:{
    
    "$route":function(to,from){
        if(to.path=="/account" && localStorage.getItem("currentUser")!=null){
          this.$router.push("/siren");
        }
         if(to.path=="/cart" && localStorage.getItem("currentUser")==null){
          alert("请先登录")
          this.$router.push("/account");
        }
    },

  },
  methods:{
    shouM(){
      var ipt = document.getElementById('searchInput');
      var that = this;
      ipt.style.color="skyblue";
      ipt.style.background="rgba(0,0,0,0)";
      ipt.onkeyup=function(e){

          if(e.keyCode==13){

            if(ipt.value==""){
              alert("输入不能为空")
            }else{
              var shaixuan=[];
              that.$store.state.shopList.allShop.forEach(function(item,index){      
                  if(item.info.indexOf(ipt.value)!=-1){
                    shaixuan.push(item);
                  } 
              })
              if(shaixuan.length==0){
                alert("没有查询到任何相关商品");
              }else{
              that.$store.commit("shopList/changeKeywords",(ipt.value))
              that.$store.commit("shopList/changeSxShop",(shaixuan));
              that.$router.push("/show");
              }
            }
          }
      }
      
    //  console.log(12334)
    }
  }
  ,
  mounted(){
    document.addEventListener('click',this.shouM)
  }

}

</script>

<style>
  *{
  margin:0;
  padding: 0;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
.topBarItem{
  transition: color .5s
}
 .topBarItem>a{
  transition: color .5s 
 }
 #navImg{
   padding: 40px 0px;
 }
 #fm1{
   height: 750px !important;
 }
 #fm1 img{
   height: 750px !important;
 }
 #wj-zhNav{
    width: 285px !important;

 }
 #wj-zhNav li{
       font-size: 11px !important;
 }
</style>
