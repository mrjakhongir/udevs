type TextProps = {
	content: string;
	color: string;
	marginBottom: string;
};
function Text({ content, color, marginBottom }: TextProps) {
	return (
		<p
			className={`text-${color} text-[18px] laptop:text-[24px] leading-[30px] laptop:leading-[40px] text-center mx-auto laptop:text-left font-monrope font-medium mb-${marginBottom} max-w-[70%] laptop:max-w-full`}>
			{content}
		</p>
	);
}

export default Text;
