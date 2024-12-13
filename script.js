document.addEventListener('DOMContentLoaded', function() {
    // 示例：表单提交事件处理
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('感谢您的留言，我们会尽快联系您！');
        form.reset();
    });
});
