(function($){
    // 手机验证码
    var captcha = '';
    var timer = null;

    // - mock数据 - 获取所在城市[todo:替换成相应提供的接口]
    $.getJSON('js/data/city.json', function(data) {
        if (data.status == 0) {
            var template = $('#city-template').html();
            Mustache.parse(template);
            var rendered = Mustache.render(template, {city: data.result.city});
            $('#city-target').html(rendered);
        }
    });

    // - mock数据 - 获取验证码[todo:替换成相应提供的接口]
    $('#send-captcha').on('click', function(event) {
        var $me = $(this);
        // 验证手机号码是否合理
        var mobile = $('#mobile').val();
        if ((/^1[3|4|5|8][0-9]\d{4,8}$/.test(mobile))) {
            $.getJSON('js/data/captcha.json', {mobile: mobile}, function(data) {
                if (data.status == 0) {
                    captcha = data.result.captcha;
                    // 更新验证码剩余时间
                    // 初始化时间和时间间距
                    var time = 0;
                    var maxTime = 60;
                    $me.prop('disabled', true);
                    $me.addClass('not-allowed');

                    if (!timer) {
                        timer = setTimeout(changeTime, 1000);
                    }
                /*
                    changeTime: 动态修改验证码剩余时间
                    description: 1、1min以内不能请求验证码且发送验证码按钮变灰不可点击
                                 2、1min过后可以请求验证码
                 */
                    function changeTime () {
                        if (time == maxTime) {
                            $me.text('发送验证码');
                            $me.prop('disabled', false);
                            $me.removeClass('not-allowed');
                            timer = null;
                        } else {
                            time++;
                            $me.text('已发送 ' + time + ' s');
                            setTimeout(changeTime, 1000);
                        }
                    }
                }
            });
        } else {
            $('#mobile').focus();
            alert('手机格式不合理,请检查后重新输入!');
        }
    });

    // 注册验证表单数据
    $('#regist-btn').on('click', function(event) {
        return verifyFormData();
    });

    /*
        verifyFormData:验证表单数据
        description: 验证用户名，密码，确认密码，手机号，验证码和是否同意条款
     */
    function verifyFormData () {
        if ($('#username').val() == '') {
            $('#username').focus();
            alert('用户名不能为空,请重新输入!');
            return false;
        }
        if ($('#pwd').val() == '') {
            $('#pwd').focus();
            alert('密码不能为空,请重新输入!')
            return false;
        }
        if ($('#repwd').val() != $('#pwd').val()) {
            $('#repwd').focus();
            alert('确认密码与密码不一致,请重新输入!');
            return false;
        }
        if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($('#mobile').val()))) {
            $('#mobile').focus();
            alert('手机格式不合理,请检查后重新输入!');
            return false;
        }
        if ($('#captcha').val() != captcha || $('#captcha').val() == '') {
            $('#captcha').focus();
            alert('验证码不正确,请核对后重新输入!');
            return false;
        }
        if (!$('#agreement').prop('checked')) {
            alert('请同意Aside用户使用协议!');
            return false;
        }
        return true;
    }
})(jQuery);