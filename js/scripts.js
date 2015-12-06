$(document).ready(function(){
	var $List = $('#list'),
    sUser ='gdiboston',
    sUrl = 'https://api.github.com/users/' + sUser + '/repos?per_page=100';

	$.ajax({
		dataType: "json",
		url: sUrl,
		success: function(p_oData, p_sStatus, p_oRequest){
			$.each(p_oData, function(p_iIndex, p_oRepo){
				var sHomepageLink='';
					if(p_oRepo.homepage){
						sRepoName = '<a href="' + p_oRepo.homepage + '" target="_blank">' + p_oRepo.name  + '</a> '
					} else {
						sRepoName = '<a href="" target="_blank">' + p_oRepo.name  + '</a> '
					}                    
					$List.append(
						  '<div class="repo">' 
							+ ' <a href="' + p_oRepo.html_url + '">'+ p_oRepo.name +'</a>' 
							+ '<span class="description">' + p_oRepo.description + '</span>'
						+ '</div>'
					);
				
			});
		},
		error: function(p_oJqXHR, p_sStatus, p_sError){
			$List.append('<div class="repo error">' + p_sError + ': ' + p_sStatus + '</div>');
		}
	});
});