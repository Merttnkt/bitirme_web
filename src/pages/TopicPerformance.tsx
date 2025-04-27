import * as React from 'react';

const TopicPerformance: React.FC = () => {
  // Örnek veri
  const topics = [
    { name: 'Matematik - Fonksiyonlar', solved: 120, correct: 100, wrong: 15, blank: 5 },
    { name: 'Fizik - Hareket', solved: 60, correct: 45, wrong: 10, blank: 5 },
    { name: 'Türkçe - Paragraf', solved: 80, correct: 70, wrong: 7, blank: 3 },
    { name: 'Kimya - Asitler', solved: 50, correct: 40, wrong: 8, blank: 2 },
  ];

  return (
    <div style={{ padding: '24px', maxWidth: 800, margin: '0 auto' }}>
      <h2>Konu Performansı</h2>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        <div style={{ flex: 1, minWidth: 220, background: '#e3f2fd', borderRadius: 8, padding: 16, color: '#1976d2', fontWeight: 500 }}>
          Son 7 Gün Toplam Çözülen Soru: <span style={{ fontWeight: 700 }}>{topics.reduce((a, t) => a + t.solved, 0)}</span>
        </div>
        <div style={{ flex: 1, minWidth: 220, background: '#fffde7', borderRadius: 8, padding: 16, color: '#f9a825', fontWeight: 500 }}>
          En Başarılı Konu: <span style={{ fontWeight: 700 }}>{topics[0].name}</span>
        </div>
      </div>
      <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', boxShadow: '0 2px 8px #eee' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Konu</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Çözülen Soru</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Doğru</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Yanlış</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Boş</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((t, i) => (
            <tr key={i}>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{t.name}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{t.solved}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{t.correct}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{t.wrong}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{t.blank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopicPerformance;

