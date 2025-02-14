import React, { useMemo } from 'react';
import StackedList from '@/components/StackedList/StackedList';

import { Users } from '../../Constants';
import { getFormatUsers } from '../../utils/DataFormatter';

function Users() {
	const userList = useMemo(() => getFormatUsers(Users), []);
	return (
		<div className='bg-white px-4 py-12 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-4xl'>
				<StackedList data={userList} />
			</div>
		</div>
	);
}

export default Users;
