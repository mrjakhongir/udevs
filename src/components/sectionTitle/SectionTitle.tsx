import clsx from 'clsx';

type SectionTitleProps = {
	content: string;
	position: string;
};

function SectionTitle({ content, position }: SectionTitleProps) {
	return (
		<h2
			className={clsx(
				'text-primary laptop:text-left text-4xl laptop:text-6xl font-semibold mb-8 laptop:mb-14 mx-auto laptop:max-w-[70%] laptop:mx-0',
				{ 'text-left': position === 'left' },
				{ 'text-center': position === 'center' }
			)}>
			{content}
		</h2>
	);
}

export default SectionTitle;
