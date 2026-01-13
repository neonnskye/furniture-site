<script>
  const navLinks = [
    { href: "#top", label: "Home" },
    { href: "#top", label: "About" },
    { href: "#top", label: "Portfolio" },
    { href: "#top", label: "Contact" },
  ];
</script>

<nav class="font-playfair-display my-5 flex justify-between text-lg uppercase">
  <div class="">
    <h2 class="tracking-widest">Untitled Furniture</h2>
  </div>
  <div class="text-gray tracking-wide">
    {#each navLinks as { href, label }}
      <a {href} class="mx-1 transition-colors duration-300 hover:text-black"
        >{label}</a
      >
    {/each}
  </div>
</nav>
