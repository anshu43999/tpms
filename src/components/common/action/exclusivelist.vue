<!--  -->
<template>
<div class=''>
    <table>
        <!-- <caption>
        用div+css模拟表格对角线
        </caption> -->
        <tr>
            <th style="width:80px;"> 
            <div class="out">
                <!-- 案件 -->
                <b>类型</b> 
                <em>同、环比</em> 
            </div>
            </th>
            <th>盗窃</th>
            <th>诈骗</th>
            <th>强奸</th>
            <th>绑架</th>
            <th>抢劫</th>
        </tr>
        <tr>
            <td class="t1">张三</td>
            <td>三</td>
            <td>2</td>
            <td>62</td>
            <td>61</td>
            <td>61</td>
        </tr>
        <tr>
            <td class="t1">李四</td>
            <td>三</td>
            <td>1</td>
            <td>48</td>
            <td>67</td>
            <td>67</td>
        </tr>
    </table>
    

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

table {
  border-collapse:collapse;
  border:1px solid #dcdcdc;
  width:100%;
  margin:0 auto;
//   margin-top:100px;
}
th, td {
  height: .75rem;
  border:1px #dcdcdc solid;
  text-align:center;
  font-size:12px;
  line-height:30px;
  background:#fff;
}
th{background:#f7fcff;height: .63rem;}
/*模拟对角线*/
.out {
  border-top:.63rem #f7fcff solid;/*上边框宽度等于表格第一行行高*/
  width:0px;/*让容器宽度为0*/
  height:0px;/*让容器高度为0*/
  border-left:80px #ffffff solid;/*左边框宽度等于表格第一行第一格宽度*/
  position:relative;/*让里面的两个子容器绝对定位*/
}
b {
  font-style:normal;
  display:block;
  position:absolute;
  top:-40px;
  left:-40px;
  width:35px;
}
em {
  font-style:normal;
  display:block;
  position:absolute;
  top:-25px;
  left:-70px;
  width:55x;
}
.t1{background:#fff;}




</style>