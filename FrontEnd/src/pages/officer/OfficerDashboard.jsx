import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/officer/OfficerDashboard.css";

const OfficerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="officer-dashboard">

      {/* =========================
          STATISTICS
      ========================= */}
      <div className="officer-stat-grid">

        {/* Total Labs Available */}
        <div className="officer-stat-card">
          <div className="officer-stat-top">
            <div className="officer-stat-icon officer-stat-warning">
              🧪
            </div>

            <span className="officer-stat-trend officer-trend-up">
              3 labs
            </span>
          </div>

          <div className="officer-stat-value">9</div>

          <div className="officer-stat-label">
            Total labs available
          </div>
        </div>


        {/* Active Disease Cases */}
        <div className="officer-stat-card">
          <div className="officer-stat-top">
            <div className="officer-stat-icon officer-stat-danger">
              🌾
            </div>

            <span className="officer-stat-trend officer-trend-down">
              +5 today
            </span>
          </div>

          <div className="officer-stat-value">31</div>

          <div className="officer-stat-label">
            Active disease cases
          </div>
        </div>


        {/* Registered Farmers */}
        <div className="officer-stat-card">
          <div className="officer-stat-top">
            <div className="officer-stat-icon officer-stat-success">
              👨‍🌾
            </div>

            <span className="officer-stat-trend officer-trend-up">
              +18 this month
            </span>
          </div>

          <div className="officer-stat-value">2,140</div>

          <div className="officer-stat-label">
            Registered farmers
          </div>
        </div>


        {/* Recent Disease Scans */}
        <div className="officer-stat-card">
          <div className="officer-stat-top">
            <div className="officer-stat-icon officer-stat-info">
              🔍
            </div>

            <span className="officer-stat-trend officer-trend-up">
              +8 today
            </span>
          </div>

          <div className="officer-stat-value">126</div>

          <div className="officer-stat-label">
            Disease scans this month
          </div>
        </div>

      </div>


      {/* =========================
          MAIN DASHBOARD GRID
      ========================= */}
      <div className="officer-dashboard-grid">

        {/* =========================
            LEFT COLUMN
        ========================= */}
        <div className="officer-dashboard-left">

          {/* Disease Hotspot Map */}
          <div className="officer-panel">

            <div className="officer-panel-header">
              <h3>Disease hotspot map — Tiruppur district</h3>

              <button className="officer-panel-link">
                Open full map
              </button>
            </div>

            <div className="officer-map-card">

              <div
                className="officer-map-pin officer-pin-danger"
                style={{ top: "40px", left: "80px" }}
              />

              <div
                className="officer-map-pin officer-pin-danger officer-pin-large"
                style={{ top: "110px", left: "180px" }}
              />

              <div
                className="officer-map-pin officer-pin-warning"
                style={{ top: "70px", left: "280px" }}
              />

              <div
                className="officer-map-pin officer-pin-warning"
                style={{ top: "160px", left: "340px" }}
              />

              <div
                className="officer-map-pin officer-pin-success"
                style={{ top: "190px", left: "120px" }}
              />

              <div className="officer-map-legend">

                <div className="officer-legend-item">
                  <span className="officer-legend-dot officer-legend-danger" />
                  High severity
                </div>

                <div className="officer-legend-item">
                  <span className="officer-legend-dot officer-legend-warning" />
                  Moderate
                </div>

                <div className="officer-legend-item">
                  <span className="officer-legend-dot officer-legend-success" />
                  Low / resolved
                </div>

              </div>

            </div>
          </div>


          {/* =========================
              RECENT SCANS
          ========================= */}
          <div className="officer-panel">

            <div className="officer-panel-header">
              <h3>Recent scans — Tiruppur district</h3>

              <button className="officer-panel-link">
                View all scans
              </button>
            </div>

            <div className="officer-table-wrapper">

              <table className="officer-table">

                <thead>
                  <tr>
                    <th>Farmer</th>
                    <th>Village</th>
                    <th>Crop</th>
                    <th>Result</th>
                    <th>Scanned</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>
                      <div className="officer-name-cell">
                        <div className="officer-avatar-small">
                          RK
                        </div>
                        Ramesh Kumar
                      </div>
                    </td>

                    <td>Avinashi</td>

                    <td>Tomato</td>

                    <td>
                      <span className="officer-status-badge officer-status-danger">
                        Leaf Blight
                      </span>
                    </td>

                    <td>Today</td>
                  </tr>


                  <tr>
                    <td>
                      <div className="officer-name-cell">
                        <div className="officer-avatar-small">
                          LP
                        </div>
                        Lakshmi P.
                      </div>
                    </td>

                    <td>Kangeyam</td>

                    <td>Cotton</td>

                    <td>
                      <span className="officer-status-badge officer-status-warning">
                        Aphids
                      </span>
                    </td>

                    <td>Today</td>
                  </tr>


                  <tr>
                    <td>
                      <div className="officer-name-cell">
                        <div className="officer-avatar-small">
                          SK
                        </div>
                        Suresh Kumar
                      </div>
                    </td>

                    <td>Palladam</td>

                    <td>Maize</td>

                    <td>
                      <span className="officer-status-badge officer-status-success">
                        Healthy
                      </span>
                    </td>

                    <td>Yesterday</td>
                  </tr>


                  <tr>
                    <td>
                      <div className="officer-name-cell">
                        <div className="officer-avatar-small">
                          MS
                        </div>
                        Meena S.
                      </div>
                    </td>

                    <td>Dharapuram</td>

                    <td>Onion</td>

                    <td>
                      <span className="officer-status-badge officer-status-danger">
                        Thrips
                      </span>
                    </td>

                    <td>Yesterday</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>


        {/* =========================
            RIGHT COLUMN
        ========================= */}
        <div className="officer-dashboard-right">

          {/* =========================
              MANDI INFORMATION
          ========================= */}
          <div
            className="officer-panel officer-mandi-card"
            onClick={() => navigate("/officer/mandi")}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                navigate("/officer/mandi");
              }
            }}
          >

            <div className="officer-panel-header">
              <h3>Mandi information</h3>

              <button
                className="officer-panel-link"
                onClick={(event) => {
                  event.stopPropagation();
                  navigate("/officer/mandi");
                }}
              >
                View mandi
              </button>
            </div>


            <div className="officer-mandi-content">

              <div className="officer-mandi-main">

                <div className="officer-mandi-icon">
                  📈
                </div>

                <div>
                  <strong>Avinashi Mandi</strong>

                  <span>
                    Tiruppur district
                  </span>
                </div>

              </div>


              <div className="officer-mandi-price">

                <span>Tomato</span>

                <strong>
                  ₹1,840
                </strong>

                <small className="officer-mandi-up">
                  ▲ 4.8%
                </small>

              </div>

            </div>


            <div className="officer-mandi-summary">

              <div>
                <span>Active markets</span>
                <strong>8</strong>
              </div>

              <div>
                <span>Today's arrivals</span>
                <strong>2,840 Q</strong>
              </div>

            </div>

          </div>


          {/* =========================
              QUICK ACTIONS
          ========================= */}
          <div className="officer-panel">

            <div className="officer-panel-header">
              <h3>Quick actions</h3>
            </div>

            <button className="officer-quick-action">

              <div className="officer-quick-icon officer-quick-primary">
                📢
              </div>

              <span>
                Send district broadcast alert
              </span>

            </button>


            <button className="officer-quick-action">

              <div className="officer-quick-icon officer-quick-info">
                🧪
              </div>

              <span>
                Review seed lab requests
              </span>

            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default OfficerDashboard;