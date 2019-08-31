<!--  -->
<template>
<div :class="listheaderOptions['type']===1 ? 'list_header' : 'list_header_one'       " >
    <template v-if="listheaderOptions['type']===1">
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


        <div class="xzdm common_op" v-if="listheaderOptions['administrate']">
            <div class="boxInput"  >
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

        <div class="common_op" v-if="listheaderOptions['searchInput']">
            <div class="boxInput"  style="margin-left : .2rem" >
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

        <div class="common_op" v-if="listheaderOptions['manner']">
            <span>报警方式代码</span>
            <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        

        <div class="inquire">
            <span>查询</span>
        </div>

    </template>

    <template v-if="listheaderOptions['type']===2">
        <div style="width : 100% ; height : 100% ; overflow : hidden">
            <div class="block common_op">
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
            <div class="common_op">
                <div class="boxInput"  style="margin-left : .2rem" >
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

            <div class="common_op">
                <div class="boxInput"  style="margin-left : .2rem" >
                    <span class="demonstration">接警员姓名</span>
                    <el-input
                    style="width : 2rem"
                    placeholder="请输入接警员姓名"
                    v-model="input"
                    size ='small'
                    >
                    </el-input>
                </div>
            </div>
        </div>

        <div style="width : 100% ; height : 100% ; overflow : hidden">
            <div class="xzdm common_op"  style="margin-left : .22rem;">
                <div class="boxInput"  >
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

            <div class="common_op" >
                <span>接警类型代码</span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div class="common_op">
                <div class="boxInput"  style="margin-left : .2rem" >
                    <span class="demonstration">报警电话</span>
                    <el-input
                    style="width : 2rem"
                    placeholder="请输入报警电话"
                    v-model="input"
                    size ='small'
                    >
                    </el-input>
                </div>
            </div>
        </div>
        
        <div  style="width : 100% ; height : 100% ; overflow : hidden">
            <div class="common_op"   style="margin-left : .2rem" >
                <span>警情状态代码</span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="common_op"   style="margin-left : .2rem" >
                <span>警情分类代码</span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="common_op">
                <div class="boxInput"  style="margin-left : .2rem" >
                    <span class="demonstration">接警单位代码</span>
                    <el-input
                    style="width : 2rem"
                    placeholder="请输入管辖单位"
                    v-model="input"
                    size ='small'
                    >
                    </el-input>
                </div>
            </div>


        </div>

        <div style="width : 100% ; height : 100% ; overflow : hidden">
             <div class="common_op"   style="margin-left : .2rem" >
                <span>警情状态代码</span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div class="common_op">
                <div class="boxInput"  style="margin-left : .2rem" >
                    <span class="demonstration">接警单位代码</span>
                    <el-input
                    style="width : 2rem"
                    placeholder="请输入管辖单位"
                    v-model="input"
                    size ='small'
                    >
                    </el-input>
                </div>
            </div>


        </div>
        
        <div style="width : 100% ; height : 100% ; overflow : hidden">
            <div class="common_op" style="margin-left : .2rem">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="有效警情"></el-checkbox>
                    <el-checkbox label="数据检验合格"></el-checkbox>
                </el-checkbox-group>

            </div>
            <div class="inquire">
                <span>查询</span>
            </div>


        </div>

    </template>
    
    <template v-if="listheaderOptions['type']===3">
        <div style="width : 100% ; height : 100% ; overflow : hidden">
            <div class="block common_op">
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
            <div class="common_op">
                <div class="boxInput"  style="margin-left : .2rem" >
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

            <div class="common_op">
                <div class="boxInput"  style="margin-left : .2rem" >
                    <span class="demonstration">接警员姓名</span>
                    <el-input
                    style="width : 2rem"
                    placeholder="请输入接警员姓名"
                    v-model="input"
                    size ='small'
                    >
                    </el-input>
                </div>
            </div>
        </div>
        <div style="width : 100% ; height : 100% ; overflow : hidden">
            <div class="xzdm common_op"  style="margin-left : .22rem;">
                <div class="boxInput"  >
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
            <div class="common_op"   style="margin-left : .2rem" >
                <span>来话类型代码</span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="common_op"   style="margin-left : .2rem" >
                <span>报警方式</span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        


        </div>
        <div style="width : 100% ; height : 100% ; overflow : hidden">
            <div class="common_op"   style="margin-left : .2rem" >
                <span>接警类型</span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="common_op"   style="margin-left : .2rem" >
                <span>接警单位代码</span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="common_op">
                <div class="boxInput"  style="margin-left : .2rem" >
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
        </div>
        <div style="width : 100% ; height : 100% ; overflow : hidden">
            <div class="inquire">
                <span>查询</span>
            </div>
        </div>

    </template>

    <template v-if="listheaderOptions['type']===4">
        <div style="width : 100% ; height : 100% ; overflow : hidden">
            <div class="block common_op">
                <span class="demonstration">处警时间</span>
                <el-date-picker
                v-model="value1"
                size ='small '
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </div>
            <div class="common_op">
                <div class="boxInput"  style="margin-left : .2rem" >
                    <span class="demonstration">处警单编号</span>
                    <el-input
                    style="width : 2rem"
                    placeholder="请输入接警单编号"
                    v-model="input"
                    size ='small'
                    >
                    </el-input>
                </div>
            </div>
            <div class="common_op"   style="margin-left : .2rem" >
                <span>出警单位代码</span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>

            
        </div>
        
        <div style="width : 100% ; height : 100% ; overflow : hidden">
            <div class="xzdm common_op"  style="margin-left : .22rem;">
                <div class="boxInput"  >
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
            
            <div class="common_op"   style="margin-left : .2rem" >
                <span>警情状态代码</span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div class="common_op">
                <div class="boxInput"  style="margin-left : .2rem" >
                    <span class="demonstration">警情关键字</span>
                    <el-input
                    style="width : 3rem"
                    placeholder="多关键字查询请用中文逗号隔开"
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

    <template v-if="listheaderOptions['type']===5">
        <div style="width : 100% ; height : 100% ; overflow : hidden">
            <div class="block common_op">
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
            
            <div class="xzdm common_op" >
                <div class="boxInput"  >
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

            <div class="common_op"   style="margin-left : .2rem" >
                <span>等级代码</span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>



          
        </div>

        <div style="width : 100% ; height : 100% ; overflow : hidden">
            <div class="common_op"   style="margin-left : .2rem" >
                <span>警情分类代码 </span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div class="common_op"   style="margin-left : .2rem" >
                <span>统计模式</span>
                <el-select v-model="value" style="width:2rem;"  size ='small' placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div> 

            <div class="inquire">
                <span>查询</span>
            </div>
        </div>
    </template>

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
    checkList: ['复选框 A']

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
	min-height: .9rem;
	border: 1px solid #dddddd;
	line-height: .87rem;
    position: relative !important;
    background-color: #fff;
}
.list_header_one{
    min-height: .9rem;
	border: 1px solid #dddddd;
	line-height: .5rem;
    position: relative !important;
    background-color: #fff;
    .inquire{
        line-height: .5rem;
        height: .52rem
    }

}


.block{
	margin-left: .22rem;
	float: left;

}
.block .demonstration{
	margin-right: .1rem;
	font-size: .16rem;

}
.xzdm{
    float: left;
    margin-right: .2rem;
    font-size: .16rem;
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
.common_op span{
    font-size: .16rem;
    margin-right : .1rem;
}
</style>