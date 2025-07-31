<script lang="ts">
	import { TextAppearConfig } from '$lib/const';
	import { Emojis } from '$lib/const/emojis';
	import { IconDownload } from '@tabler/icons-svelte';
	import gsap from 'gsap';
	import { Physics2DPlugin } from 'gsap/Physics2DPlugin';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import Button from './ui/button/button.svelte';

	let lines: HTMLDivElement;
	let emitter: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, Physics2DPlugin);
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

	const onConfettiClick = (e: MouseEvent) => {
		const dotCount = gsap.utils.random(15, 30, 1);

		for (let i = 0; i < dotCount; i++) {
			const dot = document.createElement('div');
			dot.classList.add('text-3xl', 'absolute');
			dot.textContent = gsap.utils.random(Emojis);
			gsap.set(dot, {
				top: e.clientY,
				left: e.clientX,
				scale: 0
			});
			emitter.appendChild(dot);

			gsap
				.timeline({
					onComplete: () => dot.remove()
				})
				.to(dot, {
					scale: gsap.utils.random(0.3, 1),
					duration: 0.3,
					ease: 'power3.out'
				})
				.to(
					dot,
					{
						duration: 2,
						physics2D: {
							velocity: gsap.utils.random(500, 750),
							angle: gsap.utils.random(0, 360),
							gravity: 1500
						},

						autoAlpha: 0,
						ease: 'none'
					},
					'<'
				);
		}
	};
</script>

<section
	bind:this={emitter}
	class="text-paper-black magicpattern flex h-full snap-center flex-col flex-wrap items-center justify-center overflow-auto overflow-hidden"
>
	<div bind:this={lines} class="max-w-4xl px-8 font-semibold">
		<h1 class="font-heading line my-6 text-4xl font-bold md:text-7xl">
			Code that clicks on the
			<button
				onclick={onConfettiClick}
				class="decoration-paper-blue-150 text-paper-blue-150 hover:decoration-paper-blue-50 hover:text-paper-blue-50 cursor-pointer-custom overflow-hidden px-0.5 underline decoration-4 transition-all"
				>web</button
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
