<!-- layouts -->
<template>
  <div class="app-container">
    <Header></Header>
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
// import TabBar, { ITabList } from '@/components/TabBar.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRoute } from 'vue-router'
interface ILayoutState {
  // tabbars: Array<ITabList>
  defaultActive: number
}
export default defineComponent({
  name: 'layouts',
  components: {
    Header,
    Footer
  },
  setup() {
    const route = useRoute()
    const state: any = reactive({
      //   // tabbars: [
      //   //   { title: '首页', to: { name: 'Home' }, icon: 'home-o' },
      //   //   // { title: '案例', to: { name: 'Dome' }, icon: 'star-o' },
      //   //   { title: '关于我', to: { name: 'About' }, icon: 'user-o' }
      //   // ],
      // defaultActive: computed(() => {
      //   return state.tabbars.findIndex((item: any) => {
      //     return item.to.name === route.name
      //   })
      // })
    })
    const handleChange = (v: number) => {
      console.log('tab value:', v)
    }

    return {
      ...toRefs(state),
      handleChange
    }
  }
})
</script>
<style lang="scss" scoped>
.app-container{
  width: 375px;
  padding-bottom: 0;
}
</style>
