import React, { useState } from "react";

export default function AdminNotificationForm({ onSend }) {
  const [type, setType] = useState("Weather Alert");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("Please enter a notification message.");
      return;
    }

    const newNotification = {
      id: Date.now(),
      type: type,
      message: message.trim(),
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      time: new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    /*
      Backend integration will be added later.

      For now, send the notification to
      AdminNotifications.jsx.
    */

    if (onSend) {
      onSend(newNotification);
    }

    // Clear message after sending
    setMessage("");
  };

  return (
    <div className="admin-notification-form-card">

      {/* Header */}

      <div className="admin-notification-form-header">
        <h2>
          Send Platform-Wide Announcement
        </h2>

        <p>
          Send an announcement to all CropCare AI users.
        </p>
      </div>

      {/* Form */}

      <form
        className="admin-notification-form"
        onSubmit={handleSubmit}
      >

        {/* Notification Type */}

        <div className="admin-notification-form-group">

          <label htmlFor="notification-type">
            Notification Type
          </label>

          <select
            id="notification-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Weather Alert">
              Weather Alert
            </option>

            <option value="Emergency Notification">
              Emergency Notification
            </option>

            <option value="General">
              General
            </option>
          </select>

        </div>

        {/* Message */}

        <div className="admin-notification-form-group">

          <label htmlFor="notification-message">
            Message
          </label>

          <textarea
            id="notification-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your announcement message..."
            rows="5"
          />

        </div>

        {/* Actions */}

        <div className="admin-notification-form-actions">

          <button
            type="submit"
            className="admin-notification-send-btn"
          >
            Send to All Users
          </button>

        </div>

      </form>

    </div>
  );
}