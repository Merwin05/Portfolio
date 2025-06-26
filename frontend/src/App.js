import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">Merwin Jude</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
              <a href="#certifications" className="text-gray-600 hover:text-blue-600 transition-colors">Certifications</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Profile Picture Placeholder */}
            <div className="w-40 h-40 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <div className="text-gray-500 text-6xl">👤</div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Merwin Jude Joshwah. R
            </h1>
            <p className="text-xl text-gray-600 mb-6">Final Year Undergraduate in Computer Technology</p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Highly motivated mindset. I am a quick learner, possess good communication and interpersonal skills with a 
              proven ability to work independently and as part of a team. I quickly adapt and improve myself according 
              to the situation I'm in. I constantly update the environment around me and implement my strategy as the right moment.
            </p>
            <div className="mt-8">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As a final year Computer Technology student, I bring together technical expertise with strong interpersonal skills. 
                My journey in technology has been driven by curiosity and a commitment to continuous learning.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I excel at adapting to new environments and technologies, always staying updated with the latest developments 
                in the field. My approach combines independent problem-solving capabilities with effective teamwork, 
                making me a versatile contributor to any project or organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hard Skills */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">💻</span>
                </span>
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-semibold">Python</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-semibold">HTML & CSS</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-semibold">Cybersecurity</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-semibold">MS Office</span>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">🤝</span>
                </span>
                Soft Skills
              </h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-green-700">Strong organizational and time management skills</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-green-700">Exceptional communication and interpersonal skills</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-green-700">Ability to work independently and as part of a team</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-green-700">Good presentation skills</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-green-700">Problem-solving abilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">🎓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Science in Computer Technology</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">2023-2026</p>
                  <p className="text-gray-700 font-medium">Sri Ramakrishna College of Arts and Science</p>
                  <p className="text-gray-600">Coimbatore, Tamil Nadu, India</p>
                  <div className="mt-4 inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Final Year Student
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold">📜</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Infosys SpringBoard</h3>
                  <p className="text-sm text-gray-600 mb-2">HTML5, Introduction to Artificial Intelligence, Python for Data Science, Linear Algebra using Python, Data Visualization using Python, Probability distribution using Python</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">💻</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Spoken Tutorial</h3>
                  <p className="text-sm text-gray-600 mb-2">Linux, CSS, Java, C & C++</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">🍃</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">MongoDB</h3>
                  <p className="text-sm text-gray-600 mb-2">Database Management Certification</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">🏢</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Tata Strive with Microsoft</h3>
                  <p className="text-sm text-gray-600 mb-2">Cybersecurity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Let's connect and discuss opportunities</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">9789951105</p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">jrmwin2007@gmail.com</p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/merwin-joshwah-r-364b5292" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-blue-600 hover:text-blue-800 transition-colors">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Merwin Jude Joshwah. R. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;