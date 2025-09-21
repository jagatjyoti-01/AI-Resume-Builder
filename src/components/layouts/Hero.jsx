import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="text-blue-600 font-semibold">Fast. Easy. Effective.</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            AI. The Best Resume <br /> Builder Online.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Whether you want to build a new resume from scratch or improve an existing one, 
            let our AI help you present your work life, personality, and skills on a resume 
            that stands out.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              Create new resume
            </Button>
            <Button className="bg-white text-blue-900 border border-blue-900 hover:bg-blue-50">
              Improve my resume
            </Button>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="flex justify-center">
          <img
            src="https://assets.zety.com/blobimages/zty/sem/images/anika-kumar-blue-resume.png?w=704" // <-- Replace with your actual image path
            alt="Resume Preview"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
