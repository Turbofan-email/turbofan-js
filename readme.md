## Usage

Include the stylesheet before `</head`:
```
<link href="style.css?v=0.1.1" rel="stylesheet" media="all">
```

Include the script on the page with the sign up form, just before `</body>`:
```
<script src="signup.js?v=0.1.1"></script>
```

Include the script on the confirmation page, just before `</body>`:
```
<script>
const turbofanSettings = {
	apiHost: 'https://api.turbofan.email',
	confirmationPathname: '/signup-confirmed/',
	hiddenClass: 'turbofan-hidden',
};
</script>
<script src="confirm.js?v=0.1.1"></script>
```

### Required elements
- `<form>` element (default ID: `#signUpForm`)

### Optional elements
- Successful signup (default ID: `#form-success`)
- Error during signup (default ID: `#form-error`)
- Error during confirmation (default ID: `#confirmation-error`)

## Development

- `npm install`
- `npm run dev`
