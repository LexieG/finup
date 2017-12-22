<template>
    <div class="page-head">
        <span class="avatar"><img v-if="user.avatar" :src="user.avatar" /></span>
        {{user.name}}
        <span>{{user.level}}</span>
        <div class="pull-right">
            <span class="">{{user.score}}</span>
            积分
            <em class="arrow-right"></em>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        user: Object
    }
}
</script>
<style lang="less" scoped>
.page-head {
    padding: 18px 40px;
}
.avatar {
    width: 70px;
    height: 70px;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
    }
}
</style>
