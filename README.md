# yield-nsp
Yield Node.JS Server Pages - Server-Side Template Engine which will be used in
Yield CMS

## Overview
Yield NSP based on Embedded JS (EJS) template engine and supports inheritance
and template packaging

## Syntax
Yield NSP has several types of delimeters:
* `<?nsp ... ?>` - template directives;
* `<? ... ?>` - executable JavaScript code;
* `<?= ... ?>` - escaped output;
* `<?- ... ?>` - non-escaped output;
* `<?== ... ?>` - force-unescape output.

Engine not allow redefine delimeters.

```
<?nsp template MainHeader inherits frontend.base.Header?>

	<?nsp section main(data)?>
		<h1>Users</h1>
		<?for (let user of data.users):?>
			<div class="user">
				<div class="user__first-name">
					<?=user.firstName?>
				</div>
				<div class="user__first-name">
					<?=user.lastName?>
				</div>
			</div>
		<?endfor?>
	<?nsp endsection?>

<?nsp endtemplate?>
```
