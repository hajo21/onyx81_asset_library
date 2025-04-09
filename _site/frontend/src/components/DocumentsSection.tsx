import React, { useEffect, useState } from "react";
import "./DocumentsSection.css";

interface DocumentItem {
  id: number;
  title: string;
  modifiedDate: string;
  modifiedBy: string;
}

function DocumentsSection() {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/documents")
      .then((res) => res.json())
      .then((data) => setDocuments(data))
      .catch((err) => console.error("Error fetching documents:", err));
  }, []);

  return (
    <section className="documents-section">
      <h4>Documents</h4>
      <div className="doc-actions">
        <button>Sync</button>
        <button>Export to Excel</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Modified</th>
            <th>Modified By</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.title}</td>
              <td>{doc.modifiedDate}</td>
              <td>{doc.modifiedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="view-all">
        <button>View All</button>
      </div>
    </section>
  );
}

export default DocumentsSection;