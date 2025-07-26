<script>
	import SocialLinks from './social-links.svelte';
	import TechStack from './tech-stack.svelte';
	import Badge from '../ui/badge/badge.svelte';
</script>

<section id="about" class="bg-paper-black text-paper-white-50 h-full snap-start px-8 py-20">
	<div class="m-auto flex h-full w-full max-w-4xl flex-col items-center justify-between">
		<h2 class="text-heading text-center text-2xl font-semibold md:text-7xl">
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
