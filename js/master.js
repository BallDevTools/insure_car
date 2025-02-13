$(document).ready(function(){
						   
    /*
	if(localStorage.getItem('insure_car_brand_id') != null){
        var car_brand_id 	= localStorage.getItem('insure_car_brand_id');
        var car_brand_name 	= localStorage.getItem('insure_car_brand_name');
		alert(car_brand_id);
		alert(car_brand_name);
    }
	*/
	
	$('#searchform-car-brand-name').on('click', function(){
		//$("#tab_search_car_brand").trigger("click");
		jQuery('#tab_search_car_brand')[0].click();
	});
	
	$('#searchform-car-model-name').on('click', function(){
		//$("#tab_search_car_model").trigger("click");
		jQuery('#tab_search_car_model')[0].click();
	});
	
	$('#searchform-car-year-name').on('click', function(){
		//$("#tab_search_car_year").trigger("click");
		jQuery('#tab_search_car_year')[0].click();
	});
	
	$('#searchform-car-class-name').on('click', function(){
		//$("#tab_search_car_class").trigger("click");
		jQuery('#tab_search_car_class')[0].click();
	});
	
	
	$('.car-brand-detail .card-item').on('click', function(){
		
		var car_sale_type		= $('#CarSaleType').val();						   
		var search_type 		= $(this).data('search-type');
		var search_value_id 	= $(this).data('search-value-id');
		var search_value_name 	= $(this).data('search-value-name');
		update_insure_search_coookie(car_sale_type,search_type,search_value_id,search_value_name);
		localStorage.setItem('insure_car_sale_type', car_sale_type);
		localStorage.setItem('insure_'+search_type+'_id', search_value_id);
		localStorage.setItem('insure_'+search_type+'_name', search_value_name);
		
		clear_insure_search_coookie('car_model');
		localStorage.removeItem('insure_car_model_id');
		localStorage.removeItem('insure_car_model_name');
		
		load_search_form();
		load_car_model(search_type);
		
	});
						   
	$('.car-year-detail .card-item').on('click', function(){
								   
		var car_sale_type		= $('#CarSaleType').val();
		var search_type 		= $(this).data('search-type');
		var search_value_id 	= $(this).data('search-value-id');
		var search_value_name 	= $(this).data('search-value-name');
		update_insure_search_coookie(car_sale_type,search_type,search_value_id,search_value_name);
		localStorage.setItem('insure_car_sale_type', car_sale_type);
		localStorage.setItem('insure_'+search_type+'_id', search_value_id);
		localStorage.setItem('insure_'+search_type+'_name', search_value_name);
		load_search_form();
		load_car_model(search_type);
		
	});	
						   
	$('.car-class-detail .card-item').on('click', function(){
								   
		var car_sale_type		= $('#CarSaleType').val();
		var search_type 		= $(this).data('search-type');
		var search_value_id 	= $(this).data('search-value-id');
		var search_value_name 	= $(this).data('search-value-name');
		update_insure_search_coookie(car_sale_type,search_type,search_value_id,search_value_name);
		localStorage.setItem('insure_car_sale_type', car_sale_type);
		localStorage.setItem('insure_'+search_type+'_id', search_value_id);
		localStorage.setItem('insure_'+search_type+'_name', search_value_name);
		load_search_form();
		load_car_model(search_type);
		
	});

	if($("#ConfirmCarBrandID").val() && $("#ConfirmCarBrandName").val() && $("#ConfirmCarModelID").val() && $("#ConfirmCarModelName").val() && $("#ConfirmCarYear").val() && $("#ConfirmCarClassID").val() && $("#ConfirmCarClassName").val()) {

		var confirm_car_brand_id 	= $("#ConfirmCarBrandID").val();
		var confirm_car_brand_name 	= $("#ConfirmCarBrandName").val();
		var confirm_car_model_id 	= $("#ConfirmCarModelID").val();
		var confirm_car_model_name 	= $("#ConfirmCarModelName").val();
		var confirm_car_year_id 	= $("#ConfirmCarYear").val();
		var confirm_car_year_name 	= $("#ConfirmCarYear").val();
		var confirm_car_class_id 	= $("#ConfirmCarClassID").val();
		var confirm_car_class_name 	= $("#ConfirmCarClassName").val();

		update_insure_search_coookie_confirm(confirm_car_brand_id,confirm_car_brand_name,confirm_car_model_id,confirm_car_model_name,confirm_car_year_id,confirm_car_year_name,confirm_car_class_id,confirm_car_class_name);

		localStorage.setItem('insure_car_brand_id', confirm_car_brand_id);
		localStorage.setItem('insure_car_brand_name', confirm_car_brand_name);
		localStorage.setItem('insure_car_model_id', confirm_car_model_id);
		localStorage.setItem('insure_car_model_name', confirm_car_model_name);
		localStorage.setItem('insure_car_year_id', confirm_car_year_id);
		localStorage.setItem('insure_car_year_name', confirm_car_year_name);
		localStorage.setItem('insure_car_class_id', confirm_car_class_id);
		localStorage.setItem('insure_car_class_name', confirm_car_class_name);

	}

	if(page_share=='disable') {
		$('#share-dialog-main, #share-dialog-header-mobile, #share-dialog-footer-main').hide();
	}
						   
	$('#share-dialog-header, #share-dialog-header-mobile, #share-dialog-footer').on('click', function(e){

		e.preventDefault();

		var share_data 				= $("#share_data").val();
		var affiliate_code_url 		= get_affiliate_code_url(); 

		if(affiliate_code_url) {
			var affiliate_code = '/u/'+affiliate_code_url;
		}
		else {
			var affiliate_code = '';
		}
		
		$.post(
			domain_share_url+'/get_share_url/'+share_data+affiliate_code,  
			function(json){

				if(json.url_affiliate_status=='1') {
					$("#copy-text").attr("value",json.url_affiliate);
					$("#share_affiliate_box").show();
				}
				else {
					$("#copy-text").attr("value","");
					$("#share_affiliate_box").hide();
				}

				$("#share_page_facebook_url").attr("href",json.url_facebook);
				$("#share_page_line_url").attr("href",json.url_line);

				UIkit.modal('#modal-share').show();

			}, 
			'json'
		);

	});
	
	$('.btn-callback').click(function(){
		$(".div-cb-form").show();
		$(".div-cb-message").hide();
	});	
	
	$('#btn_submit_callback').click(function(){ 
   
		var submit_callback_url = domain_insure_url+'/index.php/app/index/fnc/callback_submit';

		$('#btn_submit_callback').attr("disabled", "disabled");
		$('#loading_callback').show();
            
        $.post(
            submit_callback_url,
            $("#form_callback").serialize(),
            function(json){
                if(json.result == 'INVALID'){
					$.each(json.message, function(key, value) {
						$('#form_callback #error_'+key).html(value);
					});
					$('#btn_submit_callback').removeAttr("disabled");
					$('#loading_callback').hide();
                }
                else{
                	$('.cb_value').val('');
                	$('.cb_error').html('');
					$('#btn_submit_callback').removeAttr("disabled");
					$('#loading_callback').hide();
					$(".div-cb-form").hide();
					$(".div-cb-message").show();
                }
            },
            'json'
        );
		
	});	

	load_search_form_main();
	
});

/*
myVar = setTimeout(redirect_logout, 1800000); // 1800 seconds = 30 minutes

function redirect_logout() {
			
	$.post(
		domain_insure_url+'/index.php/app/index/fnc/redirect_logout', 
		function(data){
			if(data=='logout') {
				window.location = domain_member_url+'/logout';
			}
		}
	);

}
*/

function get_affiliate_code_url() {

	var url = window.location.href;
	var sURLVariables = url.split('/');
	for (i = 0; i < sURLVariables.length; i++) {
		if(sURLVariables[i]=='u') {
			var n = i+1;
		}
	}
	if(n) {
		return sURLVariables[n];
	}
	
}

function message_alert(msg,type){
	/* type = success, warning */
	alert(msg);
}

function clear_insure_search_coookie(search_type) {
			
	$.post(
		domain_insure_url+'/index.php/app/index/fnc/clear_insure_search_coookie/search_type/'+search_type, 
		function(data){
			/////
		}
	);
	
}

function do_login() {
			
	page_loading('start');
	$.post(
		domain_insure_url+'/index.php/app/index/fnc/do_login', 
		function(data){
			window.location = data;
		}
	);
}

function do_register() {
			
	page_loading('start');
	$.post(
		domain_insure_url+'/index.php/app/index/fnc/do_register', 
		function(data){
			window.location = data;
		}
	);
}

function update_insure_search_coookie(car_sale_type,search_type,search_value_id,search_value_name) {
	
	var dataReturn = null;
	$.ajaxSetup({async: false});
			
	$.post(
		domain_insure_url+'/index.php/app/index/fnc/update_insure_search_coookie/car_sale_type/'+car_sale_type+'/search_type/'+search_type+'/search_value_id/'+search_value_id+'/search_value_name/'+search_value_name, 
		function(data){
			dataReturn = data;
		}
	);
		
	$.ajaxSetup({async: true});
	
	var data_value = dataReturn;
	return data_value;
	
}

function update_insure_search_coookie_confirm(car_brand_id,car_brand_name,car_model_id,car_model_name,car_year_id,car_year_name,car_class_id,car_class_name) {

	var dataReturn = null;
	$.ajaxSetup({async: false});
			
	$.post(
		domain_insure_url+'/index.php/app/index/fnc/update_insure_search_coookie_confirm/car_brand_id/'+car_brand_id+'/car_brand_name/'+car_brand_name+'/car_model_id/'+car_model_id+'/car_model_name/'+car_model_name+'/car_year_id/'+car_year_id+'/car_year_name/'+car_year_name+'/car_class_id/'+car_class_id+'/car_class_name/'+car_class_name, 
		function(data){
			dataReturn = data;
		}
	);
		
	$.ajaxSetup({async: true});
	
	var data_value = dataReturn; 
	return data_value;

}

function clear_all_insure_search_coookie() {
	
	var dataReturn = null;
	$.ajaxSetup({async: false});
			
	$.post(
		domain_insure_url+'/index.php/app/index/fnc/clear_all_insure_search_coookie', 
		function(data){
			dataReturn = data;
		}
	);
		
	$.ajaxSetup({async: true});
	
	var data_value = dataReturn;
	return data_value;
	
}

function clear_all_insure_search_localStorage() {

	localStorage.removeItem('insure_car_brand_id');
	localStorage.removeItem('insure_car_brand_name');
	localStorage.removeItem('insure_car_model_id');
	localStorage.removeItem('insure_car_model_name');
	localStorage.removeItem('insure_car_year_id');
	localStorage.removeItem('insure_car_year_name');
	localStorage.removeItem('insure_car_class_id');
	localStorage.removeItem('insure_car_class_name');
	localStorage.removeItem('insure_classify_id');
	localStorage.removeItem('insure_classify_name');
	localStorage.removeItem('insure_classify_detail_id');
	localStorage.removeItem('insure_classify_detail_name');
	localStorage.removeItem('insure_car_sale_type');

}

function load_search_form_main() {

	if($("#CompulsoryPage").val()=='compulsory') {
		localStorage.setItem('insure_main_page', 'compulsory');
	}

	if($("#SalePageCarClass").val()==9) {
		localStorage.setItem('insure_sale_page_car_class', 9);
	}

	load_search_form();

}

function load_search_form() {

	if($('#CarSaleType').length){

		//alert(localStorage.getItem('insure_car_sale_type'));
		//alert($('#CarSaleType').val());
		if(localStorage.getItem('insure_car_sale_type')!=$('#CarSaleType').val()) {
			clear_all_insure_search_localStorage();
			clear_all_insure_search_coookie();
		}

		if(localStorage.getItem('insure_main_page')=='compulsory') {

			var car_sale_type = $('#CarSaleType').val();

			if(car_sale_type=='M' || car_sale_type=='C') {

				update_insure_search_coookie(car_sale_type,'car_class','0','พ.ร.บ.');
				localStorage.setItem('insure_car_class_id', '0');
				localStorage.setItem('insure_car_class_name', 'พ.ร.บ.');

				$(".car-class-detail .card-item").removeClass("is-selected");
				$(".car-class-detail .card-item[data-search-value-id='0']").addClass("is-selected");

			}

			localStorage.removeItem('insure_main_page');

		}

		if(localStorage.getItem('insure_sale_page_car_class')==9) {

			update_insure_search_coookie(car_sale_type,'car_class','9','ประกันชั้น 3+ ทุน 1 แสน');
			localStorage.setItem('insure_car_class_id', '9');
			localStorage.setItem('insure_car_class_name', 'ประกันชั้น 3+ ทุน 1 แสน');

			$(".car-class-detail .card-item").removeClass("is-selected");
			$(".car-class-detail .card-item[data-search-value-id='9']").addClass("is-selected");

			localStorage.removeItem('insure_sale_page_car_class');

		}

	}
	
	if(localStorage.getItem('insure_car_brand_name') != null){
		if($('#searchform-car-brand-name').length){
			$("#searchform-car-brand-name > span").text(localStorage.getItem('insure_car_brand_name'));
			$("#searchform-car-model-name > span").text('รุ่นรถ');
		}
	}
	
	if(localStorage.getItem('insure_car_model_name') != null){
		if($('#searchform-car-model-name').length){
			$("#searchform-car-model-name > span").text(localStorage.getItem('insure_car_model_name'));
		}
	}
	
	if(localStorage.getItem('insure_car_year_name') != null){
		if($('#searchform-car-year-name').length){
			$("#searchform-car-year-name > span").text(localStorage.getItem('insure_car_year_name'));
		}
	}
	
	if(localStorage.getItem('insure_car_class_name') != null){
		if($('#searchform-car-class-name').length){
			$("#searchform-car-class-name > span").text(localStorage.getItem('insure_car_class_name'));
		}
	}
	
	if(localStorage.getItem('insure_car_brand_id')!= null && localStorage.getItem('insure_car_model_id')!= null && localStorage.getItem('insure_car_year_id')!= null && localStorage.getItem('insure_car_class_id')!= null) {
		
		if(localStorage.getItem('insure_car_class_id')=='0') {
			$("#div-searchform-car-btn-ok").hide();
			$("#div-searchform-car-btn-table").hide();
			$("#div-searchform-car-btn-compulsory").show();
			$("#div-searchform-car-btn-pending").hide();
			$("#div-searchpackage-car-btn-ok").hide();
			$("#div-searchpackage-car-btn-table").hide();
			$("#div-searchpackage-car-btn-compulsory").show();
			$("#div-searchpackage-car-btn-pending").hide();	
		}
		else if(localStorage.getItem('insure_car_class_id')=='999') {
			$("#div-searchform-car-btn-ok").hide();
			$("#div-searchform-car-btn-table").show();
			$("#div-searchform-car-btn-compulsory").hide();
			$("#div-searchform-car-btn-pending").hide();
			$("#div-searchpackage-car-btn-ok").hide();
			$("#div-searchpackage-car-btn-table").show();
			$("#div-searchpackage-car-btn-compulsory").hide();
			$("#div-searchpackage-car-btn-pending").hide();	
		}
		else {
			$("#div-searchform-car-btn-ok").show();
			$("#div-searchform-car-btn-table").hide();
			$("#div-searchform-car-btn-compulsory").hide();
			$("#div-searchform-car-btn-pending").hide();
			$("#div-searchpackage-car-btn-ok").show();
			$("#div-searchpackage-car-btn-table").hide();
			$("#div-searchpackage-car-btn-compulsory").hide();
			$("#div-searchpackage-car-btn-pending").hide();	
		}	

		if(!($("body").hasClass("page"))) {
			if($("#your-car-info p").text()!='') { 
				$(".your-car-info p").html($("#your-car-info p").text());
				$(".your-car-info").show();
			}
			else {
				$(".your-car-info p").html(localStorage.getItem('insure_car_brand_name')+' '+localStorage.getItem('insure_car_model_name')+' '+localStorage.getItem('insure_car_year_name'));
				$(".your-car-info").show();
			}
		}
		
	}
	else {	

		$("#div-searchform-car-btn-ok").hide();
		$("#div-searchform-car-btn-table").hide();
		$("#div-searchform-car-btn-compulsory").hide();
		$("#div-searchform-car-btn-pending").show();
		$("#div-searchpackage-car-btn-ok").hide();
		$("#div-searchpackage-car-btn-table").hide();
		$("#div-searchpackage-car-btn-compulsory").hide();
		$("#div-searchpackage-car-btn-pending").show();

		if(!($("body").hasClass("page"))) {
			if($("#your-car-info p").text()!='') { 
				$(".your-car-info p").html($("#your-car-info p").text());
				$(".your-car-info").show();
			}
			else {
				$(".your-car-info p").html();
				$(".your-car-info").hide();
			}
		}
	}
	
}

function load_car_model(search_type) {
	
	if(search_type=='car_brand') {
	
		$("#div_search_car_model").html('<div uk-spinner class="uk-align-center" style="width:50px; margin-top:15px;"></div>');
			
		if(localStorage.getItem('insure_car_brand_id') != null){
			var car_brand_id = localStorage.getItem('insure_car_brand_id');
			//alert(car_brand_id);

			if($("#CarSaleType").length > 0 && $("#CarSaleType").val()!='') {
				var CarSaleType = $("#CarSaleType").val();
			}
			else {
				var CarSaleType = 'M';
			}
			
			$.post(
				domain_insure_url+'/index.php/app/index/fnc/load_car_model/id/'+car_brand_id+/CarSaleType/+CarSaleType, 
				function(data){ 
					$("#div_search_car_model").html(data);
					//dataReturn = data;
				}
			);
			
		}
		else {
			$("#div_search_car_model").html('<a class="dummy" href="javascript:void(0);" uk-switcher-item="1" onclick="back_to_car_brand();">กรุณาเลือกยี่ห้อรถก่อน</a>');
		}
		
	}
	
}

function back_to_car_brand() {
	//$("#tab_search_car_brand").trigger("click"); 
	jQuery('#tab_search_car_brand')[0].click();
}

function sel_car_model(search_type,search_value_id,search_value_name) {

	var car_sale_type = $('#CarSaleType').val();	
								   
	update_insure_search_coookie(car_sale_type,search_type,search_value_id,search_value_name);
	localStorage.setItem('insure_car_sale_type', car_sale_type);
	localStorage.setItem('insure_'+search_type+'_id', search_value_id);
	localStorage.setItem('insure_'+search_type+'_name', search_value_name);
	load_search_form();
	
	var id = $(".car-model-detail .card-item").data("search-value-id");
	//console.log(id);
	$(".car-model-detail .card-item").removeClass("is-selected");
	$(".car-model-detail .card-item").each(function( index ) {
		if($(this).data("search-value-id")==search_value_id) {
			$(this).addClass("is-selected");
		}
	});
}

function sel_classify(search_type,search_value_id,search_value_name,detail_id,detail_name) {

	page_loading('start');

	var car_sale_type = $('#CarSaleType').val();
								   
	if(update_insure_search_coookie(car_sale_type,search_type,search_value_id,search_value_name)) {

		localStorage.setItem('insure_car_sale_type', car_sale_type);
		localStorage.setItem('insure_'+search_type+'_id', search_value_id);
		localStorage.setItem('insure_'+search_type+'_name', search_value_name);

		if(search_type=='classify' && detail_id!='' && detail_name !='') {

			if(update_insure_search_coookie(car_sale_type,'classify_detail',detail_id,detail_name)) {
				localStorage.setItem('insure_classify_detail_id', detail_id);
				localStorage.setItem('insure_classify_detail_name', detail_name);
				window.location = domain_insure_url+'/search_package';
			}
			else {
				window.location = domain_insure_url+'/search_package';
			}
		}
		else {
			window.location = domain_insure_url+'/search_package';
		}
		
	}
	else {
		window.location = domain_insure_url;
	}
		
}

function sel_package_company(CompanyID) {

	var brand_id 	= localStorage.getItem('insure_car_brand_id');
	var model_id 	= localStorage.getItem('insure_car_model_id');
	var year_id 	= localStorage.getItem('insure_car_year_id');
	var class_id 	= localStorage.getItem('insure_car_class_id');

	page_loading('start');
	window.location = domain_insure_url+'/package/'+brand_id+'_'+model_id+'_'+year_id+'_'+class_id+'_1_'+CompanyID;
	
}

function sel_compulsory() {

	var brand_id 	= localStorage.getItem('insure_car_brand_id');
	var model_id 	= localStorage.getItem('insure_car_model_id');
	var year_id 	= localStorage.getItem('insure_car_year_id');

	page_loading('start');
	window.location = domain_insure_url+'/compulsory/'+brand_id+'_'+model_id+'_'+year_id+'_0';
}

function sel_compulsory_motorcycle() {
	sel_compulsory();
}

function sel_table_price() {

	var model_id 	= localStorage.getItem('insure_car_model_id');
	var year_id 	= localStorage.getItem('insure_car_year_id');
	
	page_loading('start');
	$.post(
		domain_insure_url+'/index.php/app/package/fnc/sel_table_price/model_id/'+model_id+'/year_id/'+year_id,
	  	function(json){
			if(json.url) {
				window.location = json.url;
			}
		}, 
		'json'
	);

}

function back_to_compare() {
	page_loading('start');
	window.location = domain_insure_url+'/search_package';
}

function back_to_compare_compulsory() {
	page_loading('start');
	window.location = domain_insure_url+'/search_package_compulsory';
}

function select_package(DataPackage) {
	page_loading('start');
	window.location = domain_insure_url+'/index.php/app/package/fnc/select_package/DataPackage/'+DataPackage;
}

function select_compulsory(DataPackage) {
	page_loading('start');
	window.location = domain_insure_url+'/index.php/app/package/fnc/select_compulsory/DataPackage/'+DataPackage;
}

function do_login_confirm() {
	UIkit.modal('#modal-login-confirm').show();
}

function do_login_confirm_redirect() {
	page_loading('start');
	window.location = domain_member_url+'/profile_verify';
}

function do_login_not_affiliate() {
	UIkit.modal('#modal-login-confirm').show();
}

function do_login_not_affiliate_redirect() {
	page_loading('start');
	window.location = 'http://line.me/ti/p/~@724training';
}

function do_login_renew_affiliate() {
	UIkit.modal('#modal-login-confirm').show();
}

function do_login_renew_affiliate_redirect() {
	page_loading('start');
	window.location = domain_member_url+'/affiliate/course';
}

function do_coupon(mode) {

	var QuotationID = $("#QuotationID").val();
	var PackageID 	= $("#PackageID").val();
	var RateID 		= $("#RateID").val();
	var CarModelID 	= $("#CarModelID").val();
	var CarYear 	= $("#CarYear").val();

	if(mode=='start') {

		$("#coupon_loading").show();
		$("#coupon_area").hide();
		
		$.post(
			domain_insure_url+'/index.php/app/index/fnc/do_coupon/action/start',  
			function(json){

				if(json.html!='') {
					$("#coupon_area").html(json.html);
					$("#coupon_area").show();
					$("#coupon_loading").hide();
					UIkit.modal('#modal-coupon').show();
				}
				else {
					alert('กรุณาทำรายการใช้คูปองใหม่อีกครั้ง');
				}

			}, 
			'json'
		);

	}
	else if(mode=='submit') {

		$("#coupon_loading").show();
		$("#coupon_area").hide();
	        
	    $.post(
	        domain_insure_url+'/index.php/app/index/fnc/do_coupon/action/submit/QuotationID/'+QuotationID+'/PackageID/'+PackageID+'/RateID/'+RateID+'/CarModelID/'+CarModelID+'/CarYear/'+CarYear,
	        $("#form_coupon").serialize(),
	        function(json){

	        	if(json.result == 'INVALID'){
					$("#coupon_area").html(json.html);
					$("#coupon_area").show();
					$("#coupon_loading").hide();
	        	}
	        	else {
					$("#coupon_area").html(json.html);
					$("#coupon_area").show();
					$("#coupon_loading").hide();
	        	}

	        },
	        'json'
	    );

	}
	else if(mode=='use') {

		$("#coupon_loading").show();
		$("#coupon_area").hide();
		load_coupon_use();

	}
	else if(mode=='use_remove') {
	        
	    $.post(
	        domain_insure_url+'/index.php/app/index/fnc/do_coupon/action/remove',
	        function(json){
	        	if(json.result == 'VALID'){
	        		$(".meta-coupon").removeClass("has-use");
					$("#div_coupon_desc").hide();
					$("#div_coupon_btn").show();
	        	}
	        },
	        'json'
	    );

	}
	else if(mode=='remove') {

		if(confirm('ยืนยันการยกเลิกคูปองนี้?')) {
	        
		    $.post(
		        domain_insure_url+'/index.php/app/index/fnc/do_coupon/action/remove',
		        function(json){
		        	if(json.result == 'VALID'){
		        		$(".meta-coupon").removeClass("has-use");
						$("#div_coupon_desc").hide();
						$("#div_coupon_btn").show();
		        	}
		        },
		        'json'
		    );

		}

	}

}

function load_coupon_use() {

	var QuotationID = $("#QuotationID").val();
	var PackageID 	= $("#PackageID").val();
	var RateID 		= $("#RateID").val();
	var CarModelID 	= $("#CarModelID").val();
	var CarYear 	= $("#CarYear").val();
	        
    $.post(
        domain_insure_url+'/index.php/app/index/fnc/do_coupon/action/use/QuotationID/'+QuotationID+'/PackageID/'+PackageID+'/RateID/'+RateID+'/CarModelID/'+CarModelID+'/CarYear/'+CarYear,
        $("#form_coupon").serialize(),
        function(json){

        	if(json.result == 'VALID'){
        		$(".meta-coupon").addClass("has-use");
				$("#div_coupon_desc").html(json.html);
				$("#div_coupon_desc").show();
				$("#div_coupon_btn").hide();
				UIkit.modal('#modal-coupon').hide();
        	}
        	else if(json.result == 'INVALID'){
        		alert('กรุณาทำรายการใช้คูปองใหม่อีกครั้ง');
        		$(".meta-coupon").removeClass("has-use");
				$("#div_coupon_desc").hide();
				$("#div_coupon_btn").show();
        		UIkit.modal('#modal-coupon').hide();
			}
			/*
			else {
				if($('#ConfirmCarClassID').val()=='1' && $('#RenewID').val()=='') {
					UIkit.modal('#modal-coupon-notify').show();
				}
			}
			*/
			
        },
        'json'
    );

}