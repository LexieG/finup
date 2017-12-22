<template>
   <div class="home-box">
       <user-info-bar :user="userInfo"></user-info-bar>
   </div>
</template>
<script>
import UserInfoBar from "./UserInfoBar";
export default {
    data () {
        return {
            userInfo: {
                avatar: 'http://www.feizl.com/upload2007/2014_01/140116182482507.jpg',
                name: 'Yannan',
                level: 'V1会员',
                score: '18900'
            }
        }
    },
    components: {
        UserInfoBar
    }
}
</script>

<style>

</style>
