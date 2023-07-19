const express = require('express');
const app = express();
const port = 3000;
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', async (req,res) => {
    const allUser = await prisma.user.findMany(); //Lấy dữ liệu
    res.json(allUser);
})

app.post('/', async (req,res) => {
    const newUser = await prisma.user.create({data: req.body}); //Tạo dữu liệu
    res.json(newUser);
})

app.put('/:id', async (req,res) => {
    const id = req.params.id;
    const newAge = req.body.age;
    const updatedUser = await prisma.user.update({ where: {id: parseInt(id) }, data: {age: newAge}}); //update dữ liệu
    res.json(updatedUser);
})

app.delete('/:id', async (req,res) => {
    const id = req.params.id;
    const deletedUser = await prisma.user.delete({
        where: {id:parseInt(id)}
    })
    res.json(deletedUser);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`); 
});