import { combineReducers } from 'redux';

//import primaryData from './primary-data';
import company from './company';
import nav from './nav';
import state from './state';
import pages from 'components/page/reducer/page';
import currentState from './current-state';
import asideMenu from 'components/nav/reducer/aside-menu';

export default combineReducers({
    company,
    nav,
    state,
    pages,
    currentState,
    asideMenu
});