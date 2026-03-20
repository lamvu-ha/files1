# CryptoHash Demo — SHA-256 Visualizer
**Dự án Sinh viên Nghiên cứu Khoa học (SVNCKH) 2025**

Nền tảng giáo dục tương tác nhằm minh họa các tính chất toán học của hàm băm mật mã SHA-256 — cốt lõi của bảo mật blockchain hiện đại. Dự án được xây dựng với cấu trúc chuyên nghiệp, tích hợp Backend Node.js và Frontend React (Vite).

## Kiến trúc Hệ thống

```text
[Frontend — React + Vite]
        ↓ Gọi REST API hoặc Server-Sent Events (SSE)
[Backend — Node.js Express (server.js)] 
        ↓ Khởi tạo SHA-256 / Proof of Work (Mô phỏng)
[In-Memory Blockchain State]
```
*(Dự án cũng hỗ trợ fallback tính toán SHA-256 trực tiếp trên trình duyệt thông qua Web Crypto API nếu không chạy Backend).*

## Cấu trúc Thư mục

Dự án đã được phân rã thao chuẩn Feature-based (Modules) để dễ bảo trì và mở rộng:

```text
blockedu-pro/
├── package.json              ← Chứa cấu hình scripts và thư viện
├── vite.config.js            ← Cấu hình Vite build tool
├── server.js                 ← Node.js Backend API (Gateway)
├── index.html                ← File HTML gốc
├── src/                      ← TẤT CẢ CODE GIAO DIỆN
│   ├── main.jsx              ← React Bootstrapper
│   ├── App.jsx               ← Điều hướng chính (Navigation + Theme)
│   ├── views/                ← Các trang (Home, Demo, Mining, About, Team)
│   ├── components/           ← Components dùng chung (BlockchainCanvas...)
│   ├── data/                 ← Trích xuất dữ liệu tĩnh (Ngôn ngữ, JSON...)
│   ├── utils/                ← Hàm tiện ích (Tính MD5/SHA, gọi API...)
│   └── styles/               ← CSS Toàn trang
└── java-core/                ← (Tùy chọn) Java Backend riêng lẻ
```

---

## Hướng dẫn Cài đặt & Chạy

### Cài đặt ban đầu
Vì dự án nay sử dụng Vite làm công cụ build (bundler), bạn cần phải cài đặt module một lần duy nhất:
```bash
npm install
```

### Chạy ở môi trường Phát triển (Development)
Để có thể chạy hoàn hảo, bạn cần chạy song song cả Backend và Frontend:

**Terminal 1 (Chạy Backend):**
```bash
npm run server
# App lắng nghe ở http://localhost:3001
```

**Terminal 2 (Chạy Frontend Vite):**
```bash
npm run dev
# Vite sẽ khởi chạy tự động ở http://localhost:5173 
# (Tất cả gọi API tự động proxy sang Backend localhost:3001)
```

### Triển khai (Production Build)
Khi bạn muốn đóng gói frontend để host lên các Vercel/Netlify hoặc nhúng thẳng file tĩnh vào Node Server:
```bash
npm run build
```

---

## Tính năng chính
- 🔐 **SHA-256 Visualizer** — Nhập văn bản hiển thị băm tính realtime.
- 🌊 **Avalanche Effect** — Thay đổi 1 ký tự, xem ~50% hash thay đổi ngẫu nhiên.
- 📏 **Fixed-Length Output** — Trực quan mọi data (từ "A" đến 1 đoạn văn dài) đều ra đúng 64 ký tự hex.
- ⛓ **Blockchain Simulator** — Mô phỏng cơ chế PoW khôi phục/mô phỏng tấn công.
- 📊 **Difficulty Lab** — Trực quan việc điều chỉnh độ khó khai thác khối.
- 🌐 **Đa ngôn ngữ** — Hỗ trợ 2 ngôn ngữ (English / Tiếng Việt).
- 🌓 **Giao diện đa sắc** — Hỗ trợ Light / Dark Mode mượt mà.

## API Endpoints (của Node.js Backend)
| Method | Path | Mô tả |
|--------|------|-------|
| GET | `/api/chain` | Lấy toàn bộ mảng JSON blockchain |
| POST | `/api/block/add` | Thêm block mới (auto mine) |
| POST | `/api/block/tamper` | Chỉnh sửa data độc hại để phá vỡ Block |
| POST | `/api/block/restore` | Re-mine khôi phục toàn bộ chain |
| POST | `/api/hash` | Tính SHA-256 API fallback |
| POST | `/api/difficulty` | Tùy chỉnh độ khó của mạng (1-5) |
| POST | `/api/reset` | Khôi phục chain về trạng thái Genesis |
