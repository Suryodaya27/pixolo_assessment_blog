const {prisma} = require('../utilities/prismaInit');

const updateContent = async (blogId, content) => {
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
                content: content,
            }
        });
        return result;
    }
    catch (err) {
        return err
    }
}

exports.updateContent = updateContent;