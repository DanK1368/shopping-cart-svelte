<script>
	import '../styles/global.css';
	import IoMdCart from 'svelte-icons/io/IoMdCart.svelte';
	import { cartItems } from '../stores/cart';

	$: totalItemsInCart = $cartItems.reduce((total, curr) => {
		total += curr.amount;
		return total;
	}, 0);
</script>

<header class="header">
	<a href="/" class="header__logo">
		<h1>MyShop</h1>
	</a>
	<nav class="header__navbar">
		<ul>
			<li>
				<a href="/products">Shop</a>
			</li>
			<li>Login</li>
			<li class="header__icon-container">
				<a href="/cart">
					<IoMdCart />

					{#if $cartItems.length > 0}
						<span class="header__amount">{totalItemsInCart}</span>
					{/if}
				</a>
			</li>
		</ul>
	</nav>
</header>

<div class="container">
	<slot />
</div>

<footer class="footer">Copyright MyShop</footer>

<style lang="scss">
	.header {
		background-color: dodgerblue;
		min-height: 10vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: 2rem;
		color: white;

		&__navbar {
			width: 150px;

			ul {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		&__icon-container {
			max-width: 30px;
			color: white;
			position: relative;
		}

		&__amount {
			position: absolute;
			top: -13px;
			right: -12px;
			background-color: black;
			width: 20px;
			height: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			font-size: 12px;
		}
	}

	.footer {
		min-height: 5vh;
		background-color: dodgerblue;
		display: grid;
		place-content: center;
		color: white;
	}

	.container {
		min-height: 85vh;
		overflow-y: scroll;
		display: grid;
		place-content: center;
	}
</style>
