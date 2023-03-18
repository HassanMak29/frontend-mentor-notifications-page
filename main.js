// ELEMENTS
const num = document.querySelector("#notifications-num"),
  markAsRead = document.querySelector(".mark-as-read"),
  unreadNotifications = document.querySelectorAll(".notification"),
  details = document.querySelectorAll(".detail"),
  alerts = document.querySelectorAll("#alert");

// EVENT LISTENERS
markAsRead.addEventListener("click", () => {
  changeNotificationNum();
  toggleAllNotifReadUnread();
  toggleAllAlertsReadUnread();
});

// HELPER FUNCTIONS
const changeNotificationNum = () => {
  if (parseInt(num.textContent) > 0) {
    num.classList.add("hidden");
    num.textContent = "";
    markAsRead.textContent = "Mark all as unread";
  } else {
    num.classList.remove("hidden");
    num.textContent = details.length;
    markAsRead.textContent = "Mark all as read";
  }
};

const toggleAllNotifReadUnread = () => {
  const someNotifAreUnred = Array.from(unreadNotifications).some((n) =>
    n.classList.contains("unread")
  );
  if (someNotifAreUnred) {
    unreadNotifications.forEach((n) => {
      n.classList.remove("unread");
      n.setAttribute("title", "Mark as read");
    });
  } else {
    unreadNotifications.forEach((n) => {
      n.classList.toggle("unread");
      n.setAttribute("title", "Mark as unread");
    });
  }
};

const toggleAllAlertsReadUnread = () => {
  const someAlertsAreActive = Array.from(alerts).some((alert) =>
    alert.classList.contains("alert")
  );
  if (someAlertsAreActive) {
    alerts.forEach((a) => a.classList.remove("alert"));
  } else {
    alerts.forEach((a) => a.classList.add("alert"));
  }
};

const toggleElementReadUnread = (e) => {
  num.classList.remove("hidden");
  e.classList.toggle("unread");
  e.querySelector("#alert").classList.toggle("alert");
  if (e.classList.contains("unread")) {
    e.setAttribute("title", "Mark as read");
    num.textContent =
      num.textContent === "" ? "1" : `${parseInt(num.textContent) + 1}`;
  }
  if (!e.classList.contains("unread")) {
    num.textContent =
      num.textContent === "1" ? "" : `${parseInt(num.textContent) - 1}`;
    if (num.textContent === "") num.classList.add("hidden");
    e.setAttribute("title", "Mark as unread");
  }
};
