import { ArrowBigUp, MessageSquare, Share2 } from 'lucide-react';

const QuestionCard = ({ question }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 mb-4 shadow-sm">
      <h2 className="text-xl font-bold hover:underline cursor-pointer">{question.title}</h2>
      <p className="text-gray-600 mt-2">{question.content.substring(0, 150)}...</p>
      
      <div className="flex items-center mt-4 space-x-4 border-t pt-3">
        <button className="flex items-center bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200">
          <ArrowBigUp className="w-5 h-5 mr-1" />
          <span className="font-medium">Upvote</span>
        </button>
        <button className="flex items-center text-gray-500 hover:text-blue-600">
          <MessageSquare className="w-5 h-5 mr-1" />
          <span>{question.answers_count} Answers</span>
        </button>
        <button className="text-gray-500 hover:text-blue-600">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;