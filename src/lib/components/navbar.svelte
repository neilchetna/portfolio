<script lang="ts">
	import gsap from 'gsap';
	import Button from './ui/button/button.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.from('#navbar', {
			y: -100,
			opacity: 0,
			duration: 0.7,
			stagger: 0.2,
			ease: 'power2.out'
		});
	});

	type NavItem = { title: string; id: string };

	const items: NavItem[] = [
		{
			title: 'About',
			id: '#about'
		},
		{
			title: 'Work',
			id: '#work'
		},
		{
			title: 'Projects',
			id: '#projects'
		},
		{
			title: 'Connect',
			id: '#connect'
		}
	];
</script>

<div id="navbar" class="bg-paper-white-50 ring-paper-black fixed z-50 w-full ring-3">
	<nav class="grid grid-cols-1 px-8 py-3 md:grid-cols-3">
		<p class="font-heading flex items-center justify-self-center md:justify-self-start">
			Neel Chetna
		</p>
		<ul class="hidden w-fit gap-12 justify-self-center md:flex">
			{#each items as item (item.title)}
				<li>
					<Button href={item.id} class="rounded-full" size="sm" variant="ghost">{item.title}</Button
					>
				</li>
			{/each}
		</ul>
	</nav>
</div>
