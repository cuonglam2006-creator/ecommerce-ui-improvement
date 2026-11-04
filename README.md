# BookStore.vn

## 1. Giới thiệu

BookStore.vn là website cửa hàng sách trực tuyến, được xây dựng trong khuôn khổ bài tập cá nhân môn **Phát triển ứng dụng WEB/TMĐT**.

Trong Buổi 2, website tiếp tục được cải tiến dựa trên mã nguồn HTML và CSS đã có từ Buổi 1. Nội dung thực hiện tập trung vào việc hoàn thiện cấu trúc HTML5, cải thiện cách trình bày danh sách sản phẩm và thực hành các kỹ thuật CSS3.

## 2. Khu vực được cải tiến

Khu vực được lựa chọn để thực hành là **Danh sách sản phẩm (Product Grid)**, bao gồm các danh mục:

- Sách.
- Đồ lưu niệm.
- Đồ dùng học tập.

Việc cải tiến tập trung vào khả năng hiển thị hình ảnh, bố cục thẻ sản phẩm, điều hướng đến danh mục và trải nghiệm sử dụng giao diện trên các kích thước màn hình khác nhau.

**Website tham khảo:** [FAHASA – Nhà sách trực tuyến](https://www.fahasa.com/)

## 3. Công nghệ và kỹ thuật sử dụng

### 3.1. HTML5

Website sử dụng các phần tử HTML5 có ngữ nghĩa:

- `<header>`: Xác định khu vực đầu trang, chứa logo, thanh tìm kiếm và các liên kết.
- `<nav>`: Xác định khu vực điều hướng, giúp người dùng truy cập các danh mục sản phẩm.
- `<main>`: Bao bọc nội dung chính của website.
- `<section>`: Phân chia nội dung thành các khu vực riêng biệt như banner và danh sách sản phẩm.
- `<article>`: Xác định từng thẻ sản phẩm độc lập.

Ngoài ra, website sử dụng các thẻ tiêu đề `<h1>`, `<h2>`, `<h3>`, danh sách `<ul>`, `<li>`, liên kết `<a>` và các thành phần biểu mẫu như `<form>`, `<input>`, `<button>`.

Các hình ảnh sản phẩm được bổ sung thuộc tính `alt` để cung cấp nội dung mô tả thay thế.

### 3.2. CSS3

Các kỹ thuật CSS3 được thực hành:

- **CSS Selector:** Lựa chọn và định dạng các thành phần giao diện thông qua class, phần tử và các trạng thái tương tác.
- **Box Model:** Sử dụng `margin`, `padding`, `border` để kiểm soát khoảng cách và kích thước các thành phần.
- **Flexbox:** Sắp xếp và căn chỉnh nội dung trong banner, thông tin sản phẩm và các khu vực chức năng.
- **CSS Grid:** Bố trí danh sách sản phẩm thành nhiều cột bằng `display: grid`, `grid-template-columns` và `gap`.
- **Responsive Design:** Điều chỉnh bố cục theo kích thước màn hình thông qua Media Queries.
- **Hover và Focus:** Tạo trạng thái tương tác khi rê chuột hoặc điều hướng bằng bàn phím.
- **Reduced Motion:** Hạn chế hiệu ứng chuyển động khi người dùng bật chế độ giảm chuyển động.

## 4. Cấu trúc thư mục chính

```text
BookStore.vn/
│
├── index.html
│
├── css/
│   └── style.css
│
├── images/
│   │── products/
│   ├── after-desktop1.png
│   ├── after-desktop2.png
│   ├── after-mobile.png
│   ├── after-tablet.png
│   ├── before-desktop1.png
│   └── before-desktop2.png
│
├── AI_USAGE.md
└── README.md
```

## 5. Những nội dung đã cải tiến trong Buổi 2

Trong quá trình kiểm tra và cải tiến website, các nội dung được tập trung thực hiện gồm:

| STT | Nội dung             | Cách thực hiện                                                                                                                                         |
| --- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Cấu trúc HTML        | Hoàn thiện cách tổ chức nội dung bằng các phần tử HTML5 có ngữ nghĩa.                                                                                  |
| 2   | Danh mục sản phẩm    | Cải thiện cách trình bày các khu vực danh mục, giúp nội dung trực quan và dễ theo dõi hơn.                                                             |
| 3   | Thẻ sản phẩm         | Điều chỉnh bố cục và cách hiển thị thông tin sản phẩm, giữ nguyên tên, mô tả, giá và hình ảnh của 12 sản phẩm.                                         |
| 4   | Hình ảnh sản phẩm    | Điều chỉnh cách hiển thị hình ảnh để phù hợp hơn với bố cục thẻ sản phẩm.                                                                              |
| 5   | Chiều rộng giao diện | Điều chỉnh `.page` để tận dụng không gian màn hình; đồng thời loại bỏ giới hạn chiều rộng của `.hero` để banner đồng bộ với khu vực nội dung bên dưới. |
| 6   | Responsive Design    | Kiểm tra và điều chỉnh giao diện để phù hợp với Desktop, Tablet và Mobile.                                                                             |

Các thay đổi được thực hiện chủ yếu trong hai tệp `index.html` và `css/style.css`. Tệp `js/search.js` không được chỉnh sửa trong đợt cải tiến giao diện này.

## 6. Báo cáo kiểm thử

Sau khi hoàn thành chỉnh sửa, giao diện được kiểm tra trực tiếp trên trình duyệt và kiểm tra mã nguồn.

### 6.1. Kiểm tra giao diện Responsive

| STT | Thiết bị kiểm tra | Chiều rộng màn hình | Kết quả |
| --- | ----------------- | ------------------: | ------- |
| 1   | Desktop           |              1366px | Đạt     |
| 2   | Tablet            |               768px | Đạt     |
| 3   | Mobile            |               390px | Đạt     |

### 6.2. Kiểm tra các thành phần và trạng thái giao diện

| STT | Nội dung kiểm thử       | Kết quả mong đợi                                                         | Kết quả |
| --- | ----------------------- | ------------------------------------------------------------------------ | ------- |
| 1   | Mở website              | Trang HTML hiển thị bình thường trên trình duyệt.                        | Đạt     |
| 2   | Tải CSS                 | Các quy tắc CSS được áp dụng đúng.                                       | Đạt     |
| 3   | Hình ảnh sản phẩm       | Hình ảnh hiển thị đầy đủ, không bị méo hoặc cắt ngoài mong muốn.         | Đạt     |
| 4   | Điều hướng đến danh mục | Tiêu đề danh mục không bị header sticky che khuất.                       | Đạt     |
| 5   | Bố cục Responsive       | Nội dung không bị tràn hoặc lệch trên các kích thước đã kiểm tra.        | Đạt     |
| 6   | Hiệu ứng Hover          | Hiệu ứng hiển thị bình thường khi rê chuột vào các thành phần tương tác. | Đạt     |
| 7   | Trạng thái Focus        | Các thành phần có thể nhận biết trạng thái khi điều hướng bằng bàn phím. | Đạt     |
| 8   | Chế độ Reduced Motion   | Các hiệu ứng chuyển động được hạn chế khi bật chế độ giảm chuyển động.   | Đạt     |
| 9   | Kiểm tra định dạng CSS  | `git diff --check` không phát hiện lỗi định dạng.                        | Đạt     |

**Kết luận:** Các nội dung kiểm thử đều đạt yêu cầu. Giao diện sau khi cải tiến hiển thị phù hợp trên Desktop, Tablet và Mobile tại các kích thước đã kiểm tra; các trạng thái tương tác và chế độ giảm chuyển động cũng được kiểm tra.

## 7. Hình ảnh minh chứng trước và sau cải tiến

Các ảnh minh chứng được lưu trong thư mục `image/` của dự án.

### 7.1. Giao diện trước cải tiến

**Desktop – Ảnh 1**
<img width="1865" height="982" alt="before-desktop1" src="https://github.com/user-attachments/assets/7fb72702-706c-425b-bd44-869d4fe275b8" />



**Desktop – Ảnh 2**
<img width="1872" height="990" alt="before-desktop2" src="https://github.com/user-attachments/assets/0482a7f4-5327-4fbc-8203-6675f4ca4957" />



### 7.2. Giao diện sau cải tiến

**Desktop – Ảnh 1**
<img width="1837" height="998" alt="after-desktop1" src="https://github.com/user-attachments/assets/67b15ccf-c4f3-474c-a53e-ddf10e8ec52b" />



**Desktop – Ảnh 2**
<img width="1831" height="988" alt="after-desktop2" src="https://github.com/user-attachments/assets/8d83bec6-9581-4092-8547-037c8af8ee99" />



### 7.3. Giao diện sau cải tiến trên các thiết bị

**Tablet – 768px**

<img width="477" height="640" alt="after-tablet" src="https://github.com/user-attachments/assets/44357915-136a-4fcb-afb8-8c33cef0f265" />





**Mobile – 390px**

<img width="408" height="895" alt="after-mobile" src="https://github.com/user-attachments/assets/4c1e7320-bf01-4eb5-bf73-63f5adab7b04" />



## 8. Báo cáo sử dụng AI

Báo cáo chi tiết quá trình sử dụng AI được trình bày trong tệp **[AI_USAGE.md](AI_USAGE.md)**, bao gồm:

- Công cụ AI được sử dụng.
- Các prompt tiêu biểu đã nhập.
- Kết quả AI đề xuất hoặc thực hiện.
- Cách kiểm tra, đánh giá và điều chỉnh kết quả AI trước khi áp dụng.

## 9. Câu hỏi kiến thức

### Câu 1. Bạn đã sử dụng những thẻ HTML5 nào? Vì sao sử dụng chúng?

Website sử dụng các thẻ HTML5 semantic như:

- `<header>`: Xác định khu vực đầu trang, chứa logo, thanh tìm kiếm và các liên kết tài khoản, giỏ hàng.
- `<nav>`: Xác định khu vực điều hướng, giúp người dùng truy cập các danh mục sản phẩm.
- `<main>`: Bao bọc nội dung chính của website.
- `<section>`: Phân chia nội dung thành các khu vực riêng biệt như banner, danh sách sách, đồ lưu niệm và đồ dùng học tập.
- `<article>`: Xác định từng thẻ sản phẩm độc lập trong danh sách.

Việc sử dụng các thẻ semantic giúp cấu trúc HTML rõ ràng, dễ đọc, dễ bảo trì và giúp trình duyệt cũng như các công cụ hỗ trợ hiểu được ý nghĩa của từng khu vực nội dung.

### Câu 2. Phân biệt margin và padding. Lấy ví dụ trên một thẻ sản phẩm.

- `margin` là khoảng cách bên ngoài phần tử, giúp tạo khoảng cách giữa phần tử đó với các phần tử xung quanh.
- `padding` là khoảng cách bên trong phần tử, tạo khoảng trống giữa nội dung và đường viền.

Ví dụ, `padding: 15px 15px 14px` của `.product-info` tạo khoảng cách giữa nội dung thông tin sản phẩm và đường viền của thẻ. Trong khi đó, `margin: 0 0 7px` của `.product-type` tạo khoảng cách phía dưới nhãn loại sản phẩm với nội dung tiếp theo.

Như vậy, padding giúp nội dung bên trong thẻ sản phẩm được trình bày thoáng hơn, còn margin giúp bố trí khoảng cách giữa các phần tử.

### Câu 3. Bạn đã sử dụng Flexbox ở khu vực nào? `justify-content` và `align-items` có tác dụng gì?

Flexbox được sử dụng tại nhiều khu vực trên website BookStore.vn. Ví dụ:

- Khu vực banner (`.hero`): Sử dụng `display: flex` để bố trí nội dung chữ và hình minh họa trên cùng một hàng.
- Khu vực thông tin sản phẩm (`.product-info`): Sử dụng `flex-direction: column` để sắp xếp loại sản phẩm, tên sản phẩm, tác giả và giá theo chiều dọc.
- Khu vực tài khoản và giỏ hàng (`.action`): Sử dụng Flexbox để đặt biểu tượng và nội dung cạnh nhau.

Trong Flexbox:

- `justify-content` dùng để căn chỉnh, phân bố các phần tử theo trục chính.
- `align-items` dùng để căn chỉnh các phần tử theo trục phụ.

Ví dụ, tại banner, `justify-content: space-between` giúp nội dung chữ và hình minh họa nằm ở hai phía, còn `align-items: center` giúp chúng được căn giữa theo chiều dọc.

### Câu 4. CSS Grid khác Flexbox như thế nào? Vì sao nên dùng Grid cho danh sách sản phẩm?

CSS Grid và Flexbox đều được sử dụng để bố trí giao diện nhưng có sự khác biệt:

- CSS Grid hỗ trợ bố trí theo hai chiều, gồm hàng và cột.
- Flexbox chủ yếu sắp xếp các phần tử theo một chiều, theo hàng hoặc theo cột.

Trong website BookStore.vn, CSS Grid được sử dụng tại `.product-grid` để sắp xếp các sản phẩm thành nhiều cột. Thuộc tính `grid-template-columns: repeat(4, minmax(0, 1fr))` chia danh sách thành 4 cột có chiều rộng bằng nhau, còn `gap: 18px` tạo khoảng cách giữa các sản phẩm.

Grid được lựa chọn vì danh sách sản phẩm cần bố trí đồng đều theo hàng và cột, đồng thời dễ dàng thay đổi số cột theo kích thước màn hình. Trong khi đó, Flexbox phù hợp hơn với những khu vực cần sắp xếp nội dung theo một hướng.

### Câu 5. Nếu bỏ `display: grid` khỏi khu vực danh sách sản phẩm thì giao diện sẽ thay đổi như thế nào?

Nếu bỏ `display: grid` khỏi `.product-grid`, khu vực danh sách sản phẩm sẽ không còn sử dụng bố cục Grid. Khi đó, thuộc tính `grid-template-columns` không còn tác dụng, các sản phẩm không được sắp xếp thành số cột như đã thiết lập và khoảng cách `gap` cũng không còn hoạt động theo cơ chế Grid.

Vì các thẻ sản phẩm là các phần tử dạng block, chúng sẽ hiển thị theo luồng tài liệu thông thường, thường xếp thành từng hàng dọc thay vì nằm cạnh nhau thành nhiều cột. Điều này khiến bố cục danh sách sản phẩm mất đi sự đồng đều và ảnh hưởng đến khả năng thích ứng với các kích thước màn hình khác nhau.

### Câu 6. Vì sao thẻ img cần có thuộc tính alt?

Thuộc tính `alt` được sử dụng để cung cấp văn bản mô tả thay thế cho hình ảnh. Thuộc tính này có vai trò hỗ trợ người khiếm thị sử dụng trình đọc màn hình, cung cấp nội dung thay thế khi hình ảnh không tải được và giúp người dùng hiểu hình ảnh đang được hiển thị.

Trong website BookStore.vn, ví dụ thẻ ảnh bìa sách Đắc Nhân Tâm sử dụng `alt="Minh họa bìa sách Đắc Nhân Tâm"` để mô tả nội dung hình ảnh. Các hình ảnh sản phẩm khác cũng được bổ sung mô tả tương ứng.

### Câu 7. Hãy nêu một gợi ý của AI mà bạn đã kiểm tra hoặc điều chỉnh trước khi áp dụng.

Trong quá trình cải tiến giao diện BookStore.vn, AI đề xuất mở rộng chiều rộng khu vực danh mục sản phẩm để tận dụng tốt hơn không gian màn hình và giảm khoảng trống ở hai bên lề.

Sau khi kiểm tra giao diện, tôi nhận thấy banner vẫn bị giới hạn chiều rộng và chưa đồng đều với khu vực danh mục sản phẩm. Vì vậy, tôi tiếp tục yêu cầu Copilot kiểm tra và điều chỉnh CSS của `.hero`, loại bỏ giới hạn `max-width: 1160px` để banner có thể sử dụng toàn bộ chiều rộng khả dụng bên trong khu vực nội dung.

Sau khi áp dụng, tôi trực tiếp kiểm tra giao diện trên các kích thước màn hình 1366px, 768px và 390px. Kết quả cho thấy banner và khu vực danh mục sản phẩm đã có chiều rộng đồng đều hơn, giao diện hiển thị đúng như mong muốn và không bị tràn trên các kích thước đã kiểm tra.

Qua đó, tôi hiểu rằng cần kiểm tra kết quả thực tế và điều chỉnh những đề xuất chưa phù hợp của AI thay vì áp dụng hoàn toàn một cách máy móc.

## 10. Những chức năng chưa nằm trong phạm vi cải tiến Buổi 2

Trong quá trình đánh giá website, một số hạn chế về chức năng cũng được ghi nhận:

- Thanh tìm kiếm chưa thực hiện tìm kiếm sản phẩm thực tế.
- Liên kết tài khoản và giỏ hàng chưa được kết nối đầy đủ với các trang chức năng tương ứng.
- Chưa có chức năng thêm sản phẩm vào giỏ hàng hoặc thực hiện quy trình mua hàng.

Các nội dung trên chưa được giải quyết trong phần cải tiến HTML5/CSS3 của Buổi 2. Đây là những hạng mục có thể tiếp tục phát triển trong các giai đoạn sau.

## 11. Hướng dẫn chạy website

1. Mở repository BookStore.vn bằng Visual Studio Code hoặc GitHub Codespaces.
2. Mở tệp `index.html`.
3. Chạy trang bằng trình duyệt hoặc sử dụng tiện ích Live Server trong Visual Studio Code.
4. Kiểm tra giao diện và các khu vực sản phẩm trên trình duyệt.

## 12. Thông tin repository

- **GitHub Repository:** [https://github.com/cuonglam2006-creator/ecommerce-ui-improvement](https://github.com/cuonglam2006-creator/ecommerce-ui-improvement)
- **Website Preview:** [https://literate-memory-5vr5w5qjxggjh75pq-3000.app.github.dev/](https://literate-memory-5vr5w5qjxggjh75pq-3000.app.github.dev/)

---

**Kết thúc báo cáo bài tập cá nhân Buổi 2 – Phát triển ứng dụng WEB/TMĐT.**
