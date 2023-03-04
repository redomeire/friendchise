type Message = {
    chat_id: string | number,
    created_at: string,
    id: string | number,
    sent_by_user: boolean,
    text_message: string
}[]

export type { Message }
