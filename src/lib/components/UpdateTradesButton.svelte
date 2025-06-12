<script lang="ts">
  import { onMount } from 'svelte';

  let loading = false;
  let message = '';

  export let onComplete: (() => void) | undefined;

  async function updateTrades() {
    loading = true;
    message = '';
    try {
      const res = await fetch('/api/update-trades', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        message = `✅ Updated ${data.inserted} trades from ByBit`;
        if (onComplete) onComplete(); // Notify parent
      } else {
        message = `❌ Error: ${data.error}`;
      }
    } catch (err) {
      message = '❌ Failed to update trades';
      console.error(err);
    } finally {
      loading = false;
    }
  }
</script>

<button on:click={updateTrades} class="btn btn-primary">
  {loading ? 'Updating...' : 'Update Trades from ByBit'}
</button>

{#if message}
  <p class="mt-2 text-sm">{message}</p>
{/if}

