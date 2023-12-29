export const settings = {
	apiHost: turbofanSettings.apiHost || 'https://api.turbofan.email',
	confirmationPathname: turbofanSettings.confirmationPathname || '/signup-confirmed/',
	formSelector: turbofanSettings.formSelector || '#turbofan-form',
	formSuccessMsgSelector: turbofanSettings.formSuccessMsgSelector || '#turbofan-form .success-msg',
	formErrorMsgSelector: turbofanSettings.formErrorMsgSelector || '#turbofan-form .error-msg',
	formInboxLinkSelector: turbofanSettings.formInboxLinkSelector || '#turbofan-form .inbox-link',
	formSpinnerSelector: turbofanSettings.formSpinnerSelector || '#turbofan-form .spinner',
	confirmErrorMsgSelector: turbofanSettings.confirmErrorMsgSelector || '#turbofan-confirm .error-msg',
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
