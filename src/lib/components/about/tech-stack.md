To build a **conveyor belt–style infinite carousel** in **Svelte + Tailwind CSS**, with **cursor-based scrubbing and pause**, here's the cleanest modern approach:

---

## ✅ Key Features:

- **Infinite horizontal loop**
- **Smooth auto scroll**
- **Pause on hover**
- **Scrub with cursor drag (or optional scrollwheel)**
- Works in **Tailwind + Svelte**

---

## 🧠 Core Concepts:

1. Use `flex` or `grid` + `animate-[custom]` for movement
2. Duplicate items to simulate infinite loop
3. Use `requestAnimationFrame` to scrub manually with mouse
4. Pause on hover or drag

---

## ✅ Implementation Plan

### 1. **Tailwind Setup**

```html
<div
	class="group relative cursor-grab overflow-hidden active:cursor-grabbing"
	on:mouseenter="{()"
	=""
>
	pause = true} on:mouseleave={() => pause = false} on:mousedown={startDragging}
	on:mouseup={stopDragging} on:mousemove={onMouseMove} >
	<div
		bind:this="{scroller}"
		class="animate-scroll flex gap-4 whitespace-nowrap group-hover:[animation-play-state:paused]"
		style="will-change: transform;"
	>
		{#each [...items, ...items] as item (item.id)}
		<div class="h-48 w-48 flex-shrink-0 rounded bg-gray-200 text-center leading-[12rem] shadow">
			{item.label}
		</div>
		{/each}
	</div>
</div>
```

### 2. **Tailwind Custom Animation in `tailwind.config.js`**

```ts
extend: {
	animation: {
		scroll: 'scrollLinear 20s linear infinite',
	},
	keyframes: {
		scrollLinear: {
			from: { transform: 'translateX(0)' },
			to: { transform: 'translateX(-50%)' }, // adjust based on duplicated content
		},
	},
},
```

### 3. **Svelte Script**

```ts
<script lang="ts">
	let items = Array.from({ length: 8 }, (_, i) => ({ id: i, label: `Item ${i + 1}` }));
	let pause = false;

	let scroller: HTMLDivElement;
	let isDragging = false;
	let startX = 0;
	let scrollLeft = 0;

	function startDragging(event: MouseEvent) {
		isDragging = true;
		startX = event.pageX - scroller.offsetLeft;
		scrollLeft = scroller.scrollLeft;
	}

	function stopDragging() {
		isDragging = false;
	}

	function onMouseMove(event: MouseEvent) {
		if (!isDragging) return;
		event.preventDefault();
		const x = event.pageX - scroller.offsetLeft;
		const walk = (x - startX) * 2; // scroll speed
		scroller.scrollLeft = scrollLeft - walk;
	}
</script>
```

---

## 🌀 Why Duplicate Items?

Duplicating items ensures there's **enough content to loop** — otherwise the scroll would end. The CSS animation simply resets after scrolling `-50%` of its width.

---

## 🎮 Optional: Add Manual Scroll Syncing

You could also let the scrollLeft loop infinitely via JS logic (reset when reaching half), but for many cases, a pure CSS infinite loop with hover/drag interruption works beautifully.

---

## ✅ Summary

| Feature           | Method                    |
| ----------------- | ------------------------- |
| Infinite movement | `@keyframes scrollLinear` |
| Pause on hover    | `group-hover:pause`       |
| Scrub w/ cursor   | Manual `scrollLeft`       |
| Duplicate items   | `[...items, ...items]`    |

Let me know if you want touch support, vertical version, or to lazy-load items on loop!
