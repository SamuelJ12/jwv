var img = new Array("source/service.jpg","source/main.jpg");
var i=0;
	
	function chgimg(){
		document.images[0].src=img[i++];
	};

	$(document).ready(function(){ //DOM이 준비되고
		$('#button').click(function(){ // ID가 toggleButton인 요소를 클릭하면
			var state = $('#content').css('display'); // state 변수에 ID가 moreMenu인 요소의 display의 속성을 '대입'
			if(state == 'none'){ // state가 none 상태일경우 
				$('#content').show(); // ID가 moreMenu인 요소를 show();
			}else{
				$('#content').hide(); // ID가 moreMenu인 요소를 hide();			
			}
		});
	});
