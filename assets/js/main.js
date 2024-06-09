$(function() {
    var lastScrollTop = 0;
    const heightTop = 157.5;
    const heightWondow = $(window).height();
    const difHeight = $(document).height() - heightWondow + 60;
    //$("aside").css('height',heightWondow);
    $("aside").css('overflow-x','hidden');
    $( window ).on( "scroll", function() {    
            if($(document).scrollTop() > 0)
            {
                $("#iconFlecha").fadeIn(600);
            }
            else
            {
                $("#iconFlecha").fadeOut(600);
            }
            
            if($( window ).width() > 600){
                if($(document).scrollTop() >= heightTop){
                    if(difHeight > $(document).scrollTop() ){
                        $("aside").css('margin-top',$(document).scrollTop() - 140);
                        //$("aside").css('height',heightWondow);
                    }
                    else{
                        //$("aside").css('height',heightWondow - 60);
                    }
                }
                else{
                    $("aside").css('margin-top',0);
                }
            }
    } );
});

$(document).ready(function(){
    /* Google GTM */

    $("#btnModalLonas").click(function(){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: "click_element",
        content_type: "Lonas",
        event_category: "engagement",
        section: "Lonas para tu negocio",
        action_description: "Clic en ver tamaños",
        element_type: "Boton",
        element_name: "CTA principal Lonas",
        element_id: "btnModalLonas",
        detail: "Ver tamaños",
        position: 1
        });
    });
    $("#btnModalPostal").click(function(){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "click_element",
          content_type: "Postal digital",
          event_category: "engagement",
          section: "Postal digital",
          action_description: "Clic en ver versiones",
          element_type: "Boton",
          element_name: "CTA principal Postal digital",
          element_id: "btnModalPostal",
          detail: "Ver versiones",
          position: 1
        });
    });

    $("#downloadLonasImg").click(function(){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: "lona_file_download",
        download: "download",
        file_extension: ".pdf",
        file_name: $(this).attr("download"),
        cta_text: "Descargar tamaño seleccionado",
        link_url: window.location.href + $("#downloadLonasImg").attr("href"),
        element_type: "clic en botón",
        element_name: "CTA descarga Lona",
        element_id: "downloadLonasImg",
        detail: $(this).parent().find(".active").text().trim()
        });
    });
    $("#downloadPostalImg").click(function(){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: "postal_file_download",
        event_category: "download",
        file_extension: ".jpg",
        file_name:$(this).attr("download"),
        cta_text: "Descargar versión seleccionada",
        link_url: window.location.href + $("#downloadPostalImg").attr("href"),
        element_type: "clic en botón",
        element_name: "CTA descarga postal digital",
        element_id: "downloadPostalImg",
        detail:  $(this).attr("download").replace(".jpg","")
        });

    });
    
    
    $("#btnMenuMobile").click(function(){
        if($('#btnMenuMobile').hasClass('collapsed')){
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
            event: "close_menu",
            content_type: "Menu - Mobile",
            event_category: "Menu",
            section: "cabezera",
            action_description: "Cerrar menú hamburguesa",
            element_type: "Clic en cerrar menú mobile",
            element_name: "botón menu hamburguesa mobile",
            element_id: "btnMenuMobile_close"
            });
        } else{
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
            event: "open_menu",
            content_type: "Menu - Mobile",
            event_category: "Menu",
            section: "cabezera",
            action_description: "Abrir menú hamburguesa",
            element_type: "Clic en abrir menú mobile",
            element_name: "botón menu hamburguesa mobile",
            element_id: "btnMenuMobile_open"
            });
        }
    });
    
    $('#ModalLonas,#ModalPostal').on('show.bs.modal', function (e) {
        $(".btn.displayDownloadOptions").find('img').attr("src" , "assets/img/postal/icon_down.png");
        $("#divDownloadPostal").hide();
        $("#divDownloadLonas").hide();

        const namePopup = $(this).attr("id") == "ModalPostal" ? "Postal digital" : "Lonas";
        const namePType = $(this).attr("id") == "ModalPostal" ? "versión" : "tamaños";
        const positionPopup = $(this).attr("id") == "ModalPostal" ? 2 : 1;


        const namePTypeId = namePopup == "Lonas" ? "page__seccion " + namePType + "_" + namePopup : "page__seccion Popup postal version con datos" ;
        let UrlSelect = namePopup == "Lonas" ? $(this).parent().find("#downloadLonasImg").attr("href") : $(this).parent().find("#downloadPostalImg").attr("href");
        let nameSelect = namePopup == "Lonas" ? $(this).parent().find("#divDownloadLonas").find(".active").text().trim() : $(this).parent().find("#divDownloadPostal").find(".active").text().trim();
                
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: "view_content",
        content_type: "Popup - " + namePopup,
        link_url:  window.location.href + UrlSelect,
        event_category: "engagement",
        section: "Elige el tamaño que deseas descargar",
        action_description: "ver sección",
        element_type: "Clic en ver " + namePType,
        element_name: "Ver " + namePType + " " + namePopup,
        element_id: namePTypeId,
        detail: nameSelect,
        position: positionPopup,
        element_position: 1
        });
    });

    if ($(window).width() <= 767) {
        $("#ModalPostal .modal-body img").attr("src", "assets/img/postal/mobile/postal_con_datos_de_pago.jpg");
        $("#ModalLonas .modal-body img").attr("src", "assets/img/lonas/mobile/lona_carta.jpg");
    } 
    $("#divDownloadPostal > div").click(function(){
        $("#divDownloadPostal > div").removeClass('active').find('img').remove();
        $(this).append('<img src="assets/img/postal/icon_seleccion.png" height="24" alt="icon seleccion">').addClass('active');
        const imgName = $(this).data('img') + ".jpg";
        const typeName = $(this).find('span').text().replace(/ /g,'_').toLowerCase();
        let folderName = "";
        
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: "select_version",
        content_type: "Desplegable Postal digital",
        link_url: window.location.href + $("#downloadLonasImg").attr("href"),
        event_category: "engagement",
        section_subtitle: "Puedes descargar más de una versión",
        action_description: "Clic versión en lista",
        element_type: "Clic en lista",
        element_name: "Clic en versión " + typeName,
        element_id: "divDownloadPostal" + typeName,
        detail: typeName,
        position: 2,
        element_position: 2
        });

        if ($(window).width() <= 767) {
            folderName = "mobile/";
            $("#divDownloadPostal").slideToggle(100);
            $(".btn.displayDownloadOptions").find('img').attr("src" , "assets/img/postal/icon_down.png");
        }
        else if($( window ).width() < 850){ 
            $("#divDownloadPostal").slideToggle(100);
            $(".btn.displayDownloadOptions").find('img').attr("src" , "assets/img/postal/icon_down.png");
        }

        $("#downloadPostalImg").attr("href", "assets/img/postal/descargas/" + imgName);
        $("#downloadPostalImg").attr("download", imgName.replace('ESTADO_WA_','').replace(/_/g,' '));
        $("#ModalPostal .modal-body img").attr("src", "assets/img/postal/" + folderName + "postal_" + typeName + ".jpg");
        $("#ModalPostal .modal-body span").html(typeName.replace(/_/g,' '));

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: "view_content",
        content_type: "Popup - Postal digital",
        link_url: window.location.href + $("#downloadPostalImg").attr("href"),
        event_category: "engagement",
        section: "Elige el tipo de versión que deseas descargar",
        action_description: "ver sección",
        element_type: "Clic en lista",
        element_name: "Popup - Postal digital - " + typeName,
        element_id: "page__seccion Popup postal version " + typeName,
        detail: typeName,
        position: 2,
        element_position: 2
        });
    });

    $("#divDownloadLonas > div").click(function(){
        $("#divDownloadLonas > div").removeClass('active').find('img').remove();
        $(this).append('<img src="assets/img/postal/icon_seleccion.png" height="24" alt="icon seleccion">').addClass('active');
        const imgName = $(this).data('img') + ".pdf";
        const typeName = "lona_" + $(this).find('span').text().replace(/ /g,'').replace("centímetros","").replace('_(21.5 x 28 centímetros)','').replace('(21.5x28)','').toLowerCase();
        let folderName = "";

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: "select_size",
        content_type: "Desplegable Lona",
        link_url: window.location.href + $("#downloadLonasImg").attr("href"),
        event_category: "engagement",
        section_subtitle: "Puedes descargar más de un tamaño",
        action_description: "Clic tamaño en lista",
        element_type: "Clic en lista",
        element_name: "Clic en lista " +  $(this).find('span').text().trim(),
        element_id: "divDownloadLonas_" + typeName,
        detail:  $(this).find('span').text().trim(),
        position: 1,
        element_position: 2
        });

        if ($(window).width() <= 767) {
            folderName = "mobile/";
            $("#divDownloadLonas").slideToggle(100);
            $(".btn.displayDownloadOptions").find('img').attr("src" , "assets/img/postal/icon_down.png");
        }
        else if($( window ).width() < 850){ 
            $("#divDownloadLonas").slideToggle(100);
            $(".btn.displayDownloadOptions").find('img').attr("src" , "assets/img/postal/icon_down.png");
        }

        $("#downloadLonasImg").attr("href", "assets/img/lonas/descargas/" + imgName);
        $("#downloadLonasImg").attr("download", imgName);
        $("#ModalLonas .modal-body img").attr("src", "assets/img/lonas/" + folderName + typeName + ".jpg");
        $("#ModalLonas .modal-body span").html($(this).find('span').text());

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: "view_content",
        content_type: "Popup - Lonas",
        link_url:  window.location.href + $("#downloadLonasImg").attr("href"),
        event_category: "engagement",
        section: "Elige el tamaño que deseas descargar",
        action_description: "ver sección",
        element_type: "Clic en ver tamaños",
        element_name: "Ver versiones lonas",
        element_id: "page__seccion Versiones_" + typeName,
        detail: $(this).find('span').text().trim(),
        position: 1,
        slider_position: 3
        });
    });

    $(".btn.displayDownloadOptions").click(function(){
        $("#divDownloadPostal").slideToggle(100);
        $("#divDownloadLonas").slideToggle(100);

        const acutalyName = $(this).find('img').attr("src");
        if(acutalyName.indexOf('down') > 0){
            $(this).find('img').attr("src" , "assets/img/postal/icon_up.png");
        }
        else{
            $(this).find('img').attr("src" , "assets/img/postal/icon_down.png");
        }
    });
    
    $('#menuItems li a').click(function(){
        const text = $(this).text();
        $('.navbar-toggler').click();
        const hrefBtn= $(this).attr('href')
        setTimeout(function(){
            window.location.href=hrefBtn;
        }, 500);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: "click_element",
        content_type: "Menu - Mobile",
        event_category: "Menu",
        section:  text,
        action_description: "Clic en enlace interno desde menú",
        element_type: "Clic en enlace del menu",
        element_name: "Enlace interno " + text + " menú",
        element_id: "nav__title " + text,
        detail: text,
        position: $(this).data("option")
        });

        return false;
    });
    $('aside a').click(function(){
        const text = $(this).text();
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: "click_element",
        content_type: "Menu - Desktop",
        event_category: "Menu",
        section: text,
        action_description: "Clic en enlace interno desde menú",
        element_type: "Clic en enlace del menu",
        element_name: "Enlace interno " + text + " menú",
        element_id: "nav__title " + text,
        detail: text,
        position: $(this).data("option")
        });
    });
    if($( window ).width() < 850){        
        $("#materialePostalDigitals .img").slick({
          dots: false,
          autoplay: false,
          arrows: false,
          infinite: false,
          slidesToShow: 1.03
        });
    }    
});