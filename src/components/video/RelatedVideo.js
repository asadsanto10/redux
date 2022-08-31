import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../Loading/Loading';
import RelatedVideoItem from './RelatedVideoItem';

const RelatedVideo = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector((state) => state.relatedVideos);
  // console.log(relatedVideos);

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [currentVideoId, dispatch, tags]);

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && relatedVideos?.length === 0) {
    content = <div className="col-span-12">No videos found!</div>;
  }

  if (!isError && !isLoading && relatedVideos?.length > 0) {
    content = relatedVideos?.map((video) => <RelatedVideoItem key={video.id} {...video} />);
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* single related video */}
      {content}
    </div>
  );
};

export default RelatedVideo;
