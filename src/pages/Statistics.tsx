import * as React from 'react';

const Statistics: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h2>İstatistikler</h2>
      <div style={{ marginBottom: '16px' }}>
        <strong>Toplam Çalışılan Gün:</strong> 24<br />
        <strong>Toplam Soru Çözümü:</strong> 3200<br />
        <strong>En İyi Gün:</strong> 18 Nisan 2025 (420 soru)
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', boxShadow: '0 2px 8px #eee' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tarih</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Çözülen Soru</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Çalışılan Süre (dk)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>25 Nisan 2025</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>150</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>180</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>24 Nisan 2025</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>120</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>160</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>23 Nisan 2025</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>90</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>120</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;

