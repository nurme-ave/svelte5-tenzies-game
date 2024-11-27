<script>
  import Button from '$lib/components/common/Button.svelte';

  let { game } = $props();
</script>

<div class="flex flex-row items-center justify-center gap-5 sm:gap-6">
  <Button
    text="Reset"
    color="#EF4444"
    onClick={() => game.reset()}
    ariaLabeltext="reset game"
    needsConfirmation={true}
  />
  <Button text="Roll" color="#8A2BE2" onClick={() => game.roll()} ariaLabeltext="roll dice" />
</div>
