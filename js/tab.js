(function($){
  var tabs = $('.zeus-tab');
  tabs.each(function() {
    tabDiv = $(this);  // 获取当前的tab块
    // 添加事件委托监听
    tabDiv.on('click', 'li', function() {
      // 在这的this是被点击的li的文档对象
      if ( /tab-current/.test(this.className) ) return;
      var liEle = $(this);
      var index = liEle.parent().children().index(liEle);
      // 改变Tab标题的选中状态
      liEle.siblings().each(function() {
        $(this).removeClass('tab-current');
      });
      liEle.addClass('tab-current');
      // 改变显示的内容
      var content = liEle.parent().next();
      content.children().each(function() {
        $(this).removeClass('tab-show');
      });
      content.children().eq(index).addClass('tab-show');
      // 获取当前tab块的callback
      var callback = liEle.parent().parent().attr('onchage');
      if (callback) eval(callback + '(liEle, index)');
    });
  });
})(jQuery);