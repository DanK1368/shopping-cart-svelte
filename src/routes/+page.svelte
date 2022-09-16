<svelte:head>
	<title>My Shop | Home</title>
</svelte:head>

<main class="main">
	<div class="main__container">
		<h1>Welcome to T-shirts</h1>

		<a href="/products">
			<button class="main__btn">Check Out Our Store</button>
		</a>
	</div>
</main>

<style lang="scss">
	.main {
		display: grid;
		place-content: center;

		&__container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 3rem;
		}

		&__btn {
			padding: 1rem 3rem;
			border-radius: 15px;
			border: none;
			background-color: dodgerblue;
			color: white;
			font-size: 18px;
			cursor: pointer;

			&:hover {
				box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
			}

			&:active {
				box-shadow: none;
			}
		}
	}
</style>
