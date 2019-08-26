<!--  -->
<template>
    <!-- <div>
        {{tableData}}
    </div> -->
    <el-table
      :data="data10"
      :header-cell-style="{background:'#e5f1ff',color:'#606266'}"
      style="width: 100% text-algin=center">
      <el-table-column
        prop="classify"
        label=""
        align='center'
        header-align = 'center'
        >
      </el-table-column>
      <el-table-column
        v-for="(item,index) in data9"
        :key="index"
        :prop="item['value']"
        :label="item['city']"
        align='center'
      >
      </el-table-column>
    </el-table>


</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    props :['data9','data10'],
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    // tableData: [
    //     {
    //         classify: '接警量',
    //         ty: 6666,
    //         cz: 8888
    //     }, 
       
    // ],
    // data9 :[
    //     {city : "太原", value :"ty"},
    //     {city : "长治", value :"cz"},
    //     {city : "朔州", value :"sz"},
    //     {city : "运城", value :"yc"},
    //     {city : "吕梁", value :"ll"},
    //     {city : "大同", value :"dt"},
    //     {city : "晋城", value :"jc"},
    //     {city : "晋中", value :"jz"},
    //     {city : "临汾", value :"lf"},
    //     {city : "忻州", value :"xz"},
    //     {city : "阳泉", value :"yq"},
    // ]
    

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

</style>