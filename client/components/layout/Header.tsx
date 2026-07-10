export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            GrowEasy AI CSV Importer
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Upload any CSV and intelligently convert it into GrowEasy CRM format.
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          AI Powered
        </span>
      </div>
    </header>
  );
}