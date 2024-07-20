import StepIcon from './StepIcon';

const steps = [
	{
		id: 1,
		img: '/assets/icons/phone.svg',
		alt: 'phone',
		title: 'Contact',
		description: 'Send us your project request or project idea.',
	},
	{
		id: 2,
		img: '/assets/icons/chart.svg',
		alt: 'chart',
		title: 'Analysis',
		description: 'We will contact you to clarify your project requirements.',
	},
	{
		id: 3,
		img: '/assets/icons/folder.svg',
		alt: 'folder',
		title: 'Offer',
		description: 'We will provide you with our free, non-binding application.',
	},
	{
		id: 4,
		img: '/assets/icons/team.svg',
		alt: 'team',
		title: 'Team',
		description: 'We provide a team for your requirements.',
	},
	{
		id: 5,
		img: '/assets/icons/power.svg',
		alt: 'power',
		title: 'Start',
		description: "You will get to know the team and we'll get started.",
	},
];

function Step() {
	return (
		<div className='flex flex-col laptop:flex-row gap-7'>
			{steps.map((step) => (
				<div
					key={step.id}
					className='flex laptop:flex-1 laptop:flex-col items-center gap-5 laptop:gap-1'>
					<StepIcon src={step.img} alt={step.alt} />
					<div className='flex flex-col laptop:items-center gap-1'>
						<h3 className='text-[18px] leading-[28px] font-semibold '>
							{step.title}
						</h3>
						<p className='text-[14px] text-slate-700 leading-[24px] font-normal laptop:text-center'>
							{step.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Step;
