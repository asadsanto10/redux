import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videosSlice';
import Loading from '../Loading/Loading';
import SingleVideo from './SingleVideo';

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector((state) => state.videos);
  const { search, tags } = useSelector((state) => state.filter);
  const { postPerPage, currentPage } = useSelector((state) => state.pagination);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(2);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, search, tags]);
  // console.log(videos);

  // pagination
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = videos.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPosts);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && currentPosts?.length === 0) {
    content = <div className="col-span-12">No videos found!</div>;
  }

  if (!isError && !isLoading && currentPosts?.length > 0) {
    content = currentPosts?.map((video) => <SingleVideo key={video.id} {...video} />);
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}

          {/* <div className="col-span-12">some error happened</div> */}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
