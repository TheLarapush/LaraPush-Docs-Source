---
sidebar_position: 4
sidebar_label: 'Backup'
---

# LaraPush - Complete Backup & Google Drive Integration Guide

LaraPush offers a powerful backup system that allows you to secure your application data manually or through automated scheduling. With optional **Google Drive integration**, your backups can also be exported to the cloud for safe remote storage.

This guide walks you through everything—from creating backups to automating them and connecting your Google account.

---

## 💡 Why Backups Matter

Keeping regular backups of your LaraPush panel ensures that:

- Subscriber data and configurations are never lost
- You can safely test or upgrade without fear of data loss
- Backups are easily downloadable and can be restored quickly
- Data can be synced to Google Drive automatically

---

## 📁 Backup Dashboard Overview

Navigate to **Settings > Backup** tab.

This panel gives you an organized view of your backup history and allows you to:

- Manually create backups
- Configure automated schedules
- View backup source and status
- Download, delete, or export to Google Drive

Backups are **automatically deleted after 7 days** unless downloaded or exported.

![backup](/img/backup.png)

---

## 🔘 Manual Backup Creation

To generate a backup on-demand:

1. Click the **Create Backup** button.
2. Wait for the backup to be marked **Completed** in the list.
3. Use the following available actions:
   - **Download**: Save to your local system
   - **Delete**: Remove it permanently
   - **Send To Drive**: Upload the backup to your Google Drive (if configured)

---

## ⚙️ Automating Backups + Google Drive Sync

Click the **Setup Auto Backup** button to open the automation and cloud sync settings.

You can configure:

- **Schedule**: Choose from Daily, Weekly, or Monthly backups
- **Google Drive Integration**:
  - Enable/Disable
  - Select an email associated with your Google account
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>OR</b></p>
  - Upload a **Service Account JSON file** for secure Google Drive access
- **License Key**:
  - Required for authentication
  - Click **Verify** to validate

Once all fields are filled and verified, click **Save Configuration** to activate automation.


---

### 🔐 Service Account Setup for Google Drive

To enable Drive syncing:

1. Open your Firebase Console
2. Go to **Project Settings > Service Accounts**
3. Click **Generate new private key**
4. Download the `.json` file
5. Upload this file in the **Service Account JSON** section in LaraPush

This allows secure programmatic access to your Google Drive for storing backups.

---

To keep your LaraPush panel safe and resilient, always make backups part of your routine.
