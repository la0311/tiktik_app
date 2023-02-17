import React, { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";

import useAuthStore from "@/store/authStore";

interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
  likes: any[];
}

const LikeButton = ({ handleLike, handleDislike, likes }: IProps) => {
  const [alreadyLike, setAlreadyLike] = useState(false);
  const { userProfile }: any = useAuthStore();
  const filterLikes = likes?.filter((item) => item._ref === userProfile?._id);

  useEffect(() => {
    if (filterLikes?.length > 0) {
      setAlreadyLike(true);
    } else {
      setAlreadyLike(false);
    }
  }, [filterLikes, likes]);

  return (
    <div className="gap-6 flex">
      <div
        className="mt-4 flex flex-col justify-center
    items-center cursor-pointer"
      >
        {alreadyLike ? (
          <div
            className="bg-primary rounded-full
          p-2 md:p-4 text-[#F51997]"
            onClick={handleDislike}
          >
            <div>
              <MdFavorite className="text-lg md:text-2xl" />
            </div>
          </div>
        ) : (
          <div>
            <div
              className="bg-primary rounded-full
        p-2 md:p-4"
              onClick={handleLike}
            >
              <div>
                <MdFavorite className="text-lg md:text-2xl" />
              </div>
            </div>
          </div>
        )}
        <p className="text-md font-semibold">{likes?.length | 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;
