import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Quiz from './components/QuizSection/QuizSection'; // Ensure this path is correct
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/Landingpage'; // Ensure this path is correct

const App: React.FC = () => {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} /> {/* Route for Landing Page */}
                <Route path="/quiz-section" element={<Quiz />} /> {/* Route for Quiz Section */}
            </Routes>
        </div>
    );
};

export default App;