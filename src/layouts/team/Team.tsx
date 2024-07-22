'use cleint';
import Image from 'next/image';

import SectionTitle from '@/components/sectionTitle/SectionTitle';
import Text from '@/components/text/Text';
import Countup from './Countup';
import ScaleUpMotionWrapper from '@/components/motionWrapper/ScaleUpMotionWrapper';
import TransitionMotionWrapper from '@/components/motionWrapper/TransitionMotionWrapper';

function Team() {
	return (
		<section className='px-4 bg-bgPrimary'>
			<div className='w-full max-w-[1140px] mx-auto py-6 laptop:py-16'>
				<TransitionMotionWrapper direction='up' delay={0}>
					<SectionTitle content='Team' position='center' />
				</TransitionMotionWrapper>
				<div className='flex flex-col items-center laptop:flex-row-reverse gap-6 laptop:gap-10'>
					<ScaleUpMotionWrapper delay={0.2}>
						<div className='laptop:flex-1'>
							<Image
								className='mb-8 w-[300px] laptop:w-[426px]'
								src='/assets/pictures/teamwork.svg'
								alt='team work'
								width={300}
								height={300}
							/>
						</div>
					</ScaleUpMotionWrapper>

					<div className='flex flex-col items-center laptop:items-start laptop:flex-1'>
						<TransitionMotionWrapper direction='up' delay={0.2}>
							<Text
								content='For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.'
								color='font'
								marginBottom='10'
							/>
						</TransitionMotionWrapper>
						<TransitionMotionWrapper direction='up' delay={0.4}>
							<div className='flex flex-col font-monrope font-semibold'>
								<span className='text-[80px] laptop:text-[120px] leading-[70px] laptop:leading-[96px] text-primary font-monrope'>
									<Countup from={0} to={100} />
								</span>
								<span className='text-[24px] laptop:text-[40px] leading-[72px] text-font '>
									Dedicated team
								</span>
							</div>
						</TransitionMotionWrapper>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Team;
