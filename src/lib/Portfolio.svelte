<script lang="ts">
  import bedImage from "/src/assets/bed.jpg";
  import tableImage from "/src/assets/table.jpg";
  import stairImage from "/src/assets/stairs.jpg";
  const images = [bedImage, tableImage, stairImage];
</script>

<section class="mx-auto mb-10 text-center">
  <div>
    <h2 class="font-playfair-display mb-5 text-2xl tracking-wide uppercase">
      Potfolio
    </h2>
  </div>
  <div class="grid grid-cols-3 gap-4">
    {#each images as image}
      <img src={image} alt="" class="aspect-square w-full object-cover" />
    {/each}
  </div>
</section>
