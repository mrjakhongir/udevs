import ScaleUpMotionWrapper from '@/components/motionWrapper/ScaleUpMotionWrapper';
import TransitionMotionWrapper from '@/components/motionWrapper/TransitionMotionWrapper';
import SectionTitle from '@/components/sectionTitle/SectionTitle';
import Services from '@/components/services/serviceCard/Services';
import Text from '@/components/text/Text';
import Image from 'next/image';

const optimization = [
	{ id: 1, img: '/assets/icons/architecture.svg', title: 'Architecture' },
	{ id: 2, img: '/assets/icons/auto-testing.svg', title: 'Auto-Testing' },
	{ id: 3, img: '/assets/icons/cloud-thunder.svg', title: 'Stress testing' },
	{
		id: 4,
		img: '/assets/icons/pie-chart.svg',
		title: 'Load testing',
	},
	{
		id: 5,
		img: '/assets/icons/infinity.svg',
		title: 'Devops',
	},
	{
		id: 6,
		img: '/assets/icons/cloud.svg',
		title: 'Cloud',
	},
	{
		id: 7,
		img: '/assets/icons/ci-cd.svg',
		title: 'CI / CD',
	},
];

function Optimization() {
	return (
		<section className='px-4 bg-bgPrimary' id='optimization'>
			<div className='w-full max-w-[1140px] mx-auto pt-8 laptop:py-20'>
				<SectionTitle content='Optimization Infrastructure' position='center' />
				<div className='flex flex-col laptop:flex-row items-center laptop:items-stretch laptop:justify-between gap-4 laptop:gap-8'>
					<TransitionMotionWrapper direction='up' delay={0}>
						<div className="bg-[url('/assets/pictures/mobile-apps-bg.png')] bg-no-repeat bg-cover bg-center rounded-3xl max-w-[500px] flex items-center justify-center laptop:flex-1 laptop:h-full">
							<ScaleUpMotionWrapper delay={0.2}>
								<Image
									src='/assets/pictures/note-book.png'
									alt='open laptop'
									width={500}
									height={400}
								/>
							</ScaleUpMotionWrapper>
						</div>
					</TransitionMotionWrapper>
					<div className='flex flex-col items-center max-w-[500px] laptop:flex-1'>
						<TransitionMotionWrapper direction='up' delay={0}>
							<Text
								content='Our experienced professionals will help you optimize your infrastructure'
								color='black'
								marginBottom='5'
							/>
						</TransitionMotionWrapper>
						<TransitionMotionWrapper direction='up' delay={0.2}>
							<Services data={optimization} bg='bgSecondary' />
						</TransitionMotionWrapper>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Optimization;
