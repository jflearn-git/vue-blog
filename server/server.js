var express = require('express');
var app = express();
var json1 = require('./data/json1314').athorJson
var json2024 = require('./data/json2024');
var Mock = require('mockjs')

var now = {
	'2024':json2024
}


//使用mock生成数据
var userImages = []
		for(var i = 0;i < 203;i++){
			
			if(i<10){
				userImages.push({url:'http://39.106.3.69:8080/images/userImages/00'+i+'.jpg'})
			}else if(i<100){
				userImages.push({url:'http://39.106.3.69:8080/images/userImages/0'+i+'.jpg'})
			}else{
				userImages.push({url:'http://39.106.3.69:8080/images/userImages/'+i+'.jpg'})
			}
				
		}
		
//数据模型
var schema={
        'id|1-202': 202,
        'name':'@name',
        'date': '@dateTime',
        'title':'@cparagraph(1)',
        "see|60-1000": 100,
        "message|1-100": 100,
        'time':'@time',
     
    }

var textJson={}

//每次返回一个json对象，里面有两个数组，list和urlImages
//{[],[]}
var data = Mock.mock({
    'list|20': [schema]
});
textJson.HTML5 =data ;

textJson.CSS3 = Mock.mock({
    'list|20': [schema]
});
textJson.CSS3.urlImages = userImages


textJson.JS = Mock.mock({
    'list|20': [schema]
});
textJson.JS.urlImages = userImages

textJson.AJAX = Mock.mock({
    'list|20': [schema]
});
textJson.AJAX.urlImages = userImages


textJson.VUE = Mock.mock({
    'list|20': [schema]
});
textJson.VUE.urlImages = userImages



data.urlImages = userImages

app.get('/vueData',function(req,res){
	 // 这一步JSONP必备
res.header("Access-Control-Allow-Origin", "*");
  var _callback = req.query.callback;
  // 这个responseData是后台要传回给前台的数据
	var q = req.query.q
	//如果没有传参默认
	if(!q){
		if (_callback){
      // 这两步设置发送也是NODE.JS发送JSONP必备
      res.type('text/javascript');
	      res.send(_callback + '(' + JSON.stringify(data) + ')');
	  }
	  else{
	  	
	      res.json(data);
	  }
	}else{
		if (_callback){
      // 这两步设置发送也是NODE.JS发送JSONP必备
	      res.type('text/javascript');
		      res.send(_callback + '(' + JSON.stringify(textJson[q]) + ')');
		  }
		  else{
		  		console.log('是否daole')
		  		console.log(textJson[q])
		      res.json(textJson[q]);
		  }
	}
	
})


//加载更多的数据
app.get('/more',function(req,res){
	 // 这一步JSONP必备
res.header("Access-Control-Allow-Origin", "*");
  var _callback = req.query.callback;
  // 这个responseData是后台要传回给前台的数据
	
	//如果没有传参默认
	
	if (_callback){
      // 这两步设置发送也是NODE.JS发送JSONP必备
      res.type('text/javascript');
	      res.send(_callback + '(' + JSON.stringify(data) + ')');
	  }
	  else{
	  	var nowj = Mock.mock({
			    'list|20': [schema]
		  })
	  	nowj.urlImages = userImages
	      res.json(nowj);
	  }

	
})




app.get('/list',function(req,res){
	 // 这一步JSONP必备
  var _callback = req.query.callback;
  var q = req.query.q;
  // 这个responseData是后台要传回给前台的数据

	if (_callback){
      // 这两步设置发送也是NODE.JS发送JSONP必备
      res.type('text/javascript');
	      res.send(_callback + '(' + JSON.stringify(now.q) + ')');
	  }
	  else{
	  	
	      res.json(now[q]);
	  }

  
})
app.get('/author',function(req,res){
	 // 这一步JSONP必备
  var _callback = req.query.callback;
  // 这个responseData是后台要传回给前台的数据

	if (_callback){
      // 这两步设置发送也是NODE.JS发送JSONP必备
      res.type('text/javascript');
	      res.send(_callback + '(' + JSON.stringify(json1) + ')');
	  }
	  else{
	  	
	      res.json(json1);
	  }

  
})


app.listen(8888,function(){
	console.log('8888端口')
})


















