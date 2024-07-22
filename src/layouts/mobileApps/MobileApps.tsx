import Image from 'next/image';

import SectionTitle from '@/components/sectionTitle/SectionTitle';
import Text from '@/components/text/Text';
import Technologies from '@/components/technologies/Technologies';
import Services from '@/components/services/serviceCard/Services';
import TransitionMotionWrapper from '@/components/motionWrapper/TransitionMotionWrapper';
import ScaleUpMotionWrapper from '@/components/motionWrapper/ScaleUpMotionWrapper';

const mobileServices = [
	{ id: 1, img: '/assets/icons/apple.svg', title: 'iOS' },
	{ id: 2, img: '/assets/icons/android.svg', title: 'Android' },
	{ id: 3, img: '/assets/icons/cross-platform.svg', title: 'Crossplatform' },
];

const technologiesData = [
	{ id: 1, img: '/assets/icons/swift.svg', caption: 'Swift' },
	{ id: 2, img: '/assets/icons/kotlin.svg', caption: 'Kotlin' },
	{ id: 3, img: '/assets/icons/flutter.svg', caption: 'Flutter' },
];

function MobileApps() {
	return (
		<section
			id='mobile-applications'
			className="px-4 bg-[url('/assets/pictures/section-bg.png')] bg-no-repeat bg-cover bg-center">
			<div className='w-full max-w-[1140px] mx-auto py-6 laptop:py-20'>
				<SectionTitle
					content='Development of mobile applications'
					position='center'
				/>
				<div className='flex flex-col laptop:flex-row-reverse items-center laptop:items-stretch gap-6 laptop:justify-between'>
					<ScaleUpMotionWrapper delay={0}>
						<div className="bg-[url('/assets/pictures/mobile-apps-bg.png')] bg-no-repeat bg-cover bg-center rounded-3xl max-w-[500px] laptop:flex-1 flex items-center justify-center">
							<ScaleUpMotionWrapper delay={0.4}>
								<Image
									src='/assets/pictures/mobile-apps.png'
									alt='iman home page inside apple phone'
									width={500}
									height={500}
								/>
							</ScaleUpMotionWrapper>
						</div>
					</ScaleUpMotionWrapper>
					<div className='flex flex-col items-center laptop:items-stretch laptop:flex-1 laptop:max-w-[500px]'>
						<TransitionMotionWrapper direction='up' delay={0}>
							<Text
								content='In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.'
								color='dark'
								marginBottom='10'
							/>
						</TransitionMotionWrapper>
						<TransitionMotionWrapper direction='up' delay={0.2}>
							<Services data={mobileServices} bg='bgPrimary' />
							<Technologies title='Technologies' data={technologiesData} />
						</TransitionMotionWrapper>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MobileApps;
