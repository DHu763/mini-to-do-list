# 📝 Mini Todo List Web App

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> Một ứng dụng quản lý công việc (Todo List) tinh gọn, đẹp mắt và trực quan, được xây dựng hoàn toàn bằng **HTML5, CSS3 và Vanilla JavaScript**. Dự án được thiết kế chuẩn mực cho mục đích học tập và thực hành các thao tác DOM cơ bản, quản lý mảng Object và xử lý sự kiện trong lập trình web frontend.

---

## 🌟 Tính Năng Nổi Bật (Core Features)

### 1. ➕ Thêm công việc mới
- Nhập tên công việc và thêm bằng nút **"Thêm"** hoặc phím **Enter**.
- **Validation**: Báo lỗi trực quan khi bỏ trống hoặc nhập toàn dấu cách.
- Tự động dọn sạch ô nhập liệu và `focus()` lại ngay sau khi thêm.

### 2. 📋 Hiển thị danh sách động (Dynamic Rendering)
- Render danh sách công việc trực tiếp từ mảng đối tượng JavaScript (`Array of Objects`).
- Mỗi mục hiển thị đầy đủ: Checkbox trạng thái, Tên công việc, Nút Sửa, Nút Xóa.
- Hiển thị thông báo thân thiện khi danh sách trống.

### 3. ✅ Đánh dấu hoàn thành
- Tích chọn checkbox để chuyển đổi trạng thái hoàn thành / chưa hoàn thành.
- Áp dụng hiệu ứng gạch ngang (`line-through`) và giảm độ tương phản chữ.
- Đồng bộ ngay lập tức trạng thái trong mảng dữ liệu và số liệu thống kê.

### 4. ✏️ Chỉnh sửa công việc (Inline Edit)
- Chuyển đổi dòng công việc thành ô nhập trực tiếp cùng nút **"Lưu"** và **"Hủy"**.
- Hỗ trợ phím tắt tiện lợi:
  - Nhấn `Enter` để **Lưu**.
  - Nhấn `Escape` để **Hủy**.
- Kiểm tra tính hợp lệ (không cho phép lưu chuỗi rỗng).

### 5. 🗑️ Xóa công việc an toàn
- Hộp thoại xác nhận (`confirm dialog`) trước khi xóa để tránh thao tác nhầm lẫn.
- Cập nhật và vẽ lại danh sách mượt mà.

### 6. 📊 Thống kê tiến độ & Badge chúc mừng
- Bộ đếm thời gian thực: `Số việc đã hoàn thành / Tổng số việc`.
- Khi hoàn thành tất cả công việc (100% tiến độ): Tự động kích hoạt Badge **`✓ Hoàn thành tất cả!`** cùng hiệu ứng hoạt họa (`popIn animation`) sinh động.

---

## 📁 Cấu Trúc Dự Án (Project Structure)

```text
mini-to-do-list/
├── index.html       # Khung giao diện HTML5 chuẩn ngữ nghĩa
├── style.css        # Định dạng giao diện hiện đại, responsive và animation
├── script.js        # Logic xử lý nghiệp vụ, mảng và DOM JavaScript
├── .gitignore       # Loại bỏ các file tạm, file hệ thống khỏi Git
├── LICENSE          # Giấy phép mã nguồn mở MIT
└── README.md        # Tài liệu hướng dẫn chi tiết dự án
```

---

## 🚀 Hướng Dẫn Chạy Cục Bộ (Getting Started)

Dự án sử dụng công nghệ web thuần, **không cần cài đặt Node.js hay thư viện ngoài**:

1. **Clone repository về máy:**
   ```bash
   git clone https://github.com/DHu763/mini-to-do-list.git
   ```
2. **Mở thư mục dự án:**
   ```bash
   cd mini-to-do-list
   ```
3. **Chạy ứng dụng:**
   - Nhấp đúp vào file `index.html` để mở trực tiếp trên bất kỳ trình duyệt nào (Chrome, Edge, Firefox,...).
   - Hoặc mở bằng VS Code và dùng extension **Live Server** (chuột phải vào `index.html` chọn *Open with Live Server*).

---

## 🌐 Bật GitHub Pages (Xem Trực Tuyến Miễn Phí)

Bạn có thể xuất bản ứng dụng lên mạng thông qua GitHub Pages:
1. Vào repository trên GitHub: [https://github.com/DHu763/mini-to-do-list](https://github.com/DHu763/mini-to-do-list)
2. Chọn tab **Settings** ⚙️ -> Mục **Pages** (ở menu bên trái).
3. Tại phần **Build and deployment** -> **Branch**:
   - Chọn nhánh `main` và thư mục `/ (root)`.
   - Nhấn **Save**.
4. Sau khoảng 1-2 phút, trang web của bạn sẽ hoạt động trực tiếp tại địa chỉ:
   ```
   https://dhu763.github.io/mini-to-do-list/
   ```

---

## 👨‍💻 Tác Giả (Author)

- GitHub: [@DHu763](https://github.com/DHu763)
- Dự án: [mini-to-do-list](https://github.com/DHu763/mini-to-do-list)

---

## 📄 Bản Quyền (License)

Dự án được phát hành theo giấy phép mã nguồn mở [MIT License](LICENSE).
