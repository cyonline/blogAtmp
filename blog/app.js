const express = require('express');
const app = express();
// app.use(express.static(__dirname+'/html'));
// 静态资源目录
app.use('/res', express.static('./www/res'))
//模板引擎
app.engine('art', require('express-art-template'));
// 注意:如果不想把模板文件放在默认的views目录下,则可以通过下面代码更改设置
app.set('views', './www/model');

app.get('', function (req, res) {
    console.info('这是根目录');
    res.render('index.art', {
        user: {
            name: 'My',
            data: [
                { img: '../res/img/sy_img1.jpg', title: '空间立体效果图，完美呈现最终效果', text:'室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在'},
                { img: '../res/img/sy_img2.jpg', title: '空间立体效果图，完美呈现最终效果', text:'室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在'},
                { img: '../res/img/sy_img3.jpg', title: '空间立体效果图，完美呈现最终效果', text:'室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在'},
                { img: '../res/img/sy_img4.jpg', title: '空间立体效果图，完美呈现最终效果', text:'室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在'},
                { img: '../res/img/sy_img5.jpg', title: '空间立体效果图，完美呈现最终效果', text:'室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在'},
            ]
        }
    });
});

app.get('/whisper',function (req,res) {
    res.render('whisper.art',{
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

app.get('/details/:id',function(req,res){
    res.render('details.art',{})
})
app.listen(3000,res=>{
    console.log('server is running!')
})