import { Dispatch, SetStateAction } from 'react';

type ContactBtnProps = {
	setOpenNav?: Dispatch<SetStateAction<boolean>>;
};

function ContactBtn({ setOpenNav }: ContactBtnProps) {
	return (
		<a
			className='bg-[#1b5bf7] py-[13px] min-[900px]:py-[10px] min-[900px]:px-8 text-white text-[20px] min-[900px]:text-[14px] leading-[30px] min-[900px]:leading-[20px] text-center font-[600] rounded-md cursor-pointer transition-all hover:scale-110  '
			href='#'
			onClick={() => setOpenNav && setOpenNav((prevState) => !prevState)}>
			Contact
		</a>
	);
}

export default ContactBtn;
