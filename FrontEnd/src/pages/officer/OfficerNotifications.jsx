import React, { useState } from "react";
import "../../styles/officer/OfficerNotifications.css";

const initialNotifications = [
  {
    id: 1,
    type: "farmer",
    title: "New Farmer Approval Request",
    message:
      "A new farmer registration request has been submitted and is waiting for your approval.",
    time: "Today, 10:30 AM",
    unread: true,
  },
  {
    id: 2,
    type: "disease",
    title: "Disease Hotspot Alert",
    message:
      "An increase in tomato disease cases has been detected in Tiruppur district. Review the disease monitoring data.",
    time: "Today, 9:15 AM",
    unread: true,
  },
  {
    id: 3,
    type: "mandi",
    title: "Mandi Price Alert",
    message:
      "Significant changes in tomato prices have been recorded at Avinashi Mandi. Review the latest market prices.",
    time: "Yesterday, 4:45 PM",
    unread: true,
  },
  {
    id: 4,
    type: "seed",
    title: "Seed Laboratory Update",
    message:
      "A new seed testing report has been submitted by the district seed laboratory for verification.",
    time: "Yesterday, 2:20 PM",
    unread: true,
  },
  {
    id: 5,
    type: "scheme",
    title: "Government Scheme Update",
    message:
      "A new farmer welfare scheme has been added. Review the scheme details before making it available to farmers.",
    time: "Yesterday, 11:20 AM",
    unread: false,
  },
  {
    id: 6,
    type: "soil",
    title: "Soil Information Update",
    message:
      "New soil information records have been added for farmers in Coimbatore district.",
    time: "08 Aug 2026, 2:30 PM",
    unread: false,
  },
  {
    id: 7,
    type: "system",
    title: "System Notification",
    message:
      "The CropCare AI officer dashboard has been updated successfully.",
    time: "07 Aug 2026, 5:10 PM",
    unread: false,
  },
];

const notificationConfig = {
  farmer: {
    icon: "👨‍🌾",
    label: "Farmer Approval",
  },

  disease: {
    icon: "🦠",
    label: "Disease Alert",
  },

  mandi: {
    icon: "📈",
    label: "Mandi Price Alert",
  },

  seed: {
    icon: "🧪",
    label: "Seed Lab Alert",
  },

  soil: {
    icon: "🌱",
    label: "Soil Information",
  },

  scheme: {
    icon: "🏛️",
    label: "Government Scheme",
  },

  system: {
    icon: "📢",
    label: "System Alert",
  },
};

function OfficerNotifications() {
  const [notifications, setNotifications] = useState(
    initialNotifications
  );

  const [filter, setFilter] = useState("all");

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const filteredNotifications = notifications.filter(
    (notification) => {
      if (filter === "unread") {
        return notification.unread;
      }

      if (filter === "read") {
        return !notification.unread;
      }

      return true;
    }
  );

  /* =========================================================
     MARK ONE AS READ
     ========================================================= */

  const markAsRead = (id) => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              unread: false,
            }
          : notification
      )
    );
  };

  /* =========================================================
     MARK ALL AS READ
     ========================================================= */

  const markAllAsRead = () => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  /* =========================================================
     CLEAR ONE
     ========================================================= */

  const clearNotification = (id) => {
    setNotifications((currentNotifications) =>
      currentNotifications.filter(
        (notification) => notification.id !== id
      )
    );
  };

  /* =========================================================
     CLEAR ALL
     ========================================================= */

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="officer-notifications-page">

      {/* =====================================================
          PAGE HEADER
          ===================================================== */}

      <div className="officer-notifications-header">

        <div className="officer-notifications-header-content">

          <div className="officer-notifications-title-row">

            <div className="officer-notifications-title-icon">
              🔔
            </div>

            <div>
              <p className="officer-notifications-label">
                Officer Dashboard
              </p>

              <h1>
                Notifications
              </h1>

              <p className="officer-notifications-description">
                Stay updated with important alerts and activities
                across the district.
              </p>
            </div>

          </div>

          {unreadCount > 0 && (
            <div className="officer-notifications-unread-count">
              {unreadCount} unread
            </div>
          )}

        </div>

      </div>


      {/* =====================================================
          CONTROLS
          ===================================================== */}

      <div className="officer-notifications-controls">

        <div className="officer-notification-filters">

          <button
            type="button"
            className={`officer-notification-filter ${
              filter === "all" ? "active" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All
            <span>{notifications.length}</span>
          </button>

          <button
            type="button"
            className={`officer-notification-filter ${
              filter === "unread" ? "active" : ""
            }`}
            onClick={() => setFilter("unread")}
          >
            Unread
            <span>{unreadCount}</span>
          </button>

          <button
            type="button"
            className={`officer-notification-filter ${
              filter === "read" ? "active" : ""
            }`}
            onClick={() => setFilter("read")}
          >
            Read
            <span>
              {notifications.length - unreadCount}
            </span>
          </button>

        </div>


        <div className="officer-notification-actions">

          {unreadCount > 0 && (
            <button
              type="button"
              className="officer-mark-all-button"
              onClick={markAllAsRead}
            >
              Mark all as read
            </button>
          )}

          {notifications.length > 0 && (
            <button
              type="button"
              className="officer-clear-all-button"
              onClick={clearAllNotifications}
            >
              Clear all
            </button>
          )}

        </div>

      </div>


      {/* =====================================================
          NOTIFICATION LIST
          ===================================================== */}

      <div className="officer-notifications-list">

        {filteredNotifications.length > 0 ? (

          filteredNotifications.map((notification) => {

            const config =
              notificationConfig[notification.type];

            return (
              <div
                key={notification.id}
                className={`officer-notification-item ${
                  notification.unread ? "unread" : ""
                }`}
              >

                {/* ICON */}

                <div
                  className={`officer-notification-icon officer-notification-${notification.type}`}
                >
                  {config.icon}
                </div>


                {/* CONTENT */}

                <div className="officer-notification-content">

                  <div className="officer-notification-top">

                    <div>

                      <span className="officer-notification-category">
                        {config.label}
                      </span>

                      <h2>
                        {notification.title}
                      </h2>

                    </div>

                    {notification.unread && (
                      <span className="officer-notification-unread-dot" />
                    )}

                  </div>


                  <p>
                    {notification.message}
                  </p>


                  {/* FOOTER */}

                  <div className="officer-notification-footer">

                    <span className="officer-notification-time">
                      {notification.time}
                    </span>


                    <div className="officer-notification-card-actions">

                      <button
                        type="button"
                        className="officer-mark-read-button"
                        onClick={() =>
                          markAsRead(notification.id)
                        }
                        disabled={!notification.unread}
                      >
                        {notification.unread
                          ? "Mark as read"
                          : "Read"}
                      </button>


                      <button
                        type="button"
                        className="officer-clear-notification-button"
                        onClick={() =>
                          clearNotification(
                            notification.id
                          )
                        }
                      >
                        Clear
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            );
          })

        ) : (

          <div className="officer-notifications-empty">

            <div className="officer-notifications-empty-icon">
              🔔
            </div>

            <h2>
              No notifications
            </h2>

            <p>
              {filter === "unread"
                ? "You have no unread notifications."
                : filter === "read"
                ? "You have no read notifications."
                : "You're all caught up. New notifications will appear here."}
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default OfficerNotifications;