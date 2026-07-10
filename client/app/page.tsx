import Header from "@/components/layout/Header";
import UploadCard from "@/components/upload/UploadCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="mb-3 text-3xl font-bold">
          Import CRM Leads
        </h2>

        <p className="mb-8 text-gray-600">
          Upload a CSV file to preview and intelligently map lead information
          into GrowEasy CRM format.
        </p>

        <UploadCard />

      </section>
    </main>
  );
}