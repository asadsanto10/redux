import { useState } from 'react';
import { apiSlice } from '../../features/api/apiSlice';
import Error from '../ui/Error';
import Success from '../ui/Success';
import TextArea from '../ui/TextArea';
import TextInput from '../ui/TextInput';

export default function Form({
  title: videoTitle,
  author: videoAuthor,
  description: videoDescription,
  link: videoLink,
  thumbnail: videoThumbnail,
  date: videoData,
  duration: videoDuration,
  views: videoViews,
  id,
}) {
  const [title, setTitle] = useState(videoTitle);
  const [author, setAuthor] = useState(videoAuthor);
  const [description, setDescription] = useState(videoDescription);
  const [link, setLink] = useState(videoLink);
  const [thumbnail, setThumbnail] = useState(videoThumbnail);
  const [date, setDate] = useState(videoData);
  const [duration, setDuration] = useState(videoDuration);
  const [views, setViews] = useState(videoViews);

  const [editVideo, { isError, isLoading, isSuccess }] = apiSlice.useEditVideoMutation();

  const handelSubmit = (e) => {
    e.preventDefault();
    editVideo({
      videoId: id,
      data: {
        title,
        author,
        description,
        link,
        thumbnail,
        date,
        duration,
        views,
      },
    });
  };

  return (
    <form method="POST" onSubmit={handelSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                value={views}
                onChange={(e) => setViews(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Edit
          </button>
        </div>

        {isSuccess && <Success message="Video was Update successfully" />}
        {isError && <Error message="There was an error updateing the video" />}
      </div>
    </form>
  );
}
