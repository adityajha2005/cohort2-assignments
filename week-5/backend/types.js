const zod = require("zod");

const createCard=zod.object({
    Name:zod.string(),
    Description:zod.string(),
    Interest:zod.string(),
    Linkedin:zod.string(),
})
module.exports={
    createCard
}