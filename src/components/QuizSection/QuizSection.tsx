import React, { useEffect, useState } from 'react';
import { TrophyOutlined, LogoutOutlined, RightCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion untuk animasi
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'; // Tetap menggunakan ConfirmationModal untuk quit
import ResultModal from '../ConfirmationModal/ResultModal'; // Import ResultModal untuk hasil quiz
import questions from '../../data/questions'; // Import questions
import { useLocation } from 'react-router-dom';

const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);  // State untuk ConfirmationModal
    const [isResultModalOpen, setIsResultModalOpen] = useState(false);  // State untuk ResultModal
    const [fadeIn, setFadeIn] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState(questions); // State untuk menyimpan pertanyaan yang diacak
    const navigate = useNavigate();
    const location = useLocation();
    const { numQuestions } = location.state || { numQuestions: 5 };

    useEffect(() => {
        setFadeIn(true);  // Set fadeIn to true when the component loads
    }, []);

    useEffect(() => {
        // Shuffle questions only when the component mounts
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        setShuffledQuestions(shuffled);
    }, []);

    useEffect(() => {
        // Trigger ResultModal setelah menjawab pertanyaan terakhir
        if (currentQuestionIndex >= numQuestions) {
            setIsResultModalOpen(true);
        }
    }, [currentQuestionIndex, numQuestions]);

    const handleAnswer = (option: string) => {
        setSelectedAnswer(option);
        if (option === shuffledQuestions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        setAnswered(true);
    };

    const handleNext = () => {
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < numQuestions) {
            setCurrentQuestionIndex(nextQuestion);
            setAnswered(false);
            setSelectedAnswer(null);
        } else {
            // Setelah pertanyaan terakhir, ResultModal muncul
            setIsResultModalOpen(true);
        }
    };

    const handleQuit = () => {
        setIsConfirmationModalOpen(true);  // Tampilkan ConfirmationModal ketika quit
    };

    const confirmQuit = () => {
        setIsConfirmationModalOpen(false);
        navigate('/');  // Navigasi keluar
    };

    const cancelQuit = () => {
        setIsConfirmationModalOpen(false);
    };

    const handleCloseResultModal = () => {
        setIsResultModalOpen(false);
        navigate('/');  // Navigasi ke halaman utama setelah selesai
    };

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-300 flex justify-center items-center p-6"
            initial={{ opacity: 0 }}  // Set initial opacity to 0
            animate={{ opacity: 1 }}  // Animate opacity to 1
            transition={{ duration: 1 }}  // Set duration of the fade-in effect
        >
            <motion.div
                className="quiz-section max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10 relative"
                initial={{ opacity: 0 }}  // Set initial opacity to 0
                animate={{ opacity: 1 }}  // Animate opacity to 1
                transition={{ duration: 1 }}  // Set duration of the fade-in effect
            >
                <div className="flex justify-between mb-4">
                    <div className="flex items-center bg-blue-100 text-blue-800 py-2 px-4 rounded shadow">
                        <TrophyOutlined className="mr-2" />
                        <span>{score} Poin</span>
                    </div>
                    <div className="bg-blue-100 text-blue-800 py-2 px-4 rounded shadow">
                        <div className="flex items-center">
                            <QuestionCircleOutlined className="mr-2" />
                            <span>Pertanyaan {currentQuestionIndex + 1} dari {numQuestions}</span>
                        </div>
                    </div>
                </div>

                {/* Soal dengan animasi transisi */}
                <motion.div
                    key={currentQuestionIndex}  // Tambahkan key berdasarkan indeks soal
                    initial={{ opacity: 0, x: -100 }}  // Soal masuk dari kiri
                    animate={{ opacity: 1, x: 0 }}  // Soal bergerak ke posisi normal
                    exit={{ opacity: 0, x: 100 }}  // Soal keluar ke kanan
                    transition={{
                        type: 'spring',
                        stiffness: 200,  // Mengurangi stiffness untuk animasi yang lebih lambat
                        damping: 50,  // Meningkatkan damping untuk membuat pergerakan lebih halus
                        duration: 1  // Durasi animasi lebih lama
                    }} 
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        {shuffledQuestions[currentQuestionIndex].question}
                    </h2>

                    {shuffledQuestions[currentQuestionIndex].mediaType && (
                        <div className="media-content mb-4 flex justify-center items-center">
                            {shuffledQuestions[currentQuestionIndex].mediaType === 'image' && (
                                <img
                                    src={shuffledQuestions[currentQuestionIndex].mediaSrc}
                                    alt="Question related"
                                    className="w-full max-w-[80%] h-auto" // Ensure the image is centered and properly sized
                                />
                            )}
                            {shuffledQuestions[currentQuestionIndex].mediaType === 'video' && (
                                <video controls className="w-full max-w-[80%] h-auto">
                                    <source src={shuffledQuestions[currentQuestionIndex].mediaSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                            {shuffledQuestions[currentQuestionIndex].mediaType === 'audio' && (
                                <audio controls className="w-full max-w-[80%]">
                                    <source src={shuffledQuestions[currentQuestionIndex].mediaSrc} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            )}
                        </div>
                    )}
                </motion.div>

                <div className="option-list flex flex-col mb-4">
                    {shuffledQuestions[currentQuestionIndex].options.map((option, index) => {
                        const isCorrect = option === shuffledQuestions[currentQuestionIndex].answer;
                        const isSelected = option === selectedAnswer;

                        return (
                            <button
                                key={index}
                                onClick={() => !answered && handleAnswer(option)}
                                className={`py-3 rounded mb-2 transition duration-300 ${answered
                                    ? isSelected
                                        ? isCorrect
                                            ? 'bg-green-500 text-white'
                                            : 'bg-red-500 text-white'
                                        : isCorrect
                                        ? 'bg-green-500 text-white'
                                        : 'bg-blue-500 text-white'
                                    : 'bg-blue-500 text-white hover:bg-blue-600'
                                }`}
                                disabled={answered}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>

                <div className="flex justify-end mt-4 space-x-2">
                    <button
                        onClick={handleQuit}
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 flex items-center gap-x-2"
                    >
                        Keluar
                        <LogoutOutlined className="mr-2" />
                    </button>

                    <button
                        onClick={handleNext}
                        className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 flex items-center gap-x-2 ${
                            !answered ? 'cursor-not-allowed' : ''
                        }`}
                        disabled={!answered}
                    >
                        Berikutnya
                        <RightCircleOutlined className="mr-2" />
                    </button>
                </div>

                {/* Confirmation Modal untuk quit */}
                <ConfirmationModal
                    isOpen={isConfirmationModalOpen}
                    onClose={cancelQuit}
                    onConfirm={confirmQuit}
                />

                {/* Result Modal yang muncul setelah pertanyaan terakhir */}
                <ResultModal
                    isOpen={isResultModalOpen}
                    onClose={handleCloseResultModal}
                    score={score}
                    totalQuestions={numQuestions}
                />
            </motion.div>
        </motion.div>
    );
};

export default Quiz;
