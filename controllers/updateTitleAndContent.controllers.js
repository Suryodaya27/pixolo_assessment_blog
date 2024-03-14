const {prisma} = require('../utilities/prismaInit');

const updateTitleAndContent = async (blogId, title, content) => {
    try {
        const blog = await prisma.blog.findUnique({
            where: {
                id: blogId,
            }
        });
        if(!blog){
            throw {
                status: 404,
                message: "Blog not found."
            }
        }
        const result = await prisma.blog.update({
            where: {
                id: blogId,
            },
            data: {
                title: title,
                content: content,
            }
        });
        return result;
    }
    catch (err) {
        return err
    }
}

exports.updateTitleAndContent = updateTitleAndContent;