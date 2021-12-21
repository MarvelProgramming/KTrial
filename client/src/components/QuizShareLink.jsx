import React from 'react'

export default function QuizShareLink({ shareLink }) {
  
  return (
    <div className="quiz-share-link">
      <a href={shareLink}>{`${window.location.origin}/quiz/${shareLink}`}</a>
      <p>Share this link with your friends!</p>
    </div>
  );
};
