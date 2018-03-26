	import	React,	{	Component	}	from	'react';
  	import	{
      StyleSheet,
      View,
      ListView,
      Image,
      Text,
    }	from	'react-native';
    import	data	from	'./sales.json';
    const	basketIcon	=	require('./images/basket.png');
    class	MainApp	extends	Component	{
        constructor(props)	{
          super(props);
          var	ds	=	new	ListView.DataSource({
            rowHasChanged:	(r1,	r2)	=>	r1	!==	r2
});
            this.state	=	{
            dataSource:	ds.cloneWithRows(data),
            };
            }
            renderRow(record)	{
  //	Defined	on	step	8
  }
              render()	{
  //	Defined	on	step	7
                            }
                            }
                    export	default	MainApp;
