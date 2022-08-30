import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideo } from '../../features/video.js/videoSlice';
import Loading from '../Loading/Loading';
import Player from './Player';
import RelatedVideo from './RelatedVideo';
import VideoDescription from './VideoDescription';

const VideoItem = () => {
  const { video, isLoading, isError, error } = useSelector((state) => state.singleVideo);
  // console.log(video);
  const dispatch = useDispatch();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  // deside what to render
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && !video?.id) {
    content = <div className="col-span-12">No videos found!</div>;
  }
  if (!isError && !isLoading && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          {/* video player */}
          <Player {...video} />
          {/* video description */}
          <VideoDescription {...video} />
        </div>
        {/* related videos */}
        <RelatedVideo currentVideoId={video.id} tags={video.tags} />
      </div>
    );
  }

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
    </section>
  );
};

export default VideoItem;
