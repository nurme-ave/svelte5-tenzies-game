<script>
  import Button from '$lib/components/common/Button.svelte';
  import zoomIn from '$lib/utils/zoomIn';

  let { game } = $props();
</script>

<div
  transition:zoomIn={{ duration: 400, delay: 0 }}
  class="absolute left-1/2 top-1/2 z-50 grid h-full w-full -translate-x-1/2 -translate-y-1/2 transform place-content-center rounded-lg bg-purple-200 px-8 py-6 text-center text-black shadow-lg sm:h-[90%] sm:w-[90%] sm:px-10 sm:py-8 lg:h-[95%]
  lg:w-[95%] 3xl:h-full 3xl:w-full"
>
  <i class="fa-solid fa-trophy fa-4x mb-4 text-[#ffaa33] sm:mb-6 3xl:mb-8"
  ></i>
  <h2
    class="mb-2 text-3xl font-bold uppercase tracking-wide text-[#8A2BE2] sm:mb-4 sm:text-4xl 3xl:text-5xl"
  >
    Winner!
  </h2>
  <div class="text-xl sm:text-2xl 3xl:text-3xl">
    <p class="mb-2">Congratulations!</p>
    <p class="mb-8 sm:mb-12 3xl:mb-16">
      It took you <span class="font-semibold">{game.rolls}</span>
      {game.rolls === 1 ? 'roll' : 'rolls'} to win!
    </p>
    <Button
      text="New Game"
      color="#8A2BE2"
      onClick={() => game.reset()}
      ariaLabeltext="new game"
    />
  </div>
</div>
