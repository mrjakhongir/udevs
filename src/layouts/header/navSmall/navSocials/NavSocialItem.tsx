import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type NavSocialItemProps = {
	setOpenNav: Dispatch<SetStateAction<boolean>>;
	item: {
		id: number;
		src: string;
		alt: string;
		link: string;
	};
};
function NavSocialItem({ item, setOpenNav }: NavSocialItemProps) {
	return (
		<li
			className='w-10 h-10 rounded-full bg-[#1b5bf7] flex items-center justify-center'
			onClick={() => setOpenNav((prevState) => !prevState)}>
			<a href={item.link} target='_blank'>
				<Image src={item.src} alt={item.alt} width={22} height={22} />
			</a>
		</li>
	);
}

export default NavSocialItem;
