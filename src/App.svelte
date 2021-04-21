<script>
	import Pokedex from './components/pokedex.svelte'
	import SelectionCard from './components/selectionCard.svelte'
</script>
<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	body {
        background-color: #e0e0e0;
    }
</style>
<Pokedex />
<SelectionCard />
