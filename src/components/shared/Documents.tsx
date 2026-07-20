import DocumentCard from "./DocumentCard";
import type { LibraryDocument } from "@/data/documents";

export default function Documents({ documents }: { documents: LibraryDocument[] }) {
  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <DocumentCard key={doc.id} doc={doc} />
      ))}
    </div>
  );
}
