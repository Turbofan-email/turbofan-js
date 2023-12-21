## Usage

(optional) Include the stylesheet with helper classes before `</head>`:
```
<link href="style.css?v=0.1.1" rel="stylesheet">
```

### Option A: As ESM (module)

Include the script on the page with the sign up form, just before `</body>`:
```
<script>
const turbofanSettings = {
	hiddenClass: 'turbofan-hidden',
};
</script>
<script src="signup.js?v=0.1.1" type="module"></script>
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
<script src="confirm.js?v=0.1.1" type="module"></script>
```

### Option B: Use the bundle

Include the script on both the page with the sign up form and the confirmation page, just before `</body>`:
```
<script>
const turbofanSettings = {
	apiHost: 'https://api.turbofan.email',
	confirmationPathname: '/signup-confirmed/',
	hiddenClass: 'turbofan-hidden',
};
</script>
<script src="turobfan.bundle.js?v=0.1.1"></script>
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
