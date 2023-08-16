//toggle
var menu = document.querySelector('.header_menu');
var toggle = document.querySelector('.toggle');
var menuItems = document.querySelectorAll('.header_menu li');
toggle.addEventListener('click', function() {
  menu.classList.toggle('active'); // Thêm hoặc xóa class "show" từ menu
  if (menu.classList.contains('active')) {
    // Nếu menu đang được hiển thị, thay thế biểu tượng bằng fa-xmark
    toggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    // Nếu menu không được hiển thị, sử dụng biểu tượng mặc định (fa-bars)
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
// them su kien click cho moi li
 // Thêm sự kiện click cho mỗi mục menu
menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Sau khi nhấp vào một mục, đảm bảo biểu tượng toggle trở về thành fa-bars
      toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      // Đồng thời ẩn menu bằng cách xóa class 'active'
      menu.classList.remove('active');
    });
  });
// scroll navbar
window.addEventListener('scroll', function() { 
    const navContainer = document.querySelector('header');
 
    if (window.scrollY > 0) {
        navContainer.classList.add('scrolled-header'); 
    } else {
        navContainer.classList.remove('scrolled-header');
    }
}); 
// scroll animation
// Select all elements with the class 'show-on-scroll'
var animationElements = document.querySelectorAll('.show_on_scroll');

// Function to toggle animation class based on element's visibility in the window
function toggleAnimationElementInWindow(element) {
    var rect = element.getBoundingClientRect(); // Corrected typo: getClientReacts() to getBoundingClientRect()
    var heightScreen = window.innerHeight;
    
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        element.classList.add('start');
    } else {
        element.classList.remove('start');
    }
}

// Function to check for animation elements when scrolling
function checkAnimation() {
    animationElements.forEach(el => {
        toggleAnimationElementInWindow(el);
    });
}

// Attach checkAnimation function to the window's scroll event
window.onscroll = checkAnimation;

// Initial check to handle animations on page load
checkAnimation();
// emailjs
function SendMail(){
    var params ={
        from_name : document.getElementById('fullName').value,
        user_email : document.getElementById('email_id').value,
        message : document.getElementById('message').value
    }
    emailjs.send("service_j3aob9j","template_tzqq12e",params).then(function(res){
        console.log('succss!' + res.status);
        document.getElementById('fullName').innerHTML= "";
        document.getElementById('email_id').innerHTML= "";
        document.getElementById('message').innerHTML= "";
    })
}
// service_j3aob9j
// template_tzqq12e