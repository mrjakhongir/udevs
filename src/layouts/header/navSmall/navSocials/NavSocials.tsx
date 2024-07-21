import { Dispatch, SetStateAction } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function NavSocials() {
	return (
		<div className='flex items-center justify-center gap-6'>
			<InstagramIcon className='text-white bg-primary w-8 h-8 p-2 rounded-full cursor-pointer' />
			<TwitterIcon className='text-white bg-primary w-8 h-8 p-2 rounded-full cursor-pointer' />
			<YouTubeIcon className='text-white bg-primary w-8 h-8 p-2 rounded-full cursor-pointer' />
		</div>
	);
}

export default NavSocials;
