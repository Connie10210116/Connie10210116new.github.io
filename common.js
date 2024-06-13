$(function(){
    $('.btn-menu').on('click', function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
});
// 添加用戶點擊事件以播放音樂
$('body').one('click', function() {
    var audio = document.getElementById('background-music');
    audio.play();
});
// 音樂控制按鈕
$('#music-control').on('click', function() {
    var audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
        $(this).text('Pause Music');
    } else {
        audio.pause();
        $(this).text('Play');
    }
});

$(function(){
    $('.pause').on('click', function(){
        $('.box').toggleClass('active');
    })
})

