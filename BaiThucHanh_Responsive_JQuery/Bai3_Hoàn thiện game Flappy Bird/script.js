$(function () {
    // Khai báo các đối tượng DOM
    var container = $('#container');
    var bird = $('#bird');
    var pole = $('.pole');
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var score = $('#score');
    var level_span = $('#level');
    var best_score_span = $('#best_score');
    var play_btn = $('#play_btn');
    var restart_btn = $('#restart_btn');
    var win_msg = $('#win_msg');

    // Thông số kích thước ban đầu
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var pole_initial_position = parseInt(pole.css('right'));
    var pole_initial_height = parseInt(pole.css('height'));
    var bird_left = parseInt(bird.css('left'));
    var bird_height = parseInt(bird.height());
    var speed = 10;

    // Trạng thái Game & Level
    var score_updated = false;
    var game_started = false;
    var game_over = false;
    var level = 1;
    var game_interval = 40; // Level 1: Interval = 40
    var game_loop;

    // Vật lý giúp game mượt mà hơn
    var velocity = 0;
    var gravity = 0.65;       // Gia tốc rơi tự do
    var jump_strength = -8.5; // Lực bật lên khi nhấn ArrowDown

    // Lấy điểm cao nhất từ localStorage
    var best_score = localStorage.getItem('flappy_best_score') || 0;
    best_score_span.text(best_score);

    // Vòng lặp chính của game
    function runGame() {
        game_loop = setTimeout(function () {
            if (game_over) return;

            // Kiểm tra va chạm với ống hoặc mép trên/dưới
            if (collision(bird, pole_1) || collision(bird, pole_2) ||
                parseInt(bird.css('top')) <= 0 ||
                parseInt(bird.css('top')) > container_height - bird_height) {
                stop_the_game(false);
                return;
            }

            var pole_current_position = parseInt(pole.css('right'));

            // Cập nhật điểm khi vượt qua ống
            if (pole_current_position > container_width - bird_left) {
                if (score_updated === false) {
                    var current_score = parseInt(score.text()) + 1;
                    score.text(current_score);
                    score_updated = true;

                    // Lưu kỷ lục
                    if (current_score > best_score) {
                        best_score = current_score;
                        localStorage.setItem('flappy_best_score', best_score);
                        best_score_span.text(best_score);
                    }

                    // Kiểm tra mốc Level & Chiến thắng
                    if (current_score >= 50) {
                        stop_the_game(true); // 50 điểm -> Dừng game & báo chiến thắng
                        return;
                    } else if (current_score >= 40) {
                        level = 4;
                        game_interval = 20; // Level 4: Interval = 20
                    } else if (current_score >= 20) {
                        level = 3;
                        game_interval = 25; // Level 3: Interval = 25
                    } else if (current_score >= 5) {
                        level = 2;
                        game_interval = 30; // Level 2: Interval = 30
                    }
                    level_span.text(level);
                }
            }

            // Tạo cặp ống mới khi ống cũ đi hết màn hình
            if (pole_current_position > container_width) {
                var new_height = parseInt(Math.random() * 150) - 75;
                pole_1.css('height', pole_initial_height + new_height);
                pole_2.css('height', pole_initial_height - new_height);
                score_updated = false;
                pole_current_position = pole_initial_position;
            }

            // Di chuyển ống sang trái
            pole.css('right', pole_current_position + speed);

            // Cập nhật vị trí rơi của chim theo trọng lực
            velocity += gravity;
            var new_top = parseInt(bird.css('top')) + velocity;
            bird.css('top', new_top);

            // Xoay góc chim theo hướng bay
            var angle = Math.min(Math.max(velocity * 3, -25), 45);
            bird.css('transform', 'rotate(' + angle + 'deg)');

            runGame();
        }, game_interval);
    }

    // Hàm bắt đầu chơi
    function startGame() {
        if (!game_started) {
            game_started = true;
            play_btn.hide();
            velocity = jump_strength;
            runGame();
        }
    }

    // Click nút Play để bắt đầu
    play_btn.click(function () {
        startGame();
    });

    // Điều khiển bằng phím mũi tên xuống (Arrow Down)
    $(document).on('keydown', function (e) {
        if (e.key === 'ArrowDown' || e.keyCode === 40) {
            e.preventDefault(); // Ngăn trang web bị cuộn
            if (!game_started) {
                startGame();
            } else if (!game_over) {
                velocity = jump_strength;
            }
        }
    });

    // Dừng game (Thua hoặc Thắng)
    function stop_the_game(is_win) {
        clearTimeout(game_loop);
        game_over = true;
        if (is_win) {
            win_msg.fadeIn();
        }
        restart_btn.slideDown();
    }

    // Nút Chơi lại
    restart_btn.click(function () {
        location.reload();
    });

    // Hàm kiểm tra va chạm (tối ưu hitbox giảm 4px viền ảnh)
    function collision($div1, $div2) {
        var padding = 4;
        var x1 = $div1.offset().left + padding;
        var y1 = $div1.offset().top + padding;
        var h1 = $div1.outerHeight(true) - padding * 2;
        var w1 = $div1.outerWidth(true) - padding * 2;
        var b1 = y1 + h1;
        var r1 = x1 + w1;

        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }
});