<!--  -->
<template>
    <div>
      <el-table
        v-if="options['type'] ===1"
        border
        :data="data10"
        :header-cell-style="{background:'#fff',color:'#666'}"
        style="width: 100% text-algin=center">
        <el-table-column
          v-if="options['fistline']"
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

          <el-table-column label="操作" v-if="options['czxs']"  align='center'>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
              <!-- <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
            </template>
        </el-table-column>
      </el-table>



      <el-table
        v-if="options['type'] ===2"
        border
        :data="data10"
        :header-cell-style="{background:'#fff',color:'#666'}"
        style="width: 100% text-algin=center">
        <el-table-column
          v-if="options['fistline']"
          prop="classify"
          label=""
          align='center'
          header-align = 'center'
          >
        </el-table-column>

        <template v-for="(item,index) in data9">

          <el-table-column
            v-if="typeof(item['value'])  == 'string'"
            :key="index"
            :prop="item['value']"
            :label="item['city']"
            align='center'
          >
          </el-table-column>

          <el-table-column
            v-if="typeof(item['value'])  == 'object'"
            :label="item['city']"
            :key="index"
            align='center'
          >
              <el-table-column
                  v-for="(item1,index1) in item['value']"
                  :key="index1"
                  :prop="item1['value']"   
                  :label="item1['city']"
                  align='center'
              
              >
              </el-table-column>
          </el-table-column>


        </template>

          <el-table-column label="操作" v-if="options['czxs']">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
              <!-- <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
            </template>
        </el-table-column>
      </el-table>


      <el-table
        v-if="options['type'] ===3"
        :data="data10"
        :header-cell-style="{background:'#fff',color:'#666'}"
       :span-method="objectSpanMethod" :cell-class-name="tableRowClassName"
        @cell-mouse-leave="cellMouseLeave"  @cell-mouse-enter="cellMouseEnter" 
        border
        style="width: 100%; margin-top: 20px">
        <el-table-column
            align='center'
          v-for="(item,index) in data9"
          :key="index"
          :prop="item['value']"
          :label="item['city']"
        >
        </el-table-column>

        

      </el-table>

      <!-- 连接状态 -->
      <el-table
        v-if="options['type'] ===4"
        border
        :data="data10"
        :header-cell-style="{background:'#c2d8ff',color:'#666'}"
        style="width: 100% text-algin=center">
        <el-table-column
          v-if="options['fistline']"
          prop="classify"
          label=""
          align='center'
          header-align = 'center'
          >
        </el-table-column>

        <template  v-for="(item,index) in data9">
          <el-table-column 
            :key="index"
            v-if="item['value'] === 'linkStatus'"
            align='center'
            :prop="item['value']"
            :label="item['city']"
          >
             <!-- <i :class="[item['value']===1 ?'normal icon-lianjiezhengchang': item['value']===2 ? 'icon-lianjiezhengchang3 break': 'icon-lianjiezhengchang2 delayed','iconfont']"></i> -->
            <template slot-scope="scope">
              <i  
                :class="[scope.row.linkStatus===1 ?'normal icon-lianjiezhengchang': scope.row.linkStatus===2 ? 'icon-lianjiezhengchang3 break': 'icon-lianjiezhengchang2 delayed','iconfont']"
              > </i>

            </template>
            


          </el-table-column>


          <el-table-column
            v-else 
            :key="index"
            :prop="item['value']"
            :label="item['city']"
            align='center'
          >

          </el-table-column>


        </template>


          <el-table-column label="操作" v-if="options['czxs']"  align='center'>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
              <!-- <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
            </template>
        </el-table-column>
      </el-table>

      





    </div>
    


</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    props :['data9','data10','options'],
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

    rowIndex: '-1',
    OrderIndexArr: [],
    hoverOrderArr: []
   


};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
   // 获取相同编号的数组
      getOrderNumber() {
        let OrderObj = {}
        this.data10.forEach((element, index) => {
            element.rowIndex = index
            if (OrderObj[element.operate_number]) {
              OrderObj[element.operate_number].push(index)
            } else {
              OrderObj[element.operate_number] = []
              OrderObj[element.operate_number].push(index)
            }
        })

        // 将数组长度大于1的值 存储到this.OrderIndexArr（也就是需要合并的项）
        for (let k in OrderObj) {
          if (OrderObj[k].length > 1) {
            this.OrderIndexArr.push(OrderObj[k])
          }
        }
    },

    // 合并单元格
    objectSpanMethod({row,column,rowIndex,columnIndex}) {
      if (columnIndex === 0 ) {
        for (let i = 0; i < this.OrderIndexArr.length; i++) {
          let element = this.OrderIndexArr[i]
          for (let j = 0; j < element.length; j++) {
            let item = element[j]
            if (rowIndex == item) {
              if (j == 0) {
                return {
                  rowspan: element.length,
                  colspan: 1
                }
              } else if (j != 0) {
                return {
                  rowspan: 0,
                  colspan: 0
                }
              }
            }
          }
        }
      }
    },

     tableRowClassName({row,rowIndex}) {
        let arr = this.hoverOrderArr
        for (let i = 0; i < arr.length; i++) {
          if (rowIndex == arr[i]) {
            return 'hovered-row'
          }
        }
      },


      cellMouseEnter(row, column, cell, event) {
        this.rowIndex = row.rowIndex;
        this.hoverOrderArr = [];
        this.OrderIndexArr.forEach(element => {
            if (element.indexOf(this.rowIndex) >= 0) {
              this.hoverOrderArr = element
            }
        })
      },

       cellMouseLeave(row, column, cell, event) {
        this.rowIndex = '-1'
        this.hoverOrderArr = [];
      }









  

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  this.getOrderNumber()

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
.el-table .hovered-row {
    background: #f5f7fa;
   
  }
  .normal{
		color: #2ec536
;
	}
	.break{
		color : #be1919
;
	}
	.delayed{
		color :#ffc600;
	}
.el-table .el-table__header{
  width: 100% !important;
}
.el-table .el-table__body{
  width: 100% !important;
}
.list_context{
  background-color: #fff;
}


</style>