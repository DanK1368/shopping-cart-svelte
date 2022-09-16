<script>
	import MdShoppingCart from 'svelte-icons/md/MdShoppingCart.svelte';
	import { cartItems, productList } from '../stores/cart';

	const addProductToCart = (selectedItem) => {
		const itemIndex = $cartItems.findIndex((item) => item.id === selectedItem.id);
		if (itemIndex !== -1) {
			$cartItems[itemIndex].amount++;
		} else {
			cartItems.update((currentItems) => [selectedItem, ...currentItems]);
		}
	};

	export let product;
</script>

<article class="singleProduct">
	<h3 class="singleProduct__model">{product.model}</h3>
	<img src={product.img} alt="" />
	<div class="singleProduct__container">
		<button class="singleProduct__btn" on:click={() => addProductToCart(product)}>
			<MdShoppingCart />
		</button>
		CHF 9.99
	</div>
</article>

<style lang="scss">
	.singleProduct {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		align-items: center;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
		padding: 1rem;
		border-radius: 10px;

		&__model {
			text-align: center;
			font-size: 14px;
		}

		&__container {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2rem;
		}

		&__btn {
			background: none;
			border: none;
			cursor: pointer;
			width: 30px;
			height: 30px;
			transition: color 0.25s;

			&:hover {
				color: dodgerblue;
				transition: color 0.25s;
			}
		}
	}
</style>
