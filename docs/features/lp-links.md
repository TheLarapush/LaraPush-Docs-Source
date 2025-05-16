---
sidebar_position: 6
sidebar_label: LP Links
---
# LaraPush - LP Links (Landing Page Links) Integration Guide

LaraPush's **LP Links** feature allows you to collect push notification subscribers from any landing page or URL you choose. This tool works similarly to the YouTube integration but is even more flexible. you can link any webpage, product page, video, article, or offer behind a subscription prompt.

---

## 🎯 Use Case

**LP Links are ideal for:**

- Promoting external content (e.g., YouTube videos, blog posts, product pages)
- Collecting subscribers from platforms like Instagram, X (Twitter), or TikTok
- Creating redirect gates that enforce opt-in before allowing access
- Sharing short links that also build your push notification audience

---

## 🚀 How LP Links Work

When someone clicks your LP Link:

1. They see a permission prompt requesting push notification access.
2. If accepted, they are redirected to your **target link**.
3. If denied (and **Force Subscribe** is enabled), they are redirected again until they allow.

Each link includes full tracking for clicks and subscribers across devices.

---

## 📌 How to Create a New LP Link

---

### Step 1: Go to LP Links in Dashboard

Navigate to **LP Links** in the sidebar of your LaraPush Dashboard.

You will see a table listing all previously generated LP links, along with:

- Target URL
- LP Link (shortened link)
- Clicks
- Subscribers
- Creation Time

![lp links](/img/lp-links.png)

---

### Step 2: Click “Create Link”

Click the **Create Link** button at the top right.

You’ll be asked to fill:

- **Enter Target Link**:  
  This is the final page where you want the user to go after they subscribe.

- **Subscriber Collection Domain**:  
  Choose the domain you want to use to display the prompt.

- **Link Prompt Text**:  
  Customize the message shown in the notification permission request.

- **Advanced Settings > Force Subscribe**:  
  If enabled, users will be prompted again even after clicking Deny, ensuring higher subscription conversion.

Click **Create Link** to generate a short LP URL.

![makelplinks](/img/make-lp-links.png)

---

### Step 3: Share the LP Link

Once created, LaraPush generates a custom short link like:

`https://demo.larapush.com/sl/XXXXX`

You can share this anywhere, such as:

- Instagram bio
- YouTube descriptions
- Twitter posts
- QR codes
- Emails or SMS

Whenever users open it, the prompt appears first, and if subscribed, they are redirected to the original link.


---

## 💻 Full Page Script Integration (Advanced)

If you prefer to host the prompt directly on your own website instead of using the LP redirect:

---

### Step 1: Click “Get Full Page Script”

Go to the **LP Links** section and click **Get Full Page Script**.

You can now configure:

- **Link Prompt Text** – Same as in the LP link.
- **Domain Selection** – Choose to **Exclude** or **Include** specific domains.
- **Subscriber Collection Domain**
- **Force Subscribe** toggle

Click **Generate Script** to create the JavaScript snippet.

![fullpagescript](/img/full-page-script.png)
---

### Step 2: Add Script to Your Website

Copy the generated JavaScript and place it in the `<head>` of any HTML page where you want the notification prompt to show up.

This allows you to use the prompt logic on your own URLs while still building subscribers through LaraPush.


---

## 📊 Tracking and Management

In the LP Links dashboard, you can:

- View the number of subscribers per link
- Track click-through performance
- Delete or edit existing LP links
- Identify source link performance across channels

---