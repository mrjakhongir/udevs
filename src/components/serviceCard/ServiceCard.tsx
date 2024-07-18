import Image from 'next/image';

type ServiceCardProps = {
	service: { id: number; img: string; title: string };
};

function ServiceCard({ service }: ServiceCardProps) {
	return (
		<div className='flex-1 basis-[150px] bg-bgPrimary rounded-lg p-5 pb-8'>
			<Image className='max-w-[42px] laptop:min-w-14 mb-4' src={service.img} alt={service.title} width={42} height={42} />
			<h3 className='text-sm laptop:text-lg text-black font-monrope font-semibold'>{service.title}</h3>
		</div>
	);
}

export default ServiceCard;
