<template>
  <div class="home">
    <h1>안녕하세요!</h1>
    <p>
      팀 bibim의 일기장에 오신 것을 환영합니다!
      <br>자유롭게 일기를 작성해주세요~
    </p>
    <img src="../assets/poster.jpg">
  </div>
</template>

<script>
export default {

  name: 'Home',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img {
  width: 400px;
  height: 500px;
}
</style>
