<script lang="ts">
	import type { Project } from '$lib/const/projects';
	import { IconExternalLink } from '@tabler/icons-svelte';

	const { project }: { project: Project } = $props();
</script>

<div class="border-paper-black neo-shadow min-w-80 flex-1 rounded-xl border-3 p-4">
	<img class="border-paper-black aspect-auto border-3" src={project.img} alt={project.title} />
	<div class="mt-4 flex justify-between">
		<a href={project.url} class="flex items-center gap-1 text-xl font-semibold"
			>{project.title} <IconExternalLink size="16" /></a
		>
		<div class="flex gap-2">
			{#each project.stack as { icon: Icon, name } (name)}
				<Icon size="24" />
			{/each}
		</div>
	</div>
	<p class="mt-2">{project.description}</p>
</div>
