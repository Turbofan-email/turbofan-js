import { settings } from "./inc/settings";
import { postData } from "./inc/postData";

if ( settings.confirmationPathname && window.location.pathname === settings.confirmationPathname ) {
	const queryString  = window.location.search;
	const urlParams    = new URLSearchParams(queryString);
	const jwtParameter = urlParams.get( 'jwt' );

	const errorMsg = document.querySelector( settings.confirmErrorMsgSelector );

	if ( jwtParameter && settings.apiHost ) {
		const postUrl = `${settings.apiHost}/v1/form/confirm/${jwtParameter}`;

		postData( postUrl ).then((data) => {
			if ( ! data ) {
				if ( errorMsg ) {
					errorMsg.classList.remove( settings.hiddenClass );
				}
			}
		} );
	}
}
