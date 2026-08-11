import React, { useState } from "react";

import AdminNotificationForm from "../../components/admin/notifications/AdminNotificationForm";

import "../../styles/admin/AdminNotifications.css";

const defaultNotifications = [
  {
    id: 1,
    type: "General",
    message: "Platform maintenance notice",
    date: "08 Aug 2026",
    time: "10:30 AM",
  },
];

export default function AdminNotifications() {
  /* =====================================================
     NOTIFICATION DATA
     ===================================================== */

  const [notifications, setNotifications] = useState(
    defaultNotifications
  );

  /* =====================================================
     SEND NOTIFICATION
     ===================================================== */

  const handleSendNotification = (newNotification) => {
    setNotifications((currentNotifications) => [
      newNotification,
      ...currentNotifications,
    ]);
  };

  /* =====================================================
     PAGE
     ===================================================== */

  return (
    <div className="admin-notifications-page">

      {/* =================================================
          PAGE HEADER
          ================================================= */}

      <div className="admin-notifications-page-header">

        <div>
          <h1>
            Send Announcement
          </h1>

          <p>
            Send notifications and announcements to
            CropCare AI users.
          </p>
        </div>

      </div>

      {/* =================================================
          CONTENT
          ================================================= */}

      <div className="admin-notifications-content">

        {/* =================================================
            SEND FORM
            ================================================= */}

        <AdminNotificationForm
          onSend={handleSendNotification}
        />

        {/* =================================================
            RECENT ANNOUNCEMENTS
            ================================================= */}

        <div className="admin-recent-notifications-card">

          <div className="admin-recent-notifications-header">

            <div>
              <h2>
                Recent Announcements
              </h2>

              <p>
                Recently sent platform-wide notifications.
              </p>
            </div>

          </div>

          <div className="admin-recent-notifications-list">

            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="admin-notification-card"
                >

                  {/* Icon */}

                  <div className="admin-notification-icon">
                    {notification.type === "Weather Alert" && "🌦️"}

                    {notification.type === "Emergency Notification" &&
                      "🚨"}

                    {notification.type === "General" && "📢"}
                  </div>

                  {/* Details */}

                  <div className="admin-notification-details">

                    <div className="admin-notification-card-top">

                      <h3>
                        {notification.type}
                      </h3>

                      <span className="admin-notification-type">
                        {notification.type}
                      </span>

                    </div>

                    <p>
                      {notification.message}
                    </p>

                    <span className="admin-notification-time">
                      Sent {notification.date} at{" "}
                      {notification.time}
                    </span>

                  </div>

                </div>
              ))
            ) : (
              <div className="admin-notifications-empty">
                No announcements sent yet.
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}