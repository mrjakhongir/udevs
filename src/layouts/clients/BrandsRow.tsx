import Image from 'next/image';

type BrandsRowProps = { brandRow: string[]; index: number };

function BrandsRow({ brandRow, index }: BrandsRowProps) {
	return (
		<div className='flex shrink-0 items-center gap-8 w-full overflow-hidden py-6'>
			<div
				className={`flex items-center gap-8 ${
					index === 0 ? 'animate-scroll' : 'animate-scrollReverse'
				}`}>
				{brandRow.map((brand) => (
					<Image
						className='max-w-[233px] rounded-[25px] shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-110'
						key={brand}
						src={brand}
						alt={brand}
						width={233}
						height={140}
					/>
				))}
			</div>
			<div
				className={`flex items-center gap-8 ${
					index === 0 ? 'animate-scroll' : 'animate-scrollReverse'
				}`}>
				{brandRow.map((brand) => (
					<Image
						className='max-w-[233px] rounded-[25px] shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-110'
						key={brand}
						src={brand}
						alt={brand}
						width={233}
						height={140}
					/>
				))}
			</div>
		</div>
	);
}

export default BrandsRow;
