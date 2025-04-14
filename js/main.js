/**
 * Created by fide on 20.10.15.
 */
jQuery(document).ready(function($) {
    var $container = $('.packery-grid');

    $container.imagesLoaded(function() {
        $container.packery({
            itemSelector: '.packery-grid-item',
            columnWidth: '.packery-grid-sizer',
            gutter: '.packery-gutter-sizer'
        });
        $("img.lazy").lazyload();
    });

    /**
     * Resize RoyalSlider to full window height
     *
     * Solving it with Javascript and subtracting a fixed number
     * of pixels feels hacky. However configuring RoyalSlider
     * through the wordpress admin interface was not enough to get
     * a real responsive behavior. In theory royal slider can use
     * the space which is provided by the parent container (using height:auto
     * and width:auto, see link below). However this means the parent
     * has to provide this size, which would be possible in css with flexbox.
     * However for time reasons I didnt want to rework the CSS.
     *
     * This solution is documented here:
     * - http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/how-stretch-slider-to-full-browser-width-and-height
     * - https://jsfiddle.net/DmitrySemenov/Z23Hp/
     */
    var royalSlider = $('.royalSlider');
    if(royalSlider.length > 0)  {
        var resize = function() {
            $('.royalSlider').css({
                width: '100%',
                height: $(window).height() - 200 // Subtract 200px for header and footer
            });
        };

        $(window).on('resize', resize);
        resize();

        var rs = royalSlider.royalSlider({
            autoScaleSlider:false
        }).data('royalSlider');
    }

});
