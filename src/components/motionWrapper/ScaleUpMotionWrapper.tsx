'use client';
import { scaleUp } from '@/lib/utils';
import { motion } from 'framer-motion';

type ScaleUpMotionWrapperProps = {
	children: React.ReactNode;
	delay: number;
};

function ScaleUpMotionWrapper({ children, delay }: ScaleUpMotionWrapperProps) {
	return (
		<motion.div
			variants={scaleUp(delay)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.5 }}>
			{children}
		</motion.div>
	);
}

export default ScaleUpMotionWrapper;
