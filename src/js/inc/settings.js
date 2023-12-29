export const settings = {
	apiHost: turbofanSettings.apiHost || 'https://api.turbofan.email',
	confirmationPathname: turbofanSettings.confirmationPathname || '/signup-confirmed/',
	hiddenClass: turbofanSettings.hiddenClass || 'turbofan-hidden',
	dryRun: turbofanSettings.dryRun || false,
};

export const inboxLinks = [
	{
		name: 'gmail',
		domains: [
			'gmail.com',
			'googlemail.com',
		],
		inboxUrl: 'https://mail.google.com/mail/u/0/#inbox',
	},
	{
		name: 'protonmail',
		domains: [
			'pm.me',
			'protonmail.com',
		],
		inboxUrl: 'https://mail.proton.me/u/0/inbox',
	},
];
