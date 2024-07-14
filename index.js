let express = require("express");
let app = express();
app.get("/name", (req, res) => {
  let name = req.query.name.toUpperCase();
  res.send(`Hello ${name}`);
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/shout", (req, res) => {
  let name = req.query.name.toUpperCase();
  res.send(`HELLO ${name}`);
});

app.get("/fullname", (req, res) => {
  let fname = req.query.firstname;
  let sname = req.query.surname;
  res.send(`${fname} ${sname}`);
});
app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  res.send(`${month}, ${year}`);
});

app.get("/greet", (req, res) => {
  let name = req.query.name;

  res.send(`Namaste, ${name}!!`);
});

app.get("/certificate", (req, res) => {
  let fname = req.query.fname;
  let sname = req.query.sname;
  let course = req.query.course;
  res.send(
    `This certification is awarded to ,${fname} ${sname} for completing the course ,${course}`,
  );
  res.send(`Namaste, ${name}!!`);
});

app.get("/secureurl", (req, res) => {
  let url = req.query.url;
  res.send(`https://${url}`);
});
app.get("/sendotp", (req, res) => {
  let otp = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  res.send(`Your OTP is ${otp} Do not share this with anyone`);
});
app.get("/text-to-csv", (req, res) => {
  let id = req.query.id;
  let email = req.query.email;
  let rollno = req.query.rollno;

  res.send(`${id} , ${email} , ${rollno}`);
});
app.get("/total-distance", (req, res) => {
  let distance1 = req.query.distance1;
  let distance2 = req.query.distance2;
  let total = parseFloat(distance1) + parseFloat(distance2);

  res.send(`${total.toString()}`);
});
app.get("/total-time", (req, res) => {
  let t1 = req.query.t1;
  let t2 = req.query.t2;
  let t3 = req.query.t3;
  let total = parseFloat(t1) + parseFloat(t2) + parseFloat(t3);

  res.send(`${total}`);
});
app.get("/check-performance", (req, res) => {
  let grade = parseFloat(req.query.grade);
  if (grade >= 90) {
    res.send("Excellent");
  } else if (grade >= 75) {
    res.send("Good");
  } else if (grade >= 50) {
    res.send("average");
  } else {
    res.send("poor");
  }
});

app.get("/finalprice", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  let finalprice = price - price * (discount / 100) + price * (tax / 100);

  res.send(`${finalprice}`);
});
