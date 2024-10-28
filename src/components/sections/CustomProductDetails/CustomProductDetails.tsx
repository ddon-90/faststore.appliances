import { ProductDetailsSection, getOverriddenSection } from '@faststore/core'
import { CustomBuyButton } from '../../CustomBuyButton/CustomBuyButton';
import styles from '../../CustomBuyButton/custom-buy-button.module.scss';


const CustomProductDetails = getOverriddenSection({
	Section: ProductDetailsSection,

	// Example 1: Using styles
	className: styles.customBuyButton,

	components: {
		
		// Example 2: Using props
		// BuyButton: {
		// 	props: {
		// 		variant: "secondary",
		// 		size: "regular",
		// 		iconPosition: "right"
		// 	}
		// },

		// Example 3: Full override
		// BuyButton: { Component: CustomBuyButton },
	},
})

export default CustomProductDetails;