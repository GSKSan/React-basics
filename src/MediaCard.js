const MediaCard = ({ title, bodu, imageUrl }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{bodu}</p>
      <img src={imageUrl} />
    </div>
  );
};

export default MediaCard;
