import HomePage from './home/home-page';
import ProductPage from './product/product-page';

//codecrumb
const tabsSwitch = index => {
    console.log(index);
};

export default {
    tabsSwitch,
    render: () => {
        return [HomePage, ProductPage];
    }
};
