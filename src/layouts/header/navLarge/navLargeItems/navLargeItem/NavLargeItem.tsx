import { NavItemLarge } from '@/lib/definitons';

type NavLargeItemProps = {
	item: NavItemLarge;
};

function NavLargeItem({ item }: NavLargeItemProps) {
	return (
		<li>
			<a
				className='py-[10px] border-b-2 border-b-transparent transition-all hover:border-b-[#1b5bf7]'
				href={item.link}>
				{item.content}
			</a>
		</li>
	);
}

export default NavLargeItem;
