// components/ExploreSection.jsx
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const ExploreSection = () => {
    const { data: session, status } = useSession();
    if (status === "loading") return <div>Loading...</div>;
    if (status === "unauthenticated") return <div>Not signed in</div>;
    else return (

    <div className="min-h-screen flex items-center justify-center py-16 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Internship Connect</h2>
          <p className="text-gray-600 mb-6">
            Discover potential internships, connect with employers & unlock new
            career paths.
          </p>
          <a className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md" href="/explore">
              Join Now
          </a>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            {/* <img
              src="/Untitled.svg"
              alt="Explore Illustration"
              className="max-w-full h-auto mx-auto"
            /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-purple-200 rounded-full p-4">
                <svg
                  className="w-16 h-16 text-purple-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;