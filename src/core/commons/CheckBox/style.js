import makeStyles from '@material-ui/core/styles/makeStyles';
import { FlexColumn, FlexRow, CreatePadding } from '@theme/mixins';

export default makeStyles((theme) => ({
    row: {
        ...FlexRow,
    },
    column: {
        ...FlexColumn,
    },
    container: {
        ...FlexColumn,
    },
    checkboxContainer: {
        overflowY: 'hidden',
        overflowX: 'auto',
        justifyContent: 'space-between',
        ...CreatePadding(10, 10, 10, 0),
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));
