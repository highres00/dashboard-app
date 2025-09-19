import React from 'react';

type CardProps = {
  title: string;
  body: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, body, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow mb-4">
      <h2 className="font-bold text-lg mb-2 text-gray-900">{title}</h2>
      <div className="text-gray-700 whitespace-pre-line">
        {body.split('\n').map((line, idx) => {
          const match = line.match(/^(\d+\.) (.+?): (\d+)$/);
          if (match) {
            return (
              <div key={idx} className="flex justify-between">
                <span>{match[1]} {match[2]}</span>
                <span className="text-right min-w-[2em] font-semibold">{match[3]}</span>
              </div>
            );
          }
          return <div key={idx}>{line}</div>;
        })}
      </div>
      {children}
    </div>
  );
};

export default Card;
