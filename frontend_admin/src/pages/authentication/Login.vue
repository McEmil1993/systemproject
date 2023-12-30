<template>
    <div class="login">
        <div class="login__form">
            <div class="login__form__logo">
                <img :src="img_logo" alt="">
            </div>
            <div class="login__form__fields">
                <form method="post" @submit.prevent="signIn">
                    <q-input v-model="form_data.username" class="login-input" dark color="white" placeholder="ID">
                        <template v-slot:prepend>
                            <q-icon name="person" />
                        </template>
                    </q-input>
                    <q-input type="password" v-model="form_data.password" class="login-input" dark color="white" placeholder="Password">
                        <template v-slot:prepend>
                            <q-icon name="lock" />
                        </template>
                    </q-input>
                    <select @change="changeLanguage" class="login-language" v-model="language_chosen">
                        <option :value="language_choose.value" v-for="language_choose of language_options">{{ language_choose.label  }}</option>
                    </select>
                    <button type="submit" class="login-button">{{ language.buttons.login }}</button>
                </form>
            </div>

            <div class="login__form__copyright">
                Copyright © 2023 ODD House. All rights reserved.
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./Login.scss"></style>

<script>
import img_logo from 'assets/odds-logo.png';
import { api } from 'src/boot/axios';
export default
{
    data:() =>({
        language_chosen: "kr",
        language_options: [
            { value: 'kr', label: "한글" },
            { value: 'en', label: "English" },
        ],
        img_logo: img_logo,
        form: {},
        form_data: {
            username: '',
            password: '',
        }
    }),
    mounted() {
        this.language_chosen = this.lang.language;
    },
    methods: {
        signIn() {
            setTimeout(() => {
                    this.$router.push({ name: 'member_list'});
                    this.hideLoading();
                }, 500)  
            // this.showLoading();
            // api.post('/v1/admin/login', { username: this.form_data.username, password: this.form_data.password }).then(this.signInSuccess).catch(this.popupError);
        },
        signInSuccess(response) {
            let res = response.data;
            
            
            if(res.status_code != 200) {
                this.popupError(data.message);
            }
            else {
                this.storeCredentials(res.data.access_id, res.data.access_token);

                /* add delay to give to store credentials */
                setTimeout(() => {
                    this.$router.push({ name: 'member_list'});
                    this.hideLoading();
                }, 500)   
            }
        },
        changeLanguage() {
            this.hideLoading();
            this.lang.language = this.language_chosen;
            this.lang.changeLanguage();
        }
    }
}
</script>