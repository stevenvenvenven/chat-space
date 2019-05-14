$(function () {
    var search_list = $('#user-search-result');
    function appendUser(user) {
        var html = '<div class="chat-group-user clearfix">' +
                        '<p class="chat-group-user__name">' +
                            `${ user.name }` +
                        '</p>' +
                        '<div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">' +
                            '追加' +
                        '</div>' +
                   '</div>'
        search_list.append(html)
    }

    var group_user_list = $('#chat-group-users');
    function appendUserToGroup(user) {
        var html = '<div class="chat-group-user clearfix js-chat-member" id="chat-group-user-8">' +
                        '<input name="group[user_ids][]" type="hidden" value="${ user.id }">' +
                        '<p class="chat-group-user__name">' +
                            `${ user.name}` +
                        '</p>' +
                        '<div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn">' +
                            '削除' +
                        '</div>' +
                   '</div>'
        group_user_list.append(html)
    }

    function appendErrMsgToHTML(msg) {
        var html = '<div class="chat-group-user clearfix">' +
                        '<p>' +
                            `${ msg }` +
                        '</p>' +
                   '</div>'
        search_list.append(html);
    }

    $('#user-search-field').on('keyup', function () {
        var input = $('#user-search-field').val();

        $.ajax({
            type: 'GET',
            url: '/users/search',
            data: { name: input },
            dataType: 'json'
        })
        .done(function (users) {
          $('#user-search-result').empty();
          if (users.length !== 0) {
              users.forEach(function (user) {
                  appendUser(user);
              });
          }
          else {
              appendErrMsgToHTML("一致するユーザはいません");
          }
        })
        .fail(function () {
            alert('ユーザの検索に失敗しました')
        })
    });

    $('.user-search-add').on('click', function () {
        var user_id = $('this').data("user-id");
        var user_name = $('this').data("user-name");

    });

    $('chat-group-user__btn').on('click', function () {
        $(this).parent().remove();
    })

});