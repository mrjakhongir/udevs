import Image from 'next/image';
import FooterLink from './FooterLink';
import FooterTitle from './FooterTitle';
import FooterSocials from './FooterSocials';

const footerLinks = [
	{
		id: 1,
		title: 'About us',
		links: [
			{ id: 11, label: 'Direction', link: '#direction' },
			{ id: 12, label: 'Command', link: '#command' },
			{ id: 13, label: 'Tools', link: '#tools' },
			{ id: 14, label: 'Clients', link: '#clients' },
		],
	},
	{
		id: 2,
		title: 'Portfolio',
		links: [
			{ id: 11, label: 'Delever', link: '#delever' },
			{ id: 12, label: 'Sms.uz', link: '#smsuz' },
			{ id: 13, label: 'Goodzone', link: '#goodzone' },
			{ id: 14, label: 'Iman', link: '#iman' },
		],
	},
	{
		id: 2,
		title: 'Services',
		links: [
			{
				id: 21,
				label: 'Development of mobile applications',
				link: '#mobile-apps',
			},
			{
				id: 22,
				label: 'Development and implement ERP systems',
				link: '#erp-systems',
			},
			{
				id: 23,
				label: 'User interface, User experience design',
				link: '#ux-ui',
			},
			{ id: 24, label: 'IT consulting', link: '#it-consulting' },
			{
				id: 25,
				label: 'Optimization IT consulting infrastructure',
				link: '#optimization',
			},
		],
	},
];

function Footer() {
	return (
		<footer className='px-4 bg-bgPrimary'>
			<div className='py-6 laptop:pb-12 max-w-[1170px] mx-auto'>
				<div className='flex items-center justify-center mb-5 laptop:mb-10'>
					<Image
						src='./assets/header/logo.svg'
						alt='udevs logo'
						width={125}
						height={42}
					/>
				</div>
				<nav className='flex flex-col laptop:flex-row laptop:justify-between gap-10 mb-10'>
					{footerLinks.map((nav) => (
						<div
							key={nav.id}
							className={`${nav.title === 'Portfolio' && 'laptop:order-last'}`}>
							<FooterTitle content={nav.title} />
							<ul className='flex flex-col gap-3'>
								{nav.links.map((link) => (
									<FooterLink key={link.id} item={link} />
								))}
							</ul>
						</div>
					))}
				</nav>
				<div className='flex flex-col laptop:flex-row-reverse items-center justify-center laptop:justify-between gap-4 laptop:pt-7 laptop:border-t laptop:border-t-slate-300'>
					<FooterSocials />
					<p className='text-sm text-primary'>
						&copy; 2024 Udevs. All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
