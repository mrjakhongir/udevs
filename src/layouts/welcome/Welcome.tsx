'use client';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

function Welcome() {
	const [text] = useTypewriter({
		words: [
			'User interface, User experience design',
			'Optimization IT consulting infrastructure',
			'IT consulting',
			'Development of mobile applications',
			'Development and implementation ERP systems',
		],
		loop: Infinity,
	});
	return (
		<section className="bg-[url('/assets/pictures/section-bg.png')] bg-no-repeat bg-cover bg-center px-4">
			<div className='w-full max-w-[1170px] mx-auto py-20 laptop:py-24 flex flex-col laptop:flex-row items-center gap-12'>
				<div className='laptop:flex-1 flex flex-col items-center laptop:items-start'>
					<Image
						className='max-w-[125px] laptop:max-w-[267px] mb-8'
						src='/assets/header/logo.svg'
						alt='logo'
						width={300}
						height={41}
					/>
					<h1 className='text-2xl laptop:text-[40px] laptop:leading-[54px] font-semibold mb-5'>
						<span className='text-secondary'>IT-Outsourcing Company</span>
						<br />
						<span className='text-primary'>
							{text}
							<Cursor />
						</span>
					</h1>
					<a
						className='bg-[#1b5bf7] py-4 px-20 text-white text-xl font-semibold rounded-md cursor-pointer transition-all hover:scale-105 select-none hidden laptop:block'
						href='#'>
						Contact
					</a>
				</div>
				<div className='laptop:flex-1'>
					<Image
						className='w-full'
						src='/assets/pictures/hero.svg'
						alt='logo'
						width={500}
						height={100}
					/>
				</div>
			</div>
		</section>
	);
}

export default Welcome;
