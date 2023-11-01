const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Mã hóa mật khẩu ở đây

    const user = { username: username, password: password };
    fs.writeFile(`./users/${username}.txt`, JSON.stringify(user), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server error');
        } else {
            res.send('Đăng ký thành công!');
        }
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));
