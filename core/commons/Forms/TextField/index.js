import Icon from '@common_icon';
import Typography from '@common_typography';
import cx from 'classnames';
import { useState } from 'react';

const TextField = (props) => {
    const {
        placeholder = '',
        disabled = false,
        onChange = () => {},
        value = '',
        className = '',
        label = '',
        hintProps = {},
        iconProps = {},
        inputProps = {},
        type = 'text',
        ...restProps
    } = props;

    const [isFocus, setIsFocus] = useState(false);

    const { displayHintText = false, hintType = '', hintText = '' } = hintProps;
    const {
        leftIcon = '', leftIconClasses = '', rightIcon = '', rightIconClasses = '', ...restIconProps
    } = iconProps;

    const generateRightIcon = () => {
        if (hintType === 'error') {
            return 'warning';
        }
        if (hintType === 'success') {
            return 'task_alt';
        }

        return rightIcon;
    };

    if (value) inputProps.value = value;
    if (onChange) inputProps.onChange = onChange;
    const { className: inputClassName, ...restInputProps } = inputProps;

    return (
        <div className="flex flex-col relative">
            {label ? (
                <label className="mb-2">
                    <Typography>{label}</Typography>
                </label>
            ) : null}
            <div
                className={cx(
                    'flex',
                    'items-center',
                    'w-[320px]',
                    'bg-neutral-white',
                    'border-[1px]',
                    'border-neutral-300',
                    'rounded-lg',
                    'text-md',
                    'hover:border-neutral-400',
                    'focus:border-primary focus:shadow-[0_0_0_4px] focus:shadow-primary-200',
                    {
                        '!border-primary': isFocus && !hintType,
                        '!bg-neutral-50 border-none placeholder:!text-neutral-100': disabled,
                        '!border-red hover:!border-red focus:shadow-red-200': hintType === 'error',
                        '!border-green hover:!border-green focus:shadow-green-100': hintType === 'success',
                    },
                    className,
                )}
                {...restProps}
            >
                {leftIcon ? <Icon icon={leftIcon} className={cx('pl-4', 'pr-[6px]', 'text-neutral-300', leftIconClasses)} /> : null}
                <input
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    className={cx(
                        'pr-4',
                        'py-[10px]',
                        'w-full',
                        'rounded-lg',
                        'focus:outline-0',
                        'placeholder:text-neutral-200',
                        'text-neutral',
                        {
                            'placeholder:!text-neutral-400': isFocus,
                            '!pl-4': !leftIcon,
                            '!pr-0': rightIcon,
                        },
                        inputClassName,
                    )}
                    {...restInputProps}
                />
                {rightIcon ? (
                    <Icon
                        icon={generateRightIcon()}
                        className={cx(
                            'pr-4',
                            'pl-[6px]',
                            'text-neutral-300',
                            {
                                '!text-red-600': hintType === 'error',
                                '!text-green': hintType === 'success',
                            },
                            rightIconClasses,
                        )}
                        {...restIconProps}
                    />
                ) : null}
            </div>
            {displayHintText && hintType && hintText ? (
                <Typography
                    variant="bd-2b"
                    className={cx('absolute', '-bottom-[50%]', '-z-10', {
                        '!text-red': hintType === 'error',
                        '!text-green': hintType === 'success',
                    })}
                >
                    {hintText}
                </Typography>
            ) : null}
        </div>
    );
};

export default TextField;
