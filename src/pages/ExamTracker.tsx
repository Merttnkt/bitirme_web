import * as React from 'react';

const ExamTracker: React.FC = () => {
  const [exams, setExams] = React.useState([
    { id: 1, name: 'TYT Deneme 1', date: '2025-04-10' },
    { id: 2, name: 'AYT Deneme 1', date: '2025-04-18' },
  ]);
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState('');

  const addExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && date) {
      setExams([...exams, { id: Date.now(), name, date }]);
      setName('');
      setDate('');
    }
  };

  const deleteExam = (id: number) => {
    setExams(exams.filter(exam => exam.id !== id));
  };

  return (
    <div style={{ padding: '24px', maxWidth: 600, margin: '0 auto' }}>
      <h2>Sınav Takibi</h2>
      <form onSubmit={addExam} style={{ marginBottom: 20, display: 'flex', gap: 8 }}>
        <input
          type="text"
          placeholder="Sınav Adı"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ flex: 2, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 16px', borderRadius: 4, background: '#1976d2', color: '#fff', border: 'none' }}>
          Ekle
        </button>
      </form>
      <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', boxShadow: '0 2px 8px #eee' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Sınav Adı</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Tarih</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Sil</th>
          </tr>
        </thead>
        <tbody>
          {exams.map(exam => (
            <tr key={exam.id}>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{exam.name}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{exam.date}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>
                <button onClick={() => deleteExam(exam.id)} style={{ color: '#d32f2f', border: 'none', background: 'none', cursor: 'pointer' }}>Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamTracker;

