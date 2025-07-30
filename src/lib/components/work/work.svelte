<script lang="ts">
	import gsap from 'gsap';
	import JobList from './job-list.svelte';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import { TextAppearConfig } from '$lib/const';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('#work-title', {
			...TextAppearConfig,
			scrollTrigger: {
				trigger: '#work-title',
				start: 'top 70%',
				toggleActions: 'play none none none'
			}
		});
	});
</script>

<section id="work" class="bg-paper-white-50 snap-start px-8 pt-16">
	<div class="m-auto w-full max-w-4xl">
		<h3 id="work-title" class="font-heading pb-4 text-3xl md:text-5xl">Where I've worked</h3>
		<JobList />
	</div>
</section>
