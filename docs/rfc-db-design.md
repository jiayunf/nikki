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
- Auth Profile
  - UUID
  - UserUUID
  - Password Hash/Encryption
- Billing Profile
  - UUID
  - UserUUID
  - Balance
- Payment Profile
  - UUID
  - Type
  - Credit Card Number
  - TPToken
- Pictures
  - UUID
  - Link

### Relations
- Readings(What people read)
  - UserUUID
  - ArticlesUUID
- Collection
  - UserUUID
  - ArticlesUUID
- Billing History
  - ID
  - Year
  - Month
  - Cost
- Session
  - UserUUID
  - SessionID
  
