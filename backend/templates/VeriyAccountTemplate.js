function VeriyAccountTemplate(name) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Account Verified</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:30px; text-align:center; background-color:#16a34a; color:#ffffff;">
              <h1 style="margin:0; font-size:24px;">Account Verified ✅</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; color:#333333; font-size:16px; line-height:1.5;">
              <p style="margin-top:0;">Hi there,</p>

              <p>
                🎉 <strong>Mubarak ho! ${name}</strong>  
                Aapka account successfully verify ho chuka hai.
              </p>

              <div style="margin:25px 0; padding:20px; background-color:#ecfdf5; border-radius:6px; text-align:center;">
                <p style="margin:0; font-size:18px; font-weight:bold; color:#166534;">
                  Your account is now fully active
                </p>
              </div>

              <p>
                Ab aap bina kisi rukawat ke apni services ka use kar sakte hain.
              </p>

              <!-- Button -->
              <div style="text-align:center; margin-top:30px;">
                <a href="#" 
                   style="background-color:#16a34a; color:#ffffff; text-decoration:none; 
                          padding:12px 24px; border-radius:6px; font-weight:bold; 
                          display:inline-block;">
                  Go to Dashboard
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px; text-align:center; font-size:12px; color:#777777; background-color:#fafafa;">
              <p style="margin:0;">
                Agar aapne yeh verification nahi ki hai, toh please support se contact karein.
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
`}
module.exports = VeriyAccountTemplate