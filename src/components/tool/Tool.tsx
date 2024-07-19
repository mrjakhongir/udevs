import Image from 'next/image';

type ToolProps = {
	tool: { id: number; img: string; caption: string; bg: string };
};

function Tool({ tool }: ToolProps) {
	return (
		<figure
			className={`bg-${tool.bg} py-3 rounded-md flex flex-col items-center justify-center`}>
			<Image
				className='max-w-4 laptop:min-w-6 mb-2'
				src={tool.img}
				alt={tool.caption}
				width={15}
				height={15}
			/>
			<figcaption className='text-[9px] laptop:text-[11px] whitespace-nowrap leading-3 font-light'>
				{tool.caption}
			</figcaption>
		</figure>
	);
}

export default Tool;
