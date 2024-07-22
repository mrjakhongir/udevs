import ScaleUpMotionWrapper from '@/components/motionWrapper/ScaleUpMotionWrapper';
import TransitionMotionWrapper from '@/components/motionWrapper/TransitionMotionWrapper';
import PortfolioTitle from '@/components/portfolioTitle/PortfolioTitle';
import Services from '@/components/services/serviceCard/Services';
import Subtitle from '@/components/subtitle/Subtitle';
import Text from '@/components/text/Text';
import Image from 'next/image';

const services = [
	{ id: 1, img: '/assets/icons/globe.svg', title: 'Website' },
	{ id: 2, img: '/assets/icons/settings.svg', title: 'Admin panel' },
	{ id: 3, img: '/assets/icons/cross-platform.svg', title: 'Crossplatform' },
];

function Smsuz() {
	return (
		<section className="px-4 bg-[url('/assets/pictures/section-bg.png')] bg-no-repeat bg-cover bg-center">
			<div className='w-full max-w-[1140px] mx-auto py-6 laptop:py-16'>
				<PortfolioTitle
					title='Smsuz'
					subtitle='Notification'
					bg='bgSmsuz'
					color='colorSmsuz'
					icon='/assets/icons/envelope.svg'
					logo='/assets/clients/smsuz.svg'
					position='left'
				/>
				<div className='laptop:flex laptop:flex-row-reverse items-center gap-10'>
					<div className='mb-2 flex-1'>
						<ScaleUpMotionWrapper delay={0.2}>
							<Image
								className='rounded-3xl'
								src='/assets/pictures/smsuz.png'
								alt='smsuz in mobile frame'
								width={900}
								height={400}
							/>
						</ScaleUpMotionWrapper>
					</div>
					<div className=' flex-1 flex flex-col items-center laptop:items-start'>
						<TransitionMotionWrapper direction='up' delay={0}>
							<Text
								content='Smsuz.uz - It is a platform for bulk SMS messaging.'
								color='font'
								marginBottom='5'
							/>
						</TransitionMotionWrapper>
						<TransitionMotionWrapper direction='up' delay={0}>
							<Subtitle content='What we did?' />
							<Services data={services} bg='bgPrimary' />
						</TransitionMotionWrapper>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Smsuz;
