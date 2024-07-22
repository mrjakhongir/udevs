import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

import ContactBtn from '../ContactBtn';
import Logo from '../Logo';
import NavToggler from '../NavToggler';
import NavItemSmall from './NavItemSmall';
import NavSocials from './navSocials/NavSocials';

const navItems = [
	{ id: 1, content: 'Services', link: '#services' },
	{ id: 2, content: 'Clients', link: '#clients' },
	{ id: 3, content: 'Command', link: '#team' },
];

type NavSmallProps = {
	openNav: boolean;
	setOpenNav: Dispatch<SetStateAction<boolean>>;
};

function NavSmall({ openNav, setOpenNav }: NavSmallProps) {
	return (
		<nav
			className={clsx(
				'fixed top-0 left-0 right-0 bottom-0 z-10 min-[900px]:hidden bg-[#f4f7ff] flex flex-col justify-between items-center p-4 pb-12 transition-all duration-500 translate-x-[100%]',
				{ '!translate-x-[0]': openNav }
			)}>
			<div className='self-stretch flex items-center justify-between'>
				<Logo />
				<NavToggler
					src='/assets/header/cross.svg'
					alt='cross'
					setOpenNav={setOpenNav}
				/>
			</div>
			<ul className='flex flex-col items-center gap-4'>
				{navItems.map((item) => (
					<NavItemSmall key={item.id} item={item} setOpenNav={setOpenNav} />
				))}
			</ul>
			<div className='self-stretch flex flex-col gap-10'>
				<ContactBtn setOpenNav={setOpenNav} />
				<NavSocials />
			</div>
		</nav>
	);
}

export default NavSmall;
