import * as React from 'react';

const AiRecommendations: React.FC = () => {
  const recommendations = [
    {
      title: 'Düzenli Çalışma',
      desc: 'Her gün belirli saatlerde çalışmak, alışkanlık kazanmanı kolaylaştırır.'
    },
    {
      title: 'Kısa Molalar',
      desc: 'Her 40 dakikada bir 5-10 dakikalık mola vererek verimliliğini artırabilirsin.'
    },
    {
      title: 'Zor Konuları Önceliklendir',
      desc: 'En çok zorlandığın konulara öncelik vererek gelişimini hızlandır.'
    },
    {
      title: 'Deneme Sınavı Analizi',
      desc: 'Her denemeden sonra yanlışlarını analiz et ve tekrar et.'
    },
    {
      title: 'Sağlıklı Yaşam',
      desc: 'Yeterli uyku, dengeli beslenme ve egzersiz başarıyı destekler.'
    },
  ];

  return (
    <div style={{ padding: '24px', maxWidth: 600, margin: '0 auto' }}>
      <h2>AI Tavsiyeleri</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {recommendations.map((rec, i) => (
          <div key={i} style={{ background: '#e3f2fd', padding: 16, borderRadius: 8, boxShadow: '0 1px 4px #eee' }}>
            <strong style={{ color: '#1976d2' }}>{rec.title}</strong>
            <div style={{ color: '#333', marginTop: 4 }}>{rec.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiRecommendations;

