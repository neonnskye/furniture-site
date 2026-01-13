<script lang="ts">
  import bedImage from "/src/assets/bed.jpg";
  import tableImage from "/src/assets/table.jpg";
  import stairImage from "/src/assets/stairs.jpg";
  const images = [bedImage, tableImage, stairImage];
</script>

<section>
  <div>
    <h2>Potfolio</h2>
  </div>
  <div>
    {#each images as image}
      <img src={image} alt="" />
    {/each}
  </div>
</section>
