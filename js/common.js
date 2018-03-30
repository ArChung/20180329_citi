$(document).ready(function(){
    var oo={};

    //判斷手機直立或橫向
    window.addEventListener("orientationchange",onOrientationchange ,false);
    function onOrientationchange() {
      if (window.orientation === 180 || window.orientation === 0) {
          $('#landscapeHint').removeClass('on');
      }
      if (window.orientation === 90 || window.orientation === -90 ){
       $('#landscapeHint').addClass('on');
      } 
    }

    //背景影片轉手機時停止
    var videoHtml='<video autoplay loop poster="img/video_n.jpg?r=1510040452047" class="video">'+
            '<source src="video/Campaign KV_FINAL.mp4" type="video/mp4">'+
        '</video>';
    var ww;
    $(window).resize(function(){
        ww=$(window).width();
        if(ww>830) $('.videoBox').html(videoHtml);
        else $('.videoBox').html('');
    }).trigger('resize');

    //右上menu
    $('.logo--hdR').on('click',function(){
        $('.menu').slideToggle();
    });
    $('.close').on('click',function(){
        $('.menu').slideToggle();
    });
    $('.menu a').each(function(){
        $(this).click(function(){
            $('.close').trigger('click');
        });
    });
    
    /**************/
    //錨點
    var hashRun = (function(){
      function toTopRun(_href){
        var target = $(_href == '#' || _href == '#top' ? 'html' : _href);
        var mtop=(jo_m)?58:62;
        // console.log(target.offset().top+'****'+mtop);
        var position = target.offset().top-mtop;
        $('html, body').animate({scrollTop:position}, 550, 'swing',function () {
            window.location.hash = _href;
        });
       return false;
      }
      $('a[href^=#]').on('click',function(e){
        toTopRun($(this).attr('href'));
      });
      if(window.location.hash!=''){
        toTopRun(window.location.hash);
        if(window.location.hash=='#notice') {
            $('#notice').addClass('on');
            $('.notice__con').slideToggle('show');
        }
      } 
    })();
    
    //注意事項
    $('#noticeBtn,.nav_noticeBtn').on('click',function(){
        $('#notice').toggleClass('on');
        $('.notice__con').slideToggle();
    });

    //POPUP
    $('.bg2_btn,.closeBtn').on('click',function(){
        $('#popup_lightbox').toggleClass('on');
        $('#popup_component').toggleClass('on');
        $("html, body").animate({scrollTop: 0}, 1000, "easeOutExpo");
    });

    //FB&Line Share button
    function jo_mobilecheckHD(){
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
    };
    var jo_m=jo_mobilecheckHD();

    function fbShare(url,name){
        var url;//網頁位置;
        var name;//網頁名稱;
        var iTop = (window.screen.availHeight-550)/2;//視窗的垂直位置;
        var iLeft = (window.screen.availWidth-585)/2;//視窗的水平位置;
        window.open(url,name,'height=520,innerHeight=520,width=575,innerWidth=575,top='+iTop+',left='+iLeft+',status=no,location=no,status=no,menubar=no,toolbar=no,resizable=no,scrollbars=no');
    }

    //fbshare
    function jo_shareF(_url){
        return "http://www.facebook.com/share.php?u="+encodeURIComponent(_url);
    };

    //windowOpen 
    //jo_popWindow(jo_shareF('http://ad.arcww.com.tw/joTest/hd/'+'s'+gD.KIND+'.html'),'share'+gD.KIND,600,500,'no','center');
    var jo_wo= null;
    function jo_popWindow(mypage,myname,w,h,scroll,pos){
        if(pos=="random"){LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;}
        if(pos=="center"){LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;}
        else if((pos!="center" && pos!="random") || pos==null){LeftPosition=0;TopPosition=20}
        settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
        jo_wo=window.open(mypage,myname,settings);
    };

    //外連前先跳出確認小視窗
    var popGoAwayHD={
        fn:{},
        init:function(){
            var _html='<div class="popGoAway">'+
                '<div class="contentBox">'+
                    '<div class="articleBox">'+
                        '<h4 class="title">您即將離開花旗網站。<br>'+
                        '<small> You are now entering a third party site.</small> </h4>'+
                        '<h4>所有其他業者經營的網站均由各該業者自行負責(包括客戶隱私權保護及客戶資訊安全事項)，不屬花旗銀行控制及負責範圍之內。<br>'+
                        '<small>All information you provide there will be subject to privacy, confidentiality, and security terms of the applicable third party site.</small></h4>'+
                        '<h4>您同意繼續請選擇 " Yes "，不同意請選擇 " No "，謝謝！<br>'+
                        '<small>Would you like to continue?</small></h4>'+
                    '</div>'+
                    '<div class="footer">'+
                        '<a href="javascript:;" class="noBtn">NO</a>'+
                        '<a href="javascript:;" class="yesBtn">YES</a>'+
                    '</div>'+
                '</div>'+
                '<div class="bg">'+
            '</div>';
            $('body').append(_html);
            $('.popGoAway .yesBtn').click(function(){
                $('.popGoAway').removeClass('on');
                // trackHD('ATL_CBOL_3rdyes');
                popGoAwayHD.fn['away']();
            });
            $('.popGoAway .bg,.popGoAway .noBtn').click(function(){
                $('.popGoAway').removeClass('on');
                // trackHD('ATL_CBOL_3rdno');
            })
        },
        onFn:function(_fn){
            popGoAwayHD.fn['away']=_fn;
            $('.popGoAway').addClass('on');
        }
    }
    popGoAwayHD.init();

    $('.leaveBtn').click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        console.log(href,href.indexOf('http'))
        if(href.indexOf('http')!=-1){
            e.preventDefault();
            popGoAwayHD.onFn(function(){
                window.open(href,'_blank');
            });
        }
      })
   

});