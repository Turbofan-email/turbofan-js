## Usage

Include the script just before `</body>`:
```
<script>
const formSettings = {
	apiHost: 'https://api.turbofan.email',
};
</script>
<script src="turbofan.js?v=0.1.0"></script>
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
