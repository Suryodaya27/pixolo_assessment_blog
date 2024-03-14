const {prisma} = require('../utilities/prismaInit');

const saveBlogToDatabase = async (userId, title, content) => {
    try {
        console.log(userId,title,content);
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            }
        });
        if(!user){
            throw {
                status: 404,
                message: "User not found."
            }
        }
        const result = await prisma.blog.create({
            data: {
                authorId: userId,
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

exports.saveBlogToDatabase = saveBlogToDatabase;