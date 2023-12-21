const allTracks = document.querySelectorAll("p.audioname");
const alldivs = document.querySelectorAll("div.audiodiv");
const chart = document.getElementById("chart");

function search() {
  let searchTracks = document.getElementById("searchText").value.toLowerCase();

  for (let i = 0; i < allTracks.length; i++) {
    let track = allTracks[i].textContent.toLowerCase();
    let div = alldivs[i];

    if (!track.includes(searchTracks)) {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
  }

  let visibleDivs = document.querySelectorAll("div.audiodiv[style='display: block;']");
  for (let i = 0; i < visibleDivs.length; i++) {
    let div = visibleDivs[i];
    chart.insertBefore(div, chart.firstChild);
  }
}