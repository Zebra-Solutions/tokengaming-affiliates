import React from 'react';
import './FolderCard.css'; // Import the CSS file

const FolderCard = () => {
  return (
    <div className="folder-container">
      {/* Shadow Folder */}
      <div className="folder-shadow"></div>

      {/* Main Folder */}
      <div className="folder">
        <div style={{ position: "relative", zIndex: 1, padding:"20px" }}>
          {/* Header Section */}
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "14px", color: "#A0A4AB", margin: 0 }}>
              EARN UP TO COMMISSION
            </p>
            <h1 style={{ fontSize: "48px", color: "#000000", margin: 0 }}>45%</h1>
          </div>

          {/* KPI Overview Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#F5F8FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Placeholder for Icon */}
              <span style={{ fontSize: "24px", color: "#5E73FF" }}>📈</span>
            </div>
            <p style={{ margin: 0, fontSize: "14px", color: "#A0A4AB" }}>
              KPI Overview
            </p>
          </div>

          {/* Chart Placeholder */}
          <div
            style={{
              width: "100%",
              height: "120px",
              backgroundColor: "#F9FBFF",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Placeholder for Chart */}
            <span style={{ color: "#A0A4AB" }}>Chart goes here</span>
          </div>

          {/* Footer Section */}
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#5E73FF",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              color: "#FFFFFF",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Become a Partner
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderCard;
