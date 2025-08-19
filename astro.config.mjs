// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'StudyLink',
			logo: { src: './public/logo.png' },
			
			sidebar: [
				
				{
					label: 'Sprint 1 Correspondence',
					items: [
						{ label: 'Meeting 1', slug: 'correspondence/sprint-1-meeting-1' },
						{ label: 'Meeting 2', slug: 'correspondence/sprint-1-meeting-2' },
						{ label: 'Meeting 3', slug: 'correspondence/sprint-1-meeting-3' },
					],
				},
				{
					label: 'Sprint 2 Correspondence',
					items: [
						
					],
				},
				{
					label: 'Sprint 3 Correspondence',
					items: [
						
					],
				},
				{
					label: 'Sprint 4 Correspondence',
					items: [
						
					],
				},
				{
					label: 'In case you are curious',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Technology Stack', slug: 'tech-stack/why-tech-stack' },
					],
				},

			],
		}),
	],
});