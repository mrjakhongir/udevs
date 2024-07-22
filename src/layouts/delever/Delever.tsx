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
	{ id: 4, img: '/assets/icons/screen.svg', title: 'Web design' },
	{
		id: 5,
		img: '/assets/icons/cell-phone-outlined.svg',
		title: 'Mobile design',
	},
];

function Delever() {
	return (
		<section
			className="px-4 bg-[url('/assets/pictures/section-bg.png')] bg-no-repeat bg-cover bg-center"
			id='delever'>
			<div className='w-full max-w-[1140px] mx-auto py-6 laptop:py-20'>
				<PortfolioTitle
					title='Delever'
					subtitle='Delivery'
					bg='bgDelivery'
					color='colorDelivery'
					icon='/assets/icons/car.svg'
					logo='/assets/clients/delever.svg'
					position='right'
				/>
				<div className='laptop:flex items-center gap-10'>
					<div className='flex-1 mb-2'>
						<ScaleUpMotionWrapper delay={0.2}>
							<Image
								className='rounded-3xl'
								src='/assets/pictures/delever.png'
								alt='delever in mobile frame'
								width={900}
								height={400}
							/>
						</ScaleUpMotionWrapper>
					</div>
					<div className='flex-1 flex flex-col items-center laptop:items-start'>
						<TransitionMotionWrapper direction='up' delay={0}>
							<Text
								content='Delever - Delivery service automation targeted at both consumers and restaurants.'
								color='font'
								marginBottom='5'
							/>
						</TransitionMotionWrapper>
						<TransitionMotionWrapper direction='up' delay={0.2}>
							<Subtitle content='What we did?' />
							<div className='-mb-12'>
								<Services data={services} bg='bgPrimary' />
							</div>
						</TransitionMotionWrapper>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Delever;
