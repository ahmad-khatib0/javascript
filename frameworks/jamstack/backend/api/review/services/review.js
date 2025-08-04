"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async average(id) {
    const product = await strapi.services.product.findOne({ id });

    const total = product.reviews.reduce(
      (total, review) => total + review.rating,
      0
    );

    let average = total / product.reviews.length;
    // when we say  total divided by product reviews that length or if there's no reviews, then
    // we are dividing. They would have a length of zero. So we're dividing by zero.
    // So that sets this to not a number. And so now rating is ending up as nine number.

    if (product.reviews.length === 0) {
      average = 0;
    }
    await strapi.services.product.update(
      { id },
      { rating: Math.round(average * 2) / 2 }
    );
  },
};
