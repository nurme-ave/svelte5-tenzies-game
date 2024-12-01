<script>
  import MuteToggle from '$lib/components/ui/MuteToggle.svelte';

  let {
    title = 'Tenzies',
    instructions = [
      'Roll until all dice are the same.',
      'Click each die to freeze it at its current value between rolls.'
    ]
  } = $props();
</script>

<div class="space-y-0.5">
  <div class="mb-3 flex items-center justify-between 3xl:mb-6">
    <div class="w-10"></div>
    <h1 class="text-3xl font-bold uppercase tracking-wide text-[#8A2BE2] sm:text-4xl 3xl:text-5xl">
      {title}
    </h1>
    <MuteToggle />
  </div>
  {#each instructions as instruction}
    <p class="text-base sm:text-lg 3xl:text-2xl">{instruction}</p>
  {/each}
</div>
