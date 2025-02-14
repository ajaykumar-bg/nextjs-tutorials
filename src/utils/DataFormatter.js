export const getFormatUsers = (users) => {
	debugger;
	if (!users || users.length === 0) return [];
	const newArray = users?.map((element) => {
		return {
			primaryText: element.name,
			description: element.email,
			secondaryText: element.designation,
			secondaryText2: element.lastSeen,
			imageUrl: `${element.imageUrl}${element.imageParams}`,
			online: element.online,
		};
	});
	return newArray;
};
