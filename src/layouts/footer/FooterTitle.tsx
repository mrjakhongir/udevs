type FooterTitleProps = {
	content: string;
};

function FooterTitle({ content }: FooterTitleProps) {
	return (
		<h3 className='text-[20px] leading-[24px] font-semibold mb-4'>{content}</h3>
	);
}

export default FooterTitle;
