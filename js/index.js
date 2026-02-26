// Click Count Tracker

const clickElements = [
  { id: "theme-switch", name: "Theme Switch" },
  { id: "home-page-link", name: "Home Page" },
  { id: "history-page-link", name: "History Page" },
  { id: "culture-page-link", name: "Culture Page" },
  { id: "location-page-link", name: "Location Page" },
  { id: "british-timeline", name: "British Card" },
  { id: "tsunami-timeline", name: "Tsunami Card" },
  { id: "chau-timeline", name: "Chau Card" },
  { id: "protection-timeline", name: "Protections Card" }
];

const selectionElements = [
  { id: "c1", name: "History Card" },
  { id: "c2", name: "Culture Card" },
  { id: "c3", name: "Location Card" }
];

function trackClicks(element, name) {
  if (!element) return;
  let count = 0;

  element.addEventListener("click", () => {
    count++;
    console.log(`${name} clicked ${count} times.`);
  });
}

function trackSelection(element, name) {
  if (!element) return;
  let count = 0;

  element.addEventListener("change", () => {
    count++;
    console.log(`${name} opened ${count} times.`);
  })
}

clickElements.forEach(item => {
  trackClicks(document.getElementById(item.id), item.name);
});

selectionElements.forEach(item => {
  trackSelection(document.getElementById(item.id), item.name);
});

// Dark Mode Toggle

const themeswitch = document.getElementById("theme-switch");
let darkmode = localStorage.getItem("darkmode");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
}

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "null");
}

if (darkmode === "active") {
  enableDarkmode();
}

themeswitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// History Timeline

const timelineCheckboxes = [
  document.getElementById('british-timeline'),
  document.getElementById('tsunami-timeline'),
  document.getElementById('chau-timeline'),
  document.getElementById('protection-timeline')
];

const timelineContents = [
  document.querySelector('.timeline-content1'),
  document.querySelector('.timeline-content2'),
  document.querySelector('.timeline-content3'),
  document.querySelector('.timeline-content4')
];

timelineCheckboxes.forEach((currentCheckbox, currentIndex) => {
  currentCheckbox.addEventListener('change', () => {
    if (currentCheckbox.checked) {
      timelineCheckboxes.forEach((checkbox, index) => {
        if (index !== currentIndex) checkbox.checked = false;
        timelineContents[index].style.display = index === currentIndex ? 'block' : 'none';
      });
    } else {
      timelineContents[currentIndex].style.display = 'none';
    }
  });
});

timelineCheckboxes.forEach((checkbox, idx) => {
  checkbox.addEventListener('change', () => {
    timelineContents[idx].style.display = checkbox.checked ? 'block' : 'none';
  });
});

timelineContents.forEach(content => {
  content.style.display = 'none';
});