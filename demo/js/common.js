(function($){
    // 核验搜索数据
    var searchBtn = $('#search-btn');
    searchBtn.on('click', function(event) {
        var keywordInput =$('#keyword');
        var keyword = keywordInput.val();
        if (keyword == '') {
            alert('搜索数据不能为空,请重新输入!');
            keywordInput.focus();
            return false;
        }
    });
})(jQuery);