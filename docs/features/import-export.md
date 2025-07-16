---
sidebar_position: 15
---

# Import and Export

The **Import & Export** feature in LaraPush allows you to import and export subscribers data to or from your LaraPush Server. This can be particularly useful for backing up your data, transferring data between different systems.

### Before importing/exporting,

You must copy the **Firebase configuration** from source panel and create the same domain manually on the destination panel using the same domain name.

:::info

Images with a blue border represent the **Source panel**, and images with a red border represent the **Destination panel**.

:::

1. Go to the **Domains > View/Modify** tab.
2. Click on the domain from which you want to export subscribers (source panel).

![Source Domain](/img/source-domain.png) 3. Click the Unhide button to reveal the Firebase configuration, you will be prompted to enter your license key.

![Source Domain](/img/license-key.png) 4. After successful validation, copy the entire Firebase configuration from the **"Paste Firebase Code Here for Shortcut"** section.

![Source Domain](/img/copy-firebase-code.png) 5. Navigate to the panel where you want to import (migrate) the subscribers (destination panel) and click **"Add Domain"**.  
6. Scroll to the bottom and paste the copied Firebase configuration in the **"Paste Firebase Code Here for Shortcut"** field. Ensure that, the domain name is the same as the source panel domain and click **Save**.

![Destination Domain](/img/paste-firebase-code.png)

### Access Import/Export

Navigate to the **Domains** section on the sidebar and select **Import/Export** from the left menu.
Then choose the domain you want to **export from** (source) or **import into** (destination) using the corresponding buttons.

![Export Button Highlighted](/img/export.png)
![Import Export Action Buttons](/img/import.png)

---

### Export Subscribers

Clicking the red **Export** button will download your current domain's subscribers into a backup file. This can be useful for:

- Creating offline backups.
- Migrating data to another LaraPush domain/server.

---

### Import Subscribers

To restore or upload a backup:

1. Click the blue **Import** button beside the destination domain.
2. You'll be taken to the **Import Subscribers** screen.

![Upload Exported File](/img/upload-exported-file.png)

## Can I Import/Migrate subscribers from another service using this feature?

No, This Feature is particularly useful for creating data backups or moving data between different LaraPush systems. And you can't migrate using this because other services use a different sending method and payload structure hence. However, We offer a Migration Add-On.

If you want to import subscribers from another service, you can check with LaraPush team for the "Migration Add-On". This LaraPush helps you move from your current push notification service to LaraPush without losing any subscribers. It transfers all your subscriber data from your old service to LaraPush, ensuring a smooth transition and continuous communication with your audience.
