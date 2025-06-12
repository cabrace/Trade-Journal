<!-- src/routes/test-fetch/+page.svelte -->
<script lang="ts">
  export let data;
</script>

<h1>ByBit Test Fetch</h1>

<pre>{JSON.stringify(data.trades, null, 2)}</pre>

