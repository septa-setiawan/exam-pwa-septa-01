import Header from '@common_headermobile';
import ShoppingBagIcon from '@core/cart/plugin/ShoppingBag';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    container: {
        zIndex: 6,
    },
});

const CustomHeader = (props) => {
    const styles = useStyles();
    return (
        <Header
            RightComponent={(
                <ShoppingBagIcon withLink />
            )}
            className={styles.container}
            {...props}
        />
    );
};

export default CustomHeader;
