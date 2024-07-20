import SectionTitle from '@/components/sectionTitle/SectionTitle';
import React from 'react';
import BrandsRow from './BrandsRow';

const brands = [
	[
		'/assets/brands/delever.svg',
		'/assets/brands/space.svg',
		'/assets/brands/fonon.svg',
		'/assets/brands/hamkorbank.svg',
		'/assets/brands/hi.svg',
		'/assets/brands/iman.svg',
		'/assets/brands/akfa.svg',
	],
	[
		'/assets/brands/goodzone.svg',
		'/assets/brands/z.svg',
		'/assets/brands/smsuz.svg',
		'/assets/brands/max-track.svg',
		'/assets/brands/sheff-burger.svg',
		'/assets/brands/my-taxi.svg',
		'/assets/brands/workly.svg',
	],
];

function Clients() {
	return (
		<section className='py-8'>
			<div className='w-full max-w-[1170px] px-4 mx-auto'>
				<SectionTitle content='Our clients' position='center' />
			</div>
			<div className='flex flex-col'>
				{brands.map((brandRow, index) => (
					<BrandsRow key={index} brandRow={brandRow} index={index} />
				))}
			</div>
		</section>
	);
}

export default Clients;
