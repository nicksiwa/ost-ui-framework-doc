<template>
  <div>
    <h1 class="heading">{{ msg }}</h1>
    <div class="example">
      <div class="example__content">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adam</td>
              <td>Smith</td>
            </tr>
            <tr>
              <td>Adam</td>
              <td>Smith</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="example__code">
        <pre v-highlightjs="sourcecode"><code class="xml"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      msg: 'Table Page',
      sourcecode: `
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Adam</td>
            <td>Smith</td>
          </tr>
          <tr>
            <td>Adam</td>
            <td>Smith</td>
          </tr>
        </tbody>
      </table>
      `
    }
  }
}
</script>

<style lang="scss" scoped>
  table {
    border-collapse: collapse;

    td, th {
      padding: 5px;
      border: 1px solid #ccc;
    }
  }
</style>
