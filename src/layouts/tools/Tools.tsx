'use client';
import { useState } from 'react';
import SectionTitle from '@/components/sectionTitle/SectionTitle';
import Tool from '@/components/tool/Tool';
import SelectTools from './selectTools/SelectTools';

const tools = [
	{
		id: 1,
		img: '/assets/tools/promotheus.svg',
		caption: 'Promotheus',
		tool: 'devops',
		bg: 'devops',
	},
	{
		id: 2,
		img: '/assets/tools/loki.svg',
		caption: 'Loki',
		tool: 'devops',
		bg: 'devops',
	},
	{
		id: 3,
		img: '/assets/tools/bitbucket.svg',
		caption: 'Bitbucket',
		tool: 'devops',
		bg: 'devops',
	},
	{
		id: 4,
		img: '/assets/tools/gitlab.svg',
		caption: 'Gitlab',
		tool: 'devops',
		bg: 'devops',
	},
	{
		id: 5,
		img: '/assets/tools/kotlin.svg',
		caption: 'Kotlin',
		tool: 'mobile',
		bg: 'mobile',
	},
	{
		id: 6,
		img: '/assets/tools/android.svg',
		caption: 'Android',
		tool: 'mobile',
		bg: 'mobile',
	},
	{
		id: 7,
		img: '/assets/tools/java.svg',
		caption: 'Java',
		tool: 'mobile',
		bg: 'mobile',
	},
	{
		id: 8,
		img: '/assets/tools/azure.svg',
		caption: 'Azure',
		tool: 'infrastructure',
		bg: 'infrastructure',
	},
	{
		id: 81,
		img: '/assets/tools/gcp.svg',
		caption: 'GCP',
		tool: 'infrastructure',
		bg: 'infrastructure',
	},
	{
		id: 82,
		img: '/assets/tools/digital-ocean.svg',
		caption: 'Digital Ocean',
		tool: 'infrastructure',
		bg: 'infrastructure',
	},
	{
		id: 9,
		img: '/assets/tools/aws.svg',
		caption: 'Aws',
		tool: 'infrastructure',
		bg: 'infrastructure',
	},
	{
		id: 10,
		img: '/assets/tools/kubernetes.svg',
		caption: 'Kubernetes',
		tool: 'infrastructure',
		bg: 'infrastructure',
	},
	{
		id: 11,
		img: '/assets/tools/elk.svg',
		caption: 'ELK',
		tool: 'devops',
		bg: 'devops',
	},
	{
		id: 13,
		img: '/assets/tools/grafana.svg',
		caption: 'Grafana',
		tool: 'devops',
		bg: 'devops',
	},
	{
		id: 14,
		img: '/assets/tools/terraform.svg',
		caption: 'Terraform',
		tool: 'devops',
		bg: 'devops',
	},
	{
		id: 15,
		img: '/assets/tools/iOS.svg',
		caption: 'iOS',
		tool: 'mobile',
		bg: 'mobile',
	},
	{
		id: 16,
		img: '/assets/tools/swift.svg',
		caption: 'Swift',
		tool: 'mobile',
		bg: 'mobile',
	},
	{
		id: 17,
		img: '/assets/tools/flutter.svg',
		caption: 'Flutter',
		tool: 'mobile',
		bg: 'mobile',
	},
	{
		id: 18,
		img: '/assets/tools/next.svg',
		caption: 'Next.js',
		tool: 'frontend',
		bg: 'frontend',
	},
	{
		id: 19,
		img: '/assets/tools/react.svg',
		caption: 'React.js',
		tool: 'frontend',
		bg: 'frontend',
	},
	{
		id: 20,
		img: '/assets/tools/js.svg',
		caption: 'JavaScript',
		tool: 'frontend',
		bg: 'frontend',
	},
	{
		id: 21,
		img: '/assets/tools/balsamic.svg',
		caption: 'Balsamic',
		tool: 'ux/ui',
		bg: 'design',
	},
	{
		id: 22,
		img: '/assets/tools/invision.svg',
		caption: 'Invision',
		tool: 'ux/ui',
		bg: 'design',
	},
	{
		id: 23,
		img: '/assets/tools/figma.svg',
		caption: 'Figma',
		tool: 'ux/ui',
		bg: 'design',
	},
	{
		id: 24,
		img: '/assets/tools/docker.svg',
		caption: 'Docker',
		tool: 'devops',
		bg: 'devops',
	},
	{
		id: 25,
		img: '/assets/tools/postgresql.svg',
		caption: 'Postgresql',
		tool: 'backend',
		bg: 'backend',
	},
	{
		id: 26,
		img: '/assets/tools/python.svg',
		caption: 'Python',
		tool: 'backend',
		bg: 'backend',
	},
	{
		id: 27,
		img: '/assets/tools/node.svg',
		caption: 'Node.js',
		tool: 'backend',
		bg: 'backend',
	},
	{
		id: 28,
		img: '/assets/tools/php.svg',
		caption: 'Php',
		tool: 'backend',
		bg: 'backend',
	},
	{
		id: 29,
		img: '/assets/tools/go.svg',
		caption: 'Go',
		tool: 'backend',
		bg: 'backend',
	},
	{
		id: 30,
		img: '/assets/tools/ant-design.svg',
		caption: 'Ant Design',
		tool: 'frontend',
		bg: 'frontend',
	},
	{
		id: 31,
		img: '/assets/tools/gatsby.png',
		caption: 'Gatsby.js',
		tool: 'frontend',
		bg: 'frontend',
	},
	{
		id: 32,
		img: '/assets/tools/vue.svg',
		caption: 'Vue.js',
		tool: 'frontend',
		bg: 'frontend',
	},
	{
		id: 33,
		img: '/assets/tools/principle.svg',
		caption: 'Principle',
		tool: 'ux/ui',
		bg: 'design',
	},
	{
		id: 34,
		img: '/assets/tools/sketch.svg',
		caption: 'Sketch',
		tool: 'ux/ui',
		bg: 'design',
	},
	{
		id: 35,
		img: '/assets/tools/adobe-suite.svg',
		caption: 'Adobe Suite',
		tool: 'ux/ui',
		bg: 'design',
	},
	{
		id: 36,
		img: '/assets/tools/you-track.svg',
		caption: 'You Track',
		tool: 'testing',
		bg: 'testing',
	},
	{
		id: 37,
		img: '/assets/tools/appium.svg',
		caption: 'Appium',
		tool: 'testing',
		bg: 'testing',
	},
	{
		id: 38,
		img: '/assets/tools/cypress.svg',
		caption: 'Cypress',
		tool: 'testing',
		bg: 'testing',
	},
	{
		id: 39,
		img: '/assets/tools/jmeter.svg',
		caption: 'Jmeter',
		tool: 'testing',
		bg: 'testing',
	},
	{
		id: 40,
		img: '/assets/tools/mongodb.svg',
		caption: 'MongoDB',
		tool: 'backend',
		bg: 'backend',
	},
	{
		id: 41,
		img: '/assets/tools/cassandra.svg',
		caption: 'Cassandra',
		tool: 'testing',
		bg: 'testing',
	},
	{
		id: 42,
		img: '/assets/tools/sass.svg',
		caption: 'Sass',
		tool: 'frontend',
		bg: 'frontend',
	},
	{
		id: 43,
		img: '/assets/tools/mui.svg',
		caption: 'Material UI',
		tool: 'frontend',
		bg: 'frontend',
	},
	{
		id: 44,
		img: '/assets/tools/zeplin.svg',
		caption: 'Zeplin',
		tool: 'ux/ui',
		bg: 'design',
	},
	{
		id: 45,
		img: '/assets/tools/adobe-illustrator.svg',
		caption: 'Illustrator',
		tool: 'ux/ui',
		bg: 'design',
	},
	{
		id: 46,
		img: '/assets/tools/lottie.svg',
		caption: 'Lottie',
		tool: 'ux/ui',
		bg: 'design',
	},
	{
		id: 47,
		img: '/assets/tools/photoshop.svg',
		caption: 'Photoshop',
		tool: 'ux/ui',
		bg: 'design',
	},
];

function Tools() {
	const [selectedTool, setSelectedTool] = useState('');
	return (
		<section className='px-4 bg-bgPrimary' id='tools'>
			<div className='w-full max-w-[1140px] mx-auto pt-8 laptop:py-20'>
				<SectionTitle content='Tools' position='center' />
				<SelectTools setSelectedTool={setSelectedTool} />
				<div className='grid grid-cols-5 laptop:grid-cols-12 gap-2'>
					{tools.map((tool) => (
						<Tool key={tool.id} tool={tool} selectedTool={selectedTool} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Tools;
