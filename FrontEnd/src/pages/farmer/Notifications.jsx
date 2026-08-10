import React, { useState } from "react";
import "../../styles/farmer/Notifications.css";

const initialNotifications = [
  {
    id: 1,
    type: "weather",
    title: "Weather Alert",
    message:
      "Heavy rainfall is expected in your area over the next 24 hours. Consider protecting harvested crops and avoid unnecessary field work.",
    time: "Today, 10:30 AM",
    unread: true,
  },
  {
    id: 2,
    type: "disease",
    title: "Disease Alert",
    message:
      "High risk of fungal disease has been reported for tomato crops in your region. Monitor leaves regularly and take preventive measures.",
    time: "Today, 9:15 AM",
    unread: true,
  },
  {
    id: 3,
    type: "mandi",
    title: "Mandi Price Update",
    message:
      "Tomato prices have increased at Avinashi Mandi. Check the latest market prices before selling your crop.",
    time: "Yesterday, 4:45 PM",
    unread: true,
  },
  {
    id: 4,
    type: "scheme",
    title: "New Government Scheme",
    message:
      "A new farmer welfare scheme is available. Check the eligibility criteria and benefits to see if you qualify.",
    time: "Yesterday, 11:20 AM",
    unread: false,
  },
  {
    id: 5,
    type: "weather",
    title: "Weather Update",
    message:
      "Temperatures are expected to remain high this week. Ensure adequate irrigation for crops during the warmer hours.",
    time: "08 Aug 2026, 2:30 PM",
    unread: false,
  },
  {
    id: 6,
    type: "mandi",
    title: "Mandi Price Alert",
    message:
      "Cotton prices have changed in nearby markets. Compare current prices before choosing a market for your produce.",
    time: "07 Aug 2026, 5:10 PM",
    unread: false,
  },
];

const notificationConfig = {
  weather: {
    icon: "🌦️",
    label: "Weather Alerts",
  },
  disease: {
    icon: "🦠",
    label: "Disease Alerts",
  },
  mandi: {
    icon: "📈",
    label: "Mandi Price Alerts",
  },
  scheme: {
    icon: "🏛️",
    label: "Government Scheme Alerts",
  },
};

function Notifications() {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const [filter, setFilter] = useState("all");

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "unread") {
      return notification.unread;
    }

    if (filter === "read") {
      return !notification.unread;
    }

    return true;
  });

  /* Mark one notification as read */
  const markAsRead = (id) => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  /* Mark all notifications as read */
  const markAllAsRead = () => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  /* Clear one notification */
  const clearNotification = (id) => {
    setNotifications((currentNotifications) =>
      currentNotifications.filter(
        (notification) => notification.id !== id
      )
    );
  };

  /* Clear all notifications */
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notifications-page">

      {/* Page Header */}
      <div className="notifications-header">
        <div className="notifications-header-content">

          <div className="notifications-title-row">

            <div className="notifications-title-icon">
              🔔
            </div>

            <div>
              <h1>Notifications</h1>

              <p>
                Stay updated with important information for your farm.
              </p>
            </div>

          </div>

          {unreadCount > 0 && (
            <div className="notifications-unread-count">
              {unreadCount} unread
            </div>
          )}

        </div>
      </div>


      {/* Filters and Actions */}
      <div className="notifications-controls">

        <div className="notification-filters">

          <button
            type="button"
            className={`notification-filter ${
              filter === "all" ? "active" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All
            <span>{notifications.length}</span>
          </button>


          <button
            type="button"
            className={`notification-filter ${
              filter === "unread" ? "active" : ""
            }`}
            onClick={() => setFilter("unread")}
          >
            Unread
            <span>{unreadCount}</span>
          </button>


          <button
            type="button"
            className={`notification-filter ${
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


        <div className="notification-actions">

          {unreadCount > 0 && (
            <button
              type="button"
              className="mark-all-button"
              onClick={markAllAsRead}
            >
              Mark all as read
            </button>
          )}

          {notifications.length > 0 && (
            <button
              type="button"
              className="clear-all-button"
              onClick={clearAllNotifications}
            >
              Clear all
            </button>
          )}

        </div>

      </div>


      {/* Notification List */}
      <div className="notifications-list">

        {filteredNotifications.length > 0 ? (

          filteredNotifications.map((notification) => {

            const config =
              notificationConfig[notification.type];

            return (
              <div
                key={notification.id}
                className={`notification-card ${
                  notification.unread ? "unread" : ""
                }`}
              >

                {/* Notification Icon */}
                <div
                  className={`notification-icon notification-${notification.type}`}
                >
                  {config.icon}
                </div>


                {/* Notification Content */}
                <div className="notification-content">

                  <div className="notification-card-top">

                    <div>

                      <span className="notification-category">
                        {config.label}
                      </span>

                      <h2>
                        {notification.title}
                      </h2>

                    </div>


                    {notification.unread && (
                      <span className="unread-dot"></span>
                    )}

                  </div>


                  <p>
                    {notification.message}
                  </p>


                  {/* Footer */}
                  <div className="notification-footer">

                    <span className="notification-time">
                      {notification.time}
                    </span>


                    {/* BOTH ACTIONS */}
                    <div className="notification-card-actions">

                      {/* Mark as Read */}
                      <button
                        type="button"
                        className="mark-read-button"
                        onClick={() =>
                          markAsRead(notification.id)
                        }
                        disabled={!notification.unread}
                      >
                        {notification.unread
                          ? "Mark as read"
                          : "Read"}
                      </button>


                      {/* Clear */}
                      <button
                        type="button"
                        className="clear-notification-button"
                        onClick={() =>
                          clearNotification(notification.id)
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

          <div className="notifications-empty">

            <div className="notifications-empty-icon">
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

export default Notifications;