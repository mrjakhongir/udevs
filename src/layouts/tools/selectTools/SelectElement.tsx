import { Dispatch, SetStateAction } from 'react';

type SelectElementProps = {
	field: string;
	setTool: Dispatch<SetStateAction<string>>;
};

function SelectElement({ field, setTool }: SelectElementProps) {
	return (
		<label className='cursor-pointer p-2 flex gap-3' htmlFor={field}>
			<input
				className='scale-150'
				type='radio'
				name='tech-field'
				id={field}
				onChange={() => setTool(field)}
			/>
			<span className='text-[16px] font-medium text-black select-none'>
				{field}
			</span>
		</label>
	);
}

export default SelectElement;
