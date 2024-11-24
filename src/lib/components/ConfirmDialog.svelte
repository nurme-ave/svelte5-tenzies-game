<script>
  import { scale } from 'svelte/transition';
  let { isOpen = false, onConfirm, onCancel } = $props();
</script>

{#if isOpen}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div
      class="mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
      transition:scale={{
        duration: 200,
        start: 0.95
      }}
    >
      <h2 class="mb-2 text-xl font-semibold text-[#8A2BE2]">Are you sure?</h2>
      <p class="mb-6 text-gray-600">
        This will reset your current game progress. This action cannot be undone.
      </p>

      <div class="flex items-center justify-center gap-3">
        <button
          onclick={onCancel}
          class="rounded-lg bg-gray-200 px-4 py-2 font-semibold text-gray-800 transition-colors hover:bg-gray-300 active:scale-95"
        >
          Cancel
        </button>
        <button
          onclick={onConfirm}
          class="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-600 active:scale-95"
        >
          Reset Game
        </button>
      </div>
    </div>
  </div>
{/if}
