import React from 'react';
import Header from '../components/Header';
import QuizList from '../components/QuizList';

export default function BrowsePage() {
  return (
    <div className="browse-page">
      <Header />
      <QuizList />
    </div>
  );
};