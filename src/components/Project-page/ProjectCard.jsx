const ProjectCard = ({ image, title, location, categories, link }) => {
  return (
    <div className="pr-7 mb-4 overflow-hidden">
      <a href={link} className="block group">
        {/* Image */}
        <div
          className="w-full h-70 bg-cover bg-center group transition-all duration-300 group-hover:brightness-80"
          style={{ backgroundImage: `url(${image})` }}
        >
        </div>

        {/* Content */}
        <div className="flex items-center justify-between px-2 py-4 bg-white cursor-pointer">
          <div>
            <h3 className="font-semibold text-gray-900">
              {title}, {location}
            </h3>
            <p className="text-sm text-gray-500">
              {categories}
            </p>
          </div>

          {/* Arrow */}
          <span
            className="text-xl text-gray-600 transform transition-all duration-300 ease-out
              translate-x-2 opacity-80
              group-hover:translate-x-0 group-hover:opacity-100
              group-hover:text-gray-900"
          >
            →
          </span>
        </div>
      </a>
    </div>
  );
};


export default ProjectCard;