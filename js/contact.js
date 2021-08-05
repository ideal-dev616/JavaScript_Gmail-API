$(function(){
    $('.call-btn').click(function(){
        let selectedUser = $('.user-select');
        for (let i = 0; i < selectedUser.length; i ++) {
            console.log(selectedUser.eq(i)[0].checked,'-',i);
        }
    })
})