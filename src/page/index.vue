<template>
    <div id="index">
        <div class="header">
            <div class="starWrapper">
                <div class="star"
                     v-for="(v,k ) in starsCount"
                     :key="k"></div>
            </div>
            <div class="titleInfo ignore">
                <div> <span>『</span> Ta Zhi</div>
                <div>Ta 知 <span>』</span></div>
            </div>
        </div>
        <div class="main">
            <div class="tabs">
                <div @click="ToTodos">
                    <span> Todos</span></div>
                <div>
                    <span> Ousers</span>
                </div>
                <div>
                    <span> Others</span>
                </div>
            </div>
        </div>
        <div></div>
    </div>
</template>
<script>
	export default {
		name: '',
		data() {
			return {
                starsCount:20,
                tabActive:1
			}
		},
		mounted() {
            this.$nextTick(()=>{
            this.starMoveFn(this.starsCount)
            })
		},
		methods: {
            starMoveFn(starsCount){
                var getStar = document.querySelectorAll('.star')
			for(let j = 0; j <starsCount; j++) {
                getStar[j].style.top = Math.random() * 100 + 'px';
                getStar[j].style.left = Math.random() * 100 + 'vw';
				getStar[j].style.animationDelay = j % 6 == 0 ? '0s' : j * 2 + 's'
			}
            },
            ToTodos(){
                this.$router.push({name:"todos"})
            }
        }
	}
</script>

<style lang="less" scoped>
@import url("../../static/less/base.less");
.header {
    height: 20vh;
    background: linear-gradient(#13abc4, #a6e3e9);
    position: relative;
}
.titleInfo {
    height: 100%;
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    color: #fff;
    font-weight: 600;
    span {
        font-size: 46px;
    }
    > div:first-of-type {
        align-self: flex-start;
    }
    > div:last-of-type {
        align-self: flex-end;
    }
}
.starWrapper {
    width: 100%;
    overflow: hidden;
    .star {
        display: block;
        /*　　　 width: 1px;*/
        position: relative;
        opacity: 0;
        position: absolute;
        animation: starMove 5s linear infinite;
        z-index: 50;
        &:after {
            content: "";
            display: block;
            border: 0px solid #fff;
            border-width: 0px 90px 2px 90px;
            border-color: transparent transparent transparent
                rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
            transform: rotate(-135deg);
        }
    }
}
.main {
    .tabs {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 60vw;
        margin: 0 auto;
        padding: 20px 0;
        > div {
            padding-bottom: 10px;
            // border-bottom: 5px solid @df-color;
        }
    }
}
@keyframes starMove {
    0% {
        opacity: 0;
        transform: scale(0.5) translate3d(0, 0, 0);
    }
    50% {
        opacity: 1;
        transform: translate3d(5vh, 5vh, 0);
    }
    100% {
        opacity: 0;
        transform: scale(1.2) translate3d(10vh, 10vh, 0);
    }
}
</style>