export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const reviewId = (await params).reviewId;
  return (
    <div className="flex-1 flex flex-col">
      <h1>Review details. {reviewId}</h1>
    </div>
  );
}
