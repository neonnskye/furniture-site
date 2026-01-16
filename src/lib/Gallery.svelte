<script lang="ts">
  import bedImage from "/src/assets/photos/bed.jpg";
  import tableImage from "/src/assets/photos/table.jpg";
  import stairImage from "/src/assets/photos/stairs.jpg";
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
