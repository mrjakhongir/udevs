import Subtitle from '../subtitle/Subtitle';
import Technology from './technology/Technology';

type TechnologiesProps = {
	title: string;
	data: { id: number; img: string; caption: string }[];
};

function Technologies({ title, data }: TechnologiesProps) {
	return (
		<div className='flex flex-col items-center laptop:items-start'>
			<Subtitle content={title} />
			<div className='flex items-center gap-8'>
				{data.map((tech) => (
					<Technology key={tech.id} tech={tech} />
				))}
			</div>
		</div>
	);
}

export default Technologies;
