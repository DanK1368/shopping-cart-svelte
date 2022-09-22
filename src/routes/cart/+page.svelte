<script>
	import CartItem from '../../components/CartItem.svelte';
	import { cartItems} from '../../stores/cart';

	const handleClearCart = () => {
		$cartItems = [];
	};

	$: calculateTotalPrice = $cartItems.reduce((total, currentItem) => {
		const totalPriceOfSingleItems = currentItem.attributes.price * currentItem.attributes.amount;
		total += totalPriceOfSingleItems;
		return total;
	}, 0);

</script>

<svelte:head>
	<title>MyShop | Cart</title>
</svelte:head>

<section class="cart">
	<div class="cart__heading">
		<h2>Your Cart</h2>
	</div>

	<div class="cart__item-container">
		{#if $cartItems.length === 0}
			<h3>Nothing To Show</h3>
		{:else}
			{#each $cartItems as product (product.id)}
				<CartItem {product} />
			{/each}
		{/if}
	</div>

	<div class="cart__footer">
		<div class="cart__total">
			<p>Total</p>
			<p>CHF {calculateTotalPrice.toFixed(2)}</p>
		</div>
		<button class="cart__btn" on:click={handleClearCart}> Clear Cart </button>
	</div>
</section>

<style lang="scss">
	.cart {
		width: clamp(300px, 100%, 600px);
		padding-inline: 3rem;
		margin: 0 auto;
		height: 500px;
		padding-top: 2rem;

		&__heading {
			display: flex;
			justify-content: center;
			margin-bottom: 2rem;
		}

		&__item-container {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-direction: column;
			height: 70%;
			overflow: scroll;

			scrollbar-width: none;

			h3 {
				color: rgb(255, 30, 79);
			}
		}

		&__footer {
			display: flex;
			margin-top: 3rem;
			border-top: 1px solid gray;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			justify-content: center;
		}

		&__total {
			display: flex;
			margin-top: 2rem;
			justify-content: space-between;
			width: 100%;
		}

		&__btn {
			font-weight: 700;
			padding: 0.5rem 2rem;
			background-color: rgb(255, 30, 79);
			border: none;
			border-radius: 15px;
			color: white;
			letter-spacing: 1.5px;
			cursor: pointer;

			&:hover {
				transform: scale(110%);
			}
		}
	}
</style>
