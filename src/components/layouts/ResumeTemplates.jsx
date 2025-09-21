import { useState } from "react";
import { FaSearchPlus, FaEdit } from "react-icons/fa";

const templates = [
  { id: 1, img: "/templates/template1.png" },
  { id: 2, img: "/templates/template2.png", selectable: true },
  { id: 3, img: "/templates/template3.png" },
  { id: 4, img: "/templates/template4.png" },
];

export default function ResumeTemplates() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-10">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Pick a resume template
      </h1>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 w-full max-w-7xl">
        {templates.map((template) => (
          <div
            key={template.id}
            className="relative group border rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            {/* Template Image */}
            <img
              src={template.img}
              alt={`Template ${template.id}`}
              className="w-full h-full object-cover"
            />

            {/* Hover overlay with button (for selectable templates) */}
            {template.selectable && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => setSelected(template.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                >
                  Use this template
                </button>
              </div>
            )}

            {/* Zoom Icon */}
            <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition">
              <FaSearchPlus className="w-5 h-5 text-gray-700" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <button className="mt-10 px-6 py-3 bg-yellow-400 rounded-full flex items-center gap-2 text-black font-medium hover:bg-yellow-500 transition">
        <FaEdit className="w-5 h-5" />
        View more templates
      </button>
    </div>
  );
}
