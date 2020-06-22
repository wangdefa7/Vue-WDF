<template>
  <div>
    list
    <ul>
      <li v-for="(item,index) in pageLists" :key="index">
         {{item.title}}-{{item.content}} 
          
      </li>
    </ul>
  </div>
</template>


<script>
import store from '@/store'
export default {
  name: "list",
  store,
  computed:{//实时监听的方法
    pageLists(){
      return store.state.lists;
    }
  }
};
</script>