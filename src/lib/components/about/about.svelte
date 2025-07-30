<script lang="ts">
	import SocialLinks from './social-links.svelte';
	import TechStack from './tech-stack.svelte';
	import Badge from '../ui/badge/badge.svelte';
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import { TextAppearConfig } from '$lib/const';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, SplitText);

		SplitText.create('#sub-title', {
			type: 'lines',
			linesClass: 'lines',
			autoSplit: true,
			onSplit: (self) => {
				const split = gsap.from(self.lines, {
					...TextAppearConfig,
					scrollTrigger: {
						trigger: self.lines,
						start: 'top 80%',
						toggleActions: 'play none none none',
						once: true
					}
				});
				return split;
			}
		});
	});
</script>

<section
	id="about"
	class="bg-paper-black text-paper-white-50 snap-center px-8 pt-16 pb-8 md:h-full md:pb-12"
>
	<div
		class="m-auto flex h-full w-full max-w-4xl flex-col items-center justify-between gap-8 md:gap-0"
	>
		<h2 id="sub-title" class="text-heading text-center text-2xl font-semibold md:text-6xl">
			I'm a full-stack developer with a strong focus on developing bug-free smooth user experiences
		</h2>
		<TechStack />
		<div class="flex w-full justify-between">
			<Badge
				variant="outline"
				class="text-paper-white-50 border-paper-white-50 rounded-full border-2"
				>📍 Based in Indore, India</Badge
			>
			<SocialLinks />
		</div>
	</div>
</section>
