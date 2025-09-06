type RatingsProps = {
  rating?: number;
};

export default function Ratings({ rating = 0 }: RatingsProps) {
  const totalStars = 5;

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          style={{
            color: index < rating ? "gold" : "lightgray",
            fontSize: 24,
          }}
        >
          &#9733;
        </span>
      ))}
      <span style={{ marginLeft: 8, color: "black" }}>
        {rating} / {totalStars}
      </span>
    </div>
  );
}
