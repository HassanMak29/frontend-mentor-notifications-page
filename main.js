const num = document.querySelector("#notifications-num");
const markAsRead = document.querySelector(".mark-as-read");
const unreadNotifications = document.querySelectorAll(".notification");
const details = document.querySelectorAll(".detail");

markAsRead.addEventListener("click", () => {
  if (parseInt(num.textContent) > 0) {
    num.textContent = 0;
    markAsRead.textContent = "Mark all as unread";
  } else {
    num.textContent = details.length;
    markAsRead.textContent = "Mark all as read";
  }

  if (
    Array.from(unreadNotifications).some((notification) =>
      notification.classList.contains("unread")
    )
  ) {
    unreadNotifications.forEach((notification) => {
      notification.classList.remove("unread");
    });
  } else {
    unreadNotifications.forEach((notification) => {
      notification.classList.toggle("unread");
    });
  }

  if (
    Array.from(details).some((detail) => {
      const alert = detail.querySelector(".alert");
      if (alert !== null) {
        return !!alert;
      }
    })
  ) {
    details.forEach((detail) => {
      const alert = detail.querySelector(".alert");
      if (alert) {
        alert.remove();
      }
    });
  } else {
    details.forEach((detail) => {
      const span = document.createElement("span");
      span.classList.add("alert");
      detail.appendChild(span);
    });
  }
});
