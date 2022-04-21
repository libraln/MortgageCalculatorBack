import db from "mongoose"
const schema = db.Schema({
    name: String,
    interestRate: Number,
    maxLoan: Number,
    minDownPayment: Number,
    loanTerm: Number
});

const Bank = db.model('Bank', schema);
export default Bank
