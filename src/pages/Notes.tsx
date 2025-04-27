import * as React from 'react';

const Notes: React.FC = () => {
  // Örnek veri
  const [notes, setNotes] = React.useState([
    { id: 1, subject: 'Matematik', note: 'Türevde zincir kuralı önemli.' },
    { id: 2, subject: 'Fizik', note: 'Newton’un 2. yasası: F=ma.' },
  ]);
  const [subject, setSubject] = React.useState('');
  const [note, setNote] = React.useState('');

  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (subject && note) {
      setNotes([...notes, { id: Date.now(), subject, note }]);
      setSubject('');
      setNote('');
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div style={{ padding: '24px', maxWidth: 600, margin: '0 auto' }}>
      <h2>Notlarım</h2>
      <form onSubmit={addNote} style={{ marginBottom: 20, display: 'flex', gap: 8 }}>
        <input
          type="text"
          placeholder="Ders"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Not"
          value={note}
          onChange={e => setNote(e.target.value)}
          style={{ flex: 2, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 16px', borderRadius: 4, background: '#1976d2', color: '#fff', border: 'none' }}>
          Ekle
        </button>
      </form>
      <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', boxShadow: '0 2px 8px #eee' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Ders</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Not</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Sil</th>
          </tr>
        </thead>
        <tbody>
          {notes.map(n => (
            <tr key={n.id}>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{n.subject}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{n.note}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>
                <button onClick={() => deleteNote(n.id)} style={{ color: '#d32f2f', border: 'none', background: 'none', cursor: 'pointer' }}>Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notes;

