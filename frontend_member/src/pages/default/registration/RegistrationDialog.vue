<template>
    <div class="registration-dialog">
        <div class="registration-dialog__left">
            <img :src="`${theme}/images/login_img.png`" alt="">
        </div>
        <div class="registration-dialog__right">
           <div class="registration-form">
                <div class="registration-form__title">회원가입</div>
                <div class="registration-form__input">
                    추천인코드
                    <input placeholder="아이디 / 전화번호" type="text">
                </div>
                <div class="registration-form__input">
                    추천인코드
                    <input placeholder="로그인 비밀번호" type="text">
                </div>
                <div class="registration-form__input">
                    추천인코드
                    <input placeholder="로그인 비밀번호" type="text">
                </div>
                <div class="registration-form__button"><button type="submit">로그인</button></div>
                <div class="registration-form__more">
                    <a href="">이미 계정이 있으신가요?  <span>로그인</span></a>
                </div>
           </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./RegistrationDialog.scss"></style>

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