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
			id: '#'
		}
	];
</script>

<nav class="flex items-center px-4 py-4">
	<p class="font-heading mx-auto text-xl md:m-0">Neel Chetna</p>
	<ul class="m-auto hidden w-fit gap-12 md:flex">
		{#each items as item (item.title)}
			<li>
				<Button href={item.id} class="rounded-full" size="sm" variant="ghost">{item.title}</Button>
			</li>
		{/each}
	</ul>
</nav>
