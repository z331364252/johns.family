<template>
    <div id="todos">
        <div class="header">
            <div class="dateWrapper">
                <div class="mounth ignore">1/9</div>
                <div class="time">14:00</div>
            </div>
            <div class="handleWrapper">
                <span class="addEv iconfont  icon-save">新建</span>
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
            <div class="todoWrapper ignore">
                <van-cell title="12:00">
                    <div>吃饭</div>
                </van-cell>
                <van-cell title="13:00">
                    <div>睡觉</div>
                </van-cell>
            </div>
        </div>
    </div>
</template>
<script>
export default {
data () {
    return {
        statisticsData:['总数','已完成','未完成','完成率']
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
        .van-swipe-cell__left,
        .van-swipe-cell__right {
            display: flex;
            align-items: center;
            font-size: 14px;
        }
    }
}
</style>
