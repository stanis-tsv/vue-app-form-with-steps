<template>
  <Page />
</template>

<script>
import Page from './views/Page'
export default {
  components: {Page},
  setup() {
    
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
body {
  max-width: 867px;
  font-family: 'Inter', sans-serif;
  background-color: #F5F5F5;
  font-size: 16px;
  padding: 90px;
  margin: 0 auto;
}
h1, h4, p, th, td {
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 950px) {
  body {
    max-width: 100%;
    padding: 10px;
  }
}
</style>
