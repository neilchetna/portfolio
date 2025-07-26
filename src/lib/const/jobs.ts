import { Angular, MongoDB, MySQl, Node, React, TypeScript, type Tool } from './tools-&-tech';
import quantiveLogo from '../static/quantive.svg';

export type Job = {
	readonly company: string;
	readonly dateRange: string;
	readonly role: string;
	readonly highlights: string[];
	readonly techStack: Tool[];
	readonly link: string;
	readonly img: string;
};

export const Quantive: Job = {
	company: 'Quantive',
	dateRange: 'Jun 2022 - Nov 2024',
	role: 'Front-end Engineer',
	highlights: ['Built X that did Y', 'Optimized A by B%', 'Worked with Z to deliver P'],
	techStack: [TypeScript, Angular, React],
	link: 'https://quantive.com',
	img: quantiveLogo
};

export const CliffAI: Job = {
	company: 'Cliff.ai',
	dateRange: 'Dec 2021 - Jun 2022',
	role: 'Full-stack Intern',
	highlights: ['Built X that did Y', 'Optimized A by B%', 'Worked with Z to deliver P'],
	techStack: [TypeScript, React, Node, MySQl, MongoDB],
	link: 'https://www.linkedin.com/company/cliff-ai',
	img: ''
};
