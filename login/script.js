document.getElementById('register-btn').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    // Ngăn chặn hành vi mặc định của form
    event.preventDefault();

    // Lấy dữ liệu từ form
    var username = document.querySelector('#register-form input[name="username"]').value;
    var password = document.querySelector('#register-form input[name="password"]').value;

    // Tạo một đối tượng FormData để chứa dữ liệu
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    // Gửi yêu cầu POST đến /register
    fetch('/register', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Lỗi khi đăng ký');
        }
    })
    .then(function(text) {
        console.log(text);
    })
    .catch(function(error) {
        console.error(error);
    });
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    // Ngăn chặn hành vi mặc định của form
    event.preventDefault();

    // Lấy dữ liệu từ form
    var username = document.querySelector('#register-form input[name="username"]').value;
    var password = document.querySelector('#register-form input[name="password"]').value;

    // Tạo một đối tượng FormData để chứa dữ liệu
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    // Gửi yêu cầu POST đến /register
    fetch('/register', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Lỗi khi đăng ký');
        }
    })
    .then(function(text) {
        // Hiển thị thông báo khi đăng ký thành công
        var notification = document.getElementById('notification');
        notification.textContent = 'Đăng ký thành công!';
        notification.style.display = 'block';

        // Ẩn thông báo sau 3 giây
        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000);
    })
    .catch(function(error) {
        console.error(error);
    });
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    // Ngăn chặn hành vi mặc định của form
    event.preventDefault();

    // Lấy dữ liệu từ form
    var username = document.querySelector('#register-form input[name="username"]').value;
    var password = document.querySelector('#register-form input[name="password"]').value;

    // Tạo một đối tượng FormData để chứa dữ liệu
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    // Gửi yêu cầu POST đến /register
    fetch('/register', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Lỗi khi đăng ký');
        }
    })
    .then(function(text) {
        // Hiển thị thông tin đăng nhập khi đăng ký thành công
        var loginInfo = document.getElementById('login-info');
        loginInfo.textContent = 'Tên đăng nhập: ' + username + ', Mật khẩu: ' + password;
        loginInfo.style.display = 'block';

        // Ẩn thông tin sau 3 giây
        setTimeout(function() {
            loginInfo.style.display = 'none';
        }, 3000);
    })
    .catch(function(error) {
        console.error(error);
    });
});
// Thêm vào tệp JavaScript của bạn
document.getElementById('chat-bubble').addEventListener('click', function() {
    var supportPanel = document.getElementById('support-panel');
    if (supportPanel.style.display === 'none') {
        supportPanel.style.display = 'block';
    } else {
        supportPanel.style.display = 'none';
    }
});
// Thêm vào tệp JavaScript của bạn
document.getElementById('chat-form').addEventListener('submit', function(event) {
    // Ngăn chặn hành vi mặc định của form
    event.preventDefault();

    // Lấy văn bản từ trường nhập liệu
    var chatInput = document.getElementById('chat-input');
    var text = chatInput.value;

    // Thêm văn bản vào khung tin nhắn
    var chatMessages = document.getElementById('chat-messages');
    var messageElement = document.createElement('p');
    messageElement.className = 'user-message'; // Thêm class vào phần tử
    messageElement.textContent = text;
    chatMessages.appendChild(messageElement);

    // Xóa văn bản từ trường nhập liệu
    chatInput.value = '';

    // Thêm tin nhắn phản hồi
    var responseElement = document.createElement('p');
    responseElement.id = 'response';
    chatMessages.appendChild(responseElement);

    // Tạo hiệu ứng viết từng chữ một
    var responseText = 'Bạn hãy đợi 1 chút...';
    var i = 0;
    var intervalId = setInterval(function() {
        if (i < responseText.length) {
            responseElement.textContent += responseText.charAt(i);
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, 100); // Thời gian giữa mỗi chữ, đơn vị là millisecond
});
// Tạo một số phần tử tuyết
var snowflakes = [];
for (var i = 0; i < 100; i++) {
    var snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.top = Math.random() * window.innerHeight + 'px';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(snowflake);
    snowflakes.push(snowflake);
}

// Di chuyển các phần tử tuyết xuống màn hình
setInterval(function() {
    for (var i = 0; i < snowflakes.length; i++) {
        var snowflake = snowflakes[i];
        var currentTop = parseInt(snowflake.style.top);
        if (currentTop > window.innerHeight) {
            currentTop = -10;
        }
        snowflake.style.top = currentTop + 1 + 'px';
    }
}, 50);

// Hàm để tạo màu RGB ngẫu nhiên
function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// Hàm để thay đổi màu của tiêu đề
function changeTitleColor() {
    var title = document.querySelector('.title');
    title.style.color = getRandomColor();
}

// Thay đổi màu của tiêu đề mỗi giây
setInterval(changeTitleColor, 1000);


//https://th.bing.com/th/id/OIG.3ojri98LmCIojo70RvE9?pid=ImgGn