function changeColor(selected) {
  // 모든 버튼을 기본 상태로 설정
  document.querySelectorAll('.second_menu button').forEach(button => {
    button.style.backgroundColor = 'white'; // 배경색을 흰색으로 설정
    button.style.color = 'black'; // 글자색을 검은색으로 설정
  });

  // 선택된 버튼의 스타일 변경
  selected.style.backgroundColor = '#666666'; // 배경색을 검은색으로 설정
  selected.style.color = 'white'; // 글자색을 흰색으로 설정
}

// 모든 버튼에 이벤트 리스너 추가
document.querySelectorAll('.second_menu button').forEach(button => {
  button.addEventListener('click', function() {
    changeColor(this);
  });
});
