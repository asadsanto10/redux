/* eslint-disable no-nested-ternary */
import { useParams } from 'react-router-dom';
import { apiSlice } from '../../features/api/apiSlice';
import Error from '../ui/Error';
import DescriptionLoader from '../ui/loaders/DescriptionLoader';
import PlayerLoader from '../ui/loaders/PlayerLoader';
import RelatedVideoLoader from '../ui/loaders/RelatedVideoLoader';
import Description from '../video/Description';
import Player from '../video/Player';
import RelatedVideos from '../video/related/RelatedVideos';

export default function Video() {
  const { videoId } = useParams();
  const { data, isError, isLoading } = apiSlice.useGetVideoQuery(videoId, {
    refetchOnMountOrArgChange: true,
  });
  // console.log(data);

  let content = null;

  if (isLoading) {
    content = (
      <>
        <PlayerLoader />
        <DescriptionLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && data?.id) {
    content = (
      <>
        <Player {...data} />
        <Description {...data} />
      </>
    );
  }

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">{content}</div>

          {data?.id ? (
            <RelatedVideos {...data} />
          ) : isLoading ? (
            <>
              <RelatedVideoLoader />
              <RelatedVideoLoader />
              <RelatedVideoLoader />
            </>
          ) : (
            <Error />
          )}
        </div>
      </div>
    </section>
  );
}
