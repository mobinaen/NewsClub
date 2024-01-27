const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'database_name'
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error('خطا در اتصال به پایگاه داده: ' + err.stack);
      return;
    }
  
    console.log('اتصال موفق به پایگاه داده با شناسه ' + connection.threadId);
  });
  
  function loadNews() {
    connection.query('SELECT * FROM news', function(error, results, fields) {
      if (error) {
        console.error() }

  
  ```javascript
  document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const content = document.getElementById('content').value;
  
    const data = {
      title: title,
      category: category,
      content: content
    };
  
    fetch('/save-news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      // دریافت پاسخ از سمت سرور و انجام عملیات مورد نیاز
    })
    .catch(error => {
      console.error('خطا در ارسال درخواست: ' + error);
    });
  });``` } ) }