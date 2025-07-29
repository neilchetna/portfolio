<script>
	import gsap from 'gsap';
	import Button from './ui/button/button.svelte';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { SplitText } from 'gsap/SplitText';
	import { TextAppearConfig } from '$lib/const';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, SplitText);

		SplitText.create('#contact-title', {
			type: 'lines',
			linesClass: 'lines',
			autoSplit: true,
			onSplit: (self) => {
				const split = gsap.from(self.lines, {
					...TextAppearConfig,
					scrollTrigger: {
						trigger: self.lines,
						start: 'top 80%',
						toggleActions: 'play none none none'
					}
				});
				return split;
			}
		});
	});
</script>

<section class="bg-paper-black text-paper-white-50 snap-start px-8 py-20" id="contact">
	<div class="m-auto max-w-4xl">
		<div class="flex flex-col items-center gap-6">
			<h2 id="contact-title" class="max-w-lg text-center text-3xl font-semibold md:text-5xl">
				Let's develop your next big thing together.
			</h2>
			<div>
				<Button class="" variant="secondary" size="lg">Get in touch</Button>
			</div>
		</div>
	</div>
</section>
