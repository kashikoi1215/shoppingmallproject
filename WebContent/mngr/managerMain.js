var status = true;

$(function(){
	alert("실행되쌈");
	$("#registProduct").click(function(){ //[상품등록] 버튼 클릭시
		window.location.href="/shoppingmall/mg/bookRegisterForm.do";
	});
	
	$("#updateProduct").click(function(){//[상품수정/삭제]버튼 클릭
		window.location.href="/shoppingmall/mg/bookList.do?book_kind=all";
	});
	
	$("#orderedProduct").click(function(){//[전체구매목록 확인]버튼 클릭
		window.location.href="/shoppingmall/mg/orderList.do";
	});
	
	$("#qna").click(function(){//[상품QnA답변] 버튼 클릭
		window.location.href="/shoppingmall/mg/qnaList.do";
	});
});