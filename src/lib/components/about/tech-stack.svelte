<script lang="ts">
	import { Angular, React, Svelte, TypeScript, type Tool } from '$lib/const';

	const tools: Tool[] = [TypeScript, React, Angular, Svelte];
</script>

<div class="bg-paper-white-50 text-paper-black flex w-full max-w-2xl flex-col rounded-xl">
	<div class="ring-paper-black flex gap-1.5 px-2 py-2 ring-2">
		<div class="border-paper-black bg-paper-pink-100 h-2.5 w-2.5 rounded-full border-2"></div>
		<div class="border-paper-black h-2.5 w-2.5 rounded-full border-2"></div>
		<div class="border-paper-black h-2.5 w-2.5 rounded-full border-2 bg-green-300"></div>
	</div>
	<div class="text-md my-8 px-8 md:text-xl">
		<p class="font-semibold">// Here are some tools and technologies that I have worked with.</p>
		<p class="mt-4"><span class="text-paper-pink-150">const</span> tools = [</p>
		<ul class="my-4 flex w-full gap-4 md:w-2xl md:grid-cols-4">
			{#each tools as { name, icon: Icon } (name)}
				<li
					class="group border-paper-black hover:bg-paper-pink-50 neo-shadow w-full gap-4 border-2"
				>
					<Icon class="m-auto my-10" size="64px" />
					<p
						class="ring-paper-black w-full py-1 text-center text-sm font-semibold ring-2 group-hover:bg-white"
					>
						{name}
					</p>
				</li>
			{/each}
		</ul>
		<p>]</p>
	</div>
</div>
