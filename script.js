const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const BASE_URL="http://server-api.ir"


let apiData = {
    "name":"mmd",
    "lastname":"m",
    "phone":"09921321311",
    "topics":"tech,sport,politics"
}

fetch(BASE_URL+'/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apiData)
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.error('خطا در ارسال درخواست: ' + error);
    });