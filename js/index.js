// Click Count Tracker

const theme_switch = document.getElementById("theme-switch");
const home_page_link = document.getElementById("home-page");
const history_page_link = document.getElementById("history-page");
const culture_page_link = document.getElementById("culture-page");
const location_page_link = document.getElementById("location-page");
const history_card = document.getElementById("c1");
const culture_card = document.getElementById("c2");
const location_card = document.getElementById("c3");

function trackClicks(element, name) {
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
    console.log(`${name} opened ${count} times.`)
  })
}

trackClicks(theme_switch, "Theme Switch");
trackClicks(home_page_link, "Home Page");
trackClicks(history_page_link, "History Page");
trackClicks(culture_page_link, "Culture Page");
trackClicks(location_page_link, "Location Page");

trackSelection(history_card, "History Card");
trackSelection(culture_card, "Culture Card");
trackSelection(location_card, "Location Card");

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
  document.getElementById('timeline'),
  document.getElementById('timeline2'),
  document.getElementById('timeline3'),
  document.getElementById('timeline4')
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

// Scroll Watcher

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 }
);

reveals.forEach(el => observer.observe(el));

// Get Current Date

function getCurrentDate() {
  const lastModified = new Date(document.lastModified);
  const copyRightYear = lastModified.getFullYear();
  const formattedDate = lastModified.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const copyrightEl = document.getElementById("copyright-year");
  if (copyrightEl) copyrightEl.textContent = copyRightYear;

  const lastUpdatedEl = document.getElementById("last-updated");
  if (lastUpdatedEl) lastUpdatedEl.textContent = formattedDate;
}

getCurrentDate();