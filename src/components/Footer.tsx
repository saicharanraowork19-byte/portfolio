import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a
              href="[Your GitHub URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="[Your LinkedIn URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:[saicharanrao.work19@gmail.com]"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Sai Charan </span>
          </div>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sai Charan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
