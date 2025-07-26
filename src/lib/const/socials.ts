import {
	IconBrandDiscord,
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandX,
	IconMail,
	type Icon
} from '@tabler/icons-svelte';

export type Social = {
	readonly name: string;
	readonly icon: Icon;
	readonly link: string;
	readonly username: string;
};

export const GitHub: Social = {
	name: 'Github',
	icon: IconBrandGithub,
	link: 'https://github.com/neilchetna',
	username: 'neilchetna'
};

export const Linkedin: Social = {
	name: 'Linkedin',
	icon: IconBrandLinkedin,
	link: 'https://www.linkedin.com/in/neelchetna/',
	username: 'neelchetna'
};

export const X: Social = {
	name: 'X',
	icon: IconBrandX,
	link: 'https://x.com/ChetnaNeel',
	username: 'ChetnaNeel'
};

export const Email: Social = {
	name: 'Email',
	icon: IconMail,
	link: "mailto:neelchetna18@gmail.com?subject=Hey%20Neel%2C%20let's%20connect!",
	username: 'neelchetna18@gmail.com'
};

export const Discord: Social = {
	name: 'Discord',
	icon: IconBrandDiscord,
	link: '',
	username: 'im_a_boat'
};
