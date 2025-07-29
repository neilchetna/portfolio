<script lang="ts">
	import { Footer } from '$lib';
	import '../app.css';

	let { children } = $props();
</script>

<div class="h-dvh">
	{@render children()}
</div>
