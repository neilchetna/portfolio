<script lang="ts">
	import Button from './ui/button/button.svelte';

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

<nav class="grid grid-cols-1 px-8 py-4 md:grid-cols-3">
	<p class="font-heading flex items-center justify-self-center md:justify-self-start">
		Neel Chetna
	</p>
	<ul class="hidden w-fit gap-12 justify-self-center md:flex">
		{#each items as item (item.title)}
			<li>
				<Button href={item.id} class="rounded-full" size="sm" variant="ghost">{item.title}</Button>
			</li>
		{/each}
	</ul>
</nav>
