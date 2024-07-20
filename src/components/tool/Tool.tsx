import Image from 'next/image';

type ToolProps = {
	tool: { id: number; img: string; caption: string; bg: string; tool: string };
	selectedTool: string;
};

function Tool({ tool, selectedTool }: ToolProps) {
	return (
		<figure
			className={`bg-${
				selectedTool
					? selectedTool.toLowerCase() === tool.tool && tool.bg
					: tool.bg
			} transition-all py-3 laptop:py-5 rounded-md flex flex-col items-center justify-center`}>
			<Image
				className='max-w-4 laptop:min-w-6 mb-2 laptop:mb-4'
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
