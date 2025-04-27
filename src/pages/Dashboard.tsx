import * as React from 'react';

const Dashboard: React.FC = () => {
  // Mobildeki gibi örnek veriler
  const targetDate = new Date('2025-06-15');
  const today = new Date();
  const daysLeft = Math.ceil((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  const quickAccess = [
    { title: 'Çalışma Planı', color: '#e3f2fd', link: '/study-plan' },
    { title: 'İstatistikler', color: '#fffde7', link: '/statistics' },
    { title: 'Notlar', color: '#fce4ec', link: '/notes' },
    { title: 'Sınav Takibi', color: '#e8f5e9', link: '/exam-tracker' },
    { title: 'Üniversite Hedefi', color: '#ede7f6', link: '/university-goal' },
    { title: 'Konu Performansı', color: '#e3f2fd', link: '/topic-performance' },
    { title: 'Net Takibi', color: '#fff3e0', link: '/net-tracker' },
    { title: 'AI Tavsiyeleri', color: '#e1f5fe', link: '/ai-recommendations' },
    { title: 'Sınav Analizi', color: '#f3e5f5', link: '/exam-analysis' },
  ];
  return (
    <div style={{ padding: 16, maxWidth: 500, margin: '0 auto' }}>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ margin: 0, color: '#1976d2', fontWeight: 700 }}>Hoş Geldiniz</h2>
        <div style={{ color: '#555', fontSize: 16 }}>Bugünkü çalışma planınızı görüntüleyin</div>
      </div>
      <div style={{ marginBottom: 20, background: '#e3f2fd', borderRadius: 12, padding: 16 }}>
        <div style={{ fontWeight: 600, color: '#1976d2', marginBottom: 8 }}>Günlük Özet</div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 8 }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#888', fontSize: 14 }}>Bugünkü Hedef</div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>4 saat</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#888', fontSize: 14 }}>Tamamlanan</div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>2 saat</div>
          </div>
        </div>
        <div style={{ background: '#d1eaff', borderRadius: 8, height: 14, overflow: 'hidden', marginBottom: 4 }}>
          <div style={{ width: '50%', background: '#1976d2', height: '100%' }} />
        </div>
      </div>
      <div style={{ marginBottom: 20, background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 1px 4px #eee' }}>
        <div style={{ fontWeight: 600, color: '#1976d2', marginBottom: 8 }}>Yaklaşan Sınavlar</div>
        <div style={{ fontWeight: 700, fontSize: 16 }}>TYT Deneme Sınavı</div>
        <div style={{ color: '#888', fontSize: 14 }}>20 Mart 2024</div>
        <div style={{ color: '#f44336', fontWeight: 600, marginTop: 4 }}>3 gün kaldı</div>
      </div>
      <div style={{ marginBottom: 20, background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 1px 4px #eee' }}>
        <div style={{ fontWeight: 600, color: '#1976d2', marginBottom: 8 }}>Performans Özeti</div>
        <div style={{ fontWeight: 700, fontSize: 16 }}>Son Sınav Sonucu</div>
        <div style={{ color: '#388e3c', fontWeight: 700, fontSize: 22 }}>450</div>
        <div style={{ color: '#888', fontSize: 14 }}>Hedef: 480</div>
      </div>
      <div style={{ marginBottom: 10, fontWeight: 600, color: '#1976d2' }}>Hızlı Erişim</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {quickAccess.map((item, i) => (
          <a key={i} href={item.link} style={{
            flex: '1 1 45%',
            background: item.color,
            borderRadius: 10,
            padding: 12,
            marginBottom: 8,
            color: '#222',
            textDecoration: 'none',
            textAlign: 'center',
            fontWeight: 500,
            boxShadow: '0 1px 4px #eee',
            fontSize: 15,
            minWidth: 120,
          }}>{item.title}</a>
        ))}
      </div>
      <div style={{ marginTop: 24, background: '#e3f2fd', borderRadius: 12, padding: 12, color: '#1976d2', fontWeight: 500, textAlign: 'center' }}>
        Hedef sınavına <span style={{ fontWeight: 700 }}>{daysLeft}</span> gün kaldı! Başarıya ulaşmak için planlı çalışmaya devam et.
      </div>
    </div>
  );
};

export default Dashboard;

