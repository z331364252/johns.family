<template>
    <div id="todos">
        <div class="header">
            <div class="dateWrapper">
                <div class="mounth ignore">1/9</div>
                <div class="time">14:00</div>
            </div>
            <div class="handleWrapper">
                <span class="addEv iconfont  icon-save"
                      @click="showAddTodo=true">新建</span>
                <span class="year">2019</span>
            </div>
        </div>
        <div class="main">
            <div class="statistics">
                <div class="statistics-item"
                     v-for="(v,k) in statisticsData"
                     :key="k">
                    <span class="item-title">{{v}}</span>
                    <span class="item-count">12</span>
                </div>
            </div>
            <div class="todoWrapper ignore van">
                <van-swipe-cell v-for="(v,k) in todoLists"
                                :on-close="closeItem(v,k)"
                                @click="clickItem(v,k)"
                                :key="k"
                                :right-width="65"
                                :left-width="65">
                    <span slot="left"> <i class="iconfont icon-ico-correct"></i> 完成</span>
                    <van-cell-group>
                        <van-cell>
                            <div slot="title">
                                <span></span>
                                <span>{{v.date}}</span>
                            </div>
                            <div>
                                {{v.content}}
                            </div>
                        </van-cell>
                    </van-cell-group>
                    <span slot="right">删除<i class="iconfont icon-close2"></i></span>
                </van-swipe-cell>
            </div>
        </div>
        <van-dialog v-model="showAddTodo"
                    @confirm="confirmDialog"
                    :currentDateProp="123">
            <van-field v-model="todoThings"
                       type="textarea"
                       placeholder="请输入代办事项" />
        </van-dialog>
    </div>
</template>
<script>
import datePicker from "../components/datePicker"
export default {
    components:{
datePicker
    },
data () {
    return {
        statisticsData:['总数','已完成','未完成','完成率'],
        showAddTodo:false,
        todoThings:'',
        todoLists:[{date:new Date(2019, 10, 11).format('yyyy-MM-dd hh:mm'),content:'吃饭'}],
        listIndex:''
    }
},
mounted () {
    
},
methods: {
    confirmDialog(){
        console.log(this.listIndex)
            this.todoLists.push({date:new Date().format('yyyy-MM-dd hh:mm'),content:this.todoThings})
            this.todoThings=''
    },
    closeItem(item){
        return (clickPosition, instance)=>{
            if(clickPosition=='right'){
            this.todoLists.splice(this.listIndex, 1);
            instance.close()
            }
        }
    },
    clickItem(v,k){
      this.listIndex=v;
    }
} 
}
</script>


<style lang="less" scoped>
@import "../../static/less/base.less";
.header {
    height: 20vh;
    background: linear-gradient(#13abc4, #a6e3e9);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .dateWrapper {
        display: flex;
        align-items: flex-end;
        .mounth,
        .ignore {
            font-size: 46px;
            margin-right: 10px;
        }
        .time {
            margin-bottom: 10px;
        }
    }
    .handleWrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        align-items: center;
        box-sizing: border-box;
        // align-self: flex-start;
    }
}
.main {
    .statistics {
        display: flex;
        padding: 0 20px;
        width: 98vw;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        box-shadow: 10px 15px 10px #ccc;
        .statistics-item {
            // flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            span {
                margin: 10px 0;
            }
            .item-title {
                color: @df-color;
            }
        }
    }
    .todoWrapper {
        margin-top: 20px;
    }
}
</style>
<style lang="less">
#todos {
    .van-swipe-cell__left,
    .van-swipe-cell__right {
        display: flex;
        align-items: center;
        span {
            padding: 2px 10px;
            font-size: 14px;
        }
    }

    .van-swipe-cell__left {
        background: #f2f2f2;
        span {
            color: #45b7b8;
            i {
                color: #45b7b8;
            }
        }
    }
    .van-swipe-cell__right {
        background: #ef6c57;
        span {
            color: #fff;
            i {
                color: #fff;
            }
        }
    }
    .van-cell__title {
        text-align: left;
    }
    .van-cell__value {
        text-align: left;
    }
}
</style>