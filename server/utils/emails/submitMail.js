// Import the necessary modules here
import nodemailer from "nodemailer";

export const sendSubmitMail = async (recipe) => {
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
    subject: "Your Recipe Submitted!",
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
                    <h1>Thank You for Submitting Your Recipe! </h1>
                </div>
                <div class="content">
                    <p>We wanted to take a moment to express our sincere gratitude for sharing your recipe, "${recipe.name}" with us.</p>
                    <p>Your contribution means a lot to our community of food
                     enthusiasts, and we're thrilled to have the opportunity to feature it on our website.</p>
                    <p>If you have any questions or need further assistance, please don't hesitate to reach out to us.</p>
                    
                </div>
            </div>
        </body>
        </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};
