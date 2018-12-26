<template>
  <div>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from './pages/HelloWorld'
export default {
  components: {
    HelloWorld
  }
}
</script>

<style>
.wrap {
  border-bottom: 1px solid #333;
  padding: 30px;
}
.desc {
  color: #999;
  margin-bottom: 20px;
}
</style>
