import { useLanguageStore } from 'stores/language-store';
import { useAuthStore } from 'stores/auth-store';
import GCard from 'components/utility/GCard/GCard.vue';
import GTable from 'components/utility/GTable/GTable.vue';
import { api } from 'boot/axios';
import { QSpinnerTail } from 'quasar'
  
export default
{
    components: { GCard, GTable },
    data: () => ({
        lang: useLanguageStore(),
        auth: useAuthStore(),
        api: api,
        
    }),
    computed: {

        auth_token() {
            return this.auth.token;
        },
        language() {
            return this.lang.data;
        },
        language_used() {
            return this.lang.language;
        }
    },
    watch: {
        language_used() {
            this.$q.cookies.set('language', this.language_used);
            this.updateApiLanguage();
        },
        auth_token() {

        }
    },
    methods: {
        setAuthHeader () {
            if(this.auth_token) {
                this.api.defaults.headers["authorization"] = "Bearer " + this.auth_token;
            }    
        },
        showLoading() {
            this.$q.loading.show({
                spinner: QSpinnerTail,
                spinnerSize: 70,
            });
        },
        hideLoading() {
            this.$q.loading.hide();
        },
        checkCookiesForSession() {
            let id = this.$q.localStorage.getItem("id");
            let token = this.$q.localStorage.getItem("token");

            if(token) {
                this.auth.setAuth(id, token);
            }
        },
        setLanguageBasedOnCookies() {
            if(this.$q.cookies.has('language')) {
                this.lang.language = this.$q.cookies.get('language');
                this.lang.changeLanguage();
            }
        },
        updateApiLanguage() {
            this.api.defaults.headers["language"] = this.language_used;
        },
        popupError(error) {
            let error_message = "";
            
            if (typeof error === 'string' || error instanceof String) {
                error_message = error;
            }
            else {
                if(error.hasOwnProperty('response')) {
                    error_message = error.response.data.error_message;
                }
                else {
                    console.log(error);
                }
                
            }
           
            this.$q.loading.hide();
            this.$q.dialog({ title: this.language.error.title, message: error_message });
        },
        storeCredentials(id, token) {
            this.$q.localStorage.set("token", token);
            this.$q.localStorage.set("id", id);
            this.auth.setAuth(id, token);
            this.setAuthHeader();
        },
        addApiInterceptor() {
            this.api.interceptors.response.use((response)  => {
                return response;
            }, (error) => {
                if(error.hasOwnProperty('response')) {
                    if(error.response.status == 401) {
                        this.logout()
                    }
                }

                return Promise.reject(error);
            });
        },
        logout() {
            this.auth.removeAuth();
            this.$q.localStorage.set("token", "");
            this.$q.localStorage.set("id", "");
            this.$router.push({ name: 'login' });
        }
    }
}