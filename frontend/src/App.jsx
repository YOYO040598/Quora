import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/questions/')
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-red-700">Quora Clone</h1>
      {questions.map(q => (
        <div key={q.id} className="p-4 border-b">
          <h2 className="text-xl font-semibold">{q.title}</h2>
          <p className="text-gray-600">{q.content}</p>
        </div>
      ))}
    </div>
  );
}