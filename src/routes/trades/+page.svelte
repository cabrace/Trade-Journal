<!-- src/routes/trades/+page.svelte -->
<script lang="ts">
  import "../../app.css";
  import ThemeSelect from '$lib/themes/daisyui/theme-select.svelte';
  import UpdateTradesButton from '$lib/components/UpdateTradesButton.svelte';

	export let data;
</script>

<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-2xl">Trade Journal</a>
  </div>
  <div class="flex-1 mt-4">
<ThemeSelect/>
    <UpdateTradesButton />
    <div class="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-200 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
  </div>
</div>

{#if data.trades.length > 0}
  <div class="rounded-box border border-base-content/5 bg-base-100">
    <table class="border-collapse table table-pin-cols">
      <thead>
        <tr class="">
          <th class="p-2 uppercase">Symbol</th>
          <th class="p-2 uppercase">Side</th>
          <th class="p-2 uppercase">Entry</th>
          <th class="p-2 uppercase">Exit</th>
          <th class="p-2 uppercase">Qty</th>
          <th class="p-2 uppercase">P&L</th>
          <th class="p-2 uppercase">Created</th>
        </tr>
      </thead>
      <tbody>
        {#each data.trades as trade}
          <tr class="">
            <td class="p-2">{trade.symbol}</td>
            <td class="p-2">{trade.side}</td>
            <td class="p-2">{trade.avgEntryPrice}</td>
            <td class="p-2">{trade.avgExitPrice}</td>
            <td class="p-2">{trade.qty}</td>
            <td class="p-2">{trade.closedPnl}</td>
            <td class="p-2">{new Date(trade.createdTime).toLocaleString()}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{:else}
	<p>No trades found.</p>
{/if}

<!-- <style> -->
<!-- th {text-transform: uppercase;} -->
<!-- </style> -->
<!---->
