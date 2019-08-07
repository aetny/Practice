/**
Simple Server for web api test.
*/
/**Connect是一个node中间件（middleware）框架。
如果把一个http处理过程比作是污水处理，中间件就像是一层层的过滤网。
每个中间件在http处理过程中通过改写request或（和）response的数据、状态，实现了特定的功能。
中间件就是类似于一个过滤器的东西，在客户端和应用程序之间的一个处理请求和响应的的方法。*/

var connect = require('connect');  //创建连接
var bodyParser = require('body-parser');   //body解析

// var http = require('http');
var url = require("url");
var querystring = require("querystring");
var lists={
			"code": "200",
			"msg": "success",
			"result": [
				{ id: 0,  name: 'Zero' , purchased:true},
				{ id: 1, name: 'Mr. Nice' , purchased:true},
				{ id: 2, name: 'Narco' , purchased:true},
				{ id: 3, name: 'Bombasto' , purchased:false},
				{ id: 4, name: 'Celeritas' , purchased:false},
				{ id: 5, name: 'Magneta' , purchased:false},
				{ id: 6, name: 'RubberMan' , purchased:false},
				{ id: 7, name: 'Dynama' , purchased:false},
				{ id: 8, name: 'Dr IQ' , purchased:false},
				{ id: 9, name: 'Magma' , purchased:true},
				{ id: 10, name: 'Tornado' , purchased:false}
			]
		}
var count = lists.result.length;
var arr =[];

var app = connect()
    .use(bodyParser.json())   //JSON解析
    .use(bodyParser.urlencoded({extended: true}))
	//use()方法还有一个可选的路径字符串，对传入请求的URL的开始匹配。
	//use方法来维护一个中间件队列
	.use(function (req, res, next) {
		//跨域处理
		// Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');  //允许任何源
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  //允许任何方法
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Session-Token');   //允许任何类型
		res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});    //utf-8转码
		next();  //next 方法就是一个递归调用
	})
	.use('/get', function(req, res, next) {
		//response 响应   request请求
		// 中间件
		res.end(JSON.stringify(lists));
		next();      //
	})
	.use('/post', function(req, res, next) {
		//response 响应   request请求
		// 中间件
		console.log(req.body.id);
		// lists[req.body.id].purchased = !lists[req.body.id].purchased
		// res.end(JSON.stringify(lists));
		if(req.method=='POST') {
			lists.result.forEach((item)=>{
				item.id==req.body.id?item.purchased=!item.purchased:false
			})
			console.log(lists.result);
			var data = {"code":200,"msg":"success"};
			res.end(JSON.stringify(data));
		} else {
			res.end(JSON.stringify({}));
		}
		next();      //
	})
	.use('/delete', function(req, res, next) {
		var arg = url.parse(req.url).query;
		var params = querystring.parse(arg);
		if(req.method=='DELETE') {
			// console.log(res)
			// console.log(req.body)
			// console.log(req.url)
			// console.log(arg)
			// console.log(params.id)
			
			var a = lists.result.filter(function(v){
				return v.id!=params.id
			})
			lists.result = a;
			var data = {"code":200,"msg":"success"};
			res.end(JSON.stringify(data));
		} else {
			res.end(JSON.stringify({}));
		}
		next();  
	})
	.use('/add', function(req, res, next) {
		//response 响应   request请求
		// 中间件
		console.log(req.body);
		if(req.method=='POST'){
			lists.result.unshift({id:count,name:req.body.name,purchased:false})
			var data={
                "code": "200",
                "msg": "success",
				}
				count++;
            res.end(JSON.stringify(data));
		}else{
			res.end(JSON.stringify({}));
		}
		//console.log(req.originalUrl, req.url);
		next();      //
	})
	.use('/info4', function(req, res, next) {
		//response 响应   request请求
		// 中间件
		console.log(req.body);
		//console.log(req.originalUrl, req.url);
		var data={
                "code": "200",
                "msg": "success",
                "result": [{
					"id":1,
                    "list1": "广告投放1",
                    "list2": "广告投放2",
					"list3": "广告投放3",
				},
				{
					"id":2,
                    "list1": "广告投放1",
                    "list2": "广告投放2",
					"list3": "广告投放3",
				},
				{
					"id":3,
                    "list1": "广告投放1",
                    "list2": "广告投放2",
					"list3": "广告投放3",
				}]
            }
            res.end(JSON.stringify(data));
			next();      //
	})
	.use('/info_img', function(req, res, next) {
		//response 响应   request请求
		// 中间件
		var data={}
            res.end(JSON.stringify(data));
			next();      
	})
    .use('/form_info', function(req, res, next) {
		//response 响应   request请求
		// 中间件
		console.log(req.body);
		var data={
                "code": "200",
                "msg": "success",
                "result": []
            }
         res.end(JSON.stringify(data));
	})
	.use('/list', function(req, res, next) {
		var data={
                "code": "200",
                "msg": "success",
                "result": [{name:'手机1',state:'未采购'},
                    {name:'手机2',state:'未采购'},
                    {name:'手机3',state:'已采购'},
                    {name:'手机4',state:'未采购'}]
            }
            res.end(JSON.stringify(data));
			next();      //
	})
	.use('/echarts_info', function(req, res, next) {
		var data={
                "code": "200",
                "msg": "success",
                "result": [10, 52, 200, 334, 390, 330, 220]
            }
            res.end(JSON.stringify(data));
			next();      //
	})
	.use('/list_add1', function(req, res, next) {
		console.log(req.method)
		if(req.method=='POST') {
		console.log(req.body.name);
		//console.log(req.originalUrl, req.url);
		lists.result.push({id:lists.result.length,name:req.body.name});
		//console.log(lists.result);
		var data = {"code":200,"msg":"success"};
		res.end(JSON.stringify(data));
		} else {
		res.end(JSON.stringify({}));
		}
		next();
	})
	.use('/list_add', function(req, res, next) {
		console.log(req.method)
		if(req.method=='POST') {
			console.log(req.body.name);
			//console.log(req.originalUrl, req.url);
			arr.push({type:req.body.type,name:req.body.name});
			var data = {"code":200,"msg":"success",result:arr};
			res.end(JSON.stringify(data));
		} else {
			res.end(JSON.stringify({}));
		}
		next();
	})
	.use('/list_get', function(req, res, next) {
        res.end(JSON.stringify(lists));
		next();
	})
	
	
	.listen(3333);
console.log('Server started on port 3333.');
