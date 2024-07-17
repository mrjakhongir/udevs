import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import DropdownItem from './DropdownItem';
import { NavItemLarge } from '@/lib/definitons';

type NavLargeItemDropdownProps = {
	item: NavItemLarge;
	setshowDropdown: Dispatch<SetStateAction<boolean>>;
};

function DropdownItems({ item, setshowDropdown }: NavLargeItemDropdownProps) {
	return (
		<div
			className={clsx(
				'absolute z-10 top-[100%] left-[50%] -translate-x-1/2 bg-white shadow-lg pt-6 pb-8 rounded-md min-w-[300px]',
				{ 'min-w-[150px]': item.content === 'Language' }
			)}>
			<h3 className=' pl-6 text-sm font-semibold text-slate-500 mb-6 select-none'>
				{item.content}
			</h3>
			<ul>
				{item.subMenu?.map((menuItem) => (
					<DropdownItem key={menuItem.id} menuItem={menuItem} />
				))}
			</ul>
		</div>
	);
}

export default DropdownItems;
