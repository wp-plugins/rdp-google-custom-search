var $j=jQuery.noConflict();
// Use jQuery via $j(...)


$j(document).ready(rdp_we_overwrite_onReady);

function rdp_we_overwrite_onReady(){
    rdp_we_overwrite_handle_links();

}

function rdp_we_overwrite_handle_links(){
    $j(".wiki-embed-overwrite a.external").each(function(i){
        $j(this).attr('target', '_blank'); 
    });
    var baseURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
    var baseTarget = url('protocol', WikiEmbedSettings.target_url) + "://" + url('hostname', WikiEmbedSettings.target_url)

    $j(".wiki-embed-overwrite a:not(.external,.new,sup.reference a,.ui-tabs-nav a)").each(function(i){
        var sHREF = $j(this).attr('href');
        if(typeof sHREF == 'undefined')return true;
        if(sHREF.substring(0, 1) !== '#'){
            
            if(sHREF.substring(0, 2) == '//') sHREF = 'http:' + sHREF;
            if(sHREF.substring(0, 1) == '/') sHREF = baseTarget + sHREF; 
            
            urls = sHREF.match(/(https?:\/\/[^\s]+)/g);
            if(urls == null){
                $j(this).removeAttr('href');
            }else{
                $j(this).attr('href',baseURL+jQuery.query.set("wikiembed-override-url", sHREF) );                
            }

        }
      
    });  
}//rdp_we_handle_links