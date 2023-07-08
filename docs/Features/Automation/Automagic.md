---
sidebar_position: 6
---

# AutoMagic Push

AutoMagic Push in LaraPush is a feature that automates the process of sending push notifications. With this feature, you can select a random post from your recent posts and schedule push notifications to be sent at your desired frequency.

This means you don't have to manually select each post to send as a notification. Instead, the system automatically picks from your recent posts and sends notifications to your subscribers. This can save you time and ensure that your subscribers are regularly updated about your latest content.

## How to Create a AutoMagic Push? ##
 
Here are the steps to create an AutoMagic Push:

1. Navigate to 'Automation', choose 'AutoMagic Push', and then click on 'Create AutoPush Campaign'.

2. Choose your target audience. By default, it is set to 'All'. You have three options for selecting your audience: 'All', 'Manually', and 'Segment'.

3. Choose the type of AutoPush. There are two types: 'Dynamic' and 'Static'. 


 **for Dynamic**
 
Input the URL where your latest posts appear each time you publish them. Then, enter the range number from which the automation will select articles. Finally, click on 'Validate WordPress API'.

 **for static**

If you wish to send a static push notification automatically, select 'Static'. Then, fill in the fields such as title, description, image URL, and others as per your requirements.

4. Select the timing for your notifications. We use the crontab format for scheduling because it provides flexibility and precision in setting up the timing.  We have provided a few examples for you. If you find them suitable, you can use them.

:::tip

You can use crontab.guru to generate cron-based scheduling code. This tool simplifies the process of creating cron expressions for your scheduled tasks.

:::


5. Preview and Save. 

Preview your notification on the right side of the screen. If everything looks correct, save the AutoMagic Push by clicking on the 'Save' button.