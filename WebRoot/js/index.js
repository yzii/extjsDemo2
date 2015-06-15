Ext.onReady( function() {
	var data=[
	          [1,'hello','hello','hello'],
	          [2,'hello2','hello2','hello2']
	          ];
	var store=new Ext.data.SimpleStore({data:data,fields:["id","name","sex","job"]});
	var sm=new Ext.grid.CheckboxSelectionModel();
	var cm=new Ext.grid.ColumnModel([
	    {header:"编号",dataIndex:"id"},
	    {header:"姓名",dataIndex:"name"},
	    {header:"性别",dataIndex:"sex"},
	    {header:"工作",dataIndex:"job"}
	    ]);
	var grid=new Ext.grid.GridPanel({
		renderTo:"grid",   //必须跟变量相同
		width:300,
		height:200,	  
		//el:'grid',
		//ds:ds,
		cm:cm,       //数据字段
		//sm:sm,    
		store:store, //数据源
		title:'HelloWorld', //标题
		autoExpandColumn:2, //自动伸展，占满剩余区域
		selModel : new Ext.grid.RowSelectionModel( { singleSelect : false}),// 设置单行选中模式,否则将无法删除数据
		//添加分页工具栏
		bbar : new Ext.PagingToolbar({ // 添加分页工具栏
            pageSize : 50,//每页显示几条数据
            store : store,
            displayInfo : true,//是否显示数据信息
            displayMsg : '显示 {0}-{1}条 / 共 {2} 条',
            emptyMsg : "无数据- -!"
        }),
        tbar :[{text:'查询'}]           //添加工具栏
	});
	Ext.Msg.alert("te","tr");
	//grid.render();

});