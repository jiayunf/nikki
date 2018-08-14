# RFC: DB Design
---

### Entities
- Articles
  - UUID
  - Title
  - Sub Title
  - Keyword List
  - Content
  - Author
  - Time Publish
  - Time Last Edit
  - IsPublic
  - Category
- People(User, Admin) Profile
  - UUID
  - Username
  - First Name
  - Last Name
  - Detail
  - Email
  - Icon
- Auth Profile
  - UUID
  - UserUUID
  - Password Hash/Encryption
- Billing Profile
  - UUID
  - UserUUID
  - Current Balance
  - Subscription Type(Email/Web/Pay as you go)
- Payment Profile
  - UUID
  - Type
  - Credit Card Number
  - TPToken

### Relations
- Readings(What people read)
  - UserUUID
  - ArticlesUUID
- Collection
  - UserUUID
  - ArticlesUUID
- Billing History
  - UUID
  - Time
  - Cost
- Session
  - UserUUID
  - SessionID
- Blacklist
  - ID
  - Time
  - UserUUID
  - Reason
  
