<template>
    <div id="datePicker">
        <van-cell :title="title"
                  @click="showPicker=true">
            <div>{{currentDateCell}}</div>
        </van-cell>
        <van-popup v-model="showPicker"
                   position="bottom">
            <van-datetime-picker v-model="currentDate"
                                 @confirm="confrim"
                                 @cancel="cancel"
                                 type="date" />
        </van-popup>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:"日期"
        },
        currentDateProp:''
    },
    watch:{
        currentDateCell(val){
            console.log(val)
        }
    },
    data () {
        return {
            currentDate:new Date(),
            minDate:new Date(),
            showPicker:false,
            currentDateCell:''
        }
    },
    mounted () {
        console.log(this.currentDate,'11111111')
    },
    methods: {
        confrim(e){
            console.log(e.format('yyyy-MM-dd'))
            this.currentDateCell=e.format('yyyy-MM-dd')
            this.showPicker=false;
        },
        cancel(){

        }
    }
}
</script>
<style lang="less" scoped>
</style>
