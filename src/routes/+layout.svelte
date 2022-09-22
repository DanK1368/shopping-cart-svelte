<script>
	import '../styles/global.css';
	import IoMdCart from 'svelte-icons/io/IoMdCart.svelte';
	import { cartItems } from '../stores/cart';
	import { onMount } from 'svelte';
	import auth from '../authService';
	import { isAuthenticated, user } from '../stores/auth';

	$: totalItemsInCart = $cartItems.reduce((total, curr) => {
		total += curr.attributes.amount;
		return total;
	}, 0);

	let auth0Client;

	onMount(async () => {
		auth0Client = await auth.createClient();

		isAuthenticated.set(await auth0Client.isAuthenticated());
		user.set(await auth0Client.getUser());
	});

	function login() {
		auth.loginWithPopup(auth0Client);
	}

	function logout() {
		auth.logout(auth0Client);
	}

	
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

			{#if $isAuthenticated}
				<li>
					<button class="header__btn" on:click={logout}>Logout</button>
				</li>
			{:else}
				<li>
					<button class="header__btn" on:click={login}>Login</button>
				</li>
			{/if}

			{#if $isAuthenticated}
					<div class="header__profile-container">
						<img src={$user.picture} alt="" />
						<span>{$user.name}</span>
					</div>
			{/if}

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
			width: clamp(100px, 50%, 400px);
			padding-inline: 1rem ;

		

			ul {
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: 1rem;

			}
		}

		&__icon-container {
			max-width: 30px;
			color: white;
			position: relative;
		}

		&__profile-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.3rem;

			span {
				font-size: 0.6rem;
				
			}

			img {
				width: 45px;
				height: 45px;
				border-radius: 50%;
				outline: 1px solid white;
				object-fit: cover;
			}
		}

		&__btn {
			background: none;
			border: none;
			color: white;
			font-size: 1rem;
			cursor: pointer;

			&:hover {
				scale: 1.1;
			}
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
		width: 100%;
		overflow-y: scroll;
		
	}
</style>
