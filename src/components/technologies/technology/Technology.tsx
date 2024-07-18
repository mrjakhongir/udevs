import Image from 'next/image';

type TechnologyProps = {
	tech: {
		id: number;
		img: string;
		caption: string;
	};
};

function Technology({ tech }: TechnologyProps) {
	return (
		<figure className='flex flex-col items-center gap-2'>
			<Image
				className='laptop:min-w-[56px]'
				src={tech.img}
				alt={tech.caption}
				width={42}
				height={42}
			/>
			<figcaption className='text-lg laptop:text-[20px] laptop:leading-[30px] text-black font-semibold font-monrope'>
				{tech.caption}
			</figcaption>
		</figure>
	);
}

export default Technology;
