---
sidebar_position: 3
sidebar_label: 'General Settings'
---
# LaraPush – General Settings Guide

This page provides an overview and explanation of all the options available under the **General Settings** section in the LaraPush Admin Panel. These settings influence how push notifications are sent and managed through your system.

---

## 🧩 Default Audience Selection

Select how the audience for a campaign is chosen:

- **All**: Senscribers.
- **Manual**: Manually select subscrid to all active subbers or groups.
- **Segmentation**: Use predefined segments for targeted delivery.

---

## 🚀 Sending Speed

Control the delivery speed of push notifications:

- The slider adjusts how quickly the messages are sent.
- **Tip**: Decrease if the panel crashes under high load.
- ⚠️ *Note: Sending speed also depends on FCM (Firebase Cloud Messaging) API response time.*

---

## 🔄 Auto Code Integration

- Toggle this **ON** to automatically inject the push code into your connected WordPress website.
- Useful when code changes frequently or needs syncing daily.

---

## 🌐 Host Redirect

- If enabled, this option will redirect the base domain when adding a new site.
- Ensures cleaner redirection handling for domain integrations.

---

## 🌍 Use CDN

When sending a notification, an image URL is required. If you don't use a CDN for your image URL, it creates additional requests to your server, which can slow down your server. Therefore, using a CDN is essential to enhance the notification sending experience. 
- toggle the CDN button to use it. 


---

## 📊 Use UTM

- Append UTM parameters automatically to notification URLs for tracking campaign performance in analytics tools.

---

## 🧹 Daily Unsubscribe Cleanup

- Automatically remove unsubscribed devices from the database each day.
- Helps keep your subscriber base clean and accurate.

---

## 🔌 API Access

- Enables API-based integration.
- Required for using the WordPress plugin or custom push scripts.

---

## 🔗 LP Links Deleted Target URL

- Set the fallback URL when a **LP Link** (Landing Page Link) is deleted.
- Default is `404`, but you can change it to a custom page.

---

## 💾 Save Settings

After adjusting all settings, click the **Save** button to apply your configuration.

---

**📝 Tip**: Always test your changes in a staging environment before applying them to production.
