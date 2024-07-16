'use client';
import { useState } from 'react';
import Logo from './Logo';
import NavToggler from './NavToggler';
import NavSmall from './navSmall/NavSmall';
import NavLarge from './navLarge/NavLarge';

function Header() {
	const [openNav, setOpenNav] = useState(false);
	return (
		<header className='relative w-full max-w-[1170px] mx-auto px-4 py-4 min-[900px]:py-5 flex items-center justify-between border-b border-b-slate-200'>
			<Logo />
			<NavToggler
				src='/assets/header/hamburger.svg'
				alt='hamburger'
				setOpenNav={setOpenNav}
			/>
			<NavLarge />
			<NavSmall openNav={openNav} setOpenNav={setOpenNav} />
		</header>
	);
}

export default Header;
