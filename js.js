jQuery(document).ready(function($) {
    var zoom_function = {
        mouse_image: $('.mega_image_img'),
        zoom_box: $('.zoom_block'),
        margin_left:$('.container').css('margin-left'),
        margin_top:$('.container').css('margin-top'),
        init: function() {
            this.bind();
            this.zoom_box.hide();
            // use larger image for the zoom effect
            this.zoom_box.css('background', 'url(2016_bugatti_chiron_3-1366x768.jpg)');
        },
        bind: function() {
            this.mouse_image.mouseenter(function(event) {
                 zoom_function.zoom_box.show();
            });
            this.mouse_image.mousemove(function(e) {
                var scr = $(this).attr('src');
                var image=$(this);
                zoom_function.zoom(e.currentTarget.clientWidth, e.currentTarget.clientHeight, e.clientX, e.clientY, scr,image);
            });
            this.mouse_image.mouseout(function(event) {
                 zoom_function.zoom_box.hide();
            });
        },
        zoom: function(image_width, image_height, X, Y, bg_image,image) {
        	// positioning the zoom box
            var x_pos_pers = ((X) / image_width * 100)+ "%";
            var y_pos_pers = ((Y)/ image_height * 100)+ "%";
            var zoom_box_height=this.zoom_box.height();
            var zoom_box_width=this.zoom_box.width();
            this.zoom_box.css({
                'background-position-x':x_pos_pers,
                'background-position-y':y_pos_pers,
                'left':X-parseInt(image.css('margin-left')),
                'top':Y-parseInt(image.css('margin-top')),
            });
        }
    }
    zoom_function.init();
});
