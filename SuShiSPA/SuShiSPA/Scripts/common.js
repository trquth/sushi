var Hcc = {
    startAjax: function () {
        $("body").addClass("loading");
    },
    endAjax: function () {
        $("body").removeClass("loading");
    },
    isNullorWhiteSpace: function (str) {
        if (!str)
            return true;
        if (str.length === 0)
            return true;
        if (/^\s*$/.test(str))
            return true;
        if (typeof (str) === "string" && !str.trim())
            return true;
        return false;
    },
    isNullorUndefined: function (obj) {
        if(typeof (obj) !== "undefined" && obj !== null)
            return false;
        return true;
    },
    showInfo: function (msg) {
       
        $(".hcc-message-box .msg-box-title").html("<i class='fa fa-info-circle'></i> Thông báo");
        $(".hcc-message-box .modal-body p").html(msg);
        $(".hcc-message-box .modal-body #msg-body").removeClass("alert-success");
        $(".hcc-message-box .modal-body #msg-body").removeClass("alert-danger");
        $(".hcc-message-box .modal-body #msg-body").addClass("alert-success");
        $(".hcc-message-box").modal("show");
        window.setTimeout(function () { $(".hcc-message-box").modal("hide"); }, 3000);
    },
    showError: function (msg) {
        $(".hcc-message-box .msg-box-title").html("<i class='fa fa-exclamation-triangle'></i> Thông báo lỗi");
        $(".hcc-message-box .modal-body p").html(msg);
        $(".hcc-message-box .modal-body #msg-body").removeClass("alert-success");
        $(".hcc-message-box .modal-body #msg-body").removeClass("alert-danger");
        $(".hcc-message-box .modal-body #msg-body").addClass("alert-danger");
        $(".hcc-message-box").modal("show");
    },
    formatCurrency: function (nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }
};

$(document).ready(function () {
    // file upload
    $(".hcc-upload-btn").change(function () {
        $(".hcc-upload-display-value").val($(this).val());
    });

    $('.modal').modal({
        keyboard: false,
        backdrop: 'static',
        show: false
    });
    // Jquery draggable
    $('.modal-dialog').draggable({
        handle: ".modal-header"
    });
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });
    $("#btnLogout").click(function () {
        $("#mdlLogout").modal("show");
    });

    setTimeout("$('#alert-panel').html('');", 3000);
});

$(function () {
    //moment.locale('vi');
    //$(".datetime-picker-control").datetimepicker({
    //    format: "DD/MM/YYYY"
    //});
});
