import { FiArrowUpRight } from "react-icons/fi";

export default function TrustSection() {
  return (
    <section className="bg-gray-100 py-10 shadow-md shadow-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left side: Stats */}
        <div className="flex flex-col space-y-3 md:border-r md:pr-8 border-gray-200 w-full md:w-auto">
          <div className="flex items-center gap-2 text-gray-700">
            <FiArrowUpRight className="text-teal-500 w-5 h-5" />
            <span className="font-medium">30% higher chance of getting a job*</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FiArrowUpRight className="text-teal-500 w-5 h-5" />
            <span className="font-medium">42% higher response rate from recruiters*</span>
          </div>
        </div>

        {/* Right side: Logos */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="font-semibold text-gray-800">
            Our users have been hired at:
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-8 items-center">
            <img src="https://assets.zety.com/lp/_next/image?url=/blobimages/zty/sem/images/amazon_logo.svg&w=87&h=undefined&q=100" alt="Amazon" className="h-8" />
            <img src="https://assets.zety.com/lp/_next/image?url=/blobimages/zty/sem/images/boeing_logo.svg&w=147&h=undefined&q=100" className="h-8" />
            <img src="https://assets.zety.com/lp/_next/image?url=/blobimages/zty/sem/images/google_logo.svg&w=83&h=undefined&q=100" />
            <img src="https://assets.zety.com/lp/_next/image?url=/blobimages/zty/sem/images/starbucks_logo.svg&w=35&h=undefined&q=100" alt="Starbucks" className="h-8" />
          </div>
        </div>

      </div>
    </section>
  );
}
