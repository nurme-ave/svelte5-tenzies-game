<script>
  import { scale } from 'svelte/transition';
  import ConfirmDialogButton from '$lib/components/common/ConfirmDialogButton.svelte';

  let {
    isOpen = false,
    onConfirm,
    onCancel,
    title = 'Are you sure?',
    message = 'This will reset your current game progress. This action cannot be undone.'
  } = $props();
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
      <h2 class="mb-2 text-xl font-semibold text-[#8A2BE2]">{title}</h2>
      <p class="mb-6 text-gray-600">
        {message}
      </p>

      <div class="flex items-center justify-center gap-3">
        <ConfirmDialogButton variant="default" onclick={onCancel} text="Cancel" />
        <ConfirmDialogButton variant="danger" onclick={onConfirm} text="Reset Game" />
      </div>
    </div>
  </div>
{/if}
