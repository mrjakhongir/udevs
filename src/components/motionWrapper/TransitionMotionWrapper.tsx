'use client';
import { fadeIn } from '@/lib/utils';
import { motion } from 'framer-motion';

type TransitionMotionWrapperProps = {
	children: React.ReactNode;
	direction: string;
	delay: number;
};

function TransitionMotionWrapper({
	children,
	direction,
	delay,
}: TransitionMotionWrapperProps) {
	return (
		<motion.div
			className='laptop:self-stretch'
			variants={fadeIn(direction, delay)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}>
			{children}
		</motion.div>
	);
}

export default TransitionMotionWrapper;
