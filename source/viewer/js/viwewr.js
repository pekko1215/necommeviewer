$(function(){
	var testdata = [];
	testdata.push({'name':'うどん大魔神','no':'1','comment':'うどんLove'});
	testdata.push({'name':'うどん大魔神','no':'2','comment':'うどんは神'});
	testdata.push({'name':'うどん大魔神','no':'3','comment':'うどんゴッデス'});
	testdata.push({'name':'うどん大魔神','no':'4','comment':'うどんは命'});

	$("#comment-area").tabulator({
		height:"300px",
		columns:[
			{title:'名前',field:"name",sortable:false},
			{title:'コメント番号',field:"no",sortable:false},
			{title:'コメント',field:"comment",sortable:false}
		],
	})
	$("#comment-area").tabulator("setData",testdata);
})