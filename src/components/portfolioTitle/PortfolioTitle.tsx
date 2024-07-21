import Image from 'next/image';

type PortfolioTitleProps = {
	title: string;
	icon: string;
	logo: string;
	subtitle: string;
	bg: string;
	color: string;
	position: string;
};

function PortfolioTitle({
	logo,
	icon,
	title,
	subtitle,
	bg,
	color,
	position,
}: PortfolioTitleProps) {
	return (
		<div
			className={`flex flex-col items-start ${
				position === 'right' && 'laptop:translate-x-[130%] laptop:w-[40%]'
			} gap-4 mb-5`}>
			<Image
				className='w-auto'
				src={logo}
				alt={title}
				width={250}
				height={50}
			/>
			<div className={`flex gap-2 bg-${bg} p-2 rounded-full `}>
				<Image src={icon} alt={title} width={23} height={23} />
				<span className={`text-${color} text-[14px]`}>{subtitle}</span>
			</div>
		</div>
	);
}

export default PortfolioTitle;
