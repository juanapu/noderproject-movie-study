var express = require('express')
var path    = require('path')
var port    = process.env.PORT || 3000
var app     = express()

app.set('views','./views/pages')
app.set('view engine','jade')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())

var serveStatic = require('serve-static')
app.use('/static', express.static('bower_components'));

app.listen(port)

app.get('/',function(req,res){
	res.render('index',{
		title: 'i_movie 首页',
		movies: [{
			title: "img1",
			_id: 1898,
			poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524494861246&di=57d1ea0779cf754267080e132eb29124&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0142135541fe180000019ae9b8cf86.jpg%401280w_1l_2o_100sh.png"
		},
		{
			title: "img2",
			_id: 1899,
			poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524494861246&di=57d1ea0779cf754267080e132eb29124&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0142135541fe180000019ae9b8cf86.jpg%401280w_1l_2o_100sh.png"
		},
		{
			title: "img2",
			_id: 1899,
			poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524494861246&di=57d1ea0779cf754267080e132eb29124&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0142135541fe180000019ae9b8cf86.jpg%401280w_1l_2o_100sh.png"
		},
		{
			title: "img2",
			_id: 1899,
			poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524494861246&di=57d1ea0779cf754267080e132eb29124&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0142135541fe180000019ae9b8cf86.jpg%401280w_1l_2o_100sh.png"
		},
		{
			title: "img2",
			_id: 1899,
			poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524494861246&di=57d1ea0779cf754267080e132eb29124&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0142135541fe180000019ae9b8cf86.jpg%401280w_1l_2o_100sh.png"
		}
		]
	})
})

app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title: 'i_movie 详情页'
	})
})

app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title: 'i_movie admin panel'
	})
})

app.get('/admin',function(req,res){
	res.render('list',{
		title: 'i_movie list page'
	})
})

console.log('imooc started on port'+port) 