---
sidebar_position: 1
sidebar_label: 'Firebase Best Practices'
---
# Firebase Architecture & Risk Management

Best practices for managing Firebase projects at scale with LaraPush.

---

## When to Split Firebase Projects

| Scenario | Recommendation |
|----------|---------------|
| **Large Projects** (5M+ subscribers) | Use a **dedicated Firebase project** |
| **Small Projects** (under 5M combined) | Can share the **same Firebase project** |
| **100+ Small Projects** | Split when combined subscribers approach **5M+** |

:::tip
Projects using the same Firebase credentials can be combined later if needed.
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

## Same Account vs Different Accounts

| Option | Pros | Cons |
|--------|------|------|
| **Multiple projects in same account** | Easier management, simpler billing | — |
| **Multiple Firebase accounts** | Maximum isolation | More complex, multiple logins |

:::tip
There is **no functional difference** in reliability between these options. Choose based on your preference.
:::

---

## Quick Tips

- **Tier 1 (5M+ subs)**: Individual Firebase projects
- **Tier 2 (Medium)**: Grouped Firebase projects (2-3 per project)  
- **Tier 3 (Small)**: Shared Firebase project

:::danger
Subscribers are tied to both your **domain and Firebase project**. If you change the Firebase project for a domain, all subscribers collected with the previous Firebase project will no longer receive notifications. Only change Firebase projects if absolutely necessary.
:::