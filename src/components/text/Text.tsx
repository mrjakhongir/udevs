type TextProps = {
	content: string;
	color: string;
	marginBottom: string;
};
function Text({ content, color, marginBottom }: TextProps) {
	return (
		<p
			className={`text-${color} text-[16px] laptop:text-[20px] leading-[30px] laptop:leading-[40px] font-monrope font-medium mb-${marginBottom} max-w-[60%] laptop:max-w-full`}>
			{content}
		</p>
	);
}

export default Text;
