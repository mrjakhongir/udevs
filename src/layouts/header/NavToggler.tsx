import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type NavToggler = {
	src: string;
	alt: string;
	setOpenNav: Dispatch<SetStateAction<boolean>>;
};

function NavToggler({ src, alt, setOpenNav }: NavToggler) {
	return (
		<div
			className='cursor-pointer w-[27px] h-[27px] flex items-center justify-center min-[900px]:hidden'
			onClick={() => setOpenNav((prevState) => !prevState)}>
			<Image src={src} alt={alt} width={20} height={13} />
		</div>
	);
}

export default NavToggler;
