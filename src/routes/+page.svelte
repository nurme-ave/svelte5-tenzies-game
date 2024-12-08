<script>
  // Imports
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { gameInstance } from '$lib/game/TenziesGame.svelte';

  import GameHeader from '$lib/components/game/GameHeader.svelte';
  import ScoreDisplay from '$lib/components/game/ScoreDisplay.svelte';
  import DiceGrid from '$lib/components/game/DiceGrid.svelte';
  import GameControls from '$lib/components/game/GameControls.svelte';
  import GameWon from '$lib/components/game/GameWon.svelte';
  import Footer from '$lib/components/common/Footer.svelte';

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
  <meta
    name="keywords"
    content="tenzies, dice game, browser game, roll dice, strategy game"
  />
</svelte:head>

{#if game}
  <section
    class="relative flex flex-col gap-6 rounded-lg bg-[#F5F5F5] px-2 py-6 text-center sm:p-10 lg:px-20 lg:pb-2 lg:pt-10 3xl:max-w-[1024px] 3xl:gap-10 3xl:px-28 3xl:py-12"
  >
    <GameHeader />
    <ScoreDisplay {game} />
    <DiceGrid {game} />
    <GameControls {game} />

    {#if game.gameWon}
      <GameWon {game} />
    {/if}

    <Footer />
  </section>
{/if}
