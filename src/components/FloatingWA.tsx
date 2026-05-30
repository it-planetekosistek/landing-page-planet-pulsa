import { MessageSquare } from "lucide-react";

export default function FloatingWA() {
  return (
    <a
      href="https://wa.me/6281371204616"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
    >
      <MessageSquare className="w-7 h-7" />
    </a>
  );
}
