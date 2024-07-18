import Image from 'next/image';

import MobileServices from './MobileServices';

import SectionTitle from '@/components/sectionTitle/SectionTitle';
import Text from '@/components/text/Text';
import Technologies from '@/components/technologies/Technologies';

const technologiesData = [
	{ id: 1, img: '/assets/icons/swift.svg', caption: 'Swift' },
	{ id: 2, img: '/assets/icons/kotlin.svg', caption: 'Kotlin' },
	{ id: 3, img: '/assets/icons/flutter.svg', caption: 'Flutter' },
];

function MobileApps() {
	return (
		<section className="p-4 laptop:py-16 bg-[url('/assets/pictures/section-bg.png')] bg-no-repeat bg-cover bg-center">
			<div className="className='w-full max-w-[1170px] mx-auto py-6 laptop:py-16'">
				<SectionTitle
					content='Development of mobile applications'
					position='center'
				/>
				<div className='flex flex-col laptop:flex-row-reverse items-center laptop:items-stretch gap-6 laptop:justify-between'>
					<div className="bg-[url('/assets/pictures/mobile-apps-bg.png')] bg-no-repeat bg-cover bg-center rounded-3xl max-w-[500px] laptop:flex-1">
						<Image
							src='/assets/pictures/mobile-apps.png'
							alt='iman home page inside apple phone'
							width={500}
							height={500}
						/>
					</div>
					<div className='flex flex-col items-center laptop:items-start laptop:flex-1 max-w-[500px]'>
						<Text
							content='In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.'
							color='dark'
							marginBottom='10'
						/>
						<MobileServices />
						<Technologies title='Technologies' data={technologiesData} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default MobileApps;
