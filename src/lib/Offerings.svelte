<script lang="ts">
  import residentialIcon from "/src/assets/icons/residential.png";
  import officeIcon from "/src/assets/icons/office.png";
  import architecureIcon from "/src/assets/icons/architecture.png";
  import kitchenIcon from "/src/assets/icons/kitchen.png";
  import storageIcon from "/src/assets/icons/storage.png";
  import bathroomIcon from "/src/assets/icons/bathroom.png";

  const offerings = [
    { title: "Residential", image: residentialIcon },
    { title: "Office & Commercial", image: officeIcon },
    { title: "Architectural", image: architecureIcon },
    { title: "Kitchen & Dining", image: kitchenIcon },
    { title: "Storage & Cabinetry", image: storageIcon },
    { title: "Bathroom & Vanity", image: bathroomIcon },
  ];
</script>

<section class="centered-container w-180">
  <h2 class="section-heading">Our Offerings</h2>
  <div class="grid grid-cols-3 grid-rows-2">
    {#each offerings as { title, image }}
      <div class="flex flex-col">
        <div class="self-center">
          <img src={image} alt={title} />
          <h3 class="font-playfair text-center text-xl">{title}</h3>
        </div>
      </div>
    {/each}
  </div>
</section>
