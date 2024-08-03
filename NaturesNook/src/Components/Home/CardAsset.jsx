/* eslint-disable react/prop-types */
const CardAsset = ({ image, title, text }) => {
  return (
    <div className="card p-4 flex flex-col items-center w-80 raleway-font">
      <img src={image} alt={title} className="rounded-full object-cover mb-4" />
      <h2 className="text-black text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-800 md:text-xl sm:text-lg text-base mb-4 text-center">{text}</p>
    </div>
  );
}

export default CardAsset;