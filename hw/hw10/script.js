id=prompt('아이디 입력');
password=prompt('비밀번호 입력');
if (id=='std01' && password=='1111' ||
    id=='std02' && password=='2222' ||
    id=='std03' && password=='3333') {
        location.href="./login.html"
}
else {
    location.href="./error.html"
}