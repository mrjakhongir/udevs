import SectionTitle from '@/components/sectionTitle/SectionTitle';
import Step from './step/Step';

function HowWeWork() {
	return (
		<section className='px-4'>
			<div className='w-full max-w-[1140px] mx-auto py-6 laptop:py-16'>
				<SectionTitle content='How we work!' position='center' />
				<Step />
			</div>
		</section>
	);
}

export default HowWeWork;
