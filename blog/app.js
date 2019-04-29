const express = require('express');
const app = express();
// 引入文件模块(内置);
const fs = require('fs');
// 对请求进行处理的中间件
const bodyPaser = require('body-parser');
// app.use(express.static(__dirname+'/html'));
// 静态资源目录
app.use('/res', express.static('./www/res'))
app.use('/script', express.static('./www/script'))
//模板引擎
app.engine('art', require('express-art-template'));
// 注意:如果不想把模板文件放在默认的views目录下,则可以通过下面代码更改设置
app.set('views', './www/model');
app.use(bodyPaser.urlencoded({extended:true}))
// fs.readFile('./www/res/json/article.json', 'UTF-8',(err, res) => {
//     if (err) {
//         console.error(err)
//     }
//     console.log(res.toString());
// })
app.get('', function (req, res) {
    console.info('这是根目录');
    fs.readFile('./www/res/json/article.json','UTF-8', (err, data) => {
        if (err) console.error(err);
        var objStr = data.toString().trim();
        var obj = JSON.parse(objStr);
        res.render('index.art', {
            index: '1',
            user: {
                name: 'My',
                data:obj
            }
        });
    })
   
});

app.get('/details/:id', function (req, res) {
    res.render('details.art', {
        index: '1',
        details:{
            // data:data
        }
    })
})

app.get('/whisper',function (req,res) {
    res.render('whisper.art',{
        index:'2',
        whisper:[
            {   
                headImg:'../res/img/header2.png',
                date:'2019/01/02',
                hour:'12:00',
                content: ' 一直听说牛油果吃起来像肥皂、肥肉，虽然很难吃，但是价格却很贵，我还是想尝试一下。今天公司新到了新西兰牛油果，这是新西兰牛油果是第一次在中国上市，个头比普通牛油果大了一倍，被誉为“超牛果”。好奇心驱使我尝了一颗，第一次吃牛油果没有见识，切开牛油果费了好大劲，切成了这样',
                message:[
                    { userIcon:'../res/img/header.png', user:'吳亦凡',date:'2019/02/01',cont:'哈哈哈'},
                    { userIcon:'../res/img/header.png', user:'吳亦凡',date:'2019/02/01',cont:'哈哈哈'},
                ]
            }
        ]
    })
})

app.get('/leacots',(req,res)=>{
    fs.readFile('./www/res/json/leacots.json', 'UTF-8',(err,data)=>{
        if (err) console.error(err);
        var objStr = data.toString().trim();
        var obj = JSON.parse(objStr);
        res.render('leacots.art', {
            index: '3',
            data: {
                data: obj
            }
        })
    })
    
})
app.get('/album', (req, res) => {
    res.render('album.art', {
        index: '4',
        data:{

        }
    })
})
app.get('/about', (req, res) => {
    res.render('about.art', {
        index: '5'
    })
})

app.get('**',(req,res)=>{
    res.send('404');
})

app.post('',(req,res)=>{
    
})

app.listen(3000,res=>{
    console.log('server is running!')
})