const uuid=require('uuid')

exports.getPost = (req, res, next) => {

    res.send({
        statusCode: 200,
        message: "post fetched successfully",
        posts: [{
            title: 'first Name',
            content: 'This is my first page'
        }]
    })

}


exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    res.send({
        statusCode: 200,
        message: "Post created SuccessFully",
        posts: [{
            id: uuid.v4(),
            title: 'first Name',
            content: 'This is my first page'
        }]
    })

}