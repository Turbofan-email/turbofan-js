import { settings, inboxLinks } from "./inc/settings";
import { postData } from "./inc/postData";

function setInboxLink( inboxLinkPlaceholder, emailValue ) {
	const emailParts  = emailValue.split('@');
	const emailDomain = emailParts[1];

	const emailProvider = inboxLinks.find( o => o.domains.includes( emailDomain ) );

	const inboxLinkLabel = inboxLinkPlaceholder.innerHTML;
	let inboxLink;

	if ( emailProvider === undefined ) {
		// Restore placeholder <span> element
		inboxLink = document.createElement( "span" );
	} else {
		// Set a link to the corresponding inbox
		inboxLink = document.createElement( "a" );
		inboxLink.setAttribute( 'href', emailProvider.inboxUrl );
		inboxLink.setAttribute( 'target', '_blank' );
	}
	inboxLink.setAttribute( 'class', 'inbox-link' );
	inboxLink.innerHTML  = inboxLinkLabel;

	inboxLinkPlaceholder.replaceWith( inboxLink );
}

function signUpEmail( form, eTarget ) {
	// todo: disable button

	const postUrl = form.getAttribute( 'action' );
	const formData = new FormData( eTarget );

	let payload = {};
	formData.forEach((value, key) => {
		payload[key] = value;
	} );

	const emailValue = formData.get( 'email' );
	if ( ! emailValue ) {
		return; // todo: error handling
	}

	const successMsgEl           = document.querySelector( settings.formSuccessMsgSelector );
	const errorMsgEl             = document.querySelector( settings.formErrorMsgSelector );
	const inboxLinkPlaceholderEl = document.querySelector( settings.formInboxLinkSelector );
	const spinnerEl              = document.querySelector( settings.formSpinnerSelector );

	if ( spinnerEl ) {
		spinnerEl.classList.remove( settings.hiddenClass );
	}

	postData( postUrl, payload ).then( (data) => {
		if ( data ) {
			if ( successMsgEl ) {
				if ( inboxLinkPlaceholderEl ) {
					setInboxLink( inboxLinkPlaceholderEl, emailValue );
				}

				successMsgEl.classList.remove( settings.hiddenClass );
				form.reset();
				// todo: enable button
			} else {
				console.log( 'Signup successful!', data );
			}
		} else {
			if ( errorMsgEl ) {
				errorMsgEl.classList.remove( settings.hiddenClass );
			}
		}

		if ( spinnerEl ) {
			spinnerEl.classList.add( settings.hiddenClass );
		}
	} );
}

const signUpForm = document.querySelector( settings.formSelector );
if ( signUpForm ) {
	signUpForm.addEventListener( 'submit', e => {
		e.preventDefault();

		signUpEmail( signUpForm, e.target );
	} );
}
