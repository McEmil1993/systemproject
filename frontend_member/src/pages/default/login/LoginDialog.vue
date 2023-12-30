<template>
    <div class="login-dialog">
        <div class="login-dialog__left">
            <img :src="`${theme}/images/login_img.png`" alt="">
        </div>
        <div class="login-dialog__right">
           <div class="login-form">
                <div class="login-form__title">로그인</div>
                <div class="login-form__input"><input placeholder="아이디 / 전화번호" type="text"></div>
                <div class="login-form__input"><input placeholder="로그인 비밀번호" type="text"></div>
                <div class="login-form__forgot">
                    <a href="">비밀번호를 잊으셨나요?</a>
                </div>
                <div class="login-form__button"><button type="submit">로그인</button></div>
                <div class="login-form__more">
                    <a href="">RED에 처음이신가요? <span>회원가입하기</span></a>
                </div>
           </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./LoginDialog.scss"></style>

<script>
export default
{
    filters: {},
    data:() =>({
        form: {},
    }),
    mounted() { },
    methods: { },
    computed: { }
}
</script>