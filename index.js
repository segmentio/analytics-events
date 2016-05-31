
module.exports = {
  // Promotions
  promotionViewed: /^[ _]?viewed[ _]?promotion?[ _]?|^[ _]?promotion[ _]?viewed?[ _]?$/i,
  viewedPromotion: /^[ _]?viewed[ _]?promotion?[ _]?|^[ _]?promotion[ _]?viewed?[ _]?$/i,
  promotionClicked: /^[ _]?clicked[ _]?promotion?[ _]?|^[ _]?promotion[ _]?clicked?[ _]?$/i,
  clickedPromotion: /^[ _]?clicked[ _]?promotion?[ _]?|^[ _]?promotion[ _]?clicked?[ _]?$/i,
  // Browsing
  productsSearched: /^[ _]?products[ _]?searched[ _]?|^[ _]?searched[ _]?products[ _]?$/i,
  productListViewed: /^[ _]?product[ _]?list[ _]?viewed[ _]?|^[ _]?viewed[ _]?product[ _]?list[ _]?$/i,
  productListFiltered: /^[ _]?product[ _]?list[ _]?filtered[ _]?|^[ _]?filtered[ _]?product[ _]?list[ _]?$/i,
  viewedProductCategory: /^[ _]?viewed[ _]?product[ _]?category[ _]?$/i,
  viewedProductDetails: /^[ _]?viewed[ _]?product[ _]?details?[ _]?$/i,
  // Core Ordering
  productClicked: /^[ _]?clicked[ _]?product[ _]?|^[ _]?product[ _]?clicked[ _]?$/i,
  clickedProduct: /^[ _]?clicked[ _]?product[ _]?|^[ _]?product[ _]?clicked[ _]?$/i,
  productViewed: /^[ _]?viewed[ _]?product[ _]?|^[ _]?product[ _]?viewed[ _]?$/i,
  viewedProduct: /^[ _]?viewed[ _]?product[ _]?|^[ _]?product[ _]?viewed[ _]?$/i,
  productAdded: /^[ _]?added[ _]?product[ _]?|^[ _]?product[ _]?added[ _]?$/i,
  addedProduct: /^[ _]?added[ _]?product[ _]?|^[ _]?product[ _]?added[ _]?$/i,
  productRemoved: /^[ _]?product[ _]?removed[ _]?|^[ _]?removed[ _]?product[ _]?$/i,
  removedProduct: /^[ _]?removed[ _]?product[ _]?|^[ _]?product[ _]?removed[ _]?$/i,
  cartViewed: /^[ _]?viewed[ _]?cart[ _]?|^[ _]?cart[ _]?viewed[ _]?$/i,
  orderStarted: /^[ _]?started[ _]?order[ _]?|^[ _]?order[ _]?started[ _]?$/i,
  startedOrder: /^[ _]?started[ _]?order[ _]?|^[ _]?order[ _]?started[ _]?$/i,
  orderUpdated: /^[ _]?updated[ _]?order[ _]?|^[ _]?order[ _]?updated[ _]?$/i,
  updatedOrder: /^[ _]?updated[ _]?order[ _]?|^[ _]?order[ _]?updated[ _]?$/i,
  orderCompleted: /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i,
  completedOrder: /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i,
  orderRefunded: /^[ _]?refunded[ _]?order[ _]?|^[ _]?order[ _]?refunded[ _]?$/i,
  refundedOrder: /^[ _]?refunded[ _]?order[ _]?|^[ _]?order[ _]?refunded[ _]?$/i,
  orderCancelled: /^[ _]?order[ _]?cancelled[ _]?|^[ _]?cancelled[ _]?order[ _]?$/i,
  paymentInfoAdded: /^[ _]?payment[ _]?info[ _]?added[ _]?|^[ _]?added[ _]?payment[ _]?info[ _]?$/i,
  checkoutStarted: /^[ _]?checkout[ _]?started[ _]?|^[ _]?started[ _]?checkout[ _]$/i,
  checkoutStepViewed: /^[ _]?viewed[ _]?checkout[ _]?step[ _]?|^[ _]?checkout[ _]?step[ _]?viewed[ _]?$/i,
  viewedCheckoutStep: /^[ _]?viewed[ _]?checkout[ _]?step[ _]?|^[ _]?checkout[ _]?step[ _]?viewed[ _]?$/i,
  checkoutStepCompleted: /^[ _]?completed[ _]?checkout[ _]?step[ _]?|^[ _]?checkout[ _]?step[ _]?completed[ _]?$/i,
  completedCheckoutStep: /^[ _]?completed[ _]?checkout[ _]?step[ _]?|^[ _]?checkout[ _]?step[ _]?completed[ _]?$/i,
  // Coupons
  couponEntered: /^[ _]?coupon[ _]?entered[ _]?|^[ _]?entered[ _]?coupon[ _]?$/i,
  couponApplied: /^[ _]?coupon[ _]?applied[ _]?|^[ _]?applied[ _]?coupon[ _]?$/i,
  couponDenied: /^[ _]?coupon[ _]?denied[ _]?|^[ _]?denied[ _]?coupon[ _]?$/i,
  couponRemoved: /^[ _]?coupon[ _]?removed[ _]?|^[ _]?removed[ _]?coupon[ _]?$/i,
  // Wishlisting
  productAddedToWishlist: /^[ _]?product[ _]?added[ _]?to[ _]?wishlist[ _]?$/i,
  wishlistProductRemoved: /^[ _]?wishlist[ _]?product[ _]?removed[ _]?$/i,
  wishlistProductAddedToCart: /^[ _]?wishlist[ _]?product[ _]?added[ _]?to[ _]?cart[ _]?$/i,
  // Sharing
  productShared: /^[ _]?product[ _]?shared[ _]?|^[ _]?shared[ _]?product[ _]?$/i,
  cartShared: /^[ _]?cart[ _]?shared[ _]?|^[ _]?shared[ _]?cart[ _]?$/i,
  // Reviewing
  productRemoved: /^[ _]?product[ _]?removed[ _]?|^[ _]?removed[ _]?product[ _]?$/i,
  // App Lifecycle
  applicationInstalled: /^[ _]?application[ _]?installed[ _]?|^[ _]?installed[ _]?application[ _]?$/i,
  applicationUpdated: /^[ _]?application[ _]?updated[ _]?|^[ _]?updated[ _]?application[ _]?$/i,
  applicationOpened: /^[ _]?application[ _]?opened[ _]?|^[ _]?opened[ _]?application[ _]?$/i,
  applicationBackgrounded: /^[ _]?application[ _]?backgrounded[ _]?|^[ _]?backgrounded[ _]?application[ _]?$/i,
  applicationUninstalled: /^[ _]?application[ _]?uninstalled[ _]?|^[ _]?uninstalled?[ _]?application[ _]?$/i,
  // App Campaign and Referral Events
  installAttributed: /^[ _]?install[ _]?attributed[ _]?|^[ _]?attributed[ _]?install[ _]?$/i,
  deepLinkOpened: /^[ _]?deep[ _]?link[ _]?opened[ _]?|^[ _]?opened[ _]?deep[ _]?link[ _]?$/i,
  pushNotificationReceived: /^[ _]?received[ _]?push[ _]?notification[ _]?|^[ _]?push[ _]?notification[ _]?received[ _]?$/i,
  pushNotificationTapped: /^[ _]?tapped[ _]?push[ _]?notification[ _]?|^[ _]?push[ _]?notification[ _]?tapped[ _]?$/i,
  pushNotificationBounced: /^[ _]?push[ _]?notification[ _]?bounced[ _]?$/i
};
