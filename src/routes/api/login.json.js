import { start_mongo } from '$db/mongo';

export async function post(request) {
  const { userID, password } = request.body;

  try {
    const client = await start_mongo();
    const db = client.db();
    const users = db.collection('users');

    // Query the database to authenticate user
    const user = await users.findOne({ userID, password });
    
    if (user) {
      return {
        status: 200,
        body: { message: 'Login successful' }
      };
    } else {
      return {
        status: 401,
        body: { message: 'Invalid username or password' }
      };
    }
  } catch (error) {
    console.error('Login error:', error);
    return {
      status: 500,
      body: { message: 'Internal server error' }
    };
  }
}