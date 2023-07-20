const express = require('express');
const app = express();
const port = 3000;
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

app.use(express.json());


app.get('/', async (req,res) => {
    const allUser = await prisma.user.findMany(); //Lấy dữ liệu của bảng user
    res.json(allUser);
})

app.post('/', async (req,res) => {
    const newUser = await prisma.user.create({data: req.body}); //Tạo dữu liệu của bảng user
    res.json(newUser);
})

app.put('/:id', async (req,res) => {
    const id = req.params.id;
    const newAge = req.body.age;
    const updatedUser = await prisma.user.update({ where: {id: parseInt(id) }, data: {age: newAge}}); //update dữ liệu của bảng user
    res.json(updatedUser);
})

app.delete('/:id', async (req,res) => {
    const id = req.params.id;
    const deletedUser = await prisma.user.delete({ //xóa dữ liệu của bảng user
        where: {id:parseInt(id)}
    })
    res.json(deletedUser);
})


app.post('/house', async (req, res) => {
    const newHouse = await prisma.house.create({data : req.body});
    res.json(newHouse);
  });

  app.get('/house', async (req, res) => {
    //const allHouse = await prisma.house.findMany();
    const allHouse = await prisma.house.findMany({
        include:{
            owner:true,
            builtBy: true
        }
    });
    res.json(allHouse);
  });
  

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`); 
});