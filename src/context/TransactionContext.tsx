import { transaction as payment } from "@/models/defaultValue/transaction";
import { Transaction, TransactionIntf } from "@/models/dto/transaction";
import { createContext, useState } from "react";

const defaultValue = {
    transaction: payment,
    setTransaction: () => {}
}

export const TransactionContext = createContext<TransactionIntf>(defaultValue)

const TransactionCtx = ({ children }: { children: React.ReactNode }) => {
    const [transaction, setTransaction] = useState<Transaction>(payment)

    return (
        <TransactionContext.Provider value={{ transaction, setTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}

export default TransactionCtx;
