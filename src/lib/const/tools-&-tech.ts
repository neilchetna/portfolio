import {
	IconBrandAngular,
	IconBrandGolang,
	IconBrandMongodb,
	IconBrandMysql,
	IconBrandNextjs,
	IconBrandNodejs,
	IconBrandPython,
	IconBrandReact,
	IconBrandSvelte,
	IconBrandTypescript,
	type Icon
} from '@tabler/icons-svelte';

export type Tool = {
	readonly name: string;
	readonly icon: Icon;
};

export const TypeScript: Tool = {
	name: 'TypeScript',
	icon: IconBrandTypescript
};

export const React: Tool = {
	name: 'React',
	icon: IconBrandReact
};

export const Angular: Tool = {
	name: 'Angular',
	icon: IconBrandAngular
};

export const Svelte: Tool = {
	name: 'Svelte',
	icon: IconBrandSvelte
};

export const Python: Tool = {
	name: 'Python',
	icon: IconBrandPython
};

export const Golang: Tool = {
	name: 'Golang',
	icon: IconBrandGolang
};

export const MySQl: Tool = {
	name: 'MySQL',
	icon: IconBrandMysql
};

export const MongoDB: Tool = {
	name: 'MongoDB',
	icon: IconBrandMongodb
};

export const Node: Tool = {
	name: 'Node',
	icon: IconBrandNodejs
};

export const Nextjs: Tool = {
	name: 'Next.js',
	icon: IconBrandNextjs
};
