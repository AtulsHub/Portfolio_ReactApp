function DetailPage({ title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700">{description}</p>
      <div className="mt-4">
        <img src="/path-to-image.jpg" alt={title} className="rounded-lg" />
      </div>
    </div>
  );
}

export default DetailPage;