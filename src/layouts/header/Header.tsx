'use client';
import { useState } from 'react';
import Logo from './Logo';
import NavToggler from './NavToggler';
import NavSmall from './navSmall/NavSmall';
import NavLarge from './navLarge/NavLarge';

function Header() {
	const [openNav, setOpenNav] = useState(false);
	return (
		<header className='sticky z-20 top-0 bg-white p-4 border-b border-b-slate-200 '>
			<div className='w-full max-w-[1170px] mx-auto flex items-center justify-between'>
				<Logo />
				<NavToggler
					src='/assets/header/hamburger.svg'
					alt='hamburger'
					setOpenNav={setOpenNav}
				/>
				<NavLarge />
				<NavSmall openNav={openNav} setOpenNav={setOpenNav} />
			</div>
		</header>
	);
}

export default Header;
