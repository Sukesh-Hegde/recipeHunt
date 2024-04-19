// Import the necessary modules here
import nodemailer from "nodemailer";

export const sendSubmitMail = async (recipe) => {
    console.log(recipe)
  const transporter = nodemailer.createTransport({
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.STORFLEET_SMPT_MAIL,
      pass: process.env.STORFLEET_SMPT_MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.STORFLEET_SMPT_MAIL,
    to: recipe.email,
    subject: "Thank You for Submitting Your Recipe!",
    html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                /* Add your custom CSS styles here */
                body {
                    font-family: Arial, sans-serif;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    text-align: center;
                }
                .logo {
                    max-width: 150px;
                }
                .content {
                    margin-top: 20px;
                }
                /* Mobile Responsive Styles */
                @media only screen and (max-width: 600px) {
                    .container {
                        padding: 10px;
                    }
                    .logo {
                        max-width: 100px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img class="logo" src="https://logowik.com/content/uploads/images/food-service4537.jpg" alt="Storefleet Logo">
                    <h1>Welcome to Storefleet, ${recipe.name}!</h1>
                </div>
                <div class="content">
                    <p>Thank you for joining Storefleet. We are excited to have you on board.</p>
                    <p>Feel free to explore our website and discover amazing products.</p>
                    <p>If you have any questions or need assistance, please don't hesitate to contact us.</p>
                    <p>Happy shopping!</p>
                </div>
            </div>
        </body>
        </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};
