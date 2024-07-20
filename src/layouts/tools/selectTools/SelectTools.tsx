import { Dispatch, SetStateAction } from 'react';
import SelectElement from './SelectElement';

const fields = [
	'Frontend',
	'Backend',
	'Devops',
	'Testing',
	'UX/UI',
	'Infrastructure',
	'Mobile',
];

type SelectToolsProps = {
	setSelectedTool: Dispatch<SetStateAction<string>>;
};

function SelectTools({ setSelectedTool }: SelectToolsProps) {
	return (
		<div className='grid grid-cols-2 mb-5'>
			{fields.map((field) => (
				<SelectElement key={field} field={field} setTool={setSelectedTool} />
			))}
		</div>
	);
}

export default SelectTools;
