<script>
	import { cartItems } from '../stores/cart';
	import FaAngleUp from 'svelte-icons/fa/FaAngleUp.svelte';
	import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';

	export let product;
	console.log($cartItems);

	const handleDeleteItem = (selectedItemId) => {
		console.log(selectedItemId);

		cartItems.update((currentItems) => {
			return (currentItems = currentItems.filter((item) => item.id !== selectedItemId));
		});
	};
</script>

<div class="cart__item">
	<div class="cart__item__details-container">
		<img class="cart__item__img" src={product.img} alt={product.model} />
		<div class="cart__item__details">
			<h3>Model</h3>
			<p>CHF {product.price.toFixed(2)}</p>
			<button class="cart__item__btn" on:click={() => handleDeleteItem(product.id)}>
				Remove
			</button>
		</div>
	</div>
	<div class="cart__item__amount">
		<button>
			<FaAngleUp />
		</button>
		<p>{product.amount}</p>
		<button>
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
