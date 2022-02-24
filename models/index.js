// To require models files all together and export it

const User = require('./User');
const Post = require('./Post')

// Create associations as we have a one-to-many relationship;
// A user can make many posts. But a post only belongs to a single user, and never many users
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// In this statement, we defining the relationship of the Post model to the User. 
// The constraint we impose here is that a post can belong to one user, but not many users.
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };
