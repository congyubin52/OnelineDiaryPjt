const SIGN_UP_VIEW = 1;
const SIGN_IN_VIEW = 2;
const SIGN_OUT_VIEW = 3;
const DIARY_WRITE_VIEW = 4;
const DIARY_LIST_VIEW = 5;

let signUpWrap = '';
let signInWrap = '';
let writeWrap = '';
let listWrap = '';

const initViews = () => {
    console.log('initViews() CALLED!!');

    let signUpWrap = document.querySelector('div.sign_up_wrap');
    let signInWrap = document.querySelector('div.sign_in_wrap');
    let writeWrap = document.querySelector('div.write_wrap');
    let listWrap = document.querySelector('div.list_wrap');

}

const showSelectedView = (viewNo) => {
    console.log('showSelectedView() CALLED');

    switch(viewNo){
        case SIGN_UP_VIEW:
            signUpWrap.style.display = 'block';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
        break;

        case SIGN_IN_VIEW:
        case SIGN_OUT_VIEW: //화면 다 없애도, 로그인 화면 띄워도 상관 X

            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'block';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
        break;

        case DIARY_WRITE_VIEW:

            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'block';
            listWrap.style.display = 'none';
        break;
        
        case DIARY_LIST_VIEW:

            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'block';
        break;
                    
    }
}