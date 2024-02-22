
// open_search JS
const open_search = document.querySelector('#open_search')
const search_close = document.querySelector('.search_close')
const search_btn = document.querySelector('.search_btn')
const search_btn2 = document.querySelector('.search_btn2')
console.log(open_search, search_close, search_btn)
// open_search 숨기기
open_search.style.display = 'none'
// 돋보기 클릭 시 open_search 출력
search_btn.addEventListener('click', function () {
    open_search.style.display = 'block'
})
search_btn2.addEventListener('click', function () {
    open_search.style.display = 'block'
})
// open_search 안 버튼(^) 클릭 시 open_search 숨기기
search_close.addEventListener('click', function () {
    open_search.style.display = 'none'
})
// 버튼클릭시 상단으로 올라가기
document.getElementById('go-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
document.getElementById('go-top2').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});