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

If your Firebase project is deleted or credentials are revoked:

1. **All domains** using that project will be affected
2. **Recovery**: Update service account credentials in LaraPush dashboard
3. Everything returns to normal once credentials are updated

:::info
Always keep backup copies of your Firebase service account credentials in a secure location.
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

:::note
Subscribers are tied to your domain, not the Firebase project. Changing Firebase projects doesn't require users to re-subscribe.
:::
