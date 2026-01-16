<script lang="ts">
  import bedImage from "/src/assets/bed.jpg";
  import tableImage from "/src/assets/table.jpg";
  import stairImage from "/src/assets/stairs.jpg";
  const images = [bedImage, tableImage, stairImage];
</script>

<section class="centered-container" id="gallery">
  <h2 class="section-heading">Gallery</h2>
  <div class="grid grid-cols-3 gap-4">
    {#each images as image}
      <div class="overflow-hidden">
        <img
          src={image}
          alt=""
          class="aspect-square w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    {/each}
  </div>
</section>
