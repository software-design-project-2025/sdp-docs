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
                        {label: 'Meeting 4', slug: 'correspondence/sprint-1-meeting-4' },
                        {label: 'Meeting 5', slug: 'correspondence/sprint-1-meeting-5'}
					],
				},
				{
					label: 'Sprint 2 Correspondence',
					items: [
                        { label: 'Meeting 1', slug: 'correspondence/sprint-2-meeting-1' },
                        { label: 'Meeting 2', slug: 'correspondence/sprint-2-meeting-2' },
                        { label: 'Meeting 3', slug: 'correspondence/sprint-2-meeting-3' },
                        { label: 'Meeting 4', slug: 'correspondence/sprint-2-meeting-4' },
                        { label: 'Meeting 5', slug: 'correspondence/sprint-2-meeting-5' }
					],
				},
				{
					label: 'Sprint 3 Correspondence',
					items: [
                        { label: 'Meeting 1', slug: 'correspondence/sprint-3-meeting-1' },
                        { label: 'Meeting 2', slug: 'correspondence/sprint-3-meeting-2' },
                        { label: 'Meeting 3', slug: 'correspondence/sprint-3-meeting-3' },
                        { label: 'Meeting 4', slug: 'correspondence/sprint-3-meeting-4' },
                        { label: 'Meeting 5', slug: 'correspondence/sprint-3-meeting-5' }
						
					],
				},
				{
					label: 'Sprint 4 Correspondence',
					items: [
						
					],
				},
				{
					label: 'Important Information',
					items: [
						{ label: 'Technology Stack', slug: 'tech-stack/why-tech-stack' },
                        {label: 'About our database', slug: 'database/schema'},
                        {label: 'Testing', slug: 'testing/testing'},
                        {label: 'Bug Report', slug: 'bugs/bugs'}
					],
				},

			],
		}),
	],
});