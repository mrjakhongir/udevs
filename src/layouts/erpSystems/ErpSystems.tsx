import SectionTitle from '@/components/sectionTitle/SectionTitle';
import Services from '@/components/services/serviceCard/Services';
import Text from '@/components/text/Text';
import Image from 'next/image';

const erpSystems = [
	{ id: 1, img: '/assets/icons/crm.svg', title: 'CRM' },
	{ id: 2, img: '/assets/icons/hat.svg', title: 'eLearning' },
	{ id: 3, img: '/assets/icons/cart.svg', title: 'E-Commerce' },
	{
		id: 4,
		img: '/assets/icons/pos.svg',
		title: 'POS',
	},
	{
		id: 5,
		img: '/assets/icons/envelope.svg',
		title: 'Sms / Email',
	},
	{
		id: 6,
		img: '/assets/icons/warehouse.svg',
		title: 'Warehouse',
	},
];

function ErpSystems() {
	return (
		<section className='p-4 laptop:py-12 bg-bgPrimary'>
			<div className='w-full max-w-[1170px] mx-auto pt-8 laptop:pt-12 laptop:pb-8'>
				<SectionTitle content='ERP systems' position='center' />
				<div className='flex flex-col laptop:flex-row items-center laptop:items-stretch laptop:justify-between gap-4 laptop:gap-10'>
					<div className="bg-[url('/assets/pictures/mobile-apps-bg.png')] bg-no-repeat bg-cover bg-center rounded-3xl max-w-[500px] flex items-center justify-center laptop:flex-1">
						<Image
							src='/assets/pictures/note-book.png'
							alt='open laptop'
							width={500}
							height={400}
						/>
					</div>
					<div className='flex flex-col items-center max-w-[500px] laptop:flex-1'>
						<Text
							content='IT Systems of any level of complexity at a convenient time for you'
							color='black'
							marginBottom='5'
						/>
						<Services data={erpSystems} bg='bgSecondary' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ErpSystems;
