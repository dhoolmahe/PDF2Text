import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="px-6 py-20 text-center bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-700">
          Extract Intelligence from Documents — Fast
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Analyze millions of files using AI.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        <FeatureCard
          title="Fast Processing"
          description="Blazing-speed extraction from massive data."
        />
        <FeatureCard
          title="Structured Results"
          description="Extract clean tables, text, and metadata."
        />
        <FeatureCard
          title="Open API Access"
          description="Easily integrate into your systems."
        />
      </section>
    </div>
  );
}
