/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import likeSVG from '../../assets/like.svg';
import unLikeSVG from '../../assets/unlike.svg';
import {
  dislikesIncrement,
  likesIncrement,
  // eslint-disable-next-line prettier/prettier
  likeUnlikeUpdate
} from '../../features/video.js/videoSlice';

const LikeUnlike = ({ likes, unlikes }) => {
  const dispatch = useDispatch();
  const { video } = useSelector((state) => state.singleVideo);
  // console.log(video.likes);

  // useEffect(() => {
  //   dispatch(getVIdeoLikeUnlike(video));
  // }, [dispatch, video]);

  const handelLike = () => {
    dispatch(likesIncrement(1));
    dispatch(likeUnlikeUpdate({ id: video.id, exitsCount: video.likes, type: 'like' }));
  };
  const disLike = () => {
    dispatch(dislikesIncrement(1));
    dispatch(likeUnlikeUpdate({ id: video.id, exitsCount: video.unlikes, type: 'dislike' }));
  };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img onClick={handelLike} className="w-5 block cursor-pointer" src={likeSVG} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            onClick={disLike}
            className="w-5 block cursor-pointer"
            src={unLikeSVG}
            alt="Unlike"
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{unlikes}</div>
      </div>
    </div>
  );
};

export default LikeUnlike;
