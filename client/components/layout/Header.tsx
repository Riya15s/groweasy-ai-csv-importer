export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <h1 className="text-3xl font-bold text-gray-900">
          GrowEasy AI CSV Importer
        </h1>

        <p className="mt-2 text-gray-600">
          Upload any CSV and intelligently map it into GrowEasy CRM using AI.
        </p>
      </div>
    </header>
  );
}