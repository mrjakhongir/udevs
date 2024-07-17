import NavLargeItem from './navLargeItem/NavLargeItem';
import NavLargeItemWithDropdown from './navLargeItem/NavLargeItemWithDropdown';

const navLargeItems = [
	{ id: 1, content: 'Direction', link: '#direction' },
	{ id: 2, content: 'Command', link: '#command' },
	{
		id: 9,
		content: 'Services',
		link: '',
		subMenu: [
			{
				id: 31,
				iconSrc: '/assets/icons/cell-phone.svg',
				content: 'Development of mobile applications',
				link: '#mobile-applications',
				category: 'services',
			},
			{
				id: 32,
				iconSrc: '/assets/icons/chain.svg',
				content: 'Development and implementation ERP systems',
				link: '#erp-systems',
				category: 'services',
			},
			{
				id: 33,
				iconSrc: '/assets/icons/design.svg',
				content: 'User interface, User experience design',
				link: '#ui/ux-design',
				category: 'services',
			},
			{
				id: 34,
				iconSrc: '/assets/icons/tv.svg',
				content: 'IT consulting',
				link: '#it-consulting',
				category: 'services',
			},
			{
				id: 35,
				iconSrc: '/assets/icons/gear.svg',
				content: 'Optimization IT consulting infrastructure',
				link: '#optimization-infrastructure',
				category: 'services',
			},
		],
	},
	{ id: 3, content: 'Tools', link: '#tools' },
	{ id: 4, content: 'Clients', link: '#clients' },
	{
		id: 5,
		content: 'Portfolio',
		link: '',
		subMenu: [
			{
				id: 51,
				iconSrc: '/assets/icons/delever.svg',
				content: 'Delever',
				link: '#delever',
				category: 'portfolio',
			},
			{
				id: 52,
				iconSrc: '/assets/icons/smsuz.svg',
				content: 'Sms.uz',
				link: '#smsuz',
				category: 'portfolio',
			},
			{
				id: 53,
				iconSrc: '/assets/icons/goodzone.svg',
				content: 'Goodzone',
				link: '#goodzone',
				category: 'portfolio',
			},
			{
				id: 54,
				iconSrc: '/assets/icons/iman.svg',
				content: 'Iman',
				link: '#iman',
				category: 'portfolio',
			},
		],
	},
	{
		id: 6,
		content: 'Language',
		link: '',
		subMenu: [
			{
				id: 61,
				iconSrc: '/assets/icons/flag-russian.svg',
				content: 'Рус',
				link: '',
				category: 'language',
			},
			{
				id: 62,
				iconSrc: '/assets/icons/flag-gb.svg',
				content: 'Eng',
				link: '',
				category: 'language',
			},
		],
	},
];

function NavLargeItems() {
	return (
		<nav>
			<ul className='flex items-center justify-between gap-6 text-[#18191f] text-sm font-semibold'>
				{navLargeItems.map((item) =>
					item.subMenu ? (
						<NavLargeItemWithDropdown key={item.id} item={item} />
					) : (
						<NavLargeItem key={item.id} item={item} />
					)
				)}
			</ul>
		</nav>
	);
}

export default NavLargeItems;
