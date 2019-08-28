<template>
    <div class="cover" v-if="receiveDetailShow">
        <div class="tableOuterBox">
            <div class="tableInnerBox">
               <table>
                   <tr>
                       <td>行政区划代码</td>
                       <td>太原市</td>
                       <td>接警单位代码</td>
                       <td>山西省太原市公安局城东派出所</td>
                       <td>报警时间</td>
                       <td>2019-06-26   14:30:14</td>
                       <td>接警单编号</td>
                       <td>14010020190626132033000010}</td>
                   </tr>
                   <tr>
                       <td>接警类型</td>
                       <td>110报警</td>
                       <td>报警方式</td>
                       <td>电话报警</td>
                       <td>来话类型代码</td>
                       <td>报警求助、举报投诉</td>
                       <td>接警录音号</td>
                       <td></td>
                   </tr>
                   <tr>
                       <td>接警员姓名</td>
                       <td>张一唯</td>
                       <td>接警员编号</td>
                       <td></td>
                       <td>报警电话</td>
                       <td>18736493690</td>
                       <td>接警时间</td>
                       <td>2019-06-26   14:30:14</td>
                   </tr>
                   <tr>
                       <td>涉及车号牌种类代码</td>
                       <td></td>
                       <td>涉及车牌号</td>
                       <td></td>
                       <td>是否是危化车辆</td>
                       <td></td>
                       <td>接警完成时间</td>
                       <td>2019-06-26   14:30:14</td>
                   </tr>
                   <tr>
                       <td>入库时间</td>
                       <td>2019-06-26   14:30:14</td>
                       <td>更新时间</td>
                       <td>2019-06-26   14:30:14</td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                   </tr>
               </table>
            </div>
            <div class="close" @click="close()">
                <i class="iconfont icon-cuowu"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ReceiveDetail",
        data() {
            return {
                page:'receiveDetail'
            }
        },
        props:['receiveDetailShow'],
        methods:{
            close(){
                this.$emit('close',this.page);
            }
        }
    }
</script>

<style scoped lang="scss">
    .cover{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9999;
        .tableOuterBox{
            width: 17.38rem;
            height: 7.2rem;
            background: #fff;
            position: absolute;
            top:0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            .tableInnerBox{
                width: 16.31rem;
                height: 5.59rem;
                border: solid 1px rgba(221, 221, 221, 1);
                position: absolute;
                top:0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                table{
                    width: 16.31rem;
                    border-collapse:collapse;
                    margin-left: -1px;
                    margin-top: -1px;
                    td{
                        border: solid 1px rgba(221, 221, 221, 1);
                        height: 0.59rem;
                        font-size: 0.14rem;
                        color: #333;
                        letter-spacing: 1px;
                        padding: 0 0.2rem;
                        &:nth-child(odd){
                            background-color: rgba(193, 216, 255, 1);
                            width: 1.4rem;
                            font-size: 0.16rem;
                            text-align: center;
                            padding: 0 0.12rem;
                        }
                    }
                }
            }
            .close{
                width: 0.28rem;
                height: 0.28rem;
                position: absolute;
                top: 0.24rem;
                right: 0.24rem;
                .iconfont{
                    font-size: 0.28rem;
                    line-height: 0.28rem;
                    text-align: center;
                }
            }
        }
    }
</style>