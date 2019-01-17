<template>
    <div class="pos">
        <el-row>
            <el-col :span="7" class="nav" id="orderList">
               <el-tabs>
                    <el-tab-pane label="点餐" >
                        <el-table :data="products" border>
                            <el-table-column prop="pname" label="商品"></el-table-column>
                            <el-table-column prop="count" label="数量"></el-table-column>
                            <el-table-column prop="price" label="价格"></el-table-column>
                            <el-table-column  label="操作" width="100" fixed="right">
                                <template slot-scope="scope">
                                    <el-button type="text" size="mini">增加</el-button>
                                    <el-button type="text" size="mini">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="btns">
                            <el-button type="warning">挂单</el-button>
                            <el-button type="danger">删除</el-button>
                            <el-button type="success">结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单"></el-tab-pane>
                    <el-tab-pane label="外卖"></el-tab-pane>
               </el-tabs>
            </el-col>
            <el-col :span="17">
                <div class="right-top">
                    <div class="title">常用商品</div>
                    <ul>
                        <li v-for="good of oftenList">
                            <span>{{good.pname}}</span>
                            <span class="price">￥{{(good.price).toFixed(2)}}元</span>
                        </li>
                    </ul>
                </div>
                <div class="right-bottom">
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                            <ul>
                                <li v-for="good of goods_hanbao">
                                    <img :src="require('../../../'+good.img_url+'.jpg')" />
                                    <div>
                                        <span>{{good.pname}}</span><br>
                                        <span class="price">￥{{(good.price).toFixed(2)}}</span>
                                    </div>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="小食物">
                            <ul>
                                <li v-for="good of goods_xiaoshi">
                                    <img :src="require('../../../'+good.img_url+'.jpg')" />
                                    <div>
                                        <span>{{good.pname}}</span><br>
                                        <span class="price">￥{{(good.price).toFixed(2)}}元</span>
                                    </div>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <ul>
                                <li v-for="good of goods_yingliao">
                                    <img :src="require('../../../'+good.img_url+'.jpg')" />
                                    <div>
                                        <span>{{good.pname}}</span><br>
                                        <span class="price">￥{{(good.price).toFixed(2)}}元</span>
                                    </div>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <ul>
                                <li v-for="good of goods_taocan">
                                    <img :src="require('../../../'+good.img_url+'.jpg')" />
                                    <div>
                                        <span>{{good.pname}}</span><br>
                                        <span class="price">￥{{(good.price).toFixed(2)}}元</span>
                                    </div>
                                </li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            products:[{pname:"可乐",count:1,price:18},
                     {pname:"汉堡",count:1,price:25},
                     {pname:"薯条",count:1,price:14},
                     {pname:"蛋挞",count:1,price:10},
                     {pname:"可乐汉堡套餐",count:1,price:36}
                     ],
            oftenList:[{id:1,pname:"香辣鸡腿堡",price:18},
                       {id:2,pname:"横行蟹宝宝",price:36},
                       {id:3,pname:"芒果大巴乐",price:20},
                       {id:4,pname:"香脆鸡腿堡套餐",price:41},
                       {id:5,pname:"烤鸡翅",price:21},
                       {id:6,pname:"薯霸王",price:34},
                       {id:7,pname:"王道嫩香鸡块",price:23},
                       {id:8,pname:"厚蛋烤鸡堡",price:27}],
            goods_hanbao:[{id:1,pname:"香辣鸡腿堡",img_url:"public/img/hanbao1",price:18},
                       {id:2,pname:"横行蟹宝宝",img_url:"public/img/hanbao2",price:36},
                       {id:3,pname:"田园脆鸡堡",img_url:"public/img/hanbao3",price:20},
                       {id:4,pname:"澳洲牛肉堡",img_url:"public/img/hanbao4",price:41},
                       {id:5,pname:"超级鸡腿堡",img_url:"public/img/hanbao5",price:21},
                       {id:6,pname:"鳕鱼堡",img_url:"public/img/hanbao6",price:34}],
           goods_yingliao:[{id:1,pname:"珍珠奶茶",img_url:"public/img/yinliao1",price:18},
                       {id:2,pname:"香蕉酸奶",img_url:"public/img/yinliao2",price:36},
                       {id:3,pname:"椰香红豆奶茶",img_url:"public/img/yinliao3",price:20},
                       {id:4,pname:"血糯米奶茶",img_url:"public/img/yinliao4",price:41},
                       {id:5,pname:"缤纷水果茶",img_url:"public/img/yinliao5",price:21},
                       {id:6,pname:"夏日迷情",img_url:"public/img/yinliao6",price:34},
                       {id:7,pname:"蜜桃乌龙茶",img_url:"public/img/yinliao7",price:21},
                       {id:8,pname:"草莓番石榴汁",img_url:"public/img/yinliao8",price:34}],
            goods_taocan:[{id:1,pname:"小姐姐套餐",img_url:"public/img/taocan1",price:38},
                       {id:2,pname:"小哥哥套餐",img_url:"public/img/taocan2",price:18},
                       {id:3,pname:"单身狗套餐",img_url:"public/img/taocan3",price:20},
                       {id:4,pname:"双人套餐",img_url:"public/img/taocan4",price:41},
                       {id:5,pname:"全家桶",img_url:"public/img/taocan5",price:210}],
            goods_xiaoshi:[{id:1,pname:"劲爆鸡米花",img_url:"public/img/xiaoshi1",price:18},
                       {id:2,pname:"薯霸王",img_url:"public/img/xiaoshi2",price:36},
                       {id:3,pname:"咋鸡块",img_url:"public/img/xiaoshi3",price:20},
                       {id:4,pname:"草莓派",img_url:"public/img/xiaoshi4",price:41},
                       {id:5,pname:"蛋挞",img_url:"public/img/xiaoshi5",price:21}],
        }
    },
    mounted(){
        var orderHeight=document.body.clientHeight;
        document.getElementById("orderList").style.height=orderHeight+"px"
        document.getElementById("orderList").children[0].children[0].style.paddingLeft="20px";
    },
    created(){
        console.log(this.goods_hanbao[0].img_url)
    }
    
}
</script>
<style scoped>
  .nav{
      height:100%;
      background:#fff;
  }
  .el-button{
      display:inline;
  }
  .btns{
      margin-top:20px;
     text-align: center;  
  }
    .title{
        font-size:14px;
        border-bottom:1px solid #D3DCE6;
        height: 20px;
        padding:10px;
    }
  ul{padding:0;margin:0;list-style:none;display:flex;flex-wrap:wrap;}
  .right-top ul>li{
      width:15%;
      text-align:center;
      padding:10px;
      background:#fff;
      margin-left:15px;
      margin-top:10px;
      border:1px solid #E5E9F2;
      border-radius:4px;
  }
  ul>li>span:first-child,.price{
      font-size:12px;
  }
  .price{
      color:#58B7FF;
  }
  .right-bottom{
      margin-top: 18px;
      margin-left: 24px;
  }
  .right-bottom  .el-tabs__item{
      color:red !important; 
  }
  .right-bottom  ul li span{
       font-size:16px;
       color:brown;
  }
  .right-bottom  ul li span.price{
      font-size:16px;
      color:#58B7FF;
  }
  .right-bottom  ul>li>img{
      width:104px;
      height:90px;
      margin-left:8px;
      margin-bottom:10px;  }
  .right-bottom  ul>li{
      display:flex;
      background:#fff;
      width:20%;
      border:1px solid #E5E9F2;
      border-radius:4px;
      margin-right:70px;
      margin-top:20px;
      margin-bottom:30px;
      align-items:center;
  }
  .right-bottom  ul>li>div{
      margin-left:10px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
  }
</style>