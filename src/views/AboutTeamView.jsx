import React from 'react';
import { LANG } from '../data/lang.js';
import { TEAM_DATA, SUPERVISOR_DATA } from '../data/team.js';

export default function AboutTeamView({ lang = "vi" }) {
  const t = LANG[lang].team;
  const isVi = lang === "vi";
  
  // Combine all members to show them on the same level
  // Mapping SUPERVISOR_DATA to match TEAM_DATA model
  const combinedMembers = [
    {
      name: SUPERVISOR_DATA.name,
      roleVi: SUPERVISOR_DATA.titleVi,
      roleEn: SUPERVISOR_DATA.titleEn,
      avatar: SUPERVISOR_DATA.avatar,
      descVi: SUPERVISOR_DATA.descVi,
      descEn: SUPERVISOR_DATA.descEn,
      color: "var(--purple)"
    },
    ...TEAM_DATA
  ];

  return (
    <div className="page">
      <style>{`
        .carousel-container {
          overflow-x: hidden;
          padding: 20px 0;
          position: relative;
          width: 100%;
        }
        .carousel-track {
          display: flex;
          gap: 20px;
          animation: scroll 25s linear infinite;
          width: max-content;
        }
        .carousel-container:hover .carousel-track {
          animation-play-state: paused;
        }
        .carousel-card {
          width: 320px;
          flex-shrink: 0;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }
      `}</style>
      <div className="section" style={{ paddingBottom: 0 }}>
        <div style={{ marginBottom: 40, animation: "fadeInUp 0.5s ease" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32, animation: "fadeInUp 0.5s ease" }}>
            {/* HUB Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: 12, flex: "1 1 300px" }}>
              <img src="/images/logo_hub.png" alt="HUB" style={{ height: 60, borderRadius: 6, objectFit: "contain" }} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--cyan)", marginBottom: 4 }}>{t.uni}</div>
                <div style={{ fontSize: 12, color: "var(--text3)" }}>Ho Chi Minh University of Banking (HUB) · Est. 1976</div>
              </div>
            </div>
            
            {/* Faculty Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: "rgba(192,132,252,0.06)", border: "1px solid rgba(192,132,252,0.2)", borderRadius: 12, flex: "1 1 300px" }}>
              <div style={{ width: 60, height: 60, borderRadius: 6, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                <img src="/images/logo_khoa.png" alt="Faculty Logo" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling && (e.target.nextSibling.style.display = 'block') }} />
                {/* Fallback text if image not found */}
                <div style={{ display: "none", fontSize: 10, textAlign: "center", color: "var(--text3)", padding: 4 }}>Logo<br/>Khoa</div>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--purple)", marginBottom: 4 }}>{t.faculty}</div>
                <div style={{ fontSize: 12, color: "var(--text3)" }}>{t.uniShort}</div>
              </div>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 12, animation: "fadeInUp 0.5s 0.1s both" }}>{t.title}</h1>
          <p style={{ fontSize: 16, color: "var(--text2)", maxWidth: 600, lineHeight: 1.8, animation: "fadeInUp 0.5s 0.1s both" }}>{t.desc}</p>
        </div>

        {/* Team members Carousel */}
        <div className="carousel-container" style={{ animation: "fadeInUp 0.5s 0.2s both" }}>
          <div className="carousel-track">
            {[...combinedMembers, ...combinedMembers].map((m, i) => (
              <div key={i} className="card carousel-card anim-border" style={{ '--glow-color': m.color, transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                  <img src={m.avatar} alt={m.name} style={{ width: 64, height: 64, borderRadius: 14, objectFit: "cover", border: `2px solid ${m.color}66`, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 2 }}>{m.name}</div>
                    <div style={{ fontSize: 12, color: m.color, fontWeight: 600 }}>{isVi ? m.roleVi : m.roleEn}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.7 }}>{isVi ? m.descVi : m.descEn}</p>
              </div>
            ))}
          </div>
        </div>


        
        {/* Competition Context */}
        <div style={{ display: "flex", justifyContent: "center", animation: "fadeInUp 0.6s 0.5s both" }}>
          <div style={{ background: "linear-gradient(to right, rgba(34, 211, 238, 0.05), rgba(59, 130, 246, 0.05))", border: "1px solid rgba(34, 211, 238, 0.2)", borderRadius: 16, padding: "32px 48px", maxWidth: 800, textAlign: "center" }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>{t.competition}</h3>
            <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.8 }}>
              {t.compDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}