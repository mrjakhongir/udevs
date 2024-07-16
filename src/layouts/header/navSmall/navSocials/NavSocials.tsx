import { Dispatch, SetStateAction } from 'react';
import NavSocialItem from './NavSocialItem';

const navSocials = [
	{ id: 1, src: '/assets/contacts/instagram.svg', alt: 'instagram', link: '#' },
	{ id: 2, src: '/assets/contacts/twitter.svg', alt: 'twitter', link: '#' },
	{ id: 3, src: '/assets/contacts/youtube.svg', alt: 'youtube', link: '#' },
];

type NavSocialsProps = {
	setOpenNav: Dispatch<SetStateAction<boolean>>;
};

function NavSocials({ setOpenNav }: NavSocialsProps) {
	return (
		<ul className='flex items-center justify-center gap-6'>
			{navSocials.map((item) => (
				<NavSocialItem key={item.id} item={item} setOpenNav={setOpenNav} />
			))}
		</ul>
	);
}

export default NavSocials;
