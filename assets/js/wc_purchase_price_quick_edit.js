jQuery(function () {
	jQuery('#the-list').on('click', '.editinline', function () {

		inlineEditPost.revert();
		
		/**
		 * Extract metadata and put it as the value for the custom field form
		 */

		var post_id_field = jQuery(this).closest('tr').attr('id');
		var post_id = post_id_field.replace("post-", "");

		var $cfd_inline_data = jQuery('#woocommerce_purchase_price_' + post_id);
		var purchase_price = $cfd_inline_data.find('.purchase_price').text();
		var formatted_purchase_price = purchase_price.replace('.', woocommerce_admin.mon_decimal_point);

		jQuery('input[name="_purchase_price"]', '.inline-edit-row').val(formatted_purchase_price);


		/**
		 * Only show custom field for appropriate types of products (simple or external)
		 */
		var $wc_inline_data = jQuery('#woocommerce_inline_' + post_id);
		var product_type = $wc_inline_data.find('.product_type').text();

		if (product_type === 'simple' || product_type === 'external') {
			jQuery('.purchase_price', '.inline-edit-row').show();
		} else {
			jQuery('.purchase_price', '.inline-edit-row').hide();
		}

	});
});