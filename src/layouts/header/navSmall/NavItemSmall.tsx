import { NavItem } from '@/lib/definitons';
import { Dispatch, SetStateAction } from 'react';

type NavItemSmallProps = {
	item: NavItem;
	setOpenNav: Dispatch<SetStateAction<boolean>>;
};

function NavItemSmall({ item, setOpenNav }: NavItemSmallProps) {
	return (
		<li onClick={() => setOpenNav((prevState) => !prevState)}>
			<a className='text-[32px] text-[#18191f] font-semibold' href={item.link}>
				{item.content}
			</a>
		</li>
	);
}

export default NavItemSmall;
