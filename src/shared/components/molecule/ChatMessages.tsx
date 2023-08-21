import { Loader2 } from 'lucide-react';

import MessageComponent from '@/shared/components/atom/Message';

import useAppData from '@/app/hooks/useAppData';
import useChatMessages from '@/app/hooks/useMessageData';

interface ChatMessagesProps {
    id?: string;
}

function ChatMessages({ id }: ChatMessagesProps) {
    const { user } = useAppData();

    const { data, loading } = useChatMessages(id ?? 'loading'); //TODO add error handling

    if (loading) {
        return (
            <div className="w-full flex items-center justify-center">
                <Loader2 size={64} className="text-gray-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2 p-2 w-full">
            {data?.map((message) => (
                <MessageComponent
                    key={message.id}
                    id={message.id}
                    chatId={id ?? 'loading'}
                    content={message.content}
                    createdAt={message.createdAt}
                    fromSelf={message.senderId === user?.data?.id}
                    read={message.read}
                />
            ))}
        </div>
    );
}
export default ChatMessages;
