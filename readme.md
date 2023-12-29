## Usage

### Add the form to your HTML

Default ID: `#turbofan-form`

Add the barebones subscription form and extend it to your liking:
```
<form id="turbofan-form" action="https://api.turbofan.email/v1/form/FORM-ID-HERE/register" method="post">
	<input name="email" type="email" autocomplete="email" required>

	<button type="submit">Sign up</button>
</form>
```

Or add the extended form to start with:
```
<form id="turbofan-form" action="https://api.turbofan.email/v1/form/FORM-ID-HERE/register" method="post">
	<label for="firstname">Your first name</label>
	<input id="firstname" name="firstname" type="text" autocomplete="given-name" required>

	<label for="email-address">Your email</label>
	<input id="email-address" name="email" type="email" autocomplete="email" required>

	<button type="submit">Sign up</button>

	<div class="spinner turbofan-hidden">Sending ...</div>

	<p class="success-msg turbofan-hidden">Thank you, please <span class="inbox-link">check your inbox</span> to confirm your subscription!</p>
	<p class="error-msg turbofan-hidden">Error, please try again later.</p>

	<p>By clicking the button above, you agree to our <a href="/privacy/" target="_blank">privacy policy</a> and for the use of your email address to receive our newsletter.</p>
</form>
```

Here, the optional elements are used:
- Loading spinner (default class: `spinner`)
- Successful signup (default class: `success-msg`)
- Error during signup (default class: `error-msg`)
- Inbox link placeholder (default class: `inbox-link`)

Note that if you don't have CSS helper classes for hidden elements or hidden for screen readers only, you can include the optional stylesheet before `</head>`:
```
<link href="style.css?v=0.1.1" rel="stylesheet">
```

### (optional) Add an error message to your confirmation page

```
<div id="turbofan-confirm">
	<p class="error-msg turbofan-hidden">Error, please try again later.</p>
</div>
```

### Include settings

Include the settings on all pages with a form and the confirmation page, before `</body>`:
```
<script>
const turbofanSettings = {
	apiHost: 'https://api.turbofan.email',
	confirmationPathname: '/my-confirm-page/',
	formSelector: '#turbofan-form',
	formSuccessMsgSelector: '#turbofan-form .success-msg',
	formErrorMsgSelector: '#turbofan-form .error-msg',
	formInboxLinkSelector: '#turbofan-form .inbox-link',
	formSpinnerSelector: '#turbofan-form .spinner',
	confirmErrorMsgSelector: '#turbofan-confirm .error-msg',
	hiddenClass: 'turbofan-hidden',
};
</script>
```

Setting | Description | Default value | Required?
---|---|---|---
apiHost | URL of the API, override to test locally | `https://api.turbofan.email` | No
confirmationPathname | Path to your signup confirmation page (link in the confirmation email) | `/signup-confirmed/` | No
hiddenClass | Name of CSS class | `turbofan-hidden` | No

### Option A: As a module (ESM)

Include the script on the page with the sign up form, after the settings and before `</body>`:
```
<script src="signup.js?v=0.1.1" type="module"></script>
```

Include the script on the confirmation page, after the settings and before `</body>`:
```
<script src="confirm.js?v=0.1.1" type="module"></script>
```

### Option B: Use the bundle

Include the script on both the page with the sign up form and the confirmation page, after the settings and before `</body>`:
```
<script src="turbofan.bundle.js?v=0.1.1"></script>
```

## Development

- `npm install`
- `npm run dev`
