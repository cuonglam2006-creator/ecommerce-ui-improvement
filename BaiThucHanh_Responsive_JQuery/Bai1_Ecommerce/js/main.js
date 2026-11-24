
$(document).ready(function () {
        // Khởi tạo Bootstrap Star Rating
    $(".rating").rating({
        showClear: false,
        showCaption: false,
        size: "sm"
    });

    // =====================================
    // 1. KHỞI TẠO XZOOM
    // =====================================

    if ($.fn.xzoom && $(".xzoom").length > 0) {
        $(".xzoom").xzoom({
            zoomWidth: 350,
            zoomHeight: 350,
            position: "right",
            tint: "#333",
            Xoffset: 15
        });
    }


    // =====================================
    // 2. THÊM SẢN PHẨM VÀO GIỎ HÀNG
    // =====================================

    $("#purchaseForm").on("submit", function (event) {
        event.preventDefault();

        var quantity = parseInt($("#quantity").val(), 10);
        var stock = 8;

        if (isNaN(quantity) || quantity < 1) {
            $("#purchaseMessage")
                .removeClass("text-success")
                .addClass("text-danger")
                .text("Vui lòng nhập số lượng hợp lệ.");

            return;
        }

        if (quantity > stock) {
            $("#purchaseMessage")
                .removeClass("text-success")
                .addClass("text-danger")
                .text("Số lượng vượt quá số sản phẩm còn trong kho.");

            return;
        }

        var cart = JSON.parse(localStorage.getItem("papernest_cart")) || [];

        var existingProduct = cart.find(function (item) {
            return item.id === "atomic-habits";
        });

        if (existingProduct) {
            if (existingProduct.quantity + quantity > stock) {
                $("#purchaseMessage")
                    .removeClass("text-success")
                    .addClass("text-danger")
                    .text("Tổng số lượng trong giỏ vượt quá tồn kho.");

                return;
            }

            existingProduct.quantity += quantity;

        } else {
            cart.push({
                id: "atomic-habits",
                name: "Atomic Habits",
                price: 160000,
                quantity: quantity
            });
        }

        localStorage.setItem("papernest_cart", JSON.stringify(cart));

        $("#purchaseMessage")
            .removeClass("text-danger")
            .addClass("text-success")
            .text("Đã thêm " + quantity + " sản phẩm vào giỏ hàng!");
    });


    // =====================================
    // 3. GỬI ĐÁNH GIÁ SẢN PHẨM
    // =====================================

    $("#reviewForm").on("submit", function (event) {
        event.preventDefault();

        var name = $("#reviewName").val().trim();
        var content = $("#reviewContent").val().trim();

        if (name === "" || content === "") {
            $("#reviewMessage")
                .addClass("text-danger")
                .text("Vui lòng nhập đầy đủ thông tin.");

            return;
        }

        var review = $("<div>").addClass("review-item");

        $("<strong>").text(name).appendTo(review);

        $("<p>")
            .addClass("review-stars")
            .text("★★★★★")
            .appendTo(review);

        $("<p>").text(content).appendTo(review);

        $(".detail-section").filter(function () {
            return $(this).find("#reviewForm").length > 0;
        }).find(".review-item").last().after(review);

        $("#reviewMessage")
            .removeClass("text-danger")
            .addClass("text-success")
            .text("Cảm ơn bạn đã gửi đánh giá!");

        $("#reviewForm")[0].reset();
    });

});
