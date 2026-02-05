function PasswordChangeSuccess(name) {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Password Changed Successfully</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #28a745;
      text-align: center;
    }
    p {
      color: #333333;
      font-size: 16px;
      line-height: 1.5;
    }
    .footer {
      font-size: 12px;
      color: #888888;
      text-align: center;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Password Changed Successfully ✔️</h2>
    <p>Hello <strong>${name}to let you know that your account password has been changed successfully.</p>
    <p>If you did not make this change, please contact our support team immediately.</p>

    <p>Thanks,<br>
    <strong>[Your Company/Team Name]</strong></p>

    <div class="footer">
      &copy; [Year] [Your Company/Team Name]. All rights reserved.
    </div>
  </div>
</body>
</html>
`
}

module.exports = PasswordChangeSuccess