const {prisma} = require('../utilities/prismaInit');

const deleteBlog = async (blogId) => {
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
        const result = await prisma.blog.delete({
            where: {
                id: blogId,
            }
        });
        return result;
    }
    catch (err) {
        return err
    }
}

exports.deleteBlog = deleteBlog;