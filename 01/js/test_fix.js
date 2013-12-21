/**
 *
 */

$(document).ready(function() {

    $('#dm-side02 ~ *').wrapAll('<div id="contents"></div>');
    $('#dm-header').append('<div class="hd-overlay" id="hoge"></div>');

    var hdNav = 0;    
    var $win = $(window);
    
    
    //open
    $('.hd-local').on('touchstart', function(){

        //タッチ中にスクロールを禁止
        $win.on('touchmove.noScroll', function(e) {
            e.preventDefault();
        });
        if(hdNav == 0) {
            $('#dm-header , #dm-side02 , #contents').removeClass('off').addClass('on');
            $(this).addClass('on');
            hdNav = 1;
        };
        return false;
        
    });
    
    //タッチ中にスクロールを禁止　解除
    $('.hd-local').on('touchend', function() {
         $win.off('.noScroll');
    });


    //close
    $('#hoge').bind('touchstart', hdOverlay);
    $('#hoge').bind('touchend', function() {
         $win.off('.noScroll');
    });
    
    
    function hdOverlay() {
        $win.on('touchmove.noScroll', function(e) {
            e.preventDefault();
        });
    
        $('#dm-header , #dm-side02 , #contents').removeClass('on').addClass('off');
        $('.hd-local').removeClass('on');
        hdNav = 0;
        
        return false;
        
    }


    $('#hoge').on('click', function(e){
        e.stopPropagation();     
    })

    



    //ヘッダナビ類open
    /*
            <div class="hd-gbtn hd-global"><span class="hd-txt">サービス</span></div>
            <div class="hd-gbtn hd-acount"><span class="hd-txt">マイページ</span></div>
            <div class="hd-gbtn hd-search"><span class="hd-txt">検索</span></div>
    */

    $('#dm-header').append('<div class="hd-overlay-t" id="hoge-t"></div>');

    var hdNavG = 0;
    var hdNavA = 0;
    var hdNavS = 0;
    
    
    //open
    $('.hd-global').on('touchstart', function(){
        if(hdNavG == 0) {
            $('#hd-gnav02').removeClass('off').addClass('on');
            $(this).addClass('on');
            hdNavG = 1;
            $('#hoge-t').addClass('on');
            
            if (hdNavA == 1) {
                $('#hd-acount-area02').removeClass('on').addClass('off');
                $('.hd-acount').removeClass('on');
                hdNavA = 0;
            }
            if (hdNavS == 1) {
                $('#hd-search-area02').removeClass('on').addClass('off');
                $('.hd-search').removeClass('on');
                hdNavS = 0;
            }
            
        } else {
            $('#hd-gnav02').removeClass('on').addClass('off');
            $(this).removeClass('on');
            hdNavG = 0;
            $('#hoge-t').removeClass('on');
        }
        
        return false;
    });

    $('.hd-acount').on('touchstart', function(){
        if(hdNavA == 0) {
            $('#hd-acount-area02').removeClass('off').addClass('on');
            $(this).addClass('on');
            hdNavA = 1;
            $('#hoge-t').addClass('on');
            
            if (hdNavG == 1) {
                $('#hd-gnav02').removeClass('on').addClass('off');
                $('.hd-global').removeClass('on');
                hdNavG = 0;
            }
            if (hdNavS == 1) {
                $('#hd-search-area02').removeClass('on').addClass('off');
                $('.hd-search').removeClass('on');
                hdNavS = 0;
            }
        } else {
            $('#hd-acount-area02').removeClass('on').addClass('off');
            $(this).removeClass('on');
            hdNavA = 0;
            $('#hoge-t').removeClass('on');
        }
        return false;
    });

    $('.hd-search').on('touchstart', function(){
        if(hdNavS == 0) {
            $('#hd-search-area02').removeClass('off').addClass('on');
            $(this).addClass('on');
            hdNavS = 1;
            //$('#hoge-t').addClass('on');
            
            if (hdNavG == 1) {
                $('#hd-gnav02').removeClass('on').addClass('off');
                $('.hd-global').removeClass('on');
                hdNavG = 0;
            }
            if (hdNavA == 1) {
                $('#hd-acount-area02').removeClass('on').addClass('off');
                $('.hd-acount').removeClass('on');
                hdNavA = 0;
            }
        } else {
            $('#hd-search-area02').removeClass('on').addClass('off');
            $(this).removeClass('on');
            hdNavS = 0;
            $('#hoge-t').removeClass('on');
        }
        return false;
    });
    
    $('#hoge-t').on('touchstart', function(e){
        $('#hoge-t').removeClass('on');
            if (hdNavG == 1) {
                $('#hd-gnav02').removeClass('on').addClass('off');
                $('.hd-global').removeClass('on');
                hdNavG = 0;
            }
            if (hdNavA == 1) {
                $('#hd-acount-area02').removeClass('on').addClass('off');
                $('.hd-acount').removeClass('on');
                hdNavA = 0;
            }
            if (hdNavS == 1) {
                $('#hd-search-area02').removeClass('on').addClass('off');
                $('.hd-search').removeClass('on');
                hdNavS = 0;
            }
        return false;   
    });
    $('#hoge-t').on('scroll', function(e){
        return false; 
    });
    
});


