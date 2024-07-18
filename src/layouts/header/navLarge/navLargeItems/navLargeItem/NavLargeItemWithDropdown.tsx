'use client';
import Image from 'next/image';
import { useState } from 'react';
import DropdownItems from './dropdown/DropdownItems';
import { NavItem } from '@/lib/definitons';

type NavLargeItemWithDropdownProps = {
	item: NavItem;
};
function NavLargeItemWithDropdown({ item }: NavLargeItemWithDropdownProps) {
	const [showDropdown, setshowDropdown] = useState(false);
	return (
		<li
			className='relative flex items-center gap-1 py-[10px]'
			onMouseEnter={() => setshowDropdown(true)}
			onMouseLeave={() => setshowDropdown(false)}>
			<a href={item.link}>{item.content}</a>
			<Image
				src='/assets/icons/angle-down.svg'
				alt='angle down'
				width={10}
				height={10}
			/>
			{showDropdown && <DropdownItems item={item} />}
		</li>
	);
}

export default NavLargeItemWithDropdown;
