const {prisma} = require('../utilities/prismaInit');

const getBlogs = async (userId) => {
    try {
        const result = await prisma.blog.findMany({
            where: {
                authorId: userId
            }
        });
        return result;
    }
    catch (err) {
        return err
    }
}

exports.getBlogs = getBlogs;
    