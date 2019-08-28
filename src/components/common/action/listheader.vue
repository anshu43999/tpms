<!--  -->
<template>
<div class="list_header" >
    <div class="block common_op" v-if="listheaderOptions['timeExact']">
        <span class="demonstration">接警时间</span>
        <el-date-picker
        v-model="value1"
        size ='small '
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
        </el-date-picker>
    </div>

    <div class="block common_op" v-if="listheaderOptions['timeExacts']">
        <span class="demonstration">接警时间</span>
        <el-date-picker
        v-model="value1"
        size ='small '
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
        </el-date-picker>
    </div>


    <div class="xzdm common_op">
        <div class="boxInput"  v-if="listheaderOptions['administrate']">
            <span class="demonstration">行政区划代码</span>
            <el-input
            style="width:1rem;"
            class="input"
            placeholder="太原市"
            v-model="input"
            size ='small'
            :disabled="true">
            </el-input>
        </div>  

        <div class="line ">
            <i class="iconfont icon-guanlian"></i>
        </div>

        <div class="boxInput ">
            <el-select style="width:2rem;"  v-model="value" 	size ='small' filterable placeholder="请选择">
                <el-option
                
                v-for="item in options"
                :key="item.value"
                size ='mini'
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>

    </div>

    <div class="common_op">
        <div class="boxInput"  style="margin-left : .2rem" v-if="listheaderOptions['searchInput']">
            <span class="demonstration">接警单编号</span>
            <el-input
            style="width : 2rem"
            placeholder="请输入接警单编号"
            v-model="input"
            size ='small'
            >
            </el-input>
        </div>
    </div>
    

    <div class="inquire">
        <span>查询</span>
    </div>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
props : ['listheaderOptions'],
components: {
    
},
data() {
//这里存放数据
return {
    value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
	value2: '',
	input: '',

	options: [
		{
          value: '选项1',
          label: '黄金糕'
		}, 
		{
          value: '选项2',
          label: '双皮奶'
		}, 
		{
          value: '选项3',
          label: '蚵仔煎'
		}, 
		{
          value: '选项4',
          label: '龙须面'
		}, 
		{
          value: '选项5',
          label: '北京烤鸭'
	}],
	value: '',

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
.list_header{
	height: .9rem;
	border: 1px solid #dddddd;
	line-height: .87rem;
    position: relative !important;
    background-color: #fff;
}

.block{
	margin-left: .22rem;
	float: left;
	margin-right: .32rem;
}
.block .demonstration{
	margin-right: .1rem;
	font-size: .16rem;

}
.xzdm{
    float: left;
}
.boxInput{
	float: left;
	font-size: .16rem;
}
.boxInput .input{
	width: 1.5rem;
}
.boxInput span{
	margin-right:.1rem; 
}

.line{
	float: left;
	width: .5rem;
	text-align: center;
	color: #777;
}
.inquire{
	float: right;
	width: 1rem;
	text-align: center;
	height: .87rem;
	line-height: .87rem;
	margin-right: .32rem;
	display: block;
	//   background: linear-gradient(to right, rgba(34,63,153,1), rgba(36,41,111,1)); /* 标准的语法 */
	span{
		cursor: pointer;
		color: #ffffff;
		display: inline-block;
		width: 100%;
		height: .3rem;
		line-height: .3rem;
		vertical-align: middle;
		background: linear-gradient(to right, rgba(34,63,153,1), rgba(36,41,111,1)); /* 标准的语法 */
		border-radius: 4px;
	}
}
.common_op{
    float: left;
}

</style>