import Image from 'next/image';

type ContactItemProps = {
	item: {
		id: number;
		img: string;
		link: string;
		label: string;
	};
};

function ContactItem({ item }: ContactItemProps) {
	return (
		<li>
			<a className='flex items-center gap-3' href={item.link} target='_blank'>
				<Image src={item.img} alt={item.label} width={24} height={24} />
				<span className='text-[16px] leading-[22px] text-[#0f001a]'>
					{item.label}
				</span>
			</a>
		</li>
	);
}

export default ContactItem;
