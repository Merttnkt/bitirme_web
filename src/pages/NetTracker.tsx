import * as React from 'react';

const NetTracker: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h2>Net Takibi</h2>
      <div style={{ marginBottom: '16px' }}>
        <strong>Son 7 Gün Ortalama Net:</strong> 45.3<br />
        <strong>En Yüksek Net:</strong> 52.0 (21 Nisan 2025)
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', boxShadow: '0 2px 8px #eee' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tarih</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Türkçe</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Matematik</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fen</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sosyal</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Toplam Net</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>25 Nisan 2025</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>18</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>15</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>8</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>7</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>48</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>24 Nisan 2025</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>17</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>14</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>7</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>7</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NetTracker;

