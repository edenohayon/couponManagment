
import {UPDATE_COUPON} from './actionsTypes'
const updateCoupon = (coupon) => {
    return {
        type: UPDATE_COUPON,
        coupon:coupon
    }
}
const toExport = {
    updateCoupon,
    
};


export default toExport
