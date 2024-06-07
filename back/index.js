const express = require("express");
const cors = require("cors");
const session = require("express-session");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/products.routes");
const commandeRouter = require("./routes/commande.routes");
const paiementRouter = require("./routes/paiement.routes");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "1000mb" }));
app.use(express.urlencoded({ limit: "1000mb", extended: true }));

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  })
);

app.use(
  session({
    secret: "your_session_secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/api/auth", userRouter);
app.use("/api/products", productRouter);
app.use("/api/commande", commandeRouter);
app.use("/api/paiement", paiementRouter);

app.listen(port, () => {
  console.log(`Server démarré sur le port ${port}`);
});
