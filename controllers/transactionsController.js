// Controller: db queries

// Model: bring in to use mongoose methods find, create, remove etc
const Transaction = require("../models/Transaction");

// @desc get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    // success send response
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    // server error
    res.send(500).json({
      success: false,
      error: "Server error"
    });
  }
};

// @desc add transaction
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction = async (req, res, next) => {
  try {
    // get body data from client
    const { text, amount } = req.body;
    // create new transaction in db
    const transaction = await Transaction.create(req.body);
    // success send response
    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (error) {
    // validation error. Default error messages, map errors using conditions
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(item => item.message);
      res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      // server error
      return res.status(500).json({
        success: false,
        error: "Server Error"
      });
    }
  }
};

// @desc delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found"
      });
    }
    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: transaction
    });
  } catch (error) {
    // server error
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

// exports.getTransactions = (req, res, next) => {
//   res.send("GET transactions");
// };
