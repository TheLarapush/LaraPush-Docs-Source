---
sidebar_position: 1
sidebar_label: 'Firebase Best Practices'
---
# Firebase Architecture & Risk Management

Best practices for managing Firebase projects at scale with LaraPush.

---

## Do You Need Separate Firebase Projects for each domain?

| Your Setup | Recommendation |
|------------|----------------|
| **High-traffic domains** (expecting 5M+ subscribers) | Use a **dedicated Firebase project** for each domain |
| **Multiple small domains** (combined under 5M subscribers) | Share a **single Firebase project** across domains |
| **100+ small domains** | Split into separate Firebase projects when combined subscribers approach **5M+** |

:::tip
Domains sharing the same Firebase project can be merged into a single LaraPush installation later if needed.
:::

---

## What If Credentials Are Revoked?

**If credentials are revoked** (but project still exists):
1. All domains using that project will be temporarily affected
2. Generate new service account credentials from Firebase Console
3. Update credentials in LaraPush dashboard
4. Everything returns to normal

:::danger
If your Firebase project is **deleted**, all subscribers collected under that project are **permanently lost**. To recover:
1. Restore the Firebase project immediately (if within Google's recovery window)
2. Remove all existing service account credentials from the project
3. Create new service account credentials
4. Update the new credentials in LaraPush dashboard
:::

---

## Do I need to create Firebase Projects in same Google or different Google accounts?

| Option | Pros | Cons |
|--------|------|------|
| **Multiple projects in same account** | Easier management, simpler billing | — |
| **Multiple Firebase accounts** | Maximum isolation | More complex, multiple logins |

There is **no functional difference** in reliability between these options. Choose based on your preference.

---

:::danger
Subscribers are tied to both your **domain and Firebase project**. If you change the Firebase project for a domain, all subscribers collected with the previous Firebase project will no longer receive notifications. Only change Firebase projects if absolutely necessary.
:::