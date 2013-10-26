/**
 * jquery 图片左右翻插件
 * author: memoryza
 */
;(function($){
    $.fn.jPreview = function(s) {
        var s = $.extend({
                viewId: 'view',
                turnLeft: null,
                turnRight: null,
            }, s),
            i = 0,
            _this = this,
            _length = _this.find('img').length,
            $viewLayer = $('#' + s.viewId);
        _this.turnLeft = function(){
            i = getIndex(-1);
            move(i);
            if(typeof s.turnLeft == 'function') s.turnLeft();
        }
        _this.turnRight = function() {
            i = getIndex(1);
            move(i);
            if(typeof s.turnRight == 'function') s.turnRight();
        }
        _this.find('img').click(function() {
            i = _this.find('img').index($(this));
            move(i);
        })

        $viewLayer.on('keydown', function(e) {
            var keyCode = e.keyCode || e.which;
            switch(keyCode) {
                case 37: _this.turnLeft();break;
                case 39: _this.turnRight();break;
            }
        });
        function move(index) {
            $viewLayer.find('img:eq(0)').attr('src', _this.find('img:eq(' + index + ')').attr('src'));
        }
        function getIndex(direction) {
            return (direction + i + _length) % _length;
        }
        return _this;
    }
})(jQuery);
