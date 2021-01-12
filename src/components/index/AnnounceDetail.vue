<template>
  <div style="background-color: #F5F5F5; padding: 24px;">
    <a-page-header
        :ghost="false"
        title="hahah"
        sub-title="wangx"
        @back="() => $router.go(-1)"
    >
      <p>
        经过三个月的紧张开发，我们终于将迎来2.0版，新版我们带来了诸多新特性：

        基于 Docker，真正一键部署
        前后端分离，模块化编程，微服务
        ACM/OI 两种比赛模式、实时/非实时评判 任意选择
        丰富的可视化图表，一图胜千言
        支持 Template Problem，可以添加函数题甚至填空题
        更细致的权限划分，超级管理员和普通管理员各司其职
        多语言支持：C, C++, Java, Python2, Python3，题目可以选择使用的语言
        Markdown & MathJax 支持
        比赛用户IP限制 (CIDR ranges)
        敬请期待
      </p>
    </a-page-header>
  </div>
</template>

<script>

</script>


<style>
tr:last-child td {
  padding-bottom: 0;
}
</style>
