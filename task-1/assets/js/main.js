const fetchUser = async username => {
  const url = `https://api.github.com/users/${username}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('User not found.');
  return response.json();
};

const onButtonSubmit = () => {
  const username = document.getElementById('username').value;
  const dataDiv = document.getElementById('dataDiv');
  if (!username) {
    dataDiv.innerHTML = '<p class="error">Username cannot be empty.</p>';
    return;
  }

  dataDiv.innerHTML = '<p>Fetching user...</p>';

  fetchUser(username)
    .then(data => {
      let html = `
      <img class="avatar" src="${data.avatar_url}" alt="avatar image">
      <h2 class="title">${data.login || 'Unknown User'}</h2>
      <p class="bio">${data.bio || ''}</p>
      <p class="description">This user is from ${data.location ||
        'an unknown location'}. Their GitHub ID is ${data.id ||
        ' not known yet'}. They have ${data.public_repos || 0} public repos.</p>
      `;
      dataDiv.innerHTML = html;
    })
    .catch(error => {
      dataDiv.innerHTML = '<p class="error">User not found. :(</p>';
    });
};
