import { SubMenu } from '@/lib/definitons';
import Image from 'next/image';

type DropdownItemProps = {
	menuItem: SubMenu;
};

function DropdownItem({ menuItem }: DropdownItemProps) {
	return (
		<li>
			<a
				className='flex items-center gap-6 pl-7 pr-6 py-3 text-sm font-light transition-all hover:bg-[#1b5bf7] hover:text-white'
				href={menuItem.link}>
				{menuItem.category === 'services' ? (
					<span className='flex items-center justify-center bg-slate-100 min-w-12 h-12 rounded-full'>
						<Image
							src={menuItem.iconSrc}
							alt={menuItem.content}
							width={25}
							height={25}
						/>
					</span>
				) : menuItem.category === 'language' ? (
					<Image
						src={menuItem.iconSrc}
						alt={menuItem.content}
						width={30}
						height={30}
					/>
				) : (
					<Image
						src={menuItem.iconSrc}
						alt={menuItem.content}
						width={48}
						height={48}
					/>
				)}
				<span>{menuItem.content}</span>
			</a>
		</li>
	);
}

export default DropdownItem;
