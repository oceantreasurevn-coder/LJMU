// Navigation Scroll Effect
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

// Handle scroll for navbar styling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.products-section, .schedule-section, .gifts-section, .registration-section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Animate product cards on scroll
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate gift cards on scroll
    const giftCards = document.querySelectorAll('.gift-card');
    giftCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(card);
    });

    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(item);
    });
});

// Add parallax effect to hero background
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroSection && heroBg) {
        const scrolled = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        
        if (scrolled < heroHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// Button click handlers (you can customize these to your needs)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Handle registration button clicks
const registrationButtons = document.querySelectorAll('.btn-primary, .btn-cta');
registrationButtons.forEach(button => {
    button.addEventListener('click', () => {
        // You can add your registration logic here
        // For example, open a modal or redirect to a registration page
        console.log('Registration button clicked');
        alert('Cảm ơn bạn đã quan tâm! Tính năng đăng ký sẽ sớm được kích hoạt.');
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Prevent default action for "Xem chi tiết" button
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Scroll to products section
        const productsSection = document.getElementById('products');
        if (productsSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = productsSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Gifts Gallery Functionality
// Dữ liệu sản phẩm (Bạn có thể sửa Tiêu đề và Mô tả tại đây)
const giftsData = [
    {
        id: 1,
        img: "https://janeportforlio.my.canva.site/ljmu/_assets/media/b29badcc9647d5b9adbf1dfa6d29d1f9.png",
        title: "Bộ Quà Tặng Doanh Nhân",
        desc: "Bộ quà tặng cao cấp bao gồm sổ tay bìa da, bút ký kim loại và ví danh thiếp, thích hợp cho các sự kiện trang trọng."
    },
    {
        id: 2,
        img: "https://janeportforlio.my.canva.site/ljmu/_assets/media/2abe4d248f9176e3be4cc77e3c62a14a.png",
        title: "Bình Giữ Nhiệt Cao Cấp",
        desc: "Bình giữ nhiệt lõi inox 304, giữ nóng/lạnh lên đến 12 giờ, thiết kế hiện đại, tiện lợi mang theo."
    },
    {
        id: 3,
        img: "https://janeportforlio.my.canva.site/ljmu/_assets/media/56890af6b3a96a042cc18e63bc6c9286.png",
        title: "Túi Tote Canvas Thời Trang",
        desc: "Túi vải canvas thân thiện môi trường, in họa tiết độc quyền của sự kiện, kích thước lớn đựng vừa laptop."
    },
    {
        id: 4,
        img: "https://janeportforlio.my.canva.site/ljmu/_assets/media/a2ad2c5bbc95607f8cf697fb908951cf.png",
        title: "Sổ Tay Bìa Cứng",
        desc: "Sổ tay ghi chú thiết kế tối giản, giấy chất lượng cao chống lóa, hỗ trợ ghi chép hiệu quả."
    },
    {
        id: 5,
        img: "https://janeportforlio.my.canva.site/ljmu/_assets/media/51cae92642b393fe6c33358b9345e335.png",
        title: "Mũ Lưỡi Trai Sự Kiện",
        desc: "Mũ lưỡi trai phong cách năng động, chất liệu cotton thoáng mát, thêu logo kỷ niệm."
    },
    {
        id: 6,
        img: "https://janeportforlio.my.canva.site/ljmu/_assets/media/e5ae2db384db01f1a09cfc50795bf4b3.png",
        title: "Áo Thun Kỷ Niệm",
        desc: "Áo thun chất liệu thun lạnh co giãn 4 chiều, in hình đồ họa ấn tượng về chủ đề chương trình."
    },
    {
        id: 7,
        img: "https://janeportforlio.my.canva.site/ljmu/_assets/media/b00e00697b9951de390aabd77de22cfb.png",
        title: "Ly Sứ In Hình",
        desc: "Ly sứ trắng cao cấp, in hình lưu niệm, an toàn khi sử dụng với lò vi sóng."
    },
    {
        id: 8,
        img: "https://janeportforlio.my.canva.site/ljmu/_assets/media/90ca7ad87befc340d10c84bb53d62815.png",
        title: "Móc Khóa Mica",
        desc: "Móc khóa mica trong suốt in hình chibi dễ thương, món quà nhỏ nhưng đầy ý nghĩa."
    }
];

// Lấy các phần tử DOM
const titleEl = document.getElementById('display-title');
const descEl = document.getElementById('display-desc');
const mainImgEl = document.getElementById('main-display-image');
const thumbsContainer = document.getElementById('thumbnails-container');

// Hàm khởi tạo
function initGallery() {
    // Tạo thumbnails
    giftsData.forEach((gift, index) => {
        const thumbDiv = document.createElement('div');
        thumbDiv.className = 'thumb-card';
        if (index === 0) thumbDiv.classList.add('active'); // Active phần tử đầu tiên

        thumbDiv.innerHTML = `<img src="${gift.img}" alt="${gift.title}">`;

        // Thêm sự kiện click
        thumbDiv.addEventListener('click', () => {
            updateDisplay(gift, thumbDiv);
        });

        thumbsContainer.appendChild(thumbDiv);
    });

    // Hiển thị phần tử đầu tiên mặc định
    updateDisplay(giftsData[0], thumbsContainer.children[0]);
}

// Hàm cập nhật hiển thị
function updateDisplay(gift, activeThumbDiv) {
    // 1. Cập nhật Text với hiệu ứng fade nhẹ
    titleEl.style.opacity = 0;
    descEl.style.opacity = 0;

    setTimeout(() => {
        titleEl.textContent = gift.title;
        descEl.textContent = gift.desc;
        titleEl.style.opacity = 1;
        descEl.style.opacity = 1;
    }, 200);

    // 2. Cập nhật hình ảnh
    // Reset animation
    mainImgEl.classList.remove('fade-in');
    void mainImgEl.offsetWidth; // Trigger reflow

    mainImgEl.src = gift.img;
    mainImgEl.classList.add('fade-in');

    // 3. Cập nhật trạng thái Active cho thumbnail
    const allThumbs = document.querySelectorAll('.thumb-card');
    allThumbs.forEach(t => t.classList.remove('active'));
    activeThumbDiv.classList.add('active');
}

// Chạy khởi tạo khi DOM đã load
document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    // Initialize gifts gallery
    if (thumbsContainer) {
        initGallery();
    }
});
