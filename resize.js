(function() {
    // تحديد مقياس الصفحة بناءً على عرض الشاشة
    function adjustViewport() {
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (!viewportMeta) {
            const meta = document.createElement('meta');
            meta.name = "viewport";
            meta.content = "width=device-width, initial-scale=1.0";
            document.head.appendChild(meta);
        } else {
            viewportMeta.content = "width=device-width, initial-scale=1.0";
        }
    }

    // تعديل التصميم بناءً على حجم الشاشة
    function adjustStyles() {
        const style = document.createElement('style');
        style.textContent = `
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
            }
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            @media (max-width: 768px) {
                body {
                    font-size: 14px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // استدعاء الدوال
    adjustViewport();
    adjustStyles();
})();
