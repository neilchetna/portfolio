<script lang="ts">
	import { Footer } from '$lib';
	import '../app.css';

	let { children } = $props();
</script>

<div class="magicpattern relative h-dvh snap-y">
	{@render children()}
	<Footer />
</div>
