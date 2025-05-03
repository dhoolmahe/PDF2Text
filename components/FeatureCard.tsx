export default function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-bold text-blue-700">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}