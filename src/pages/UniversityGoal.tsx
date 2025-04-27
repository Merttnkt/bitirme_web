import * as React from 'react';

const UniversityGoal: React.FC = () => {
  // Örnek hedef ve puanlar
  const hedef = {
    uni: 'Boğaziçi Üniversitesi',
    bolum: 'Bilgisayar Mühendisliği',
    taban: 530.12,
    puan: 480.50,
  };
  const progress = Math.min(Math.round((hedef.puan / hedef.taban) * 100), 100);

  return (
    <div style={{ padding: '24px', maxWidth: 600, margin: '0 auto' }}>
      <h2>Üniversite Hedefim</h2>
      <div style={{ marginBottom: 16, background: '#e3f2fd', padding: 16, borderRadius: 8, color: '#1976d2' }}>
        <strong>Hedef Üniversite:</strong> {hedef.uni}<br/>
        <strong>Bölüm:</strong> {hedef.bolum}<br/>
        <strong>Taban Puan:</strong> {hedef.taban}
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 4 }}><strong>Senin Puanın:</strong> {hedef.puan}</div>
        <div style={{ background: '#f5f5f5', borderRadius: 8, height: 24, overflow: 'hidden', marginBottom: 8 }}>
          <div style={{ width: `${progress}%`, background: '#1976d2', height: '100%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
            {progress}%
          </div>
        </div>
      </div>
      <div style={{ background: '#fffde7', color: '#f9a825', padding: 12, borderRadius: 8, fontWeight: 500 }}>
        Hedefe ulaşmak için az kaldı! Her gün küçük bir adım, büyük başarılar getirir.
      </div>
    </div>
  );
};

export default UniversityGoal;

