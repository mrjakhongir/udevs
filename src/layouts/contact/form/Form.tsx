'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Stack, TextareaAutosize } from '@mui/material';

interface FormInputs {
	name: string;
	email: string;
	message: string;
}

function Form() {
	const form = useForm<FormInputs>({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});
	const { register, handleSubmit, formState } = form;
	const { errors } = formState;

	function onSubmit(data: FormInputs) {
		console.log(data);
	}

	return (
		<div className='laptop:flex-1'>
			<h3 className='text-[20px] leading-[24px] font-semibold text-[#0f001a] mb-5'>
				Leave us a message
			</h3>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<Stack spacing={3}>
					<TextField
						label='Name'
						type='text'
						{...register('name', { required: 'Fil in the field' })}
						error={!!errors.name}
						helperText={errors.name?.message}
					/>
					<TextField
						label='Email'
						type='email'
						{...register('email', { required: 'Fil in the field' })}
						error={!!errors.email}
						helperText={errors.email?.message}
					/>
					<TextField
						label='Briefly describe your project.'
						type='text'
						multiline
						maxRows={4}
						{...register('message', { required: 'Fil in the field' })}
						error={!!errors.message}
						helperText={errors.message?.message}
					/>
					<button className='text-[20px] leading-[24px] text-white font-semibold select-none bg-primary py-3 px-24 rounded-lg transition-all hover:scale-110 self-center laptop:self-start'>
						Send
					</button>
				</Stack>
			</form>
		</div>
	);
}

export default Form;
