import { PRODUCTS_QUERY } from '../../lib/query';
/** @type {import('./$types').PageServerLoad} */

let BASE_URL = import.meta.env.VITE_DB_URL;

export async function load() {
	const fetchParams = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `{${PRODUCTS_QUERY}}`
		})
	};

	const response = await fetch(`${BASE_URL}/graphql`, fetchParams);
	const {
		data: { products }
	} = await response.json();

	return products;
}
