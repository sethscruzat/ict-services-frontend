<script>
  export let form
</script>

<form method="POST">
  <p>{form?.message || ""}</p>
	<label>
		Email
		<input name="email" type="email">
	</label>
	<label>
		Password
		<input name="password" type="password">
	</label>
	<button>Log in</button>
</form>