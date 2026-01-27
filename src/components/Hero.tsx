import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            SC
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            Sai Charan
          </h1>

          <p className="text-xl md:text-2xl text-gray-600">
            Senior Data Engineer
          </p>

            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Senior Data Engineer building scalable cloud data platforms and analytics-ready datasets across regulated and high-volume environments.
            </p>


          <div className="flex justify-center space-x-4 pt-4">
            <a
              href="Your GitHub URL"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="Your LinkedIn URL"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:saicharanrao.work19@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </div>


          <div className="pt-4">
            <a
              href={`${import.meta.env.BASE_URL}Data_Engineer_v9.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>View Resume</span>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
