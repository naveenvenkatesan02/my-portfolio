const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const { engine } = require("express-handlebars");
const router = express.Router();
app.engine("hbs", engine({ extname: ".hbs", defaultLayout: false }));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname + "/public")));
app.set("views", path.join(__dirname, "views"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/email", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "naveenben55@gmail.com",
      pass: "hdyhusdhavxpsojp",
    },
  });
  const { name, email, phone, msg } = req.body;
  try {
    res.render(
      "mail",
      {
        mailName: name,
        mailEmail: email,
        mailPhone: phone,
        mailMsg: msg,
        path: "mail",
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          var mailOptions = {
            from: email,
            to: "naveenben55@gmail.com",
            subject: "From Portfolio",
            html: data,
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
            res.json({
              message: "Mail Sent Successfully",
            });
          });
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(8000, () => {
  console.log("Server is Running");
});
