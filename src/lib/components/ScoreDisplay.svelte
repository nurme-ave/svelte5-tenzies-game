<script>
  let { game } = $props();
</script>

<div class="text-xl font-semibold text-[#000] 3xl:text-2xl">
  <p>Rolls: {game.rolls}</p>
  <p>Best score: {game.bestScore === Infinity ? 0 : game.bestScore}</p>
</div>
