import { apiSlice } from '../../../features/api/apiSlice';
import Error from '../../ui/Error';
import RelatedVideoLoader from '../../ui/loaders/RelatedVideoLoader';
import RelatedVideo from './RelatedVideo';

export default function RelatedVideos({ id, title }) {
  const { data, isError, isLoading } = apiSlice.useGetRelatredVideosQuery({ id, title });
  // console.log(data);
  let content = null;
  if (isLoading)
    content = (
      <>
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
      </>
    );

  if (!isLoading && isError) {
    content = <Error />;
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <h2>No Related Video Found</h2>;
  }
  if (!isLoading && !isError && data?.length > 0) {
    content = data.map((video) => <RelatedVideo {...video} key={video.id} />);
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
      {/* <RelatedVideo /> */}
    </div>
  );
}
