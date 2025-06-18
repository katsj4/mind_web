import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

type CookiesPageProps = {
  title: string;
  content: string;
};

const CookiesPage: React.FC<CookiesPageProps> = ({ title, content }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 flex flex-col">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-primary-500 hover:text-primary-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{title}</h1>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        {content}
      </div>
    </div>
  );
};

export default CookiesPage;
