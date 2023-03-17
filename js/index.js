var logo_app = "img/logo.png";
var title_app = "注册码计算器";
var shouji_app = "https://img.gejiba.com/images/6ea7f61b82b8c17310703ed96501cf7f.png";
var banb_app = "版本：1.4.9 丨大小：7.36M|";
var fabu_app = "发布时间：2023年02月12日 丨 Xiaoyu technical team";
var dibu_app = "Copyright Xiaoyu technical team © All Rights Reserved";
var ewm_app = "img/ewm.jpg";
var xiaz_app = "https://hyl-bilibili.lanzoux.com/ikBnf0qcdqve";
var text_app = "注册码计算器重置版是基于Apktool+助手的界面注册码计算器重置而来，支持安卓13，利用新特性开发，比原版更快更稳定！";

var win_width = $(window).width();
win_app();

function win_app() {
    win_width = $(window).width();
    if (win_width < 700) {
        $("body")
            .html(
                '<div id="boox_web"><div><div class="logo_web"><img src="' + logo_app + '"><p>' + title_app + '</p></div><a href="' + xiaz_app + '"><div class="xiazai_web">立即下载</div></a><div id="banben_web"><p class="text fs">' + banb_app + '</p><p class="text">' + fabu_app + '</p></div></div><div class="fixed_web">' + dibu_app + '</div></div>');
    } else {
        $("body")
            .html(
                '<div id="boox_pc"><div class="left_pc animated bounceInLeft"><img src="' + shouji_app + '"></div><div class="right_pc animated bounceInRight"><div class="right_logo_pc"><img src="' + logo_app + '"><div><p class="right_title_pc">' + title_app + '</p><p class="right_span_pc">注册码计算器重置版</p></div></div><div class="right_text_pc">' + text_app + '</div><div class="right_banb_pc">' + banb_app + fabu_app + '</div><div class="right_ewm_pc"><img src="' + ewm_app + '"><a href="' + xiaz_app + '"><div class="right_xiazai_pc">立即下载</div></a></div></div></div>');
    }
    
    
    
}

function if_app() {
    if (win_width == $(window).width()) {

    } else {
        win_app();
    }
}

setInterval("if_app()", 500);
