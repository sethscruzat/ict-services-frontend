export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData()
    const userame = data.get('username')
    const password = data.get('password')
    // console.log(userame, password)

    if (!username || !password) {
      return json(
        {message: 'Missing Username or password'},
        {status: 400}
      )
    }
    cookies.set('username', username, {path: '/'})
    return json({message: 'Logged in'})
	}
};

