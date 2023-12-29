import { settings } from "./settings";

const delay = ms => new Promise( res => setTimeout( res, ms ) );

export async function postData( url = "", data = {} ) {
	if ( settings.dryRun ) {
		await delay( 1000 );
		return { 'dummyData': true };
	}

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
