# AI_USAGE.md

# BÁO CÁO SỬ DỤNG CÔNG CỤ AI

## 1. Công cụ AI được sử dụng

Trong quá trình thực hiện bài tập cải tiến giao diện website BookStore.vn, tôi sử dụng các công cụ AI sau:

- **Google Gemini:** Hỗ trợ tham khảo, phân tích giao diện website thương mại điện tử FAHASA và đề xuất hướng cải tiến giao diện.
- **GitHub Copilot (Agent Mode):** Hỗ trợ đọc hiểu mã nguồn, đề xuất và thực hiện các thay đổi đối với HTML, CSS nhằm cải tiến khu vực Product Grid.

Các công cụ AI được sử dụng với vai trò hỗ trợ. Tôi vẫn trực tiếp kiểm tra kết quả trên website và đánh giá mức độ phù hợp trước khi chấp nhận các thay đổi.

## 2. Mục đích sử dụng AI

AI được sử dụng để hỗ trợ các công việc sau:

- Tham khảo cách tổ chức và trình bày danh mục sản phẩm trên website thương mại điện tử FAHASA.
- Phân tích giao diện hiện tại của BookStore.vn để xác định những điểm cần cải thiện.
- Đề xuất cách trình bày danh mục và thẻ sản phẩm trực quan, dễ quan sát hơn.
- Hỗ trợ chỉnh sửa HTML5 và CSS3 để cải thiện bố cục giao diện.
- Hỗ trợ xử lý các vấn đề về chiều rộng nội dung và khả năng hiển thị trên nhiều kích thước màn hình.
- Giải thích các đoạn mã và hỗ trợ kiểm tra những thay đổi trong quá trình thực hiện.

## 3. Các prompt tiêu biểu đã sử dụng


### 3.1. Sử dụng Google Gemini

**Mục đích:** Tham khảo và phân tích giao diện website thương mại điện tử FAHASA.

**Nội dung prompt (tóm tắt):**

Phân tích giao diện website FAHASA, tập trung vào cách trình bày danh mục sản phẩm, bố cục thẻ sản phẩm, hình ảnh, thông tin sản phẩm và cách tổ chức nội dung. Từ đó, đề xuất những điểm có thể tham khảo để cải tiến giao diện website BookStore.vn.

**Kết quả nhận được:**

Gemini hỗ trợ phân tích cách trình bày nội dung sản phẩm trên website tham khảo, đưa ra những gợi ý về bố cục, cách phân nhóm danh mục và cách làm nổi bật thông tin sản phẩm.

**Cách sử dụng kết quả:**

Tôi sử dụng các gợi ý làm cơ sở tham khảo, sau đó lựa chọn những nội dung phù hợp với cấu trúc và phạm vi giao diện BookStore.vn.

### 3.2. Sử dụng GitHub Copilot – Phân tích mã nguồn

**Mục đích:** Đọc hiểu cấu trúc dự án và xác định những thành phần cần chỉnh sửa.

**Nội dung prompt (tóm tắt):**

Phân tích mã nguồn website BookStore.vn, đặc biệt là khu vực hiển thị danh mục và sản phẩm. Xác định các file HTML, CSS liên quan và đề xuất hướng cải tiến giao diện mà không làm thay đổi dữ liệu sản phẩm hiện có.

**Kết quả nhận được:**

Copilot hỗ trợ xác định các thành phần giao diện cần chỉnh sửa và đề xuất cách cải thiện bố cục danh mục, thẻ sản phẩm.

**Cách sử dụng kết quả:**

Tôi sử dụng kết quả phân tích để định hướng việc chỉnh sửa giao diện, đồng thời yêu cầu giữ nguyên tên, mô tả, giá và hình ảnh của 12 sản phẩm hiện có.

### 3.3. Sử dụng GitHub Copilot – Cải tiến giao diện Product Grid

**Mục đích:** Cải thiện cách trình bày danh mục và thẻ sản phẩm.

**Nội dung prompt (tóm tắt):**

Cải tiến giao diện khu vực danh mục và thẻ sản phẩm trên BookStore.vn theo hướng trực quan, hiện đại và dễ quan sát hơn. Giữ nguyên nội dung, tên, mô tả, giá và 12 hình ảnh sản phẩm. Chỉ chỉnh sửa những file cần thiết cho giao diện, không thay đổi chức năng JavaScript hiện có.

**Kết quả nhận được:**

Copilot hỗ trợ cải tiến cách trình bày danh mục và thẻ sản phẩm, giúp các khu vực được phân tách rõ ràng hơn. Theo kết quả chỉnh sửa, các thông tin và hình ảnh của 12 sản phẩm được giữ nguyên.

Các file được chỉnh sửa trong lần cải tiến này:

- `index.html`
- `css/style.css`


### 3.4. Sử dụng GitHub Copilot – Điều chỉnh chiều rộng giao diện

**Mục đích:** Khắc phục vấn đề bố cục nội dung chưa hiển thị đúng chiều rộng mong muốn.

**Nội dung prompt (tóm tắt):**

Kiểm tra và điều chỉnh chiều rộng khu vực nội dung chính để giao diện hiển thị cân đối trên các kích thước màn hình khác nhau. Sau khi điều chỉnh, kiểm tra lại các thành phần liên quan để tránh tình trạng một số khu vực vẫn bị giới hạn chiều rộng.

**Kết quả nhận được:**

Copilot hỗ trợ điều chỉnh thuộc tính chiều rộng của khu vực nội dung chính và khu vực banner, giúp bố cục hiển thị phù hợp hơn với chiều rộng màn hình.

**Cách sử dụng kết quả:**

Tôi kiểm tra lại giao diện sau khi chỉnh sửa và tiếp tục yêu cầu điều chỉnh khi phát hiện khu vực banner vẫn còn bị giới hạn chiều rộng.

## 4. Kết quả AI hỗ trợ trong quá trình thực hiện

Qua quá trình sử dụng các công cụ AI, tôi nhận được những hỗ trợ chính sau:

| Nội dung | Kết quả |
|---|---|
| Phân tích website tham khảo | Có thêm cơ sở để đánh giá cách trình bày danh mục và sản phẩm trên website thương mại điện tử. |
| Phân tích mã nguồn | Hỗ trợ xác định các thành phần HTML và CSS liên quan đến khu vực cần cải tiến. |
| Cải tiến danh mục | Cách trình bày danh mục được điều chỉnh rõ ràng và trực quan hơn. |
| Cải tiến thẻ sản phẩm | Bố cục thẻ sản phẩm được cải thiện, giúp thông tin dễ quan sát hơn. |
| Điều chỉnh chiều rộng | Bố cục nội dung và banner được điều chỉnh để phù hợp hơn với kích thước màn hình. |
| Bảo toàn dữ liệu | Giữ nguyên tên, mô tả, giá và 12 hình ảnh sản phẩm hiện có. |

## 5. Kiểm tra và điều chỉnh kết quả AI

Tôi không sử dụng trực tiếp mọi kết quả do AI đề xuất mà tiến hành kiểm tra và điều chỉnh trong quá trình thực hiện.

### 5.1. Kiểm tra giao diện sau khi cải tiến

Sau khi nhận được kết quả chỉnh sửa từ Copilot, tôi mở website để kiểm tra cách hiển thị thực tế, tập trung vào:

- Bố cục khu vực danh mục và thẻ sản phẩm.
- Khả năng hiển thị đầy đủ hình ảnh và thông tin sản phẩm.
- Sự cân đối giữa các khu vực trên trang.
- Khả năng hiển thị trên các kích thước màn hình khác nhau.

### 5.2. Phát hiện và yêu cầu AI điều chỉnh

Trong quá trình kiểm tra, tôi nhận thấy dù chiều rộng khu vực nội dung chính đã được điều chỉnh nhưng khu vực banner vẫn còn bị giới hạn chiều rộng.

Tôi tiếp tục yêu cầu Copilot kiểm tra và điều chỉnh phần giao diện liên quan. Sau khi nhận được kết quả mới, tôi mở lại website để xác nhận bố cục đã được cải thiện.

Điều này giúp tôi nhận thấy rằng kết quả do AI tạo ra cần được kiểm tra trên giao diện thực tế, thay vì chỉ dựa vào nội dung mã nguồn.

### 5.3. Kiểm tra khả năng hiển thị và tương tác

Tôi trực tiếp kiểm tra giao diện ở ba kích thước màn hình:

- Desktop: 1366px.
- Tablet: 768px.
- Mobile: 390px.

Kết quả kiểm tra cho thấy các khu vực nội dung được hiển thị phù hợp hơn với kích thước màn hình, không còn tình trạng tràn ngang ở các trường hợp đã kiểm tra.

Ngoài ra, tôi thực hiện các kiểm tra sau:

- Kiểm tra hiệu ứng hover trên các thành phần giao diện.
- Kiểm tra trạng thái focus.
- Kiểm tra chế độ Reduced Motion.
- Sử dụng lệnh `git diff --check` để kiểm tra các lỗi khoảng trắng và định dạng trong phần thay đổi mã nguồn.

Các nội dung trên đều đã được kiểm tra và cho kết quả đạt yêu cầu trong phạm vi thực hiện.

## 6. Đánh giá việc sử dụng AI

### 6.1. Những nội dung AI hỗ trợ tốt

- Hỗ trợ tham khảo và phân tích giao diện website thương mại điện tử.
- Hỗ trợ đọc hiểu cấu trúc HTML và CSS.
- Đề xuất các phương án cải tiến bố cục giao diện.
- Hỗ trợ xử lý những vấn đề liên quan đến chiều rộng và khả năng hiển thị.
- Giúp tiết kiệm thời gian tìm kiếm và chỉnh sửa mã nguồn.

### 6.2. Những nội dung cần người thực hiện kiểm tra

- Không phải mọi đề xuất của AI đều phù hợp ngay với cấu trúc website hiện tại.
- Một số thay đổi cần được kiểm tra trực tiếp trên trình duyệt để phát hiện lỗi bố cục.
- Cần kiểm tra lại các kích thước màn hình khác nhau để tránh phát sinh lỗi responsive.
- Cần đảm bảo việc cải tiến giao diện không làm thay đổi dữ liệu sản phẩm hoặc các chức năng nằm ngoài phạm vi bài tập.

### 6.3. Bài học rút ra

Qua bài tập, tôi nhận thấy AI là công cụ hỗ trợ hữu ích trong quá trình phát triển giao diện web. Tuy nhiên, người thực hiện cần hiểu yêu cầu bài tập, biết cách đặt prompt rõ ràng, kiểm tra mã nguồn và đánh giá kết quả trên giao diện thực tế.

Việc kết hợp giữa AI và quá trình kiểm tra, điều chỉnh của người thực hiện giúp giao diện đạt được kết quả phù hợp hơn với mục tiêu đề ra.

## 7. Kết luận

Các công cụ AI đã hỗ trợ tôi trong quá trình phân tích, cải tiến và kiểm tra giao diện Product Grid của website BookStore.vn. Tuy nhiên, tôi vẫn trực tiếp đánh giá kết quả, kiểm tra khả năng hiển thị trên nhiều kích thước màn hình và yêu cầu điều chỉnh khi phát hiện vấn đề.

Việc sử dụng AI trong bài tập nhằm hỗ trợ quá trình học tập và phát triển giao diện HTML5/CSS3, không thay thế hoàn toàn quá trình tìm hiểu, thực hành và kiểm tra của người thực hiện.
