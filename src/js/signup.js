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

function setFormStateLoading( buttonEl, spinnerEl, successMsgEl, errorMsgEl ) {
	if ( buttonEl ) {
		buttonEl.setAttribute( 'disabled', '' );
	}

	if ( spinnerEl ) {
		spinnerEl.classList.remove( settings.hiddenClass );
	}

	if ( successMsgEl ) {
		successMsgEl.classList.add( settings.hiddenClass );
	}

	if ( errorMsgEl ) {
		errorMsgEl.classList.add( settings.hiddenClass );
	}
}

function setFormStateComplete( buttonEl, spinnerEl ) {
	if ( buttonEl ) {
		buttonEl.removeAttribute( 'disabled' );
	}

	if ( spinnerEl ) {
		spinnerEl.classList.add( settings.hiddenClass );
	}
}

function signUpEmail( form, eTarget ) {
	const postUrl = form.getAttribute( 'action' );
	const formData = new FormData( eTarget );

	let payload = {};
	formData.forEach( (value, key) => {
		payload[key] = value;
	} );

	const emailValue = formData.get( 'email' );
	if ( ! emailValue ) {
		return; // todo: error handling
	}

	const buttonEl               = document.querySelector( settings.formSelector + ' [type="submit"]' );
	const successMsgEl           = document.querySelector( settings.formSuccessMsgSelector );
	const errorMsgEl             = document.querySelector( settings.formErrorMsgSelector );
	const inboxLinkPlaceholderEl = document.querySelector( settings.formInboxLinkSelector );
	const spinnerEl              = document.querySelector( settings.formSpinnerSelector );

	setFormStateLoading( buttonEl, spinnerEl, successMsgEl, errorMsgEl );

	postData( postUrl, payload ).then( (data) => {
		if ( data ) {
			if ( successMsgEl ) {
				if ( inboxLinkPlaceholderEl ) {
					setInboxLink( inboxLinkPlaceholderEl, emailValue );
				}

				successMsgEl.classList.remove( settings.hiddenClass );
				form.reset();
			} else {
				console.log( 'Signup successful!', data );
			}
		} else {
			if ( errorMsgEl ) {
				errorMsgEl.classList.remove( settings.hiddenClass );
			}
		}

		setFormStateComplete( buttonEl, spinnerEl );
	} );
}

const signUpForm = document.querySelector( settings.formSelector );
if ( signUpForm ) {
	signUpForm.addEventListener( 'submit', e => {
		e.preventDefault();

		signUpEmail( signUpForm, e.target );
	} );
}
