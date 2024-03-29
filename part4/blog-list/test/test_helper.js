const Blog = require('../models/blog')
const User = require('../models/user')

const initBlogs = [{
    "title": "Test",
    "author": "Jay Indino",
    "url": "https://jayindino.com/pwa",
    "likes": 128
  },
  {
    "title": "Dummy",
    "author": "Stephen Hawking",
    "url": "https://jayindino.com/pwa",
    "likes": 500
  }
]

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
    initBlogs, blogsInDb, usersInDb
}