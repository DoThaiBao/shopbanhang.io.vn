$('.product').click(function() {
});
document.querySelector('a[href="#contact"]').addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    // Lấy vị trí của phần cuối trang
    const contactSection = document.getElementById('contact');
    const contactSectionOffset = contactSection.offsetTop;

    // Cuộn trang đến phần cuối trang
    window.scrollTo({
        top: contactSectionOffset,
        behavior: 'smooth' // Thêm hiệu ứng cuộn mượt
    });
});