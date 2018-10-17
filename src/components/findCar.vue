<template>
  <div class="findCar">
    <div id="map-container"></div>
    <div class="scanQRCode" @click="naviToScanCodeRRC">
      <div class="moji">
        扫码开锁
      </div>
    </div>
    <div class="carInUse" v-show="isCarInUse" >
      <div>
        <span class="useCarNum">2</span>辆车正使用
      </div>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap'

export default {
  name: 'findCar',
  data () {
    return {
      map:null,
      curPosMarker:null,
      isCarInUse:true,
      storeInfo:[],
    }
  },
  mounted(){
    this.map = new AMap.Map('map-container', {
      zoom: 15,
    });
    this.map.plugin('AMap.Geolocation', ()=> {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        showMarker:true,//定位成功后在定位到的位置显示点标记，默认：true
        zoomToAccuracy: true,     
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: 'RB'
      });
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', (data)=>{
        this.map.setCenter(data.position);
        this.curPosMarker = new AMap.Marker({
            icon: new AMap.Icon({image:"../static/img/i-curPos.svg",size:new AMap.Size(25, 44)}),
            position: data.position,
            offset:new AMap.Pixel(-12, -44)
        });
        this.map.add(this.curPosMarker);
        this.getStoreInfo();
        console.log("定位成功");
      })
      AMap.event.addListener(geolocation, 'error', (data)=>{
        console.log(data);
        this.$vux.alert.show({
          title: '定位失败',
          content: '请检查GPS是否开启。'
        })
        //this.$message.error('，');
      });
    });
  },
  methods:{
    getStoreInfo(){
      this.storeInfo=[{
        lat:this.curPosMarker.getPosition().getLat()+0.002,
        lng:this.curPosMarker.getPosition().getLng()+0.002,
        carNum:5,
        storeId:'54',
      },{
        lat:(this.curPosMarker.getPosition().getLat()+0.001),
        lng:(this.curPosMarker.getPosition().getLng()-0.001),
        carNum:40,
        storeId:'5g',
      }];
      this.drawStore();
    },
    drawStore(){
      for (var i = this.storeInfo.length - 1; i >= 0; i--) {    
        var markerContent = `<div style="position: relative;width: 32px;height: 38px">
             <img style="width:100%;height:100%" src="../static/img/i-storePos.svg">
             <span style="position: absolute;top: 5px;
              width: 32px;font-size: 16px;font-weight:bold;color: #333333;
              text-align: center;">${this.storeInfo[i].carNum}</span>
          </div>`;
        var marker = new AMap.Marker({
          content: markerContent,  // 自定义点标记覆盖物内容
          position:  [this.storeInfo[i].lng, this.storeInfo[i].lat], 
          offset: new AMap.Pixel(-16, -38)
        });
        this.map.add(marker);
      }
    },
    naviToScanCodeRRC(){
      let carId='12';
      this.$router.push({ path: `/scanCodeRentOrReturnCar/${carId}` })
    }
  }
}
</script>

<style scoped>
@import "../assets/css/common.css";
#map-container {
  height: 100%;
  width: 100%;
}
.scanQRCode{
  width: 332px;
  height: 320px;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -166px;
  margin-bottom: -160px;
  background-color: color(var(--baseGreen) alpha(80%));   
  border-radius: 50%;
  text-align: center;
  & .moji{
    background: linear-gradient(var(--baseBlack), var(--baseBlack)) left top,
    linear-gradient(var(--baseBlack), var(--baseBlack)) left top,
    linear-gradient(var(--baseBlack), var(--baseBlack)) right top,
    linear-gradient(var(--baseBlack), var(--baseBlack)) right top,
    linear-gradient(var(--baseBlack), var(--baseBlack)) right bottom,
    linear-gradient(var(--baseBlack), var(--baseBlack)) right bottom,
    linear-gradient(var(--baseBlack), var(--baseBlack)) left bottom,
    linear-gradient(var(--baseBlack), var(--baseBlack)) left bottom;
    background-repeat: no-repeat;
    background-size: 8px 23px, 23px 8px;
    border-radius: 10px;
    height: 86px;
    line-height: 86px;
    width: 190px;
    display: inline-block;
    position: relative;
    top: 53px;
    font-weight: bold;
    font-size: 40px;
  }
}
.carInUse{
  position: fixed;
  bottom: 197px;
  right: 0;
  width: 236px;
  height: 68px;
  line-height: 68px;
  background-color: color(black alpha(60%));   
  border-top-left-radius: 34px;
  border-bottom-left-radius: 34px;
  text-align: center;
  color: white;
  font-size: 30px;
  & .useCarNum{
    font-size: 36px;
    color: var(--baseGreen);
    vertical-align: top;
    margin-right: 15px;
  }
}

</style>