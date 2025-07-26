import { Golang, Nextjs, Node, React, type Tool } from './tools-&-tech';

export type Project = {
	readonly title: string;
	readonly url: string;
	readonly img: string;
	readonly stack: Tool[];
	readonly description: string;
};

export const projects: Project[] = [
	{
		title: 'Do-mosh Planner',
		url: '',
		img: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stack: [Golang, Nextjs, React],
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem '
	},
	{
		title: 'Terminal Worlde',
		url: '',
		img: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stack: [Node],
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem '
	},
	{
		title: 'Terminal Worlde',
		url: '',
		img: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stack: [Node],
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem '
	},
	{
		title: 'Terminal Worlde',
		url: '',
		img: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stack: [Node],
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem '
	}
];
