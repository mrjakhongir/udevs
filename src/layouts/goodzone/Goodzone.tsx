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

function Goodzone() {
	return (
		<section className="px-4 bg-[url('/assets/pictures/section-bg.png')] bg-no-repeat bg-cover bg-center">
			<div className='w-full max-w-[1170px] mx-auto py-6 laptop:py-16'>
				<PortfolioTitle
					title='Goodzone'
					subtitle='Notification'
					bg='bgGoodzone'
					color='colorGoodzone'
					icon='/assets/icons/cart-red.svg'
					logo='/assets/clients/goodzone.png'
					position='right'
				/>
				<div className='laptop:flex items-center gap-10'>
					<div className='mb-2 flex-1'>
						<Image
							className='rounded-3xl'
							src='/assets/pictures/goodzone.png'
							alt='goodzone in mobile frame'
							width={900}
							height={400}
						/>
					</div>
					<div className='flex-1 flex flex-col items-center laptop:items-start'>
						<Text
							content='Goodzone - Internet shop of household appliances in Uzbekistan.'
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

export default Goodzone;
