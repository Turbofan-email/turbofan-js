import { settings } from "./inc/settings";
import { postData } from "./inc/postData";

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

	const successMsg = document.querySelector( '#form-success' );
	const errorMsg   = document.querySelector( '#form-error' );

	postData( postUrl, payload ).then( (data) => {
		if ( data ) {
			if ( successMsg ) {
				successMsg.classList.remove( settings.hiddenClass );
				form.reset();
				// todo: enable button
			} else {
				console.log( 'Signup successful!', data );
			}
		} else {
			if ( errorMsg ) {
				errorMsg.classList.remove( settings.hiddenClass );
			}
		}
	} );
}

const signUpForm = document.querySelector( '#signUpForm' );
if ( signUpForm ) {
	signUpForm.addEventListener( 'submit', e => {
		e.preventDefault();

		signUpEmail( signUpForm, e.target );
	} );
}
