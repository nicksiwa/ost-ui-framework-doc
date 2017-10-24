<template>
  <div>
    <h1 class="heading">{{ msg }}</h1>
    <div class="example">
      <div class="example__content">
        <button class="btn">Primary</button>
        <button class="btn">Secondary</button>
        <button class="btn">Success</button>
        <button class="btn">Danger</button>
        <button class="btn">Warning</button>
        <button class="btn">Info</button>
      </div>
      <div class="example__code">
        <pre v-highlightjs="sourcecode"><code class="xml"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
      msg: 'Button Page',
      sourcecode: `
      <button type="button" class="btn --primary">Primary</button>
      <button type="button" class="btn --secondary">Secondary</button>
      <button type="button" class="btn --success">Success</button>
      <button type="button" class="btn --danger">Danger</button>
      <button type="button" class="btn --warning">Warning</button>
      <button type="button" class="btn --info">Info</button>
      `
    }
  }
}
</script>
