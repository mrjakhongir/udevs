import Form from './form/Form';
import ContactDetails from './contactDetails/ContactDetails';
import SectionTitle from '@/components/sectionTitle/SectionTitle';

function Contact() {
	return (
		<section className="px-4 bg-[url('/assets/pictures/section-bg.png')] bg-no-repeat bg-cover bg-center">
			<div className='w-full max-w-[1170px] mx-auto py-6 laptop:py-16'>
				<SectionTitle content='Contact us' position='center' />
				<div className='flex flex-col laptop:flex-row laptop:items-start gap-6 laptop:gap-16 laptop:bg-white laptop:py-10 laptop:pl-24 laptop:pb-24 laptop:pr-10 laptop:shadow-[0_0_12px_rgba(0,0,0,0.12)] laptop:rounded-lg'>
					<Form />
					<ContactDetails />
				</div>
			</div>
		</section>
	);
}

export default Contact;
