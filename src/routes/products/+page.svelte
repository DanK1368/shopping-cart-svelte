<script>
	import { productList, productItems } from '../../stores/cart';
	import SingleProduct from '../../components/SingleProduct.svelte';

	export let data;
	productItems.set(data.data)
	
</script>

<svelte:head>
	<title>MyShop | Products</title>
</svelte:head>

<section class="products-grid">
	{#each $productItems as product (product.id)}
		<SingleProduct product={product} />
	{/each}
</section>

<style lang="scss">
	.products-grid {
		display: grid;
		width: clamp(100px, 90%, 1200px);
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		padding-inline: 2rem;
		margin: 2rem auto;
		gap: 1.5rem;
	}
</style>
