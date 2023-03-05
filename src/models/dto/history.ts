import { Transaction } from "@/models/dto/transaction";
import { Franchise } from "@/models/dto/franchise";

interface History extends Transaction, Franchise {
    company_name: string
    outlet_name: string,
    created_at: string
}

export type { History }
