import react from 'react';

const Contacts = () => {
    <section className="bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900 p-4 mt-6 shadow-lg md:mt-0 md:w-1/4 md:rounded-lg md:ml-4 h-max(100vh)">
                <h2 className="text-xl font-bold mb-4">Contact Info</h2>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="font-semibold">Phone:</span>
                    <span>+1234567890</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:example@example.com" className="text-blue-600 hover:underline">
                      example@example.com
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="font-semibold">GitHub:</span>
                    <a href="https://github.com/yourgithub" className="text-blue-600 hover:underline">
                      yourgithub
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="font-semibold">LinkedIn:</span>
                    <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-600 hover:underline">
                      yourlinkedin
                    </a>
                  </li>
                </ul>
              </section>
}

export default Contacts;