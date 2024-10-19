import React from 'react';
import { Circle, ChevronRight } from 'lucide-react';
import styles from "./map.module.css";
import viteLogo from '/vite.svg';

interface IMap {
    lessons: any
}
const LearningPathMap = ({ lessons }: IMap) => {
  const pathPoints = lessons.map((_: any, index: number) => {
    const x = 200 + (index % 2 === 0 ? 0 : (index % 4 === 1 ? 50 : -50));
    const y = 50 + index * 100;
    return `${x},${y}`;
  }).join(' ');
  const current = 3;

  return (
    // <div className={styles.ccc}>
      <div className={styles.container}>
        {lessons.map((lesson: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-center w-16 h-16 mb-20 relative"
            style={{
              marginLeft: index % 2 === 0 ? 0 : (index % 4 === 1 ? '50px' : '-50px'),
            }}
          >
            <div>
            <div 
              className={current === index ? styles.current :  (
                lesson.completed ? styles.green : styles.not_avalaible)
                
        }
            />
            <p style={{position: "absolute", left: "50%", bottom: "50%", zIndex: 2}}>✅</p>
            </div>
            <span className={styles.index}>{index + 1}</span>
           
          </div>
        ))}
       </div>
    //  </div>
  );
};

const DuolingoStyleMap = () => {
  const lessons = [
    { completed: true },
    { completed: true },
    { completed: false },
    { completed: false },
    { completed: false },
    { completed: false },
    { completed: false },
  
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      <h2 className="mb-4 text-2xl font-bold text-center text-green-600">
        Ваш предстоящий путь
      </h2>
      <LearningPathMap lessons={lessons} />
    </div>
  );
};

export default DuolingoStyleMap;