<script>
  import ConfirmDialog from '$lib/components/common/ConfirmDialog.svelte';

  // Most buttons don't need confirmation, so 'needsConfirmation' defaults to false.
  // Override with needsConfirmation={true} for destructive actions like reset.
  let {
    text,
    color,
    onClick,
    ariaLabeltext,
    needsConfirmation = false
  } = $props();
  let showConfirmDialog = $state(false);

  function handleClick() {
    if (needsConfirmation) {
      showConfirmDialog = true;
    } else {
      onClick(); // Execute the action after user confirms
    }
  }

  function handleConfirm() {
    onClick(); // Execute the action after user confirms
    showConfirmDialog = false;
  }

  // We don't need to use onClick() here since we do not wish to execute any actions.
  // All we need to do is to close the dialog.
  function handleCancel() {
    showConfirmDialog = false;
  }
</script>

<div>
  <button
    onclick={handleClick}
    class="w-[7.5em] rounded-lg p-4 text-xl font-semibold uppercase tracking-wide text-white
           transition-colors duration-200 hover:brightness-90 active:scale-95
           sm:text-2xl 3xl:w-[7.75em] 3xl:px-8 3xl:py-6"
    style="background-color: {color};"
    aria-label={ariaLabeltext}
  >
    {text}
  </button>

  <ConfirmDialog
    isOpen={showConfirmDialog}
    onConfirm={handleConfirm}
    onCancel={handleCancel}
  />
</div>
