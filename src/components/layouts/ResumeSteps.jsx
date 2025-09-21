import React from "react";

const features = [
  {
    id: 1,
    img: "https://assets.zety.com/lp/_next/image?url=/blobimages/zty/sem/images/step1.png&w=330&h=undefined&q=100", // replace with your image
    title: "Pick a resume template.",
    desc: "Choose a sleek design and layout to get started.",
  },
  {
    id: 2,
    img: "https://assets.zety.com/lp/_next/image?url=/blobimages/zty/sem/images/step2.png&w=330&h=undefined&q=100", // replace with your image
    title: "Fill in the blanks.",
    desc: "Type in a few words. Let the Zety resume wizard fill the rest.",
  },
  {
    id: 3,
    img: "https://assets.zety.com/lp/_next/image?url=/blobimages/zty/sem/images/step3.png&w=330&h=undefined&q=100", // replace with your image
    title: "Customize your document.",
    desc: "Make it truly yours. Uniqueness in a few clicks.",
  },
];

export default function ResumeSteps() {
  return (
    <div className="w-full flex flex-col items-center py-14 px-6 bg-white">
      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl text-center">
        {features.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-68 h-68 object-contain mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-500 transition">
          Create new resume
        </button>
        <button className="px-6 py-3 border border-gray-800 text-gray-800 font-medium rounded-full hover:bg-gray-100 transition">
          Improve my resume
        </button>
      </div>
    </div>
  );
}
