const express=require("express");
var app=express();
const cors=require("cors")
app.listen(3005,(req,res)=>{
    console.log("服务器监听端口3005成功")
})
//指定静态目录
app.use(express.static(__dirname+"/public"));
app.use(cors({
    origin:["http://localhost:8080","http://127.0.0.1:8080"],
    credentials:true,
}))
app.get("/oftenList",(req,res)=>{
    var arr=[{id:1,pname:"香辣鸡腿堡",price:18},
    {id:2,pname:"横行蟹宝宝",price:36},
    {id:3,pname:"芒果大巴乐",price:20},
    {id:4,pname:"香脆鸡腿堡套餐",price:41},
    {id:5,pname:"烤鸡翅",price:21},
    {id:6,pname:"薯霸王",price:34},
    {id:7,pname:"王道嫩香鸡块",price:23},
    {id:8,pname:"厚蛋烤鸡堡",price:27}
    ];
   res.send(arr)
})
app.get("/goods",(req,res)=>{
    var object={goods_hanbao:[{id:1,pname:"香辣鸡腿堡",img_url:"http://127.0.0.1:3005/img/hanbao1.jpg",price:18},
                            {id:2,pname:"横行蟹宝宝",img_url:"http://127.0.0.1:3005/img/hanbao2.jpg",price:36},
                            {id:3,pname:"田园脆鸡堡",img_url:"http://127.0.0.1:3005/img/hanbao3.jpg",price:20},
                            {id:4,pname:"澳洲牛肉堡",img_url:"http://127.0.0.1:3005/img/hanbao4.jpg",price:41},
                            {id:5,pname:"超级鸡腿堡",img_url:"http://127.0.0.1:3005/img/hanbao5.jpg",price:21},
                            {id:6,pname:"鳕鱼堡",img_url:"http://127.0.0.1:3005/img/hanbao6.jpg",price:34}],
               goods_yingliao:[{id:1,pname:"珍珠奶茶",img_url:"http://127.0.0.1:3005/img/yinliao1.jpg",price:18},
                            {id:2,pname:"香蕉酸奶",img_url:"http://127.0.0.1:3005/img/yinliao2.jpg",price:36},
                            {id:3,pname:"椰香红豆奶茶",img_url:"http://127.0.0.1:3005/img/yinliao3.jpg",price:20},
                            {id:4,pname:"血糯米奶茶",img_url:"http://127.0.0.1:3005/img/yinliao4.jpg",price:41},
                            {id:5,pname:"缤纷水果茶",img_url:"http://127.0.0.1:3005/img/yinliao5.jpg",price:21},
                            {id:6,pname:"夏日迷情",img_url:"http://127.0.0.1:3005/img/yinliao6.jpg",price:34},
                            {id:7,pname:"蜜桃乌龙茶",img_url:"http://127.0.0.1:3005/img/yinliao7.jpg",price:21},
                            {id:8,pname:"草莓番石榴汁",img_url:"http://127.0.0.1:3005/img/yinliao8.jpg",price:34}],
                goods_taocan:[{id:1,pname:"小姐姐套餐",img_url:"http://127.0.0.1:3005/img/taocan1.jpg",price:38},
                    {id:2,pname:"小哥哥套餐",img_url:"http://127.0.0.1:3005/img/taocan2.jpg",price:18},
                    {id:3,pname:"单身狗套餐",img_url:"http://127.0.0.1:3005/img/taocan3.jpg",price:20},
                    {id:4,pname:"双人套餐",img_url:"http://127.0.0.1:3005/img/taocan4.jpg",price:41},
                    {id:5,pname:"全家桶",img_url:"http://127.0.0.1:3005/img/taocan5.jpg",price:210}],
                goods_xiaoshi:[{id:1,pname:"劲爆鸡米花",img_url:"http://127.0.0.1:3005/img/xiaoshi1.jpg",price:18},
                                {id:2,pname:"薯霸王",img_url:"http://127.0.0.1:3005/img/xiaoshi2.jpg",price:36},
                                {id:3,pname:"咋鸡块",img_url:"http://127.0.0.1:3005/img/xiaoshi3.jpg",price:20},
                                {id:4,pname:"草莓派",img_url:"http://127.0.0.1:3005/img/xiaoshi4.jpg",price:41},
                                {id:5,pname:"蛋挞",img_url:"http://127.0.0.1:3005/img/xiaoshi5.jpg",price:21}],
}
            res.send(object)
})