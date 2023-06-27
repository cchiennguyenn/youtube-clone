// thanh menu
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}



// // Lấy truy cập đến các phần tử
// const searchInput = document.getElementById('searchInput');
// const micIcon = document.getElementById('micIcon');

// // Kiểm tra xem trình duyệt hỗ trợ API Nhận Dạng Giọng Nói
// if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
//     const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();

//     // Cấu hình các thiết lập cho recognition
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     // Xử lý sự kiện khi nhấn vào biểu tượng mic
//     micIcon.addEventListener('click', () => {
//         // Bật lắng nghe giọng nói
//         recognition.start();
//     });

//     // Xử lý sự kiện khi nhận được kết quả từ giọng nói
//     recognition.onresult = event => {
//         const transcript = event.results[0][0].transcript;
//         searchInput.value = transcript;
//     };
// } else {
//     console.log('Trình duyệt không hỗ trợ API Nhận Dạng Giọng Nói');
// }

// micIcon.addEventListener('click', () => {
//     micIcon.classList.toggle('active');
// });

function hideBanner() {
  var banner = document.getElementById("banner");
  var main = document.getElementById("main");

  banner.classList.add("hidden");
  main.style.marginTop = "0";
}

// Lấy danh sách video đã xem từ cơ sở dữ liệu hoặc trình duyệt
function getWatchedVideos() {
    // Code để lấy danh sách video đã xem từ cơ sở dữ liệu hoặc trình duyệt của người dùng
    // Trả về một mảng chứa thông tin về các video đã xem, ví dụ:
    return [{
            title: "Video 1",
            thumbnail: "thumbnail1.png",
            link: "https://www.youtube.com/watch?v=video1"
        },
        {
            title: "Video 2",
            thumbnail: "thumbnail2.png",
            link: "https://www.youtube.com/watch?v=video2"
        },
        // ...
    ];
}

// Hiển thị video đã xem trên trang chủ
function displayWatchedVideos() {
    const watchedVideos = getWatchedVideos();

    const videoContainer = document.getElementById("video-container");

    // Tạo các phần tử HTML tương ứng với các video đã xem
    watchedVideos.forEach(video => {
        const videoElement = document.createElement("div");
        videoElement.classList.add("watched-video");

        const thumbnailElement = document.createElement("img");
        thumbnailElement.src = video.thumbnail;
        videoElement.appendChild(thumbnailElement);

        const titleElement = document.createElement("a");
        titleElement.href = video.link;
        titleElement.textContent = video.title;
        videoElement.appendChild(titleElement);

        videoContainer.appendChild(videoElement);
    });
}

// Gọi hàm hiển thị video đã xem khi trang web được tải
window.onload = function () {
    displayWatchedVideos();
};
$(document).ready(function(){
    $('.content-like').click(function(){
      $('.content-like').toggleClass("active")
      $('.numb').toggleClass("active")
      $('.numb2').toggleClass("active2")
    });
  });
  $(document).ready(function(){
    $('.sub-button').click(function(){
      $('.sub-button').toggleClass("active2")
      $('.text-sub').toggleClass("active2")
    });
  });


  function like(){
    let like = document.getElementById("like");
    if(like.className=='fa-regular fa-thumbs-up')
    {
      like.className='fa-solid fa-thumbs-up'
     
    }
    else{
      like.className='fa-regular fa-thumbs-up'
    }
  }
  function dislike(){
    let dislike = document.getElementById("dislike");
    if(dislike.className=='fa-regular fa-thumbs-up fa-rotate-180')
    {
      dislike.className='fa-solid fa-thumbs-up fa-rotate-180'
    }
    else{
      dislike.className='fa-regular fa-thumbs-up fa-rotate-180'
    }
  }


  function like2(){
    let like2 = document.getElementById("like2");
    if(like2.className=='fa-regular fa-thumbs-up')
    {
      like2.className='fa-solid fa-thumbs-up'
     
    }
    else{
      like2.className='fa-regular fa-thumbs-up'
    }
  }
  function dislike2(){
    let dislike2 = document.getElementById("dislike2");
    if(dislike2.className=='fa-regular fa-thumbs-up fa-rotate-180')
    {
      dislike2.className='fa-solid fa-thumbs-up fa-rotate-180'
    }
    else{
      dislike2.className='fa-regular fa-thumbs-up fa-rotate-180'
    }
  }

  function like3(){
    let like3 = document.getElementById("like3");
    if(like3.className=='fa-regular fa-thumbs-up')
    {
      like3.className='fa-solid fa-thumbs-up'
     
    }
    else{
      like3.className='fa-regular fa-thumbs-up'
    }
  }
  function dislike3(){
    let dislike3 = document.getElementById("dislike3");
    if(dislike3.className=='fa-regular fa-thumbs-up fa-rotate-180')
    {
      dislike3.className='fa-solid fa-thumbs-up fa-rotate-180'
    }
    else{
      dislike3.className='fa-regular fa-thumbs-up fa-rotate-180'
    }
  }


  function like4(){
    let like4 = document.getElementById("like4");
    if(like4.className=='fa-regular fa-thumbs-up')
    {
      like4.className='fa-solid fa-thumbs-up'
     
    }
    else{
      like4.className='fa-regular fa-thumbs-up'
    }
  }
  function dislike4(){
    let dislike4 = document.getElementById("dislike4");
    if(dislike4.className=='fa-regular fa-thumbs-up fa-rotate-180')
    {
      dislike4.className='fa-solid fa-thumbs-up fa-rotate-180'
    }
    else{
      dislike4.className='fa-regular fa-thumbs-up fa-rotate-180'
    }
  }

  function like5(){
    let like5 = document.getElementById("like5");
    if(like5.className=='fa-regular fa-thumbs-up')
    {
      like5.className='fa-solid fa-thumbs-up'
     
    }
    else{
      like5.className='fa-regular fa-thumbs-up'
    }
  }
  function dislike5(){
    let dislike5 = document.getElementById("dislike5");
    if(dislike5.className=='fa-regular fa-thumbs-up fa-rotate-180')
    {
      dislike5.className='fa-solid fa-thumbs-up fa-rotate-180'
    }
    else{
      dislike5.className='fa-regular fa-thumbs-up fa-rotate-180'
    }
  }


  function like6(){
    let like6 = document.getElementById("like6");
    if(like6.className=='fa-regular fa-thumbs-up')
    {
      like6.className='fa-solid fa-thumbs-up'
     
    }
    else{
      like6.className='fa-regular fa-thumbs-up'
    }
  }
  function dislike6(){
    let dislike6 = document.getElementById("dislike6");
    if(dislike6.className=='fa-regular fa-thumbs-up fa-rotate-180')
    {
      dislike6.className='fa-solid fa-thumbs-up fa-rotate-180'
    }
    else{
      dislike6.className='fa-regular fa-thumbs-up fa-rotate-180'
    }
  }

  function like7(){
    let like7 = document.getElementById("like7");
    if(like7.className=='fa-regular fa-thumbs-up')
    {
      like7.className='fa-solid fa-thumbs-up'
     
    }
    else{
      like7.className='fa-regular fa-thumbs-up'
    }
  }
  function dislike7(){
    let dislike7 = document.getElementById("dislike7");
    if(dislike7.className=='fa-regular fa-thumbs-up fa-rotate-180')
    {
      dislike7.className='fa-solid fa-thumbs-up fa-rotate-180'
    }
    else{
      dislike7className='fa-regular fa-thumbs-up fa-rotate-180'
    }
  }


  function like8(){
    let like8 = document.getElementById("like8");
    if(like8.className=='fa-regular fa-thumbs-up')
    {
      like8.className='fa-solid fa-thumbs-up'
     
    }
    else{
      like8.className='fa-regular fa-thumbs-up'
    }
  }
  function dislike8(){
    let dislike8 = document.getElementById("dislike8");
    if(dislike8.className=='fa-regular fa-thumbs-up fa-rotate-180')
    {
      dislike8.className='fa-solid fa-thumbs-up fa-rotate-180'
    }
    else{
      dislike8.className='fa-regular fa-thumbs-up fa-rotate-180'
    }
  }

  function like9(){
    let like9 = document.getElementById("like9");
    if(like9.className=='fa-regular fa-thumbs-up')
    {
      like9.className='fa-solid fa-thumbs-up'
     
    }
    else{
      like9.className='fa-regular fa-thumbs-up'
    }
  }
  function dislike9(){
    let dislike9 = document.getElementById("dislike9");
    if(dislike9.className=='fa-regular fa-thumbs-up fa-rotate-180')
    {
      dislike9.className='fa-solid fa-thumbs-up fa-rotate-180'
    }
    else{
      dislike9.className='fa-regular fa-thumbs-up fa-rotate-180'
    }
  }


  function like0(){
    let like0 = document.getElementById("like0");
    if(like0.className=='fa-regular fa-thumbs-up')
    {
      like0.className='fa-solid fa-thumbs-up'
     
    }
    else{
      like0.className='fa-regular fa-thumbs-up'
    }
  }
  function dislike0(){
    let dislike0 = document.getElementById("dislike0");
    if(dislike0.className=='fa-regular fa-thumbs-up fa-rotate-180')
    {
      dislike0.className='fa-solid fa-thumbs-up fa-rotate-180'
    }
    else{
      dislike0.className='fa-regular fa-thumbs-up fa-rotate-180'
    }
  }