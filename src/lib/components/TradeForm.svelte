<script lang="ts">
  let symbol = '', side = 'buy', notes = '';
  async function submit() {
    const res = await fetch('/api/trades', {
      method: 'POST',
      body: JSON.stringify({ symbol, side, notes }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(await res.json());
  }
</script>

<form on:submit|preventDefault={submit}>
  <input bind:value={symbol} placeholder="Symbol" />
  <select bind:value={side}>
    <option value="buy">Buy</option>
    <option value="sell">Sell</option>
  </select>
  <textarea bind:value={notes} placeholder="Notes..." />
  <button type="submit">Save</button>
</form>

