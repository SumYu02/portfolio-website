import React from 'react';
import { Github, ExternalLink, Star, GitFork, Code } from 'lucide-react';

export default function GitHubSection() {
  return (
    <div className="flex flex-col gap-2 mt-20 mb-20 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block mb-3">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Open Source
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
          GitHub Repository
        </h1>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Explore the complete source code and documentation
        </p>
      </div>

      {/* GitHub Card */}
      <div className="max-w-3xl mx-auto w-full">
        <a
          href="https://github.com/SumYu02/E-Commerce-FYP"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="bg-white rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden">
            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Github className="text-gray-800" size={32} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">E-Commerce-FYP</p>
                    <p className="text-blue-100 text-sm">SumYu02</p>
                  </div>
                </div>
                <ExternalLink className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={24} />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-6">
                Full-stack MERN e-commerce platform with AI-powered features including recommendation system, chatbot, price-drop alerts, and offer negotiation.
              </p>

              {/* Stats */}
              {/* <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                  <Code size={16} className="text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700">MERN Stack</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                  <Star size={16} className="text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-700">Full Stack</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                  <GitFork size={16} className="text-green-600" />
                  <span className="text-sm font-semibold text-gray-700">Open Source</span>
                </div>
              </div> */}

              {/* URL Display */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border-2 border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
                <div className="flex items-center justify-between gap-3">
                  <code className="text-sm text-gray-700 font-mono flex-1 overflow-x-auto">
                    github.com/SumYu02/E-Commerce-FYP
                  </code>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm whitespace-nowrap">
                    View Code
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover:h-2 transition-all duration-300"></div>
          </div>
        </a>

        {/* Call to Action */}
        {/* <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            ⭐ Star the repository if you find it helpful!
          </p>
        </div> */}
      </div>
    </div>
  );
}