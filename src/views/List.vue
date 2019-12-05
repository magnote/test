<template>
    <div>
        这是列表页
        <router-link
            v-for = "title in titles"
            :key="title.id"
            :to="{name:'listinfo',params:{id:title.id}}"
        >{{title.txt}}</router-link>
    </div>
</template>

<script>

import listinfo from "./Listinfo"
export default {
    data(){
        return {
            titles:[
                {id:1,txt:"文章一"},
                {id:2,txt:"文章二"}
            ]
        }
    }
}
</script>

<style>

</style>