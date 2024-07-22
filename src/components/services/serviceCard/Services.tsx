import ServiceCard from './ServiceCard';
import { Service } from '@/lib/definitons';

type ServicesProps = {
	data: Service[];
	bg: string;
};

function Services({ data, bg }: ServicesProps) {
	return (
		<div className='flex flex-wrap gap-3 mb-8 laptop:mb-12'>
			{data.map((service) => (
				<ServiceCard key={service.id} service={service} bg={bg} />
			))}
		</div>
	);
}

export default Services;
