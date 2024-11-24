<script>
  // Imports
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { gameInstance } from '$lib/game/TenziesGame.svelte';

  import Die from '$lib/components/Die.svelte';
  import Button from '$lib/components/Button.svelte';
  import MuteToggle from '$lib/components/MuteToggle.svelte';
  import GameWon from '$lib/components/GameWon.svelte';

  /* 
   Create a reactive variable that starts as empty (null).
   This variable is like a reactive middleman here, preparing the game
   and making sure everything is set for the game to start.
  */
  let game = $state(null);

  /* 
   Assign the actual game to the reactive variable.
   All is set and the game is ready to begin.
  */
  onMount(() => {
    game = gameInstance;
  });
</script>

<svelte:head>
  <title>Tenzies - Roll Your Way to Victory</title>
  <meta
    name="description"
    content="Roll, match, and strategize your way to victory in Tenzies! A thrilling dice game where quick decisions and luck combine. Can you get all dice to match?"
  />
  <meta name="keywords" content="tenzies, dice game, browser game, roll dice, strategy game" />
</svelte:head>

{#if game}
  <section
    class="relative flex flex-col gap-8 rounded-lg bg-[#F5F5F5] px-4 py-10 text-center sm:max-w-[768px] sm:px-16 sm:py-12 lg:px-20 lg:py-14 3xl:max-w-[1024px] 3xl:gap-10 3xl:px-28 3xl:py-24"
  >
    <div class="space-y-0.5">
      <div class="mb-4 flex items-center justify-between 3xl:mb-6">
        <div class="w-10"></div>
        <h1
          class="text-3xl font-bold uppercase tracking-wide text-[#8A2BE2] sm:text-4xl 3xl:text-5xl"
        >
          Tenzies
        </h1>
        <MuteToggle />
      </div>
      <p class="text-base sm:text-lg 3xl:text-2xl">Roll until all dice are the same.</p>
      <p class="text-base sm:text-lg 3xl:text-2xl">
        Click each die to freeze it at its current value between rolls.
      </p>
    </div>

    <div class="text-xl font-semibold text-[#000] 3xl:text-2xl">
      <p>Rolls: {game.rolls}</p>
      <p>Best score: {game.bestScore === Infinity ? 0 : game.bestScore}</p>
    </div>

    <div class="mx-auto grid grid-cols-5 grid-rows-2 place-content-center gap-3 lg:gap-4">
      {#each game.dice as die}
        <Die value={die.value} isHeld={die.isHeld} onclick={() => game.toggleDie(die)} />
      {/each}
    </div>

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

    {#if game.gameWon}
      <GameWon {game} />
    {/if}
  </section>
{/if}
