<script>
  import Die from './Die.svelte';

  let { game } = $props();
</script>

<div class="mx-auto grid grid-cols-5 grid-rows-2 place-content-center gap-3 lg:gap-4">
  {#each game.dice as die}
    <Die value={die.value} isHeld={die.isHeld} onclick={() => game.toggleDie(die)} />
  {/each}
</div>
