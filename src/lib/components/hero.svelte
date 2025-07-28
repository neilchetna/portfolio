<script>
	import { IconDownload } from '@tabler/icons-svelte';
	import Button from './ui/button/button.svelte';
</script>

<section
	class="text-paper-black flex h-full snap-start flex-col flex-wrap items-center justify-center overflow-auto"
>
	<div class="max-w-3xl px-4 font-semibold">
		<h1 class="font-heading my-6 text-4xl font-bold md:text-6xl">
			I build software for the
			<span class="bg-paper-blue-50 neo-shadow-lg px-0.5">web</span>
		</h1>
		<p class="text-xl">
			Hello, I'm Neel and I build blazing-fast full-stack web apps with React, Angular, Python and
			Golang — from pixel-perfect UIs to solid backends.
		</p>
		<div class="mt-6 flex gap-4">
			<Button class="hover:-mt-1" size="lg">My Resume <IconDownload /></Button>
			<Button class="hover:-mt-1" size="lg">Say Hello 👋</Button>
		</div>
	</div>
</section>
