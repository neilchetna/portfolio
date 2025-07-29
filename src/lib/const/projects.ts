import { Golang, Nextjs, Node, Python, React, Svelte, type Tool } from './tools-&-tech';

export type Project = {
	readonly title: string;
	readonly url: string;
	readonly img: string;
	readonly stack: Tool[];
	readonly description: string;
	readonly isOngoing?: boolean;
};

export const projects: Project[] = [
	{
		title: 'Do-mosh Planner',
		url: 'https://github.com/neilchetna/planner-webapp',
		isOngoing: true,
		img: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stack: [Golang, Nextjs, React],
		description:
			'A planner for maintaining all the tasks at one place. Built on the principle of local first.'
	},
	{
		title: 'Terminal Worlde',
		url: 'https://github.com/neilchetna/Terminal-Wordle',
		img: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stack: [Node],
		description: "A version of the New York Time's popular game wordle, but for the commandline."
	},
	{
		title: 'Dune - Cellular Projects',
		url: 'https://github.com/neilchetna/dune',
		img: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stack: [Svelte],
		description:
			'Collection of micro-projects built to study how simulations and cellular automaton work.'
	},
	{
		title: 'Dynamic UI',
		url: 'https://github.com/neilchetna/dynamic-ui',
		img: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stack: [Nextjs, React, Python],
		description: 'Using a GPT wrapped API to generate UI to display a given set of data.'
	}
];
