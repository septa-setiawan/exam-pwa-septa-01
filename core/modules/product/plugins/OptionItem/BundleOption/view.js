import React from 'react';
import dynamic from 'next/dynamic';
import Typography from '@common_typography';
import Show from '@common_show';

const Button = dynamic(() => import('@common_button'), { ssr: false });
const Customize = dynamic(() => import('@plugin_optionitem/BundleOption/components/customize'), { ssr: true });

const BundleView = (props) => {
    const {
        t,
        data,
        items,
        changeQty,
        generateBundlePrice,
        selectOptions,
        handleAddToCart,
        loading,
        disabled,
        customButton,
        currencyCache,
        stockStatus,
    } = props;
    const [open, setOpen] = React.useState(false || (typeof window !== 'undefined' && window.innerWidth <= 768));

    if (customButton) {
        return customButton;
    }

    return (
        <div className="bundle-option-container">
            <Show when={!open}>
                <Button
                    variant="primary"
                    className="w-full px-[22px] py-[12px] text-center flex justify-center"
                    disabled={disabled}
                    onClick={() => setOpen(!open)}
                >
                    <Typography variant="bd-2" color="text-neutral-white" className="text-center">
                        {t('product:customizeAdd')}
                    </Typography>
                </Button>
            </Show>
            <Show when={open}>
                <Show when={data}>
                    <div className="bundle-customize-option">
                        <Customize
                            t={t}
                            data={data}
                            items={items}
                            changeQty={changeQty}
                            generateBundlePrice={generateBundlePrice}
                            selectOptions={selectOptions}
                            handleAddToCart={handleAddToCart}
                            loading={loading}
                            currencyCache={currencyCache}
                            stockStatus={stockStatus}
                        />
                    </div>
                </Show>
            </Show>
        </div>
    );
};

export default BundleView;
