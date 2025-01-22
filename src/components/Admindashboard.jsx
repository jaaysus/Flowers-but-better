import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "./dashstyle.css";

const Dashboard = () => {
  useEffect(() => {
    // Initialize charts
    const xValues1 = ["drawer", "constructor", "mechanic", "carpenter", "blacksmith"].map((x) =>
      x.charAt(0).toUpperCase() + x.slice(1)
    );
    const yValues1 = [55, 49, 44, 24, 190];
    const barColors1 = ["#66ff66", "#00ffcc", "#b3b3b3", "#ffbf80", "#6666ff"];

    new Chart("chart1", {
      type: "doughnut",
      data: {
        labels: xValues1,
        datasets: [
          {
            label: "Amount of Workers",
            backgroundColor: barColors1,
            data: yValues1,
          },
        ],
      },
      options: {
        title: {
          display: true,
        },
      },
    });

    const xValues2 = ["laayoune", "agadir", "guelmim", "dakhla", "marrakesh", "tangier"].map((x) =>
      x.charAt(0).toUpperCase() + x.slice(1)
    );
    const yValues2 = [55, 49, 44, 24, 15, 60];
    const barColors2 = "#00ccff";

    new Chart("chart2", {
      type: "bar",
      data: {
        labels: xValues2,
        datasets: [
          {
            label: "City",
            backgroundColor: barColors2,
            data: yValues2,
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const xValues3 = ["drawer", "constructor", "mechanic", "carpenter", "blacksmith"].map((x) =>
      x.charAt(0).toUpperCase() + x.slice(1)
    );
    const yValues3 = [30, 80, 60, 14, 50];
    const barColors3 = ["#66ff66", "#00ffcc", "#b3b3b3", "#ffbf80", "#6666ff"];

    new Chart("chart3", {
      type: "doughnut",
      data: {
        labels: xValues3,
        datasets: [
          {
            label: "Amount of Jobs",
            backgroundColor: barColors3,
            data: yValues3,
          },
        ],
      },
      options: {
        title: {
          display: true,
        },
      },
    });

    const xValues4 = ["laayoune", "agadir", "guelmim", "dakhla", "marrakesh", "tangier"].map((x) =>
      x.charAt(0).toUpperCase() + x.slice(1)
    );
    const yValues4 = [20, 20, 78, 10, 50, 24];
    const barColors4 = "#00ccff";

    new Chart("chart4", {
      type: "bar",
      data: {
        labels: xValues4,
        datasets: [
          {
            label: "City",
            backgroundColor: barColors4,
            data: yValues4,
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const xMonths = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"].map(
      (x) => x.charAt(0).toUpperCase() + x.slice(1)
    );
    const yValues5 = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

    new Chart("chart5", {
      type: "line",
      data: {
        labels: xMonths,
        datasets: [
          {
            label: "Registered Clients Progress",
            fill: false,
            lineTension: 0,
            backgroundColor: "#0287CD",
            borderColor: "#0099ff",
            data: yValues5,
          },
        ],
      },
      options: {
        legend: { display: true },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const yValues6 = [1, 20, 2, 15, 12, 19, 2, 3, 6, 8, 10];

    new Chart("chart6", {
      type: "line",
      data: {
        labels: xMonths,
        datasets: [
          {
            label: "Registered Seekers Progress",
            fill: false,
            lineTension: 0,
            backgroundColor: "#0287CD",
            borderColor: "#0099ff",
            data: yValues6,
          },
        ],
      },
      options: {
        legend: { display: true },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const yValues7 = [6, 4, 3, 2, 5, 8, 12, 15, 10, 9, 12];

    new Chart("chart7", {
      type: "line",
      data: {
        labels: xMonths,
        datasets: [
          {
            label: "Job Advancements",
            fill: false,
            lineTension: 0,
            backgroundColor: "#0287CD",
            borderColor: "#0099ff",
            data: yValues7,
          },
        ],
      },
      options: {
        legend: { display: true },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  const openCity = (evt, cityName) => {
    const tabcontent = document.getElementsByClassName("tabcontent");
    Array.from(tabcontent).forEach((tab) => {
      tab.style.display = "none";
    });

    const tablinks = document.getElementsByClassName("tablinks");
    Array.from(tablinks).forEach((tab) => {
      tab.classList.remove("active");
    });

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  const openSection = (evt, sectionName) => {
    const sectioncontent = document.getElementsByClassName("sectioncontent");
    Array.from(sectioncontent).forEach((section) => {
      section.style.display = "none";
    });

    const sectionlinks = document.getElementsByClassName("sectionlinks");
    Array.from(sectionlinks).forEach((link) => {
      link.classList.remove("active");
    });

    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  return (
    <div className="container">
      <header>
        <div className="login">
          <i className="fa-solid fa-power-off"></i> &nbsp; <span>LogOut</span>
        </div>
        <div className="title">
          <img
            src="https://clipart-library.com/images/zTX5nM7ec.png"
            alt="logo"
          />
          <h1>Dashboard</h1>
        </div>
      </header>
      <div className="allContent">
        <aside>
          <nav>
            <ul
              className="sectionlinks"
              onClick={(e) => openSection(e, "statistics")}
            >
              <i className="fa-solid fa-chart-simple"></i> &nbsp; <span>Statistics</span>
            </ul>
            <ul
              className="sectionlinks"
              onClick={(e) => openSection(e, "claims")}
            >
              <i className="fa-solid fa-flag"></i> &nbsp; <span>Claims</span>
            </ul>
          </nav>
        </aside>
        <aside id="statistics" className="sectioncontent">
          <div className="tab">
            <button className="tablinks" onClick={(e) => openCity(e, "users")}>
              Users
            </button>
            <button className="tablinks" onClick={(e) => openCity(e, "jobs")}>
              Jobs
            </button>
            <button className="tablinks" onClick={(e) => openCity(e, "progress")}>
              Progress
            </button>
          </div>

          <div id="users" className="tabcontent">
            <div className="cardContainer">
              <div className="card">
                <i className="fa-solid fa-users"></i>
                <div>
                  <span>265</span>
                  <br />
                  Job Seekers
                </div>
              </div>
              <div className="card">
                <i className="fa-solid fa-city"></i>
                <div>
                  <span>20</span>
                  <br />
                  Cities
                </div>
              </div>
              <div className="card">
                <i className="fa-solid fa-user"></i>
                <div>
                  <span>100</span>
                  <br />
                  Clients
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="chartContainer">
              <div className="circleChart">
                <h3>Number of Workers by Profession :</h3>
                <canvas id="chart1"></canvas>
              </div>
              <div className="barChart">
                <h3>Number of Workers by Cities :</h3>
                <canvas id="chart2"></canvas>
              </div>
            </div>
          </div>

          <div id="jobs" className="tabcontent">
            <div className="cardContainer">
              <div className="card">
                <i className="fa-solid fa-users"></i>
                <div>
                  <span>1265</span>
                  <br />
                  Total Jobs
                </div>
              </div>
              <div className="card">
                <i
                  style={{
                    color: "rgb(13, 241, 146)",
                    backgroundColor: "black",
                  }}
                  className="fa-solid fa-check"
                ></i>
                <div>
                  <span>650</span>
                  <br />
                  Done
                </div>
              </div>
              <div className="card">
                <i
                  style={{
                    color: "white",
                    backgroundColor: "black",
                  }}
                  className="fa-solid fa-arrow-trend-up"
                ></i>
                <div>
                  <span>450</span>
                  <br />
                  In Progress
                </div>
              </div>
              <div className="card">
                <i
                  style={{
                    color: "rgb(240, 23, 106)",
                    backgroundColor: "black",
                  }}
                  className="fa-solid fa-xmark"
                ></i>
                <div>
                  <span>50</span>
                  <br />
                  Pending
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="chartContainer">
              <div className="circleChart">
                <h3>Number of Jobs by Profession :</h3>
                <canvas id="chart3"></canvas>
              </div>
              <div className="barChart">
                <h3>Number of Jobs by Cities :</h3>
                <canvas id="chart4"></canvas>
              </div>
            </div>
          </div>

          <div id="progress" className="tabcontent">
            <div className="chartContainer">
              <div className="lineChart">
                <h3>Clients Progress :</h3>
                <canvas id="chart5"></canvas>
              </div>
              <div className="lineChart">
                <h3>Job Seekers Progress :</h3>
                <canvas id="chart6"></canvas>
              </div>
              <div className="lineChart">
                <h3>Job Advancements :</h3>
                <canvas id="chart7"></canvas>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
