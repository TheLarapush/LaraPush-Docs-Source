---
sidebar_position: 1
---

# LaraPush Installation

In a self-hosted setup, you are in charge of your own server. This is important because it provides you complete control over the data and processes that occur on your server, which improves security and privacy. Unlike a Software-as-a-Service (SAAS) model, where your data is stored on a third-party server, self-hosting means your data, including tokens, stay on your server and can't be accessed without your permission.

Moreover, self-hosted servers offer flexibility and scalability. You can customize the server to meet your specific needs, and as your demands grow, the server can be scaled up to accommodate these changes. It's a cost-effective solution in the long run, especially for businesses with growing needs.

## 1. Selecting a Server for LaraPush: ##



| Requirement      | Details                      |
|------------------|------------------------------|
| **Server Type**      | Virtual Private Server (VPS) |
| **Access Type**      | Root                         |
| **Operating System** | Ubuntu 20.04                 |
| **RAM**      | 1GB           |

:::note

Please note that this is a basic requirement table. Depending on your specific needs, more resources might be needed. Always consider your individual use case when choosing server specifications.

:::



## 2. Create and Configure your server ##

1. **Server Selection** First of all, you need to go to any VPS provider site such as Vultr, Linode, or Digitalocean. For this tutorial, let's create a server on DigitalOcean. 
:::tip
Select a Virtual Private Server (VPS) provider that suits your needs and budget. Our Recommendation:  Vultr, Linode, and DigitalOcean.
:::

2. **Sign Up & Set Up Payment:** Register a new account on the provider's site and set up a payment method. Ensure your card is enabled for international transactions if necessary.

3. **Create Your Server:** Now it's time to create your server. Choose Ubuntu 20.04 as the operating system and make sure to set a secure root password for the server, as it will be needed for integration with LaraPush. A standard 1GB server, which typically costs around $6 per month, should be sufficient for most needs.


4. **Configure the DNS:**  Access your hosting control panel or your domain registrar and navigate to the **DNS/Nameservers** section.

:::note
  
  Its upto you to decide how you want to access your Panel, You can configure domain or subdomain, If you are want to use subdomain to 
  access your LaraPush Panel you just have to add "Push" on A record.

:::

 - **For Subdomain:** 
      - Click on "Add record" and specify a name for the record, such as "push".
      - Paste the IP address in Host record and save it.
      - Allow a few minutes for the changes to propagate.

 - **For Domain:**
       Click on "Add record" and put **@** on Host Name 
      - Paste the IP address in Host record and save it.
      - Allow a few minutes for the changes to propagate.
      
Please ensure to follow these steps carefully to ensure a smooth installation process for Larapush on your domain/subdomain.


## 3. Installation ## 

Now go to your larapush account and click **claim free installation** Button, Enter your IP address, Root Password and Domain/Subdomain that you have just propagated, tick the checkbox and click on **Create Installation**. Now, wait 5 Minutes for installation. 

## 4. Registration ##

After waiting for approximately 5 minutes, refresh the page to check the status of your installation. If it shows "Completed," you can proceed to access your Larapush panel by visiting your designated Panel domain or subdomain.

Once you're on the Larapush panel, fill in the required fields, including your Name, Email, Password, and License Key. After entering this information, press the "Enter" or "Submit" button to complete your registration.

Congratulations! Your registration process is now complete. You can proceed to connect your domains within the Larapush panel and start sending push notifications to your subscribers.

:::tip
  Please check your email inbox for the license key. It should be included in the order confirmation email you received upon completing your purchase. Look for an email titled "Congratulations" or similar, as it usually contains important information regarding your Larapush license. If you're unable to locate the email, please check your spam or junk folder as well. If you still encounter any issues, feel free to reach out to our support team for assistance.
:::

