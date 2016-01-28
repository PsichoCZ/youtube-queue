(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['video.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"media-object\">\n  <div class=\"media-object-section\">\n    <div class=\"thumbnail\">\n      <img src= \""
    + alias4(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n  </div>\n  <div class=\"media-object-section\">\n    <h4>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n    <a href=\"#\" class=\"button tiny\" id=\"play_button\" onclick=\"window.player.play('"
    + alias4(((helper = (helper = helpers.yt_id || (depth0 != null ? depth0.yt_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"yt_id","hash":{},"data":data}) : helper)))
    + "'); return false\">Play</a>\n  </div>\n</div>\n";
},"useData":true});
})();