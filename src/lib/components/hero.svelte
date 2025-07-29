<script lang="ts">
	import { IconDownload } from '@tabler/icons-svelte';
	import Button from './ui/button/button.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { TextAppearConfig } from '$lib/const';

	let lines: HTMLDivElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const elements = lines.querySelectorAll('.line');

		gsap.from(elements, {
			...TextAppearConfig,
			scrollTrigger: {
				trigger: lines,
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
	});
</script>

<section
	class="text-paper-black magicpattern flex h-full snap-center flex-col flex-wrap items-center justify-center overflow-auto"
>
	<div bind:this={lines} class="max-w-4xl px-8 font-semibold">
		<h1 class="font-heading line my-6 text-4xl font-bold md:text-7xl">
			Code that clicks on the
			<span class="decoration-paper-blue-150 text-paper-blue-150 px-0.5 underline decoration-4"
				>web</span
			>
		</h1>
		<p class="line md:text-2xl">
			Hello, I'm Neel and I build blazing-fast full-stack web apps using React, Angular, Python and
			Golang — from pixel-perfect UIs to solid backends.
		</p>
		<div class="line mt-6 flex gap-4">
			<Button class="hover:-mt-1" size="lg">My Resume <IconDownload /></Button>
			<Button class="hover:-mt-1" size="lg">Say Hello 👋</Button>
		</div>
	</div>
</section>
