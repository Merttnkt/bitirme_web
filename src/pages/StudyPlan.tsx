import * as React from 'react';

const StudyPlan: React.FC = () => {
  return (
    <div style={{ padding: '24px', maxWidth: 600, margin: '0 auto' }}>
      <h2>Haftalık Çalışma Planı</h2>
      <div style={{ marginBottom: '16px', background: '#e3f2fd', padding: '12px', borderRadius: '8px', color: '#1976d2' }}>
        <strong>AI Önerisi:</strong> Bu hafta Matematik ve Türkçe'ye ağırlık ver. Her gün en az 2 deneme çözmeyi unutma!
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', boxShadow: '0 2px 8px #eee' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Gün</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ders</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hedef Süre (dk)</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Not</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pazartesi</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Matematik</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>120</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Konu tekrarı</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Salı</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Türkçe</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>90</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Paragraf testi</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Çarşamba</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fen</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>60</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Deneme sınavı</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudyPlan;

