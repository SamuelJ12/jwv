var img = new Array("source/service.jpg","source/main.jpg");
var i=0;
	
	function chgimg(){
		document.images[0].src=img[i++];
	};

	$(document).ready(function(){ //DOM�� �غ�ǰ�
		$('#button').click(function(){ // ID�� toggleButton�� ��Ҹ� Ŭ���ϸ�
			var state = $('#content').css('display'); // state ������ ID�� moreMenu�� ����� display�� �Ӽ��� '����'
			if(state == 'none'){ // state�� none �����ϰ�� 
				$('#content').show(); // ID�� moreMenu�� ��Ҹ� show();
			}else{
				$('#content').hide(); // ID�� moreMenu�� ��Ҹ� hide();			
			}
		});
	});
