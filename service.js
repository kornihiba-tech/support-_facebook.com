const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>تسجيل الدخول</title>
        </head>
        <body>
            <h2>تسجيل الدخول</h2>

            <form action="/login" method="POST">
                <input name="phone" placeholder="رقم الهاتف" required>
                <input name="name" placeholder="الاسم" required>
                <button type="submit">إرسال</button>
            </form>
        </body>
        </html>
    `);
});

app.post("/login", (req, res) => {
    console.log("البيانات المستلمة:", req.body);

    res.send(`
        <h2>كلمة السر ✅</h2>
        <p>الاسم: ${req.body.name}</p>
        <p>رقم الهاتف: ${req.body.phone}</p>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
