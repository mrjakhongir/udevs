type SubtitleProps = {
	content: string;
};

function Subtitle({ content }: SubtitleProps) {
	return <h3 className='text-4xl text-font font-semibold mb-8'>{content}</h3>;
}

export default Subtitle;
