---
sidebar_position: 1
sidebar_label: Installation
---

# LaraPush Installation

In a self-hosted setup, you run your own server. This gives you full control over your data and actions, increasing security and privacy. Unlike in a SAAS model where your data is stored by another company, self-hosting keeps your data, like subscriber info, safe on your own server.

Also, self-hosted servers are flexible and can grow with you. You can change them to suit your needs, and make them bigger as your needs increase. This can be cheaper in the long term, especially for growing businesses.

## Selecting a Server for LaraPush:

| Requirement          | Details                      |
| -------------------- | ---------------------------- |
| **Server Type**      | Virtual Private Server (VPS) |
| **Access Type**      | Root                         |
| **Operating System** | Ubuntu 24.04                 |
| **RAM**              | 1 GB                         |

:::note

Please note that this is a basic requirement table. Depending on your specific needs, more resources might be needed. Always consider your individual use case when choosing server specifications.

:::

## Create and Configure your server

1. **Server Selection** First of all, you need to go to any VPS provider such as Vultr, Linode, or Digitalocean. For this tutorial, let's create a server on DigitalOcean.
   :::info
   Select a Virtual Private Server (VPS) provider that suits your needs and budget. Our Recommendation: Vultr, Linode, and DigitalOcean.
   :::

2. **Sign Up & Set Up Payment:** Register a new account on the provider's site and set up a payment method. Ensure your card is enabled for international transactions if necessary.

3. **Create Your Server:** Now it's time to create your server. Choose Ubuntu 20.04 as the operating system and make sure to set a secure root password for the server, as it will be needed for integration with LaraPush. A standard 1GB server, which typically costs around $6 per month, should be sufficient for millions of subscribers.

4. **Configure the DNS:** Access your hosting control panel or your domain registrar and navigate to the DNS/Nameservers section.
   Its upto you to decide how you want to access your Panel, You can configure domain or subdomain, If you are want to use subdomain to access your LaraPush Panel you just have to add "Push" on A record.

- **For Subdomain:**

  - Click on "Add record" and specify a name for the record, such as "push".
  - Paste the IP address in Host record and save it.
  - Allow a few minutes for the changes to propagate.

- **For Domain:**
  - Click on "Add record" and put **@** on Host Name
  - Paste the IP address in Host record and save it.
  - Allow a few minutes for the changes to propagate.

Please ensure to follow these steps carefully to ensure a smooth installation process for LaraPush on your domain/subdomain.

## Installation

Now go to your [larapush account](https://larapush.com/orders/) and click **claim free installation** Button, Enter your IP address, Root Password and Domain/Subdomain that you have just propagated, tick the checkbox and click on **Create Installation**. Now, wait 5 Minutes for installation.

## Registration

After waiting for approximately 5 minutes, refresh the page to check the status of your installation. If it shows "Completed," you can proceed to access your LaraPush panel by visiting your designated Panel domain or subdomain.

Once you're on the LaraPush panel, fill in the required fields, including your Name, Email, Password, and License Key. After entering this information, press the "Enter" or "Submit" button to complete your registration.

Congratulations! Your registration process is now complete. You can proceed to connect your domains within the LaraPush panel and start sending push notifications to your subscribers.

:::tip
Please check your email inbox for the license key. It should be included in the order confirmation email you received upon completing your purchase.
:::

:::info
Look for an email titled **Congratulations** or similar. If you're unable to locate the email, please check your spam or junk folder as well. Star Mark ⭐️ this email as this license will be used in future. If you still encounter any issues, feel free to reach out to our support team for assistance.
:::
