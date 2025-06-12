<script>
  export let data;
</script>

<h1>DB Connection Test</h1>

{#if data.success}
  <pre>{JSON.stringify(data.result, null, 2)}</pre>
{:else}
  <p style="color: red;">Error: {data.error}</p>
{/if}

