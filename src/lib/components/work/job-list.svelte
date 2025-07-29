<script lang="ts">
	import { CliffAI, Quantive, type Job } from '$lib/const';
	import { IconExternalLink } from '@tabler/icons-svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	const jobs: Job[] = [Quantive, CliffAI];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		requestAnimationFrame(() => {
			gsap.from('#work-card', {
				scale: 0.5,
				opacity: 0,
				duration: 0.7,
				stagger: 0.2,
				scrollTrigger: {
					trigger: '#work-card',
					start: 'top 70%',
					toggleActions: 'play none none none'
				}
			});
		});
	});
</script>

<div class="m-auto mt-4 flex w-full flex-wrap gap-8">
	{#each jobs as job (job.company)}
		<div
			id="work-card"
			class="neo-shadow-lg border-paper-black flex w-full min-w-80 flex-1 border-3"
		>
			<div class="bg-paper-blue-100 border-paper-black flex aspect-square border-r-3 p-4">
				<img class="m-auto size-22" src={job.img} alt={job.company} />
			</div>
			<div class="h-full flex-1 py-2">
				<a
					href={job.link}
					target="_blank"
					class="border-paper-black flex items-center gap-1 border-b-3 px-4 pb-2 font-semibold md:text-lg"
					>{job.company} <IconExternalLink size="16" /></a
				>
				<p class="mx-4 mt-1 mb-0 text-sm font-semibold md:text-xl">{job.role}</p>
				<p class="mx-4 text-xs font-normal">{job.dateRange}</p>
				<div class="mx-4 mt-4 mb-1 flex gap-1.5">
					{#each job.techStack as { name, icon: Icon } (name)}
						<Icon class="" />
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
