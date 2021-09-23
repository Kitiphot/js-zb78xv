// Import stylesheets
import './style.css';

// 0. Import LIFF SDK
import liff from '@line/liff';

// Body element
const body = document.getElementById('body');

// Profile elements
const pictureUrl = document.getElementById('pictureUrl');
const displayName = document.getElementById('displayName');
// Button elements
const btnLogin = document.getElementById('btnLogin');

async function main() {
  liff.ready.then(() => {
    if (liff.getOS() === 'android') {
      body.style.backgroundColor = '#888888';
    }
    if (liff.isInClient()) {
      const profile = getUserProfile();
    }
    btnLogin.style.display = 'block';
  });
  await liff.init({ liffId: '1656321842-vGWLjE9W' });
}
main();

// 6. Create getUserProfile()
// *7. Get email
async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  displayName.innerHTML = '<b>Hello: </b>' + profile.displayName;
  return profile;
}

// *8. Create shareMsg()
async function sendLogin() {
  if (
    document.getElementById('UserName') == document.getElementById('UserName')
  ) {
    window.location.assign('https://liff.line.me/1656305752-eb6DbmjY');
    // if (!liff.isLoggedIn()) {
    //   liff.login({ redirectUri: 'https://liff.line.me/1656305752-eb6DbmjY' });
    // }
  } else {
    alert('UserName Incorrect');
  }
}

btnLogin.onclick = () => {
  sendLogin();
};
