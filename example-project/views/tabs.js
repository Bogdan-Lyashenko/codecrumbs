import HomePage from './home/home-page';
import ProductPage from './product/product-page';

//codecrumb:tabsSwitch;details 1
const tabsSwitch = index => {
    console.log(index);
};

export default {
    tabsSwitch,//codecrumb:setup call;details 2
    render: () => {
        return [HomePage, ProductPage];
    }
};
