const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const redirectUri = 'http://localhost:3000/';

function generateRandomString() {
	let text = '';
	const possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

async function generateCodeChallenge(codeVerifier) {
	function base64encode(string) {
		return btoa(String.fromCharCode.apply(null, Array.from(string)))
			.replace(/\+/g, '-')
			.replace(/\//g, '_')
			.replace(/=+$/, '');
	}

	const encoder = new TextEncoder();
	const data = encoder.encode(codeVerifier);
	const digest = await window.crypto.subtle.digest('SHA-256', data);

	return base64encode(new Uint8Array(digest));
}

const codeVerifier = generateRandomString(128);

let urlParams = new URLSearchParams();
