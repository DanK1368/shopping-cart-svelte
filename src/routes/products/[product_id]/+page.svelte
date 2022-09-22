<script>
   import { productList } from '../../../stores/cart'

   console.log($productList)
</script>

<section class="item">
      <div class="item__image-container">
         <img src={$productList[0].img} alt="">
      </div>
      <div class="item__description">
         <h2>
            {$productList[0].model}
         </h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis voluptas tempore libero, explicabo assumenda perferendis, quia voluptatibus, consequuntur possimus mollitia debitis? Quaerat, natus.</p>
         <span>CHF {$productList[0].price}</span>
         <a href="/products">See All Products</a>
      </div>
   
</section>

<style lang="scss">
   .item {
      display: grid;
      place-content: center;
      min-height: 85vh;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      max-width: 1000px;
      padding-inline: 2rem;
      margin: 0 auto;


      &__image-container {
         img {
            width: clamp(250px, 100%, 500px);
         }
      }

      &__description {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         gap: 1.5rem;

         h2 {
            text-align: center;
            font-size: 1.8rem;
         }

         p {
            text-align: center;
            line-height: 1.5;
         }

         span {
            font-weight: 600;
         }

         a {
            padding: 0.5rem 0.7rem;
            background: dodgerblue;
            color: white;
            border: none;
            border-radius: 15px;
            cursor: pointer;

            &:hover {
               scale: 1.1;
            }
         }

      }

   }

  
</style>