import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    _id, // <-- Make sure _id exists in your news object
    title,
    author,
    image_url,
    details,
    total_view,
    rating,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      {/* Author, date, and share icon in one row */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="text-gray-500 cursor-pointer hover:text-gray-700 flex gap-5 mr-5">
          <FaShareAlt size={20} />
          <FaBookmark size={20} />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={image_url}
          alt={title}
          className="rounded-md w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pt-4 text-sm text-gray-600">
        {details.slice(0, 250)}...
        <Link
          to={`/news/${_id}`}
          className="text-orange-500 ml-1 font-semibold hover:underline"
        >
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t mt-4 text-sm text-gray-600">
        <div className="flex items-center space-x-1 text-orange-400">
          <FaStar className="text-base" />
          <span className="font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaEye className="text-gray-500" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
