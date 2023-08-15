const baseUrl = "https://jsonplaceholder.typicode.com/posts"

const Post = require('../model/post.model')
async function allPost(req, res) {
    try {
        const { default: fetch } = await import('node-fetch');
        const myPst = await fetch(baseUrl);
        const response = await myPst.json();

        for(let i = 0;i<response.length;i++){
          const post= new Post({
            user_id : response[i]['userId'],
            id : response[i]['id'],
            title : response[i]['title'],
            description : response[i]['body']
           })
           post.save();
        }

        return res.status(210).json({
            success: true,
            message: "Posts fetched successfully...",
            data: response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "An error occurred.",
            error: error
        });
    }
}

module.exports = {
    allPost
}