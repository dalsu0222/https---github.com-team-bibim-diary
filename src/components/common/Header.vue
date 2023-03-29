<template>
    <div id="header">
        <header>
            <h1>

                <router-link to="/"><img alt="Vue logo" src="../../assets/logo.png" width="80"></router-link>
            </h1>
            <div class="menuWrap">
                <ul class="menu">
                    <li>
                        <router-link to="/">메인페이지</router-link>
                    </li>
                    <li><a href="javascript:;">일기장 작성</a></li>
                    <li>
                        <router-link to="/list">일기장 보기</router-link>
                    </li>
                    <!-- <li><a href="javascript:;">메뉴4</a></li> -->
                </ul>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    // name: Header
}
</script>

<style scoped>
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

a {
    text-decoration: none;
    color: #333;
}
</style>