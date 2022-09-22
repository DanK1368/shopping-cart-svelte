<script>
	import { cartItems } from '../stores/cart';
	import FaAngleUp from 'svelte-icons/fa/FaAngleUp.svelte';
	import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';

	export let product;
	let imgUrl = product.attributes.image.data.attributes.formats.thumbnail.url

	const handleDeleteItem = (selectedItemId) => {
		$cartItems = $cartItems.filter((item) => item.id !== selectedItemId);
	};

	const handleIncreaseAmount = (selectedItemId) => {
		cartItems.update((currentItems) => {
			const cartItem = currentItems.find((item) => item.id === selectedItemId);
			cartItem.amount++;
			return currentItems;
		});
	};

	const handleDecreaseAmount = (selectedItemId) => {
		cartItems.update((currentItems) => {
			const cartItem = currentItems.find((item) => item.id === selectedItemId);
			cartItem.amount--;
			return currentItems;
		});
	};
</script>

<div class="cart__item">
	<div class="cart__item__details-container">
		<img class="cart__item__img" src={imgUrl} alt={product.attributes.name} />
		<div class="cart__item__details">
			<h3>{product.attributes.name}</h3>
			<p>CHF {product.attributes.price.toFixed(2)}</p>
			<button class="cart__item__btn" on:click={() => handleDeleteItem(product.id)}>
				Remove
			</button>
		</div>
	</div>
	<div class="cart__item__amount">
		<button on:click={() => handleIncreaseAmount(product.id)}>
			<FaAngleUp />
		</button>
		<p>{product.attributes.amount}</p>
		<button
			on:click={() =>
				product.attributes.amount > 1 ? handleDecreaseAmount(product.id) : handleDeleteItem(product.id)}
		>
			<FaAngleDown />
		</button>
	</div>
</div>

<style lang="scss">
	.cart__item {
		display: flex;
		margin-block: 2rem;

		&__details-container {
			display: flex;
			align-items: center;
			gap: 4rem;
			flex: 1;
		}

		&__details {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: flex-start;
			gap: 0.5rem;
			height: 100%;
			flex: 1;

			h3 {
				font-size: 13px;
			}
		}

		&__btn {
			padding: 0.5rem 1rem;
			background-color: dodgerblue;
			border: none;
			border-radius: 15px;
			color: white;
			letter-spacing: 1.5px;
			cursor: pointer;

			&:hover {
				transform: scale(110%);
			}
		}

		&__img {
			width: 20%;
		}

		&__amount {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;

			button {
				border: none;
				background: none;
				cursor: pointer;
				width: 20px;
				height: 20px;

				&:hover {
					color: dodgerblue;
				}
			}
		}
	}
</style>
