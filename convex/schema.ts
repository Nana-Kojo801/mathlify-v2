import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  users: defineTable({
    username: v.string(),
    password: v.string(),
    avatar: v.string(),
    elo: v.object({
      casual: v.number(),
      speedSolve: v.number(),
    }),
    friends: v.array(v.id('users')),
  })
    .index('by_uesrname', ['username'])
    .searchIndex('search_user', {
      searchField: 'username',
    }),
  friendRequests: defineTable({
    senderId: v.id("users"),
    receiverId: v.id("users")
  }),
  friendMessages: defineTable({
    senderId: v.id("users"),
    receiverId: v.id("users"),
    message: v.string(),
    readBy: v.array(v.id("users"))
  }),
  userConversations: defineTable({
    userId: v.id("users"),
    friendId: v.id("users"),
    lastReadTimestamp: v.number()
  }).index("by_user_and_friend", ["userId", "friendId"]),
  presets: defineTable({
    userId: v.id('users'),
    name: v.string(),
    type: v.union(v.literal('casual'), v.literal('speedSolve')),
    settings: v.object({
      range: v.object({
        min: v.number(),
        max: v.number(),
      }),
      quantity: v.object({
        min: v.number(),
        max: v.number(),
      }),
      timeInterval: v.optional(v.float64()),
      duration: v.float64(),
    }),
  }),
})
