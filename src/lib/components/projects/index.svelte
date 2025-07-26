<script lang="ts">
	import { projects } from '$lib/const/projects';
	import Project from './project.svelte';
</script>

<section class="bg-paper-white-50 snap-start px-8 pt-20" id="projects">
	<div class="m-auto w-full max-w-4xl pb-20">
		<h1 class="font-heading text-3xl md:text-5xl">Projects</h1>

		<div class="mt-4 flex flex-wrap gap-8">
			{#each projects as project}
				<Project {project} />
			{/each}
		</div>
	</div>
</section>
