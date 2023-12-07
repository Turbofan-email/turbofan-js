const settings = {
	apiHost: turbofanSettings.apiHost || 'https://api.turbofan.email',
	confirmationPathname: turbofanSettings.confirmationPathname || '/signup-confirmed/',
};

async function postData( url = "", data = {} ) {
	try {
		const response = await fetch( url, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		} );
		if ( ! response.ok ) {
			throw new Error( "Network response was not OK" );
		}
		return response.json(); // parses JSON response into native JavaScript objects
	} catch ( error ) {
		console.error( "There has been a problem with your fetch operation:", error );
		return false;
	}
}

/* Sign up */

function signUpEmail( form, eTarget ) {
	// todo: disable button

	const postUrl = form.getAttribute( 'action' );
	const formData = new FormData( eTarget );

	const emailValue = formData.get( 'email' );
	if ( ! emailValue ) {
		return; // todo: error handling
	}

	const successMsg = document.querySelector( '#form-success' );
	const errorMsg   = document.querySelector( '#form-error' );

	postData( postUrl, { email: emailValue } ).then( (data) => {
		if ( data ) {
			if ( successMsg ) {
				successMsg.classList.remove( 'hidden' );
				form.reset();
				// todo: enable button
			} else {
				console.log( 'Signup successful!', data );
			}
		} else {
			if ( errorMsg ) {
				errorMsg.classList.remove( 'hidden' );
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

/* Confirmation */

if ( settings.confirmationPathname && window.location.pathname === settings.confirmationPathname ) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const jwtParameter = urlParams.get( 'jwt' );

	const errorMsg = document.querySelector( '#confirmation-error' );

	if ( jwtParameter && settings.apiHost ) {
		const postUrl = `${settings.apiHost}/v1/form/confirm/${jwtParameter}`;

		postData( postUrl ).then((data) => {
			if ( ! data ) {
				if ( errorMsg ) {
					errorMsg.classList.remove( 'hidden' );
				}
			}
		} );
	}
}
