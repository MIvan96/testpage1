type Props = { companyId?: string,

 };

export default function AddReviewForm({ companyId}: Props) {
  return (
    <form className="max-w-md space-y-3 p-4 border rounded-xl">
      <h2 className="text-lg font-semibold">Add a Review </h2>

      {companyId ? (
        <input type="hidden" name="companyId" value={companyId} />
      ) : null}

      {companyId ? (
        <p className="text-sm text-gray-600">For company: {companyId}</p>
      ) : null}

      <input
        type="text"
        placeholder="Your name"
        className="w-full border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        className="w-full border p-2 rounded"
      />

      <textarea
        placeholder="Write your review..."
        rows={4}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
