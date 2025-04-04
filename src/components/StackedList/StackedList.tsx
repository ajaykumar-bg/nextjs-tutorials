import React from 'react';

import StackedListItem from './StackedListItem';

function StackedList({ data }) {
	return (
		<ul role='list' className='divide-y divide-gray-100'>
			{data.map((dataItem, index) => (
				<StackedListItem key={index} item={dataItem} />
			))}

			{/* <li className='flex justify-between gap-x-6 py-5'>
				<div className='flex min-w-0 gap-x-4'>
					<img
						className='size-12 flex-none rounded-full bg-gray-50'
						src='https://images.unsplash.com/photo-1494790108377-be9c29b29330'
						alt=''
					/>
					<div className='min-w-0 flex-auto'>
						<p className='text-sm/6 font-semibold text-gray-900'>
							Leslie Alexander
						</p>
						<p className='mt-1 truncate text-xs/5 text-gray-500'>
							leslie.alexander@example.com
						</p>
					</div>
				</div>
				<div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
					<p className='text-sm/6 text-gray-900'>Co-Founder / CEO</p>
					<p className='mt-1 text-xs/5 text-gray-500'>
						Last seen <time datetime='2023-01-23T13:23Z'>3h ago</time>
					</p>
				</div>
			</li>
			<li className='flex justify-between gap-x-6 py-5'>
				<div className='flex min-w-0 gap-x-4'>
					<img
						className='size-12 flex-none rounded-full bg-gray-50'
						src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5'
						alt=''
					/>
					<div className='min-w-0 flex-auto'>
						<p className='text-sm/6 font-semibold text-gray-900'>
							Michael Foster
						</p>
						<p className='mt-1 truncate text-xs/5 text-gray-500'>
							michael.foster@example.com
						</p>
					</div>
				</div>
				<div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
					<p className='text-sm/6 text-gray-900'>Co-Founder / CTO</p>
					<p className='mt-1 text-xs/5 text-gray-500'>
						Last seen <time datetime='2023-01-23T13:23Z'>3h ago</time>
					</p>
				</div>
			</li>
			<li className='flex justify-between gap-x-6 py-5'>
				<div className='flex min-w-0 gap-x-4'>
					<img
						className='size-12 flex-none rounded-full bg-gray-50'
						src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d'
						alt=''
					/>
					<div className='min-w-0 flex-auto'>
						<p className='text-sm/6 font-semibold text-gray-900'>
							Dries Vincent
						</p>
						<p className='mt-1 truncate text-xs/5 text-gray-500'>
							dries.vincent@example.com
						</p>
					</div>
				</div>
				<div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
					<p className='text-sm/6 text-gray-900'>Business Relations</p>
					<div className='mt-1 flex items-center gap-x-1.5'>
						<div className='flex-none rounded-full bg-emerald-500/20 p-1'>
							<div className='size-1.5 rounded-full bg-emerald-500'></div>
						</div>
						<p className='text-xs/5 text-gray-500'>Online</p>
					</div>
				</div>
			</li>
			<li className='flex justify-between gap-x-6 py-5'>
				<div className='flex min-w-0 gap-x-4'>
					<img
						className='size-12 flex-none rounded-full bg-gray-50'
						src='https://images.unsplash.com/photo-1517841905240-472988babdf9'
						alt=''
					/>
					<div className='min-w-0 flex-auto'>
						<p className='text-sm/6 font-semibold text-gray-900'>
							Lindsay Walton
						</p>
						<p className='mt-1 truncate text-xs/5 text-gray-500'>
							lindsay.walton@example.com
						</p>
					</div>
				</div>
				<div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
					<p className='text-sm/6 text-gray-900'>Front-end Developer</p>
					<p className='mt-1 text-xs/5 text-gray-500'>
						Last seen <time datetime='2023-01-23T13:23Z'>3h ago</time>
					</p>
				</div>
			</li>
			<li className='flex justify-between gap-x-6 py-5'>
				<div className='flex min-w-0 gap-x-4'>
					<img
						className='size-12 flex-none rounded-full bg-gray-50'
						src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
						alt=''
					/>
					<div className='min-w-0 flex-auto'>
						<p className='text-sm/6 font-semibold text-gray-900'>
							Courtney Henry
						</p>
						<p className='mt-1 truncate text-xs/5 text-gray-500'>
							courtney.henry@example.com
						</p>
					</div>
				</div>
				<div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
					<p className='text-sm/6 text-gray-900'>Designer</p>
					<p className='mt-1 text-xs/5 text-gray-500'>
						Last seen <time datetime='2023-01-23T13:23Z'>3h ago</time>
					</p>
				</div>
			</li>
			<li className='flex justify-between gap-x-6 py-5'>
				<div className='flex min-w-0 gap-x-4'>
					<img
						className='size-12 flex-none rounded-full bg-gray-50'
						src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
						alt=''
					/>
					<div className='min-w-0 flex-auto'>
						<p className='text-sm/6 font-semibold text-gray-900'>Tom Cook</p>
						<p className='mt-1 truncate text-xs/5 text-gray-500'>
							tom.cook@example.com
						</p>
					</div>
				</div>
				<div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
					<p className='text-sm/6 text-gray-900'>Director of Product</p>
					<div className='mt-1 flex items-center gap-x-1.5'>
						<div className='flex-none rounded-full bg-emerald-500/20 p-1'>
							<div className='size-1.5 rounded-full bg-emerald-500'></div>
						</div>
						<p className='text-xs/5 text-gray-500'>Online</p>
					</div>
				</div>
			</li> */}
		</ul>
	);
}

export default StackedList;
