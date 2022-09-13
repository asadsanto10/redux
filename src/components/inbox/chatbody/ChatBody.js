// import Blank from "./Blank";
import { useParams } from 'react-router-dom';
import { useGetMessagesQuery } from '../../../features/messages/messagesApi';
import Error from '../../ui/Error';
import ChatHead from './ChatHead';
import Messages from './Messages';
import Options from './Options';

export default function ChatBody() {
  const { id } = useParams();

  const { data, isError, isLoading, error } = useGetMessagesQuery(id);

  // console.log(data);

  // render content
  let content = null;

  if (isLoading) content = <div>Loading...</div>;

  if (!isLoading && isError) content = <Error message={error} />;
  if (!isLoading && !isError && data?.length === 0) content = <div>No Messages yet</div>;

  if (!isLoading && !isError && data?.length > 0)
    content = (
      <>
        <ChatHead {...(data[0] || {})} />
        <Messages messages={data} />
        <Options />
      </>
    );

  return (
    <div className="w-full lg:col-span-2 lg:block">
      <div className="w-full grid conversation-row-grid">
        {content}
        {/* <Blank /> */}
      </div>
    </div>
  );
}
