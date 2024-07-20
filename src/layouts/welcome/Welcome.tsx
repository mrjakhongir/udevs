import Image from 'next/image';

function Welcome() {
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
					<h1 className='text-2xl laptop:text-[40px] laptop:leading-[54px] font-semibold mb-5 text-secondary'>
						IT-Outsourcing Company
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
