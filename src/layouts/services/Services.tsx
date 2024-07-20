import SectionTitle from '@/components/sectionTitle/SectionTitle';
import ServiceItem from './ServiceItem';
const services = [
	{ id: 1, img: '/assets/icons/team.svg', title: 'Team' },
	{
		id: 2,
		img: '/assets/icons/cell-phone.svg',
		title: 'Development of mobile applications',
	},
	{
		id: 3,
		img: '/assets/icons/chain.svg',
		title: 'Development and implementation ERP systems',
	},
	{
		id: 4,
		img: '/assets/icons/design.svg',
		title: 'User interface, User experience design',
	},
	{
		id: 5,
		img: '/assets/icons/gear.svg',
		title: 'Optimization IT consulting infrastructure',
	},
	{
		id: 6,
		img: '/assets/icons/tv.svg',
		title: 'IT consulting',
	},
];

function Services() {
	return (
		<section className='px-4'>
			<div className='w-full max-w-[1170px] mx-auto py-20 laptop:py-24'>
				<SectionTitle content='Our services' position='center' />
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-5 min-[900px]:gap-x-6'>
					{services.map((service) => (
						<ServiceItem key={service.id} service={service} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
