const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const errorMsg = document.getElementById("error-msg");
const taskList = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");
const completedCountSpan = document.getElementById("completed-count");
const totalCountSpan = document.getElementById("total-count");
const allCompletedBadge = document.getElementById("all-completed-badge");


function renderTasks() {
    taskList.innerHTML = "";
    if (tasks.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }
    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.className = "task-item";
        
        if (task.completed) {
            li.classList.add("is-completed");
        }

        if (editingTaskId === task.i
            li.innerHTML = `
                <div class="edit-form">
                    <input 
                        type="text" 
                        class="edit-input" 
                        id="input-edit-${task.id}" 
                        value="${task.text}" 
                    />
                    <button class="btn btn-save" onclick="saveEdit(${task.id})">Lưu</button>
                    <button class="btn btn-cancel" onclick="cancelEdit()">Hủy</button>
                </div>
            `;
        } else {
            // --- GIAO DIỆN BÌNH THƯỜNG (Chức năng 2 & 3) ---
            li.innerHTML = `
                <div class="task-left">
                    <input 
                        type="checkbox" 
                        class="task-checkbox" 
                        ${task.completed ? "checked" : ""} 
                        onchange="toggleTaskComplete(${task.id})"
                    />
                    <span class="task-text" onclick="toggleTaskComplete(${task.id})">${task.text}</span>
                </div>
                <div class="task-actions">
                    <button class="btn btn-edit" onclick="startEdit(${task.id})">Sửa</button>
                    <button class="btn btn-delete" onclick="deleteTask(${task.id})">Xóa</button>
                </div>
            `;
        }

        // Thêm thẻ <li> vừa tạo vào danh sách <ul>
        taskList.appendChild(li);
    });

    // Nếu đang ở chế độ sửa, tự động focus vào ô input sửa và bắt sự kiện phím Enter/Escape
    if (editingTaskId !== null) {
        const editInputElement = document.getElementById(`input-edit-${editingTaskId}`);
        if (editInputElement) {
            editInputElement.focus();
            // Đặt con trỏ văn bản về cuối dòng
            editInputElement.setSelectionRange(editInputElement.value.length, editInputElement.value.length);

            // Bắt sự kiện phím: Enter để lưu, Escape để hủy (Chức năng 4)
            editInputElement.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    saveEdit(editingTaskId);
                } else if (event.key === "Escape") {
                    cancelEdit();
                }
            });
        }
    }

    // 4. Cập nhật lại số liệu thống kê ở Footer (Chức năng 6)
    updateFooter();
}

// ==============================================================================
// 4. CHỨC NĂNG 1: THÊM CÔNG VIỆC MỚI
// ==============================================================================
/**
 * Hàm thêm công việc mới vào mảng
 */
function handleAddTask() {
    // Lấy nội dung người dùng nhập và xóa khoảng trắng thừa ở 2 đầu bằng .trim()
    const taskName = taskInput.value.trim();

    // Validate: Không cho phép thêm công việc rỗng
    if (taskName === "") {
        errorMsg.textContent = "⚠️ Vui lòng nhập tên công việc, không được để trống!";
        taskInput.focus();
        return; // Dừng lại không thực hiện tiếp
    }

    // Nếu có nội dung hợp lệ thì xóa thông báo lỗi
    errorMsg.textContent = "";

    // Tạo một đối tượng công việc mới
    const newTask = {
        id: Date.now(),      // Tạo id duy nhất dựa vào thời gian hiện tại
        text: taskName,      // Tên công việc người dùng nhập
        completed: false     // Mặc định công việc mới là chưa hoàn thành
    };

    // Thêm công việc mới vào mảng tasks
    tasks.push(newTask);

    // Xóa nội dung trong ô input sau khi thêm thành công
    taskInput.value = "";

    // Tự động focus vào ô input để người dùng tiếp tục nhập công việc tiếp theo
    taskInput.focus();

    // Cập nhật lại danh sách hiển thị trên màn hình
    renderTasks();
}

// Lắng nghe sự kiện click nút "Thêm"
addBtn.addEventListener("click", handleAddTask);

// Lắng nghe sự kiện nhấn phím Enter trên ô input
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleAddTask();
    }
});

// Khi người dùng bắt đầu gõ phím vào ô input, xóa thông báo lỗi
taskInput.addEventListener("input", function () {
    if (taskInput.value.trim() !== "") {
        errorMsg.textContent = "";
    }
});

// ==============================================================================
// 5. CHỨC NĂNG 3: ĐÁNH DẤU HOÀN THÀNH
// ==============================================================================
/**
 * Đổi trạng thái hoàn thành (true <-> false) của công việc theo id
 */
function toggleTaskComplete(id) {
    // Tìm công việc trong mảng theo id
    const task = tasks.find(function (item) {
        return item.id === id;
    });

    if (task) {
        // Đảo ngược trạng thái completed (nếu true thành false, nếu false thành true)
        task.completed = !task.completed;

        // Render lại giao diện để áp dụng style gạch ngang và cập nhật số đếm
        renderTasks();
    }
}

// ==============================================================================
// 6. CHỨC NĂNG 4: SỬA CÔNG VIỆC
// ==============================================================================
/**
 * Bắt đầu chuyển sang chế độ sửa cho công việc có ID tương ứng
 */
function startEdit(id) {
    editingTaskId = id;
    renderTasks();
}

/**
 * Hủy bỏ chế độ sửa, quay lại trạng thái bình thường
 */
function cancelEdit() {
    editingTaskId = null;
    renderTasks();
}

/**
 * Lưu nội dung công việc sau khi chỉnh sửa
 */
function saveEdit(id) {
    const editInput = document.getElementById(`input-edit-${id}`);
    if (!editInput) return;

    const newText = editInput.value.trim();

    // Validate: Không cho phép lưu nội dung rỗng
    if (newText === "") {
        alert("⚠️ Tên công việc không được để trống!");
        editInput.focus();
        return;
    }

    // Tìm công việc trong mảng và cập nhật tên mới
    const task = tasks.find(function (item) {
        return item.id === id;
    });

    if (task) {
        task.text = newText;
    }

    // Thoát khỏi chế độ sửa
    editingTaskId = null;

    // Render lại danh sách
    renderTasks();
}

// ==============================================================================
// 7. CHỨC NĂNG 5: XÓA CÔNG VIỆC
// ==============================================================================
/**
 * Xóa công việc ra khỏi mảng sau khi xác nhận
 */
function deleteTask(id) {
    // Tìm công việc cần xóa để lấy tên hiển thị trong thông báo
    const task = tasks.find(function (item) {
        return item.id === id;
    });

    const taskName = task ? `"${task.text}"` : "công việc này";

    // Hiển thị hộp thoại xác nhận trước khi xóa
    const isConfirm = confirm(`Bạn có chắc chắn muốn xóa ${taskName} không?`);

    if (isConfirm) {
        // Lọc bỏ công việc có id đã chọn ra khỏi mảng
        tasks = tasks.filter(function (item) {
            return item.id !== id;
        });

        // Nếu công việc đang sửa bị xóa thì đặt lại editingTaskId về null
        if (editingTaskId === id) {
            editingTaskId = null;
        }

        // Render lại danh sách sau khi xóa
        renderTasks();
    }
}

// ==============================================================================
// 8. CHỨC NĂNG 6: CẬP NHẬT FOOTER VÀ BADGE HOÀN THÀNH TẤT CẢ
// ==============================================================================
/**
 * Đếm số lượng công việc đã hoàn thành / tổng số và kiểm tra hiển thị badge
 */
function updateFooter() {
    const totalCount = tasks.length;

    // Đếm số công việc có completed = true
    const completedCount = tasks.filter(function (task) {
        return task.completed === true;
    }).length;

    // Cập nhật text số lượng lên giao diện
    completedCountSpan.textContent = completedCount;
    totalCountSpan.textContent = totalCount;

    // Kiểm tra điều kiện:
    // Phải có ít nhất 1 công việc (totalCount > 0) VÀ tất cả đều đã hoàn thành (completedCount === totalCount)
    if (totalCount > 0 && completedCount === totalCount) {
        allCompletedBadge.style.display = "flex";
    } else {
        allCompletedBadge.style.display = "none";
    }
}

// ==============================================================================
// 9. CHẠY LẦN ĐẦU KHI TẢI TRANG
// ==============================================================================
// Gọi hàm renderTasks() để hiển thị dữ liệu mẫu ngay khi mở trang web
renderTasks();

// Tự động focus vào ô input thêm mới khi mở trang
taskInput.focus();
