// alert
var app = angular.module('zongDui',[]);

app.controller('personCtrl',function($scope,$http){
	var host = "http://www.siida.cn/"
	// 人员信息
	// $scope.personList = {};
	 $scope.personList = [
	 	{
	 		name:'秘书处',
	 		person:[
	 			{name:'张章',phone:'15988826470',phone_duan:'656470'},
				{name:'丛珊',phone:'15988811834',phone_duan:'613119'},
				{name:'傅楷',phone:'17764552569',phone_duan:'暂无'},
				{name:'陶如意',phone:'15558029957',phone_duan:'612333'}
			]
		},
		{
			name:"组织部",
			person:[
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡文霞',phone:'15883837272',phone_duan:'998766'},
				{name:'胡宇恒',phone:'13542423131',phone_duan:'313131'}
			]
		}];
	$scope.showInfo = function(person){
		var str = '姓名：'+person.name+'\n';
		str += '手机号码：'+person.phone+"\n";
		str += '短号：' +person.phone_duan+'\n';
		alert(str);
	}

	// $http({
	// 	method: 'post',
	// 	url: host+'zongdui_back/getPersonList.php',
	// 	data:{
	// 		token:"lalalala"
	// 	}
	// }).success(function(data, status, headers, config) {
	// 	// $scope.personList  = data;
		
	// }).error(function(data, status, headers, config) {
	// });
})