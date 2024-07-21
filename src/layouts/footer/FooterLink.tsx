type FooterLinkProps = {
	item: { id: number; label: string; link: string };
};

function FooterLink({ item }: FooterLinkProps) {
	return (
		<li>
			<a
				className='text-[16px] leading-[28px] text-primary font-medium hover:underline'
				href={item.link}>
				{item.label}
			</a>
		</li>
	);
}

export default FooterLink;
