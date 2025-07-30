<script lang="ts">
	import {
		Angular,
		Golang,
		MongoDB,
		MySQl,
		Nextjs,
		Node,
		Python,
		React,
		Svelte,
		TypeScript,
		type Tool
	} from '$lib/const';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	const tools: Tool[] = [
		TypeScript,
		React,
		Angular,
		Svelte,
		Golang,
		Python,
		Node,
		MySQl,
		MongoDB,
		Nextjs
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		requestAnimationFrame(() => {
			gsap.from('#screen', {
				scale: 0.5,
				opacity: 0,
				duration: 0.7,
				stagger: 0.2,
				ease: 'back.out',
				scrollTrigger: {
					trigger: '#screen',
					start: 'top 70%',
					toggleActions: 'play none none none',
					once: true
				}
			});
		});

		ScrollTrigger.refresh();
	});
</script>

<div
	id="screen"
	class="bg-paper-white-50 text-paper-black flex w-full max-w-2xl flex-col overflow-hidden rounded-xl"
>
	<div class="ring-paper-black flex gap-1.5 px-2 py-2 ring-2">
		<div class="border-paper-black bg-paper-pink-100 h-2.5 w-2.5 rounded-full border-2"></div>
		<div class="border-paper-black h-2.5 w-2.5 rounded-full border-2"></div>
		<div class="border-paper-black h-2.5 w-2.5 rounded-full border-2 bg-green-300"></div>
	</div>
	<div class="text-md my-8 h-full md:text-xl">
		<p class="px-8 font-semibold">
			// Here are some tools and technologies that I have worked with.
		</p>
		<p class="mt-4 px-8"><span class="text-paper-pink-150">const</span> tools = [</p>
		<div class="gradient-around relative my-4 w-full overflow-x-hidden md:w-2xl md:grid-cols-4">
			<ul class="scroll-track flex w-max gap-4 py-1 whitespace-nowrap">
				{#each tools.concat(tools) as { name, icon: Icon }, i (i)}
					<li
						class="group/item reset-track border-paper-black hover:bg-paper-pink-50 neo-shadow inline-block w-auto min-w-36 gap-4 overflow-hidden rounded-sm border-2"
					>
						<Icon class="m-auto my-10" size="64px" />
						<p
							class="ring-paper-black w-full py-1 text-center text-sm font-semibold ring-2 group-hover/item:bg-white"
						>
							{name}
						</p>
					</li>
				{/each}
			</ul>
		</div>
		<p class="px-8">]</p>
	</div>
</div>
