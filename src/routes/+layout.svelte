<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="h-lvh">
	{@render children()}
</div>
