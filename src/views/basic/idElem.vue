<template>
    <div id="app">
        {{message}}
    </div>
</template>

<script>
export default{
    name: "app",
    data(){
        return {
            message:'测试输出'
        }
        
    }
}
vm.message='改变了'

</script>