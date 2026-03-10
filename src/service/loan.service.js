import loanRepositoires from "../repositories/loan.repositoires.js";

async function createLoanService(userId, bookId, dueDate){
    const createdLoan = await loanRepositoires.createLoanRepository(
        userId,
        bookId,
        dueDate
    );
    if(!createdLoan) throw new Error("Error creating Loan");
    return createdLoan;
}

async function findAllLoansService() {
    const loans = await loanRepositoires.findAllLoansRepository();
    return loans;
}

async function findLoanByIdServices(loanId) {
    const loan = await loanRepositoires.findLoansByIdRepository(loanId);
    if(!loan) throw new Error("Loan not found");
    return loan;
}

async function deleteLoanServices(loanId, userId) {
    const loan = await loanRepositoires.findLoansByIdRepository(loanId);
    if (!loan) throw new Error("Loan not found");
    if (loan.userId !== userId) throw new Error("Unauhorized")
    const response = await loanRepositoires.deleteLoanRepository(loanId);
    return response;
}

export default {createLoanService, findAllLoansService, findLoanByIdServices, deleteLoanServices}