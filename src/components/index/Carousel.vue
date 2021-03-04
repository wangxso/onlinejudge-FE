<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in imgs" :key="index">
      <a href="#">
        <el-image
                :src="item"
                :fit="fit">

        </el-image>
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "Carousel",
    methods: {

    },
    data(){
      return{
        imgs: [
                'https://wxoj.oss-cn-hangzhou.aliyuncs.com/20210224115706.png',
                'https://wxoj.oss-cn-hangzhou.aliyuncs.com/20210224120007.png',
                'https://wxoj.oss-cn-hangzhou.aliyuncs.com/20210224115706.png',
        ],
        fit: "scale-down"
      }
    }

  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>