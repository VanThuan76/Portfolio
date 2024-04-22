export interface IChatBot {
    messages: Message[];
    conversation_id: string;
    code: number;
    msg: string;
}

interface Message {
    role: string;
    type: string;
    content: string;
    content_type: string;
}
export interface IChatBotSend {
    query: string;
}