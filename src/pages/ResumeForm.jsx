import { useState } from "react";

export default function ResumeForm() {
  const [step, setStep] = useState(1);

  // Store all resume details
  const [formData, setFormData] = useState({
    personal: { name: "", email: "", phone: "", address: "", summary: "" },
    experience: [{ company: "", role: "", years: "", description: "" }],
    education: [{ degree: "", institution: "", year: "", gpa: "" }],
    skills: [""],
  });

  // Handle changes for dynamic sections
  const handleChange = (section, index, field, value) => {
    const updatedSection = [...formData[section]];
    updatedSection[index][field] = value;
    setFormData({ ...formData, [section]: updatedSection });
  };

  // Handle personal section changes
  const handlePersonalChange = (field, value) => {
    setFormData({
      ...formData,
      personal: { ...formData.personal, [field]: value },
    });
  };

  // Add new entry (experience, education, skills)
  const addEntry = (section, template) => {
    setFormData({
      ...formData,
      [section]: [...formData[section], template],
    });
  };

  // Remove entry
  const removeEntry = (section, index) => {
    const updatedSection = [...formData[section]];
    updatedSection.splice(index, 1);
    setFormData({ ...formData, [section]: updatedSection });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resume Data Submitted:", formData);
    alert("Resume Submitted! Check console for full data.");
  };

  // Progress percentage for progress bar
  const progress = (step / 5) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-full mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 text-center">
          <h1 className="text-3xl font-bold mb-2">AI Resume Builder</h1>
          <p className="opacity-90">Create a professional resume in minutes with AI assistance</p>
        </div>
        
        {/* Progress Bar */}
        <div className="h-2 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-in-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="p-6 md:p-8">
          {/* Step Indicator */}
          <div className="flex justify-between mb-8 relative">
            <div className="absolute top-3 left-0 right-0 h-1 bg-gray-200 -z-10 mx-10"></div>
            {["Personal", "Experience", "Education", "Skills", "Review"].map(
              (label, i) => (
                <div key={i} className="flex flex-col items-center z-10">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      step >= i + 1 
                        ? "bg-indigo-600 shadow-md" 
                        : "bg-gray-300"
                    }`}
                  >
                    {step > i + 1 ? "✓" : i + 1}
                  </div>
                  <span
                    className={`text-xs mt-2 font-medium ${
                      step === i + 1 ? "text-indigo-600 font-bold" : "text-gray-500"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              )
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Personal */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Personal Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.personal.name}
                      onChange={(e) =>
                        handlePersonalChange("name", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.personal.email}
                      onChange={(e) =>
                        handlePersonalChange("email", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="text"
                      placeholder="+1 (555) 123-4567"
                      value={formData.personal.phone}
                      onChange={(e) =>
                        handlePersonalChange("phone", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                      type="text"
                      placeholder="New York, NY"
                      value={formData.personal.address}
                      onChange={(e) =>
                        handlePersonalChange("address", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
                  <textarea
                    placeholder="Experienced software developer with 5+ years in web development..."
                    rows={3}
                    value={formData.personal.summary}
                    onChange={(e) =>
                      handlePersonalChange("summary", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Experience */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Work Experience</h2>
                
                {formData.experience.map((exp, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-5 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-gray-700">Experience #{index + 1}</h3>
                      {formData.experience.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEntry("experience", index)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                        <input
                          type="text"
                          required
                          placeholder="Google Inc."
                          value={exp.company}
                          onChange={(e) =>
                            handleChange("experience", index, "company", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role *</label>
                        <input
                          type="text"
                          required
                          placeholder="Senior Developer"
                          value={exp.role}
                          onChange={(e) =>
                            handleChange("experience", index, "role", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Years *</label>
                        <input
                          type="text"
                          required
                          placeholder="2019-2022"
                          value={exp.years}
                          onChange={(e) =>
                            handleChange("experience", index, "years", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        placeholder="Describe your responsibilities and achievements..."
                        rows={2}
                        value={exp.description}
                        onChange={(e) =>
                          handleChange("experience", index, "description", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={() =>
                    addEntry("experience", { company: "", role: "", years: "", description: "" })
                  }
                  className="flex items-center justify-center w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:text-indigo-600 hover:border-indigo-400 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Another Experience
                </button>
              </div>
            )}

            {/* Step 3: Education */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Education</h2>
                
                {formData.education.map((edu, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-5 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-gray-700">Education #{index + 1}</h3>
                      {formData.education.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEntry("education", index)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Degree *</label>
                        <input
                          type="text"
                          required
                          placeholder="Bachelor of Science"
                          value={edu.degree}
                          onChange={(e) =>
                            handleChange("education", index, "degree", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Institution *</label>
                        <input
                          type="text"
                          required
                          placeholder="Stanford University"
                          value={edu.institution}
                          onChange={(e) =>
                            handleChange("education", index, "institution", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Year *</label>
                        <input
                          type="text"
                          required
                          placeholder="2015-2019"
                          value={edu.year}
                          onChange={(e) =>
                            handleChange("education", index, "year", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                        <input
                          type="text"
                          placeholder="3.8/4.0"
                          value={edu.gpa}
                          onChange={(e) =>
                            handleChange("education", index, "gpa", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={() =>
                    addEntry("education", { degree: "", institution: "", year: "", gpa: "" })
                  }
                  className="flex items-center justify-center w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:text-indigo-600 hover:border-indigo-400 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Another Education
                </button>
              </div>
            )}

            {/* Step 4: Skills */}
            {step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Skills</h2>
                <p className="text-gray-600">Add your key skills and areas of expertise</p>
                
                <div className="space-y-4">
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="text"
                        placeholder={`Skill ${index + 1} (e.g., JavaScript, Project Management)`}
                        value={skill}
                        onChange={(e) => {
                          const updated = [...formData.skills];
                          updated[index] = e.target.value;
                          setFormData({ ...formData, skills: updated });
                        }}
                        className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                      />
                      {formData.skills.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEntry("skills", index)}
                          className="ml-3 text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                
                <button
                  type="button"
                  onClick={() => addEntry("skills", "")}
                  className="flex items-center justify-center w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:text-indigo-600 hover:border-indigo-400 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Another Skill
                </button>
                
                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                  <h4 className="font-medium text-indigo-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    AI Tip
                  </h4>
                  <p className="text-indigo-700 text-sm mt-1">Include both technical and soft skills. Consider adding proficiency levels (e.g., Beginner, Intermediate, Expert).</p>
                </div>
              </div>
            )}

            {/* Step 5: Review */}
            {step === 5 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Review Your Resume</h2>
                <p className="text-gray-600">Check all information before generating your resume</p>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div><span className="font-medium">Name:</span> {formData.personal.name || "Not provided"}</div>
                    <div><span className="font-medium">Email:</span> {formData.personal.email || "Not provided"}</div>
                    <div><span className="font-medium">Phone:</span> {formData.personal.phone || "Not provided"}</div>
                    <div><span className="font-medium">Address:</span> {formData.personal.address || "Not provided"}</div>
                  </div>
                  {formData.personal.summary && (
                    <div className="mt-4">
                      <span className="font-medium">Summary:</span> 
                      <p className="text-gray-700 mt-1">{formData.personal.summary}</p>
                    </div>
                  )}
                </div>
                
                {formData.experience[0].company && (
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Work Experience</h3>
                    {formData.experience.map((exp, index) => (
                      <div key={index} className={index > 0 ? "mt-4 pt-4 border-t border-gray-200" : ""}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <div><span className="font-medium">Company:</span> {exp.company}</div>
                          <div><span className="font-medium">Role:</span> {exp.role}</div>
                          <div><span className="font-medium">Years:</span> {exp.years}</div>
                        </div>
                        {exp.description && (
                          <div className="mt-2">
                            <span className="font-medium">Description:</span> 
                            <p className="text-gray-700">{exp.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                {formData.education[0].degree && (
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Education</h3>
                    {formData.education.map((edu, index) => (
                      <div key={index} className={index > 0 ? "mt-4 pt-4 border-t border-gray-200" : ""}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <div><span className="font-medium">Degree:</span> {edu.degree}</div>
                          <div><span className="font-medium">Institution:</span> {edu.institution}</div>
                          <div><span className="font-medium">Year:</span> {edu.year}</div>
                          {edu.gpa && <div><span className="font-medium">GPA:</span> {edu.gpa}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {formData.skills[0] && (
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((skill, index) => (
                        skill && (
                          <span key={index} className="bg-white px-3 py-1 rounded-full text-sm border border-gray-300">
                            {skill}
                          </span>
                        )
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-medium text-blue-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    AI Analysis Complete
                  </h4>
                  <p className="text-blue-700 text-sm mt-1">Our AI has analyzed your resume and suggests optimizing keywords for ATS compatibility. Ready to generate your resume?</p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-gray-200">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium flex items-center transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              {step < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium flex items-center transition"
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 font-medium flex items-center transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Generate Resume
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}