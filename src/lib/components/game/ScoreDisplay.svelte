<script>
  let { game } = $props();
</script>

<div class="text-xl font-semibold text-[#000]">
  <p>Rolls: {game.rolls}</p>
  <p>Best score: {game.bestScore === Infinity ? 0 : game.bestScore}</p>
</div>
