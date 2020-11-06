<template>
  <div>
    <button type="button" @click="openBasicPage()" >基础练习</button>
    <form action="" v-if="!isReg">
        用户名：<input type="text" v-model="name">
        密码：<input type="text" v-model="password"> 
        <div>
              <button type="button" @click="login()">登录</button>
              <button type="button" @click="regin()">注册</button>
        </div>
    </form>
    <form action="" v-else>
        用户名：<input type="text" v-model="name">
        密码：<input type="text" v-model="password">
        再次输入密码：<input type="text" v-model="repeat">
        <div>
              <button type="button" @click="addUser()">确认注册</button>
              <button type="button" @click="cancel()">返回</button>
        </div>
        
    </form>
    <div>
      <p>第一个get:</p>
      {{msg}}
    </div>
    <div>
      <p>第二个get:</p>
      {{msg2}}
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: "login",
  data(){
    return {
      isReg:false,
      name:'',
      password:'',
      repeat:'',
      msg:'无数据了',
      msg2:'no msg',
      url:'39.96.23.140'
    }
  },
  methods:{
    login(){
      if(this.name === localStorage.getItem('name') ){
        if(this.password === localStorage.getItem('password')){
          alert('登录成功');
          this.$router.push('/home/list')
        }else{
          alert('密码错误')
        }
      }else{
        alert('用户名不存在')
      }
      
    },
    regin(){
      this.isReg = true
    },
    addUser(){
      if(this.password === this.repeat){
        localStorage.setItem('name',this.name);
        localStorage.setItem('password',this.password);
        this.name = '';
        this.password = '';
        this.isReg = false;
      }else{
        alert("密码不一致")
      }
    },
    cancel(){
        this.isReg=false
    },
    openBasicPage(){
      this.$router.push('/basic')
    }
  },
  mounted () {
    axios
      .get('http:////'+ this.url +'/vueAxios/vueData?vue='+'I am Vue')
      .then(response => (this.msg = response.data))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
       axios
      .get('http://'+ this.url +'/vueAxios/vueData?vue='+'I am Vue2')
      .then(function(response){
          this.msg2 = response.data
          console.log(response)
      })
      .catch(function (error) { // 请求失败处理
        console.log("wdf"+error);
      });
  }
};
</script>