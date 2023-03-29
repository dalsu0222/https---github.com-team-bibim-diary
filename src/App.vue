<template>
  <div id="app">
  </div>
  <header>
    <h1>
      <router-link to="/"><img alt="Vue logo" src="./assets/logo.png" width="80"></router-link>
    </h1>
    <div class="menuWrap">
      <ul class="menu">
        <li>
          <router-link to="/">메인페이지</router-link>
        </li>
        <li>
          <router-link to="/write">일기장 작성</router-link>
        </li>
        <li>
          <router-link to="/list">일기장 보기</router-link>
        </li>
      </ul>
    </div>
  </header>
  <router-view />
  <Footer />
</template>

.script

<script>
import Header from './components/common/Header.vue' /* 자식 컴포넌트에서의 라우터 연결이 안되어 헤더파일은 사용하지 않음 */
import Home from './components/Home.vue'
import Footer from './components/common/footer.vue'

export default {
  name: 'App',
  components: {
    Header          //헤더 컴포넌트 추가
    , Home
    , Footer         //풋터 컴포넌트 추가
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

header {
  width: 100%;
  text-align: center;
  position: relative;
  height: 120px;
  border-bottom: 1px solid #35495e
}

header h1 {
  position: absolute;
  top: 0;
  left: 100px;
}

header ul.menu:after {
  display: block;
  clear: both;
  content: '';
}

header ul.menu {
  position: absolute;
  top: 20px;
  right: 50px;
}

header ul.menu li {
  float: left;
  padding: 10px 20px;
  list-style: none;
}
</style>
