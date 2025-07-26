<script lang="ts">
	import { GitHub, Linkedin, type Social } from '$lib/const';
	import Button from '../ui/button/button.svelte';
	const socials: Social[] = [GitHub, Linkedin];
</script>

<div class="flex gap-3">
	{#each socials as { name, link, icon: Icon } (name)}
		<Button target="_blank" href={link} variant="secondary">
			<Icon />
		</Button>
	{/each}
</div>
