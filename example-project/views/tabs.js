//import HomePage from './home/home-page';
//import ProductPage from './product/product-page';
//import stringFormat from '../utils/string/format/string';
//import model from '../dataModel/model';

//codecrumb:tabsSwitch;details 1
const tabsSwitch = index => {
    console.log(index);
};

//codecrumb:3rd cc;details 2
export default {
    tabsSwitch,//codecrumb:setup call;details 2
    render: () => {
        return [HomePage, ProductPage];
    }
};
