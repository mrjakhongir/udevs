import SocialMedia from '../socialMedia/SocialMedia';
import ContactItem from './ContactItem';

const contacts = [
	{
		id: 1,
		img: '/assets/contacts/pin.svg',
		label: 'Ташкент,  Юнусабадский район, проспект Амира Темура, 129Б',
		link: 'https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor',
	},
	{
		id: 2,
		img: '/assets/icons/phone-outlined.svg',
		label: '+998 33 66 00 999',
		link: 'tel:+998336600999',
	},
	{
		id: 3,
		img: '/assets/icons/envelope.svg',
		label: 'azizbek.b@udevs.io',
		link: 'mailto:azizbek.b@udevs.io',
	},
	{
		id: 4,
		img: '/assets/contacts/telegram.svg',
		label: 't.me/azizbekbakhodirov',
		link: 'https://t.me/azizbekbakhodirov',
	},
];

function ContactDetails() {
	return (
		<div className='flex laptop:flex-1 flex-col gap-5 laptop:mt-10'>
			<ul className='flex flex-col gap-5 laptop:max-w-[80%]'>
				{contacts.map((contact) => (
					<ContactItem key={contact.id} item={contact} />
				))}
			</ul>
			<SocialMedia />
			<iframe
				className='hidden laptop:block'
				src='https://yandex.com/map-widget/v1/?um=constructor%3A7ca26e40b93ebc46d15bad846f85d1b7e00f167fb123e4d14ca535dfc64a7c41&amp;source=constructor'
				width='400px'
				height='200px'
				title='Udevs location'
				aria-hidden='false'></iframe>
		</div>
	);
}

export default ContactDetails;
