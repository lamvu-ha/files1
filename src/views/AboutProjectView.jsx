import React from 'react';
import { LANG } from '../data/lang.js';

export default function AboutProjectView({ lang = "vi" }) {
  const t = LANG[lang].about;
  const isVi = lang === "vi";

  return (
    <div className="page" style={{ paddingBottom: 80 }}>
      {/* Hero Section */}
      <div className="section" style={{ paddingTop: 60, paddingBottom: 40, borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", animation: "fadeInUp 0.6s ease" }}>
          <div style={{ display: "inline-block", fontSize: 13, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--cyan)", marginBottom: 16 }}>
            {t.badge}
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 24, color: "var(--text)", lineHeight: 1.1 }}>
            {t.title}
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--text2)", lineHeight: 1.8, maxWidth: 760, margin: "0 auto" }}>
            {t.desc}
          </p>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 60 }}>
        {/* Features / Content Grid */}
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 4, height: 24, background: "var(--cyan)", borderRadius: 2 }}></div>
            {isVi ? "Các Nội Dung Trực Quan Hóa" : "Visualized Contents"}
          </h2>
          <div className="grid-3" style={{ gap: 24 }}>
            {[
              {
                title: isVi ? "Minh họa SHA-256" : "SHA-256 Demo",
                desc: isVi ? "Trình diễn trực tiếp quá trình băm dữ liệu theo thời gian thực. Bất kỳ ký tự nào được nhập đều trả về kết quả 256-bit cố định." : "Real-time data hashing demonstration. Any input character returns a fixed 256-bit result.",
                color: "var(--cyan)"
              },
              {
                title: isVi ? "Hiệu ứng Avalanche" : "Avalanche Effect",
                desc: isVi ? "Phân tích mức độ thay đổi của luồng bit. Chỉ một sự thay đổi nhỏ nhắn ở đầu vào sẽ làm xáo trộn hoàn toàn đầu ra." : "Bit-stream change analysis. A tiny change in input completely scrambles the output.",
                color: "var(--purple)"
              },
              {
                title: isVi ? "Giả lập Khai thác khối" : "Mining Simulator",
                desc: isVi ? "Trải nghiệm cơ chế Proof-of-Work. Tìm kiếm giá trị Nonce phù hợp để tạo ra mã băm thỏa mãn độ khó của hệ thống mạng." : "Experience Proof-of-Work. Find the valid Nonce to generate a hash that satisfies network difficulty.",
                color: "var(--blue)"
              },
              {
                title: isVi ? "Khám phá Blockchain" : "Blockchain Explorer",
                desc: isVi ? "Mô phỏng một chuỗi khối cơ bản. Can thiệp vào dữ liệu của một khối sẽ làm phá vỡ toàn bộ tính toàn vẹn của các khối phía sau." : "Basic blockchain simulation. Tampering with one block's data breaks the integrity of all subsequent blocks.",
                color: "var(--amber)"
              },
              {
                title: isVi ? "Tùy chỉnh Độ khó" : "Difficulty Customization",
                desc: isVi ? "Minh họa lý do mạng lưới Bitcoin tự động thay đổi độ khó khai thác để duy trì thời gian tạo khối ổn định ở mức 10 phút." : "Illustrates why the Bitcoin network auto-adjusts mining difficulty to maintain a stable 10-minute block time.",
                color: "var(--green)"
              }
            ].map((f, i) => (
              <div key={i} className="card anim-border" style={{ '--glow-color': f.color, padding: 28, animation: `fadeInUp 0.5s ${i * 0.1}s both`, borderTop: `3px solid ${f.color}`, background: "var(--bg2)" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>{f.title}</h3>
                <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>



      </div>
    </div>
  );
}