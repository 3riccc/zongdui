var app = angular.module('zongDui',[]);
app.controller('important',function($scope,$http){
	$scope.list = [
	{
		name:"先进班集体执行手册",
		remark:"记载各部门先进班集体工作的具体执行方法",
		address:"pan.baidu.com/s/abcdefg",
		code:"2fd9",
		uploadDate:"2016-01-10"
	},{
		name:"先进班集体执行手册",
		remark:"记载各部门先进班集体工作的具体执行方法",
		address:"pan.baidu.com/s/abcdefg",
		code:"2fd9",
		uploadDate:"2016-01-10"
	},{
		name:"先进班集体执行手册",
		remark:"记载各部门先进班集体工作的具体执行方法",
		address:"pan.baidu.com/s/abcdefg",
		code:"2fd9",
		uploadDate:"2016-01-10"
	},{
		name:"先进班集体执行手册",
		remark:"记载各部门先进班集体工作的具体执行方法",
		address:"pan.baidu.com/s/abcdefg",
		code:"2fd9",
		uploadDate:"2016-01-10"
	},{
		name:"先进班集体执行手册",
		remark:"记载各部门先进班集体工作的具体执行方法",
		address:"pan.baidu.com/s/abcdefg",
		code:"2fd9",
		uploadDate:"2016-01-10"
	},{
		name:"先进班集体执行手册",
		remark:"记载各部门先进班集体工作的具体执行方法",
		address:"pan.baidu.com/s/abcdefg",
		code:"2fd9",
		uploadDate:"2016-01-10"
	},
	{
		name:"暑期社会实践策划书",
		remark:"暂无",
		address:"pan.baidu.com/s/999defg",
		code:"987f",
		uploadDate:"2015-12-07"
	}];
	$scope.viewItem = function(item){
		var str = '<p>云盘地址:'+item.address+'</p><br/>';
		str += '<p>提取码:<span style="color:#F8BB86">'+item.code+'</span></p>';
		swal({
		   title: item.name,
		   text: str,
		   html: true
		});
	}
})