import SectionTitle from '@/components/sectionTitle/SectionTitle';
import Services from '@/components/services/serviceCard/Services';
import Technologies from '@/components/technologies/Technologies';
import Text from '@/components/text/Text';
import Image from 'next/image';

const uiux = [
	{ id: 1, img: '/assets/icons/ux.svg', title: 'UX' },
	{ id: 2, img: '/assets/icons/ui.svg', title: 'UI' },
	{ id: 3, img: '/assets/icons/prototyping.svg', title: 'Prototyping' },
	{
		id: 4,
		img: '/assets/icons/cell-phone-outlined.svg',
		title: 'Mobile Design',
	},
	{
		id: 5,
		img: '/assets/icons/screen.svg',
		title: 'Web Design',
	},
	{
		id: 6,
		img: '/assets/icons/atom.svg',
		title: 'Atomic Design',
	},
];

const technologiesData = [
	{ id: 1, img: '/assets/icons/figma.svg', caption: 'Figma' },
	{ id: 2, img: '/assets/icons/sketch.svg', caption: 'Sketch' },
	{ id: 3, img: '/assets/icons/lottie.svg', caption: 'Lottie' },
	{ id: 4, img: '/assets/icons/adobe-illustrator.svg', caption: 'Illustrator' },
];

function UiUx() {
	return (
		<section className="px-4 bg-[url('/assets/pictures/section-bg.png')] bg-no-repeat bg-cover bg-center">
			<div className='w-full max-w-[1170px] mx-auto py-6 laptop:py-16'>
				<SectionTitle content='UI / UX design' position='center' />
				<div className='flex flex-col laptop:flex-row-reverse items-center laptop:items-stretch laptop:justify-between gap-4 laptop:gap-10'>
					<div className="bg-[url('/assets/pictures/mobile-apps-bg.png')] bg-no-repeat bg-cover bg-center rounded-3xl max-w-[500px] flex items-center justify-center laptop:flex-1">
						<Image
							src='/assets/pictures/mobile-apps-iman.png'
							alt='open laptop'
							width={500}
							height={400}
						/>
					</div>
					<div className='flex flex-col items-center laptop:items-start laptop:flex-1 max-w-[500px]'>
						<Text
							content='Our company takes a human-centered approach to design'
							color='black'
							marginBottom='5'
						/>
						<Services data={uiux} bg='bgPrimary' />
						<Technologies title='Technologies' data={technologiesData} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default UiUx;
