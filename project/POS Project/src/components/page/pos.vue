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
                                    <img :src="good.img_url" />
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
                                    <img :src="good.img_url" />
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
                                    <img :src="good.img_url" />
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
                                    <img :src="good.img_url" />
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
            oftenList:[],
            goods_hanbao:[],
           goods_yingliao:[],
            goods_taocan:[],
            goods_xiaoshi:[],
        }
    },
    mounted(){
        var orderHeight=document.body.clientHeight;
        document.getElementById("orderList").style.height=orderHeight+"px"
        document.getElementById("orderList").children[0].children[0].style.paddingLeft="20px";
    },
    created(){
        var url="http://127.0.0.1:3005/oftenList"
        var url1="http://127.0.0.1:3005/goods"
        this.axios.get(url).then(res=>{
            this.oftenList=res.data
        })
        this.axios.get(url1).then(res=>{
            this. goods_hanbao=res.data.goods_hanbao;
            console.log(this.goods_hanbao[1].img_url)
            this.goods_yingliao=res.data.goods_yingliao
            this.goods_taocan=res.data.goods_taocan
            this.goods_xiaoshi=res.data.goods_xiaoshi
        })
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