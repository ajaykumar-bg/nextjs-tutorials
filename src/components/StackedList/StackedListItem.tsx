import React from 'react';

function StackedListItem(item) {
	const {
		primaryText,
		description,
		secondaryText,
		secondaryText2,
		imageUrl,
		online,
	} = item;

	return (
		<li className='flex justify-between gap-x-6 py-5'>
			<div className='flex min-w-0 gap-x-4'>
				<img
					className='size-12 flex-none rounded-full bg-gray-50'
					src={imageUrl}
					alt='user-image'
				/>
				<div className='min-w-0 flex-auto'>
					<p className='text-sm/6 font-semibold text-gray-900'>{primaryText}</p>
					<p className='mt-1 truncate text-xs/5 text-gray-500'>{description}</p>
				</div>
			</div>
			<div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
				<p className='text-sm/6 text-gray-900'>{secondaryText}</p>
				{online ? (
					<div className='mt-1 flex items-center gap-x-1.5'>
						<div className='flex-none rounded-full bg-emerald-500/20 p-1'>
							<div className='size-1.5 rounded-full bg-emerald-500'></div>
						</div>
						<p className='text-xs/5 text-gray-500'>Online</p>
					</div>
				) : (
					<p className='mt-1 text-xs/5 text-gray-500'>{secondaryText2}</p>
				)}
			</div>
		</li>
	);
}

export default StackedListItem;
