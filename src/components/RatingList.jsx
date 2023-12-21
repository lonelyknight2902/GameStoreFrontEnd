import axios from "axios";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import RatingCard from "./RatingCard";
import Button from "./Button";
import RatingStar from "./RatingStar";
import { useAuth } from "../hooks";

const RatingList = ({ id }) => {
  const {user} = useAuth();
  const [edit, setEdit] = useState(false);
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState("");
  const fetcher = (url) => axios.get(url).then((res) => res.data.data);
  const endpoint = `http://localhost:3000/api/v1/games/rate/${id}`;
  const { data, error, isLoading, mutate } = useSWR(endpoint, fetcher);
  if (error) return <div>Failed to load comments</div>;
  if (isLoading) return <div>Loading...</div>;
  // const gameRatesStatus = useSWR(getGameRatesEndpoint, rateFetcher);
  // if(gameRatesStatus.error) console.log(gameRatesStatus.error);
  // if(!gameRatesStatus.data) return (<div>Loading...</div>)
  // setComment(data.userComment.Comment)

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    console.log(e.target.value);
  };

  const handleCreateComment = async (e) => {
    await axios.post("http://localhost:3000/api/v1/user/rate", {
      gameId: id,
      comment: comment,
      rating: rating,
    });
    mutate({...data, userComment: {USERID: user.USERID, USERNAME: user.USERNAME, IMAGEURL: user.IMAGEURL, Comment: comment, RATING: rating}});
  }

  const handleUpdate = async (e) => {
    await axios.patch("http://localhost:3000/api/v1/user/rate", {
      gameId: id,
      comment: comment,
      rating: rating,
    });
    mutate({...data, userComment: {...data.userComment, Comment: comment, RATING: rating}});
    setEdit(false);
  };

  return (
    <div className="flex flex-col gap-5">
      {!data.userComment ? (
        <div className="flex flex-col gap-5">
          <span>Share your review:</span>
          <div className="flex flex-col gap-5">
            <div className="w-full border bg-neutral-800 rounded-md border-neutral-500 focus-within:border-neutral-400">
              <textarea
                type="text"
                placeholder="Your review..."
                onChange={handleCommentChange}
                className="w-full h-32 px-4 py-2 outline-none bg-transparent placeholder:text-neutral-500"
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <div className="flex gap-5 items-center">
                <span>Star rating:</span>
                <RatingStar rating={rating} setRating={setRating} />
              </div>
              <Button
                text="Share"
                isSecondary={false}
                className="w-1/6"
                onClick={handleCreateComment}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <span className="text-xl">Your review</span>
          {!edit ? (
            <RatingCard
              username={data.userComment.USERNAME}
              image={data.userComment.IMAGEURL}
              comment={data.userComment.Comment}
              rating={data.userComment.RATING}
              setEdit={setEdit}
            />
          ) : (
            <div className="flex flex-col gap-5">
              <div className="w-full border bg-neutral-800 rounded-md border-neutral-500 focus-within:border-neutral-400">
                <textarea
                  type="text"
                  placeholder="Your review..."
                  defaultValue={data.userComment.Comment}
                  onChange={handleCommentChange}
                  className="w-full h-32 px-4 py-2 outline-none bg-transparent placeholder:text-neutral-500"
                />
              </div>
              <div className="flex items-center gap-2 justify-between">
                <div className="flex gap-5 items-center">
                  <span>Star rating:</span>
                  <RatingStar rating={rating} setRating={setRating} />
                </div>
                <div className="w-2/6 flex items-center gap-5">
                  <span onClick={(e) => setEdit(false)} className="cursor-pointer hover:underline w-1/2">Cancel</span>
                <Button
                  text="Update"
                  isSecondary={false}
                  onClick={handleUpdate}
                />
                </div>
                
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col gap-5">
        <span className="text-xl">Other reviews:</span>
        <div className="flex flex-col gap-5">
          {data.comments.map((rating) => {
            return (
              <RatingCard
                key={rating.USERNAME}
                username={rating.USERNAME}
                image={rating.IMAGEURL}
                comment={rating.Comment}
                rating={rating.RATING}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RatingList;
