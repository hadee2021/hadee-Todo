<template>
  <div>
    <header>
      <div class="home-link-and-toggle">
        <span @click="moveToPage()" class="home-link">Home</span>
        <BackgroundToggle />
      </div>
      <div class="date-time">
        <DateTime />
      </div>
      <div class="router-view-header">
        <router-view name="header"></router-view>
      </div>
    </header>
    <main>
      <div class="day-menu">
        <DayMenuBar />
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import BackgroundToggle from '@/components/BackgroundToggle.vue'
import DateTime from '@/components/DateTime.vue'
import DayMenuBar from '@/components/DayMenuBar.vue'
import { useRouter, useRoute } from 'vue-router'
import { watch, ref } from 'vue'
export default {
  components: {
    BackgroundToggle,
    DateTime,
    DayMenuBar
  },
  setup() {
    const router = useRouter()
    const moveToPage = () => {
      router.push({
        name: 'Home'
      })
    }
    const route = useRoute()
    const dayIdentify = ref('')
    watch(() => route.params.day, () => { 
      dayIdentify.value = route.params.day
    })

    return {
      moveToPage,
      dayIdentify
    }
  }
}
</script>

<style>
  :root {
    --black : black;
    --white : white;
    --whiteTransparency : rgba(255, 255, 255, 0.5);
    --skyblue : rgb(66, 194, 255);
    --skyblueTransparency : rgba(66, 194, 255, 0.8);
    --vuegreen : #42b883;
    --lightgray : #EFEFEF;
  }
  .home-link-and-toggle {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .home-link {
    text-decoration: none;
    color: var(--white);
    font-size: 32px;
    cursor: pointer;
  }
  header {
    height: 45vh;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(173,17,224,0.7203256302521008) 0%, rgba(0,212,255,1) 100%);
  }
  main {
    background-color: var(--lightgray);
    /* 임시로 높이지정 */
    height: 1500px;
  }
  .date-time, 
  .day-menu {
    display: flex;
    justify-content: center;
  }
  .router-view-header {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
  }
</style>
