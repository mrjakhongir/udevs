import Image from 'next/image';
import { Service } from '@/lib/definitons';

type ServiceCardProps = {
	service: Service;
	bg: string;
};

function ServiceCard({ service, bg }: ServiceCardProps) {
	return (
		<div className={`flex-1 basis-[150px] bg-${bg} rounded-lg p-3`}>
			<Image
				className='max-w-[42px] laptop:min-w-14 mb-4'
				src={service.img}
				alt={service.title}
				width={42}
				height={42}
			/>
			<h3 className='text-sm laptop:text-lg text-black font-monrope font-semibold'>
				{service.title}
			</h3>
		</div>
	);
}
export default ServiceCard;
