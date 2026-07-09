import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl p-6">
        <h2 className="text-xl font-semibold">
          Welcome to GrowEasy AI CSV Importer
        </h2>

        <p className="mt-2 text-gray-600">
          Upload your CSV to preview and import CRM leads.
        </p>
      </main>
    </>
  );
}
