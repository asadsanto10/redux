import gravatarUrl from 'gravatar-url';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetConversationsQuery } from '../../features/conversations/conversationsApi';
import getPartnerInfo from '../../utils/getPartnerInfo';
import Error from '../ui/Error';
import ChatItem from './ChatItem';

export default function ChatItems() {
  const { user } = useSelector((state) => state.auth) || {};

  const { data, isLoading, isError, error } = useGetConversationsQuery(user.email);
  // console.log(data);
  // render content
  let content = null;

  if (isLoading) content = <li className="mt-2 text-center">Loading...</li>;

  if (!isLoading && isError) content = <Error message={error} />;
  if (!isLoading && !isError && data?.length === 0)
    content = <li className="mt-2 text-center">No Conversation Found</li>;

  if (!isLoading && !isError && data?.length > 0)
    content = data?.map(({ message, id, timestamp, users }) => {
      const { name, email } = getPartnerInfo(users, user.email);

      return (
        <li key={id}>
          <Link to={`/inbox/${id}`}>
            <ChatItem
              avatar={
                gravatarUrl(email, {
                  size: 80,
                }) || 'https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg'
              }
              name={name}
              lastMessage={message}
              lastTime={moment(timestamp).fromNow()}
            />
          </Link>
        </li>
      );
    });
  return <ul>{content}</ul>;
}
