const express = require("express");
const router = express.Router();

// controller methods to interact with api
const { getTransactions, addTransaction, deleteTransaction } = require("../controllers/transactionsController");

// routes
router.route("/").get(getTransactions).post(addTransaction);
router.route("/:id").delete(deleteTransaction);

module.exports = router;

// router.get("/", (req, res) => {
//   res.send("hello");
// });
