<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
  <a class:active={$page.url.pathname === '/'} class="navbar-item" href="/"> Home </a>
</header>


<style lang="css">
  .active {color: red}
</style>