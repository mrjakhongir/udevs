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
		<section className="px-4 bg-[url('/assets/pictures/section-bg.png')] bg-no-repeat bg-cover bg-center">
			<div className='w-full max-w-[1170px] mx-auto py-6 laptop:py-16'>
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
						<Image
							className='rounded-3xl'
							src='/assets/pictures/delever.png'
							alt='delever in mobile frame'
							width={900}
							height={400}
						/>
					</div>
					<div className='flex-1 flex flex-col items-center laptop:items-start'>
						<Text
							content='Delever - Delivery service automation targeted at both consumers and restaurants.'
							color='font'
							marginBottom='5'
						/>
						<Subtitle content='What we did?' />
						<Services data={services} bg='bgPrimary' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Delever;
