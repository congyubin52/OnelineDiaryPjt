const memberDB = new Map();
const diaryDB = new Map();

/* MEMBER DB START*/
const addMember = (id,pw,mail) => {
    console.log('addMember() CALLED');

    memberDB.set(id, {
        u_id: id,
        u_pw: pw,
        u_mail: mail,
    }); 
    diaryDB.set(id, []);//일기 데이터 누적 되어야하니 배열

    console.log(memberDB.get(id));
    
} 

const searchMember = (id, pw) => {
    console.log('addMember() CALLED');

    let memObj = memberDB.get(id); //해당 아이디에 객체가 있으면 가져옴
    if(memObj !== undefined && memObj.u_pw === pw) { //비밀번호 같은지
        console.log('SIGN IN SUCCESS!');
        return true;
    }

    console.log('SIGN IN FAIL!');
    return false;
} 
/* MEMBER DB END*/ 
/* DIARY DB START*/ 
const addDiary = (txt) => {
    console.log('addDiary() CALLED');

    let diaryArr = diaryDB.get(signInedMemberId);
    diaryArr.push(txt);

    console.log('diaryArr: ', diaryArr);

}
const searchDiary = () => {
    console.log('searchDiary() CALLED');

    let diaryArr = diaryDB.get(signInedMemberId);
    console.log('diaryArr: ', diaryArr);

    return diaryArr;

}
/* DIARY DB END*/ 