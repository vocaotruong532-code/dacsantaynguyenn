document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Đặc Sản Tây Nguyên đã khởi động.");

  const cartButton = document.querySelector("#cartButton");
  const cartMessage = document.querySelector("#cartMessage");
  if (cartButton) {
    cartButton.addEventListener("click", () => {
      cartMessage.textContent = "Đã thêm Cà phê Buôn Ma Thuột vào giỏ hàng (mô phỏng).";
    });
  }

  const contactForm = document.querySelector("#contactForm");
  const formMessage = document.querySelector("#formMessage");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      formMessage.textContent = "Cảm ơn bạn! Yêu cầu tư vấn đã được ghi nhận (mô phỏng giao diện tĩnh).";
      contactForm.reset();
    });
  }

  const filterButton = document.querySelector("#filterButton");
  if (filterButton) {
    filterButton.addEventListener("click", () => {
      alert("Bộ lọc đã được áp dụng (mô phỏng giao diện tĩnh).");
    });
  }
});
