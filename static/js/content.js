// 访问量
jQuery(document).ready(function() {jQuery.ajax({
// url: "/nc_count/info_counto_lk.jsp",
url: "/u/hit/count",
type: "post",
data: {
// url:  decodeURI(escape(window.location))
hType: 3, //类型（1、站点；2、栏目；3、稿件）
hId: manuscriptId //对象ID
},
success: function(data) {
jQuery("#view").html(data.data);
},
error: function() {
jQuery("#view").html("23546");
}
});
})
