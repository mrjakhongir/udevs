import Image from 'next/image';

type ServiceItemProps = {
	service: {
		id: number;
		img: string;
		title: string;
	};
};

function ServiceItem({ service }: ServiceItemProps) {
	return (
		<div className='p-5 pb-8 bg-bgPrimary rounded-lg'>
			<Image
				className='mb-10'
				src={service.img}
				alt={service.title}
				width={35}
				height={35}
			/>
			<h3 className='text-lg text-dark font-monrope font-semibold'>
				{service.title}
			</h3>
		</div>
	);
}

export default ServiceItem;
