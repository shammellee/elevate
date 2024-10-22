const ELEVATE_API_BASE_URL = 'https://interviews-accounts.elevateapp.com/api/ui';
const ELEVATE_API_CREDENTIALS = new URLSearchParams({
  authentication_user_id: <user_id>,
  authentication_token: '<token>'
});

export async function getUserIds() {
  try {
    const response = await fetch(`${ELEVATE_API_BASE_URL}/users?` + ELEVATE_API_CREDENTIALS);

    if(!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    const users = json.user_ids.map(async id => {
      const user = await getUser(id);
      return user;
    });

    return Promise.all(users);
  } catch (error) {
    console.error(error.message);
  }
}

export async function getUser(id) {
  try {
    const response = await fetch(`${ELEVATE_API_BASE_URL}/users/${id}?` + ELEVATE_API_CREDENTIALS);

    if(!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error.message);
  }
}

