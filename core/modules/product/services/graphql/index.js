import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import * as Schema from './schema';
import * as OptionSchema from './optionSchema';

export const getProduct = (urlpath) => useQuery(Schema.getProduct(urlpath));
export const getProductBySku = (params) => useQuery(Schema.getProductBySku(), {
    ...params,
});
export const getConfigurableProduct = (sku) => useQuery(Schema.getConfigurableProduct(sku));
export const getBundleProduct = (sku) => useQuery(Schema.getBundleProduct(sku));
export const getDownloadroduct = (sku) => useQuery(Schema.getDownloadProduct(sku));
export const getGroupedProduct = (sku) => useQuery(OptionSchema.getGroupedProduct, {
    variables: { sku },
    skip: !sku,
});

export const getReviews = (params) => useQuery(Schema.getReview(), {
    variables: {
        ...params,
    },
});

export const addReview = () => useMutation(Schema.addReview, {
    context: {
        request: 'internal',
    },
});

export const addSimpleProductsToCart = () => useMutation(Schema.addSimpleProductsToCart, {
    context: {
        request: 'internal',
    },
});

export const addVirtualProductToCart = () => useMutation(Schema.addVirtualProductToCart, {
    context: {
        request: 'internal',
    },
});

export const addDownloadProductToCart = () => useMutation(Schema.addDownloadableProductsToCart, {
    context: {
        request: 'internal',
    },
});

export const addConfigProductsToCart = () => useMutation(Schema.addConfigProductsToCart, {
    context: {
        request: 'internal',
    },
});

export const addBundleProductsToCart = () => useMutation(Schema.addBundleProductsToCart, {
    context: {
        request: 'internal',
    },
});

export const addWishlist = () => useMutation(Schema.addWishlist, {
    context: {
        request: 'internal',
    },
});

export const getGuestCartId = () => useMutation(Schema.createCartIdGuest);
export const getCustomerCartId = () => useLazyQuery(Schema.getCartIdUser, {
    context: {
        request: 'internal',
    },
    skip: typeof window === 'undefined',
    fetchPolicy: 'no-cache',
});

export default { getProduct };
