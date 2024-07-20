import Image from 'next/image';

type StepIconProps = {
	src: string;
	alt: string;
};
function StepIcon({ src, alt }: StepIconProps) {
	return (
		<Image
			className='max-w-14 laptop:min-w-20'
			src={src}
			alt={alt}
			width={80}
			height={80}
		/>
	);
}

export default StepIcon;
