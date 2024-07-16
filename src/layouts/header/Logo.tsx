import Image from 'next/image';
import React from 'react';

function Logo() {
	return (
		<a href='#' className='max-w-24 block'>
			<Image
				className='w-full'
				src='/assets/header/logo.svg'
				alt='udevs logo'
				width={96}
				height={32}
			/>
		</a>
	);
}

export default Logo;
