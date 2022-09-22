export const PRODUCTS_QUERY = `
products {
   data {
     id
     attributes {
       name,
       price
       amount
       image {
         data {
           attributes {
             formats
           }
         }
       }
     }
   }
 }
`;
