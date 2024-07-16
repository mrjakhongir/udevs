const navLargeItems = [
	{ id: 1, content: 'Direction', link: '#direction', subMenu: [] },
	{ id: 2, content: 'Command', link: '#command', subMenu: [] },
	{
		id: 3,
		content: 'Services',
		link: '#services',
		subMenu: [
			{
				id: 31,
				iconSrc: '/assets/icons/cell-phone.svg',
				content: 'Development of mobile applications',
				link: '#mobile-applications',
			},
			{
				id: 32,
				iconSrc: '/assets/icons/chain.svg',
				content: 'Development and implementation ERP systems',
				link: '#erp-systems',
			},
			{
				id: 33,
				iconSrc: '/assets/icons/design.svg',
				content: 'User interface, User experience design',
				link: '#ui/ux-design',
			},
			{
				id: 33,
				iconSrc: '/assets/icons/design.svg',
				content: 'User interface, User experience design',
				link: '#ui/ux-design',
			},
		],
	},
];

function NavLargeItems() {
	return <div>NavLargeItems</div>;
}

export default NavLargeItems;
