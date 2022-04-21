import mongoose from 'mongoose'
import Bank from "./../models/Bank.js"

export const getBanks = async(req,res) => {
    let bankCards = []
    bankCards = await Bank.find({})
    res.status(200).json(bankCards)
}

export const getBankById = async(req, res) => {
    const bank = await Bank.find({ _id: req.query.id}).exec()
    res.status(200).json(bank)
}

export const saveBank = async (req, res) => {
    let bank = new Bank({    
            name: req.query.name,
            interestRate: req.query.interestRate,
            maxLoan: req.query.maxLoan,
            minDownPayment: req.query.minDownPayment,
            loanTerm: req.query.loanTerm 
        })
    await bank.save()
    res.status(201).json(bank)
}

export const deleteBank = async (req, res) => {
    await Bank.deleteOne({ _id: req.query.id })
    res.json( {message: 'deleted'} )
} 

export const updateBank = async (req, res) => {
    const filter = { _id: req.query.id}
    let bank = await Bank.findOneAndUpdate( filter, 
        {
        name: req.query.name,
        interestRate: req.query.interestRate,
        maxLoan: req.query.maxLoan,
        minDownPayment: req.query.minDownPayment,
        loanTerm: req.query.loanTerm
    })
    res.status(201).json(bank)
}




