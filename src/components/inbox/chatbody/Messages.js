import { useSelector } from 'react-redux';
import Message from './Message';

export default function Messages({ messages = [] }) {
  console.log(messages);

  const {
    user: { email },
  } = useSelector((state) => state.auth) || {};

  return (
    <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
      <ul className="space-y-2">
        {messages
          .slice()
          .sort((a, b) => a.timestamp - b.timestamp)
          .map(({ id, message, sender }) => {
            return (
              <Message
                key={id}
                justify={sender.email !== email ? 'start' : 'end'}
                message={message}
              />
            );
          })}
      </ul>
    </div>
  );
}
