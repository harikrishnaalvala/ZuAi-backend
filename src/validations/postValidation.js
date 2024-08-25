const { z } = require("zod");

const createPostSchema = z.object({
  title: z.string().min(5).max(100),
  content: z.string().min(10),
  author: z.string(),
});

const updatePostSchema = z.object({
  title: z.string().min(5).max(100).optional(),
  content: z.string().min(10).optional(),
  author: z.string().optional(),
});

const userSchema = z.object({
  username: z.string().min(3, "Username must be at least 4 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
module.exports = { createPostSchema, updatePostSchema, userSchema };
