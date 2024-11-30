import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import motion dari framer-motion
import QuestionSelectModal from '../ConfirmationModal/QuestionSelectModal';
import questions from '../../data/questions'; // Import your questions data
import backgroundImage from '../LandingPage/Green Brown Illustration World Animal Day Video.png'
const LandingPage: React.FC = () => {

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleStartQuiz = (numQuestions: number) => {
        // Shuffle the questions and select the specified number
        const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
        const selectedQuestions = shuffledQuestions.slice(0, numQuestions);

        // Navigate to the quiz section with the selected questions
        navigate('/quiz-section', { state: { questions: selectedQuestions, numQuestions } });
    };

    return (
        <div className="relative h-screen w-full">
            {/* Gambar background */}
            <img
                src={backgroundImage} 
                className="absolute inset-0 object-cover w-full h-full z-0" 
                alt="background form" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> {/* Semitransparent overlay */}

            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
                {/* Gunakan motion untuk memberikan animasi */}
                <motion.h1
                    className="text-4xl md:text-6xl font-bold"
                    initial={{ opacity: 0, y: 20 }}  // Set initial state
                    animate={{ opacity: 1, y: 0 }}  // Animasi akhir
                    transition={{ duration: 0.5 }}   // Durasi animasi lebih cepat
                >
                    Selamat Datang di Quiz Hewan
                </motion.h1>
                <motion.button
                    className="mt-6 px-8 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg"
                    onClick={() => setIsModalOpen(true)}
                    initial={{ opacity: 0, scale: 0.8 }}  // Set initial state
                    animate={{ opacity: 1, scale: 1 }}  // Animasi akhir
                    transition={{ duration: 0.5, delay: 0.3 }}  // Durasi animasi lebih cepat dan sedikit delay
                >
                    Mulai
                </motion.button>
            </div>

            <QuestionSelectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleStartQuiz} // Pass the handleStartQuiz function
            />
        </div>
    );
};

export default LandingPage;
