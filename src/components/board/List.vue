<template>
    <div>
        <h2>게시판 리스트</h2>
        <a href="javascript:;" @click="getList">GET 방식 데이터 접근</a>
    </div>
</template>

<script>
export default {
    data() { //변수생성
        return {
            body: '' //리스트 페이지 데이터전송
            , board_code: 'diary' //게시판코드
            , list: '' //리스트 데이터
            // 위의 변수들이 필요한지는 잘 모르겠음
        }
    },
    methods: {
        getList() {
            this.$axios.get("http://localhost:3000/api/board")
                .then((res) => {
                    console.log(res);
                })
                .then((err) => {
                    console.log(err);
                })
        }
    }
}
</script>

<style scoped></style>