<script>
	import { productList } from '../../stores/cart';
	import SingleProduct from '../../components/SingleProduct.svelte';
</script>

<svelte:head>
	<title>MyShop | Products</title>
</svelte:head>

<section class="products-grid">
	{#each $productList as product (product.id)}
		<SingleProduct {product} />
	{/each}
</section>

<style lang="scss">
	.products-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		width: clamp(100px, 90%, 1000px);
		margin: 2rem auto;
		gap: 1.5rem;
	}
</style>
