<template>
  <div class="hello">
    {{ msg }}
    <button @click="handleClick">Toast</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "测试",
    };
  },
  mounted() {},
  methods: {
    handleClick() {
      this.$toast({
        type: "success",
        msg: "成功111111",
        duration: 3,
      });
    },
  },
};
</script>

<style scoped></style>
