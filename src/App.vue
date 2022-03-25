<template>
  <div>
    <header>
      <div class="home-link-div">
        <span @click="moveToPage()" class="home-link">Home</span>
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
import DateTime from '@/components/DateTime.vue'
import DayMenuBar from '@/components/DayMenuBar.vue'
import { useRouter } from 'vue-router'
export default {
  components: {
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

    return {
      moveToPage
    }
  }
}
</script>

<style>
  :root {
    --black : black;
    --white : white;
    --whiteTransparency : #f7f7f7;
    --skyblue : rgb(66, 194, 255);
    --skyblueTransparency : rgba(66, 194, 255, 0.8);
    --vuegreen : #42b883;
    --lightgray : #EFEFEF;
  }
  .home-link-div {
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
    height: 100vh;
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
