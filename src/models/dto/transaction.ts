interface Transaction {
    tipe_usaha: 'milik sendiri' | 'sewa' | string,
    planning_operation: 'dikelola sendiri' | 'dikelola orang lain' | string,
    pengalaman_usaha: number | string,
    lokasi_usaha: string,
    service_price: string,
    total_price: string,
    status: 'berlangsung' | 'berhasil' | 'gagal' | string,
    company_id?: string | number
}

interface TransactionIntf {
    transaction: Transaction,
    setTransaction: React.Dispatch<React.SetStateAction<Transaction>>
}

export type { Transaction, TransactionIntf }
