$(function() {
	
//To make the image map responsive on image load and resize	
 function imageresize() {
 var contentwidth = $('#page').width();
 if ((contentwidth) < '1024' && (contentwidth) > '767'){
 $('#blah').attr({usemap:'#map768',width:'768',height:'555'});
 } else if ((contentwidth) < '1200' && (contentwidth) > '1023'){
  $('#blah').attr({usemap:'#map1024',width:'1024',height:'739'});
 } else if ((contentwidth) < '1600' && (contentwidth) > '1199'){
  $('#blah').attr({usemap:'#map1200',width:'1200',height:'866'});
 } else if ((contentwidth) >'1599'){
  $('#blah').attr({usemap:'#map1600',width:'1600',height:'1155'});
 } else if ((contentwidth) <'500'){
  $('#blah').attr({usemap:'',width:contentwidth, height:'400'});
 }
 }
 
 $(document).ready(imageresize);
 
 $(window).bind("resize", function(){
 imageresize();
 });
 
 //To set rendered tooltip
 $('.bits').qtip({
         attr: 'title',
         position: {
             target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: true
             } 
         },
		 style:{
			classes:"qtip-red"
		 }
     });
});