<template>
  <div class="footer">
    <p class="author">{{author}}</p>
    <p v-for="(link, index) in links" :key="`product-desctiption-${index}`">
        <a class="linked" target="_blank" v-bind:href="link.url">{{link.name}}</a><span class="slash" v-if="index != links.length - 1">/</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    links: Array
  }
}
</script>

<style scoped>
.footer {
  width: calc(var(--desktop-width) - var(--desktop-padding-width) * 2);
  margin: 64px auto;
  padding: 0px var(--desktop-padding-width);
  display: flex;
  font-size: 18px;
  font-weight: bold;
}
.author {
  margin-right: 36px;
}
.slash {
  margin: 0 8px;
}

@media screen and (max-width: 980px) {
  .footer {
    padding: 0px 20px;
    width: calc(var(--tablet-width) - var(--tablet-padding-width) * 2);
  }
}

@media screen and (max-width: 600px) {
  .footer {
    width: calc(var(--mobile-width) - var(--mobile-padding-width) * 2);
  }
}

</style>
