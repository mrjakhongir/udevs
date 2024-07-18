import ServiceCard from '@/components/serviceCard/ServiceCard';

// const mobileAppsServices = [
// 	{ id: 1, img: '/assets/icons/ux.svg', title: 'UX' },
// 	{ id: 2, img: '/assets/icons/ui.svg', title: 'UI' },
// 	{ id: 3, img: '/assets/icons/prototyping.svg', title: 'Prototyping' },
// 	{
// 		id: 4,
// 		img: '/assets/icons/cell-phone-outlined.svg',
// 		title: 'Mobile Design',
// 	},
// 	{
// 		id: 5,
// 		img: '/assets/icons/screen.svg',
// 		title: 'Web Design',
// 	},
// 	{
// 		id: 6,
// 		img: '/assets/icons/atom.svg',
// 		title: 'Atomic Design',
// 	},
// ];

const mobileServices = [
	{ id: 1, img: '/assets/icons/apple.svg', title: 'iOS' },
	{ id: 2, img: '/assets/icons/android.svg', title: 'Android' },
	{ id: 3, img: '/assets/icons/cross-platform.svg', title: 'Crossplatform' },
];

function MobileServices() {
	return (
		<div className='self-stretch flex flex-wrap gap-3 mb-8 laptop:mb-12'>
			{mobileServices.map((service) => (
				<ServiceCard key={service.id} service={service} />
			))}
		</div>
	);
}

export default MobileServices;
