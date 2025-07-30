<script lang="ts">
	import { projects } from '$lib/const/projects';
	import { onMount } from 'svelte';
	import Project from './project.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { TextAppearConfig } from '$lib/const';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('#project-title', {
			...TextAppearConfig,
			scrollTrigger: {
				trigger: '#project-title',
				start: 'top 70%',
				toggleActions: 'play none none none'
			}
		});

		requestAnimationFrame(() => {
			gsap.from('#project', {
				scale: 0.8,
				opacity: 0,
				duration: 0.7,
				stagger: 0.2,
				ease: 'back.out',
				scrollTrigger: {
					trigger: '#project',
					start: 'top 70%',
					toggleActions: 'play none none none'
				}
			});
		});
	});
</script>

<section class="bg-paper-white-50 snap-start px-8 pt-16" id="projects">
	<div class="m-auto w-full max-w-4xl pb-20">
		<h3 id="project-title" class="font-heading pb-4 text-3xl md:text-5xl">Projects</h3>

		<div id="project" class="mt-4 flex flex-wrap gap-8">
			{#each projects as project}
				<Project {project} />
			{/each}
		</div>
	</div>
</section>
