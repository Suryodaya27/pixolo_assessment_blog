const {prisma} = require('../utilities/prismaInit');

const updateTitle = async (blogId, title) => {
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
            }
        });
        return result;
    }
    catch (err) {
        return err
    }
}

exports.updateTitle = updateTitle;