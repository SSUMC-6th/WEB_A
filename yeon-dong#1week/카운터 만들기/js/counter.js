const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.onclick = () => {
    const increase_num = parseInt(number.innerText, 10) // parseInt 로 문자열을 숫자로 변환, 두번째 인자는 10진수를 뜻함
    number.innerText = increase_num + 1
}
decrease.onclick = () => {
    const decrease_num = parseInt(number.innerText, 10) // parseInt 로 문자열을 숫자로 변환, 두번째 인자는 10진수를 뜻함
    number.innerText = decrease_num - 1
}