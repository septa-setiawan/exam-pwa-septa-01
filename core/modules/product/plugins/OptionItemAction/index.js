import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import cx from 'classnames';
import Typography from '@common_typography';
import ButtonQty from '@common_buttonqty';
import Show from '@common_show';
import StockStatus from '@common_statusstock';

const Button = dynamic(() => import('@common_button'), { ssr: true });

const OptionItemAction = (props) => {
    const {
        loading,
        disabled,
        showQty = true,
        handleAddToCart,
        qty,
        setQty,
        t,
        showAddToCart = true,
        customStyleBtnAddToCard = '',
        labelAddToCart = '',
        maxQty = 10000,
        customButton,
        customQty = false,
        freeItemsData,
        showStockStatus,
        stockStatus,
        stockStatusClassWrapper,
        __typename,
        url_key,
        isPlp = false,
    } = props;
    const isSimpleOrConfigurable = __typename === 'SimpleProduct' || __typename === 'ConfigurableProduct';
    const [internalLoading, setInternalLoading] = useState(false);

    if (customButton) {
        return customButton;
    }

    const handleInternalLoading = () => {
        setInternalLoading(true);
    };

    const additionalProps = {};

    if (isPlp) {
        Object.assign(additionalProps, {
            link: !isSimpleOrConfigurable && url_key ? url_key : '',
            onClick: isSimpleOrConfigurable ? handleAddToCart : handleInternalLoading,
            loading: (isSimpleOrConfigurable && loading) || internalLoading,
        });
    }

    return (
        <div className="flex flex-col gap-4">
            <div className={
                cx('stock-status-container', stockStatusClassWrapper)
            }
            >
                <Show when={showStockStatus && stockStatus}>
                    <StockStatus inStock={stockStatus === 'IN_STOCK'} />
                </Show>
            </div>
            <div className="flex flex-row gap-4 items-end">
                {showQty && (
                    <div className={cx('flex flex-col gap-2', 'product-OptionItem-qty')}>
                        <Typography className="font-normal" variant="span">
                            {t('common:title:qty')}
                        </Typography>
                        <ButtonQty
                            value={qty}
                            onChange={setQty}
                            max={customQty ? freeItemsData.quantity : maxQty}
                            disabled={disabled}
                            classNameInput="h-[38px]"
                        />
                    </div>
                )}
                {showAddToCart && (
                    <Button
                        id="plugin-addToCart-btn"
                        className={cx('w-full h-[48px] [&.button-link]:justify-center', customStyleBtnAddToCard)}
                        classNameText="justify-center"
                        color="primary"
                        onClick={handleAddToCart}
                        loading={loading}
                        disabled={disabled}
                        {...additionalProps}
                    >
                        {(isPlp && !isSimpleOrConfigurable) ? t('product:viewItem') : labelAddToCart || t('product:addToCart')}
                    </Button>
                )}
            </div>
        </div>
    );
};
export default OptionItemAction;
