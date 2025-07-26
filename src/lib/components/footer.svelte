<script lang="ts">
	import { Email, GitHub, Linkedin, X, type Social } from '$lib/const';
	import { IconClock } from '@tabler/icons-svelte';

	const now = new Date();
	const time = now.toLocaleTimeString('en-IN', {
		timeZone: 'Asia/Kolkata',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});

	const localTime: Social = { name: 'Local time', icon: IconClock, link: '', username: time };

	const socials: Social[] = [Linkedin, GitHub, X, Email, localTime];
</script>

<footer class="bg-paper-black text-paper-white-50 p-8">
	<div class="justify-between md:flex">
		<div class="flex flex-col items-center md:items-start">
			<p class="font-heading text-md">Neel Chetna</p>
			<p class="text-xs">© 2025 Neel Chetna, All rights reserved</p>
		</div>
		<div class="items-around mt-4 flex flex-wrap md:mt-0">
			{#each socials as social}
				<div class="basis-1/3 p-4">
					<p class="md:text-xl">
						{social.name}
					</p>
					<a href={social.link} class="md:text-md hover:text-paper-pink-50">
						{social.username}
					</a>
				</div>
			{/each}
		</div>
	</div>
</footer>
