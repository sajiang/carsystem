<template>
  <div class="bindPhone">
    <div>
      <div class="title">输入手机号</div>
      <div class="inputWapper">
        <input class="input" type="number"  min="0" v-model="phoneNumber">
      </div>
      <div class="center">
        <span class="getCode" @click='naviToInputIdentifyCode' :class="phoneNumber.length==11?'':'disable'">获取验证码</span>
      </div>
      <div class="wq">
        <img class="wechat" src="../../assets/img/wechat.png">
        <img class="QQ" src="../../assets/img/QQ.png">
      </div>
      <div class="tip">登录即表示您同意<span class="green">《椰途出行注册协议》</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bindPhone',
  data(){
  	return{
      phoneNumber:"",
  	}
  },
  methods:{
  	naviToInputIdentifyCode(){
      this.$router.push({ path: `/submitPersonalInfo/inputIdentifyCode`});
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";

.title{
  text-align: center;
  font-size: 40px;
  color: var(--grey6);
  margin-top: 120px;
}
.inputWapper{
  margin-top: 40px;
  text-align: center;

  & .input{
    width: 420px;
    text-align: center;
    line-height: 98px;
    height: 98px;
    font-size: 40px;
    border: none;
    outline: none;
    border-bottom:1Px solid #e6e6e6;
  }

}
.disable{
  background:#e6e6e6 !important;
  color: #9e9e9e !important;
}
.getCode{
  border-radius: 8px;
  width: 420px;
  height: 98px;
  line-height: 98px;
  color: white;
  display: inline-block;
  background: var(--backlg);
  margin-top: 40px;
}
.wq{
  margin-top: 50px;
  text-align: center;
  & .wechat{
    width: 60px;
    height: 50px;
  }
  & .QQ{
    width: 46px;
    height: 50px;
    margin-left: 50px;
  }
}
.tip{
  margin-top: 150px;
  text-align: center;
  font-size: 28px;
  color: #b3b3b3;
  & .green{
    color: #89bc2e;
  }
}
</style>