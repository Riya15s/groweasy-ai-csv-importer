# 🚀 GrowEasy AI CSV Importer

An AI-powered CSV Importer built as part of the GrowEasy Software Developer Intern Assignment. The application allows users to upload CSV files, preview the data, and extract CRM-ready lead information using Google Gemini AI.

---

# 📌 Features

- 📂 Upload CSV files
- 👀 Preview CSV data before importing
- 📊 Parse CSV using PapaParse
- 📤 Upload files using Multer
- 🤖 AI-powered CRM data extraction using Google Gemini AI
- 🔗 REST API integration with Axios
- 💻 Responsive UI built with Next.js and Tailwind CSS
- ⚡ Express.js Backend

---

# 🛠 Tech Stack

## Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- PapaParse

## Backend
- Node.js
- Express.js
- Multer
- Google Gemini API
- dotenv

---

# 📁 Project Structure

```
groweasy-ai-csv-importer/
│
├── client/                # Next.js Frontend
├── server/                # Express Backend
├── sample-csv/            # Sample CSV Files
├── README.md
└── package.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Riya15s/groweasy-ai-csv-importer.git
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Runs on:

```
http://localhost:3000
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

# 🔑 Environment Variables

## Server (.env)

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
PORT=5000
```

## Client (.env.local)

### Local Development

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Production

```env
NEXT_PUBLIC_API_URL=https://groweasy-ai-csv-importer-ez96.onrender.com/api
```

---

# 📡 API Endpoint

### Upload CSV

```
POST /api/upload
```

### Form Data

```
file : CSV File
```

### Sample Response

```json
{
  "success": true,
  "totalRows": 10,
  "imported": 8,
  "skipped": 2,
  "data": []
}
```

---

# 🔄 Workflow

1. Upload a CSV file.
2. Preview parsed CSV data.
3. Click **Confirm Import**.
4. Backend receives the uploaded CSV.
5. PapaParse parses the CSV into JSON.
6. Google Gemini AI extracts CRM lead fields.
7. Processed CRM data is returned to the frontend.

---

# 🌐 Deployment

## Frontend
- Vercel

## Backend
- Render

### Backend URL

```
https://groweasy-ai-csv-importer-ez96.onrender.com
```

### API Base URL

```
https://groweasy-ai-csv-importer-ez96.onrender.com/api
```

---

# 📦 Dependencies

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- PapaParse
- React Dropzone

### Backend

- Express.js
- Multer
- Google Gemini SDK
- dotenv
- CORS
- PapaParse

---

# 🚀 Future Improvements

- Authentication
- Import History
- Database Integration (MongoDB/PostgreSQL)
- Better AI Validation
- Retry Mechanism for AI Requests
- Bulk Import Support
- Export Processed CRM Data

---

# 👩‍💻 Author

**Riya Jagriti**

GitHub: https://github.com/Riya15s

---

# 📄 License

This project was developed as part of the GrowEasy Software Developer Intern Assignment for learning and evaluation purposes.
