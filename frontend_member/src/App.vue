<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.setLanguageBasedOnCookies();
    this.updateApiLanguage();
    this.checkCookiesForSession();
    this.setAuthHeader();
    this.addApiInterceptor();
  }
}
</script>
