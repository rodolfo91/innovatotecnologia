import React from 'react';

interface Question {
  id: number;
  text: string;
}

interface SectorRatingProps {
  title: string;
  questions: Question[];
  ratings: number[];
  onRatingChange: (questionIndex: number, rating: number) => void;
  averageRating: number;
}

const SectorRating: React.FC<SectorRatingProps> = ({
  title,
  questions,
  ratings,
  onRatingChange,
  averageRating,
}) => {
  const getRatingColor = (rating: number) => {
    if (rating < 2) return 'bg-red-500';
    if (rating < 3) return 'bg-orange-500';
    if (rating < 4) return 'bg-yellow-500';
    if (rating < 4.5) return 'bg-green-500';
    return 'bg-green-600';
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-blue-dark">{title}</h3>
        <div className="flex items-center">
          <span className="mr-2 text-gray-600 font-medium">Nota média:</span>
          <span className={`px-3 py-1 rounded-full text-white font-medium ${getRatingColor(averageRating)}`}>
            {averageRating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={question.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
            <p className="font-medium text-gray-700 mb-3">{question.text}</p>
            <div className="flex flex-wrap items-center">
              <div className="grid grid-cols-5 gap-2 w-full max-w-md">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label
                    key={rating}
                    className="relative flex flex-col items-center"
                  >
                    <input
                      type="radio"
                      name={`${title}-question-${question.id}`}
                      value={rating}
                      checked={ratings[index] === rating}
                      onChange={() => onRatingChange(index, rating)}
                      className="sr-only"
                    />
                    <div
                      className={`w-full h-9 rounded cursor-pointer transition-colors ${
                        ratings[index] === rating
                          ? 'bg-blue-medium'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    ></div>
                    <span className="text-xs mt-1 text-center">
                      {rating === 1 && 'Discordo Totalmente'}
                      {rating === 2 && 'Discordo'}
                      {rating === 3 && 'Neutro'}
                      {rating === 4 && 'Concordo'}
                      {rating === 5 && 'Concordo Totalmente'}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorRating;