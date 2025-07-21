---
sidebar_position: 25
sidebar_label: 'Advanced Setting'
---
# Advanced Settings Guide

The **Advanced Settings** panel in LaraPush gives you deeper control over performance behavior and external plugin compatibility. These settings are generally intended for experienced users or developers and should be adjusted cautiously.

---
![advanced](/img/advanced-settings.png)
## ⚙️ Accessing Advanced Settings

Navigate to:  
**Settings > Advanced**

This tab is specifically labeled as “Advanced” because the options here can directly affect how the LaraPush panel performs under load or handles data from third-party integrations.


---

## 🔄 Worker Count

### **Purpose:**
Defines how many workers (background threads/processes) your LaraPush instance should use.

### **Why It Matters:**
Higher worker counts improve processing but may cause system instability if your server resources are limited.

- **Decrease** if your panel is crashing or using too much CPU.
- **Increase** cautiously to improve speed of processing and notifications.

**Best Practice:**  
Start with the default value and increase only if you have sufficient server capacity and see performance delays.

---

## 🔁 Allow Duplicates from API/WordPress

### **Purpose:**
Controls whether duplicate entries from external sources (like the WordPress plugin or API calls) are allowed into your subscriber database.

### **How It Works:**
- **Enabled (Toggled ON)**:  
  Accepts duplicate entries from WordPress or the API.

- **Disabled (Toggled OFF)**:  
  Prevents duplicate records from being stored, improving data cleanliness and reducing redundancy.

This is particularly useful if you use WordPress auto-posting or external tools that might push the same content more than once.

---