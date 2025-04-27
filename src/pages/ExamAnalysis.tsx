import * as React from 'react';
import SimpleLineChart from '../components/SimpleLineChart';

const ExamAnalysis: React.FC = () => {
  // Örnek grafik verisi (son 6 deneme puanı)
  const graphData = [410, 430, 420, 445, 455, 450];
  const graphLabels = ['Den 1', 'Den 2', 'Den 3', 'Den 4', 'Den 5', 'Den 6'];
  const dersler = [
    { ad: 'Matematik', dogru: 32, yanlis: 7, bos: 1, net: 30.5 },
    { ad: 'Fizik', dogru: 18, yanlis: 4, bos: 3, net: 16 },
    { ad: 'Kimya', dogru: 12, yanlis: 2, bos: 6, net: 11 },
    { ad: 'Türkçe', dogru: 34, yanlis: 5, bos: 1, net: 32.5 },
  ];
  return (
    <div style={{ padding: 24, maxWidth: 600, margin: '0 auto' }}>
      <h2 style={{ color: '#1976d2', fontWeight: 700 }}>Sınav Analizi</h2>
      <div style={{ marginBottom: 20, background: '#e3f2fd', borderRadius: 12, padding: 16 }}>
        <div style={{ fontWeight: 600, color: '#1976d2', marginBottom: 8 }}>Başarı Grafiği</div>
        <SimpleLineChart data={graphData} labels={graphLabels} height={90} color="#1976d2" />
      </div>
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 1px 4px #eee' }}>
        <div style={{ fontWeight: 600, color: '#1976d2', marginBottom: 8 }}>Ders Bazlı Sonuçlar</div>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>Ders</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>Doğru</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>Yanlış</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>Boş</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>Net</th>
            </tr>
          </thead>
          <tbody>
            {dersler.map((d, i) => (
              <tr key={i}>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{d.ad}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{d.dogru}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{d.yanlis}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{d.bos}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{d.net}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExamAnalysis;

