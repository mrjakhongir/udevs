import Image from 'next/image';

import SectionTitle from '@/components/sectionTitle/SectionTitle';
import Services from '@/components/services/serviceCard/Services';
import Text from '@/components/text/Text';
import TransitionMotionWrapper from '@/components/motionWrapper/TransitionMotionWrapper';
import ScaleUpMotionWrapper from '@/components/motionWrapper/ScaleUpMotionWrapper';

const consulting = [
	{ id: 1, img: '/assets/icons/browser.svg', title: 'Frontend' },
	{ id: 2, img: '/assets/icons/code.svg', title: 'Backend' },
	{ id: 3, img: '/assets/icons/architecture.svg', title: 'Architecture' },
	{
		id: 4,
		img: '/assets/icons/infinity.svg',
		title: 'Devops',
	},
	{
		id: 5,
		img: '/assets/icons/design-outlined.svg',
		title: 'UX/UI',
	},
	{
		id: 6,
		img: '/assets/icons/test-tube.svg',
		title: 'QA',
	},
];

function ItConsulting() {
	return (
		<section className="px-4 bg-[url('/assets/pictures/section-bg.png')] bg-no-repeat bg-cover bg-center">
			<div className='w-full max-w-[1140px] mx-auto py-6 laptop:py-16'>
				<SectionTitle content='IT consulting' position='center' />
				<div className='flex flex-col laptop:flex-row-reverse items-center laptop:items-stretch laptop:justify-between gap-4 laptop:gap-10'>
					<div className='max-w-[500px] flex items-center justify-center laptop:flex-1'>
						<ScaleUpMotionWrapper delay={0.2}>
							<Image
								src='/assets/pictures/consulting.svg'
								alt='a man points board'
								width={500}
								height={400}
							/>
						</ScaleUpMotionWrapper>
					</div>
					<div className='flex flex-col items-center laptop:items-start laptop:flex-1 max-w-[500px]'>
						<TransitionMotionWrapper direction='up' delay={0}>
							<Text
								content='We can improve the qualifications of your employees thereby increasing the efficiency of your company'
								color='black'
								marginBottom='5'
							/>
						</TransitionMotionWrapper>
						<TransitionMotionWrapper direction='up' delay={0.2}>
							<Services data={consulting} bg='bgPrimary' />
						</TransitionMotionWrapper>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ItConsulting;
