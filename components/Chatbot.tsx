"use client";

import { useState } from "react";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return;

    setLoading(true);

    // Send the message to the server to process and extract information from PDF
    const res = await fetch("/api/extract-text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponse(data.reply);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
        placeholder="Ask something about the uploaded PDF..."
        className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 resize-none"
      />
      <div className="flex gap-3 justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}>
          {loading ? "Processing..." : "Send"}
        </button>
        <button
          onClick={() => {
            setMessage("");
            setResponse("");
          }}
          className="border border-gray-400 text-gray-600 px-4 py-2 rounded hover:bg-gray-100 transition">
          Clear
        </button>
      </div>
      {response && (
        <div className="bg-gray-100 p-4 border rounded-lg whitespace-pre-line">
          <strong>AI:</strong> {response}
        </div>
      )}
    </div>
  );
}
