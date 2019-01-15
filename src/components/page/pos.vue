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
                <div>
                    <div class="title">常用商品</div>
                    <ul>
                        <li v-for="good of oftenList">
                            <span>{{good.pname}}</span>
                            <span class="price">￥{{(good.price).toFixed(2)}}</span>
                        </li>
                    </ul>
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
                       {id:8,pname:"厚蛋烤鸡堡",price:27}]
        }
    },
    mounted(){
        var orderHeight=document.body.clientHeight;
        document.getElementById("orderList").style.height=orderHeight+"px"
        document.getElementById("orderList").children[0].children[0].style.paddingLeft="20px";
    }
    
}
</script>
<style scoped>
  .nav{
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
  ul>li{
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
      font-size:14px;
  }
  ul>li>.price{
      color:#58B7FF;
  }
</style>