<script>
	export let name;

	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<main>
	<h1>Здарова {name}!</h1>
	<p> Как вкусно ням ням ням.</p>
	<button on:click={handleClick}>
		Clicked {count} {count === 1 ? 'time' : 'times'}
	</button>
</main>

<style>
	main {
		text-align: left;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>