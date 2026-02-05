function SendOtpForPasswordChange(name, otp) {
    return `
    <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Password Reset OTP</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f8f9fa; color: #333;">
  <div style="max-width: 600px; margin: auto; padding: 20px; background-color: #fff; border-radius: 8px;">
    <h2 style="color: #007bff;">Password Reset Request</h2>
    <p>Hello <strong>${name}</strong>,</p>
    <p>We received a request to reset your password.</p>
    <p>Your One-Time Password (OTP) is:</p>
    <h1 style="text-align: center; font-size: 32px; letter-spacing: 4px; color: #333;">
      <strong>${otp}</strong>
    </h1>
    <p>This OTP will expire in <strong>[validity_period] minutes</strong>.</p>
    <p>If you did not request this, please ignore this email.</p>
    <br>
    <p style="font-size: 14px; color: #777;">Thanks,<br>[Your Company/Team Name]</p>
  </div>
</body>
</html>
`

}

module.exports = SendOtpForPasswordChange;