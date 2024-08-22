import nodemailer from 'nodemailer';
 
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
 
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'azx1818@hotmail.com',
        pass: 'realmadrid8989',
      },
    });
 
    // Set up email data
    let mailOptions = {
      from: 'azx1818@hotmail.com',
      to: email,
      subject: 'Automate Business Process',
      text: 'Thank you for expression of interest. We will contact you.',
    };
 
    try {
      // Send mail with defined transport object
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Confirmation success!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Email not sent. Please try again.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
