function SignUpEmailTemplate(name, otp) {
    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome Email</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:30px; text-align:center; background-color:#4f46e5; color:#ffffff;">
              <h1 style="margin:0; font-size:24px;">Welcome! 🎉</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; color:#333333; font-size:16px; line-height:1.5;">
              <p style="margin-top:0;">Hi ${name},</p>

              <p>
                <strong>Congratulations and welcome!</strong> 🎉  
                Your account has been successfully created, and you’re almost ready to get started.
              </p>

              <!-- Signup Code Box -->
              <div style="margin:25px 0; padding:20px; background-color:#f1f5f9; border-radius:6px; text-align:center;">
                <p style="margin:0; font-size:14px; color:#555;">Your Signup Code</p>
                <p style="margin:10px 0 0; font-size:22px; font-weight:bold; letter-spacing:2px; color:#111;">
                  WELCOME-${otp}
                </p>
              </div>

              <p>
                Use this code to complete your setup and unlock full access.
              </p>

              <!-- Button -->
              <div style="text-align:center; margin-top:30px;">
                <a href="#" 
                   style="background-color:#4f46e5; color:#ffffff; text-decoration:none; 
                          padding:12px 24px; border-radius:6px; font-weight:bold; 
                          display:inline-block;">
                  Complete Your Setup
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px; text-align:center; font-size:12px; color:#777777; background-color:#fafafa;">
              <p style="margin:0;">
                If you didn’t sign up for this account, you can safely ignore this email.
              </p>
              <p style="margin:8px 0 0;">
                © 2026 Your Company Name
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>

    `
}

module.exports=SignUpEmailTemplate;