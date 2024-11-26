<script>
  import MuteToggle from './MuteToggle.svelte';
</script>

<div class="space-y-0.5">
  <div class="mb-4 flex items-center justify-between 3xl:mb-6">
    <div class="w-10"></div>
    <h1 class="text-3xl font-bold uppercase tracking-wide text-[#8A2BE2] sm:text-4xl 3xl:text-5xl">
      Tenzies
    </h1>
    <MuteToggle />
  </div>
  <p class="text-base sm:text-lg 3xl:text-2xl">Roll until all dice are the same.</p>
  <p class="text-base sm:text-lg 3xl:text-2xl">
    Click each die to freeze it at its current value between rolls.
  </p>
</div>
