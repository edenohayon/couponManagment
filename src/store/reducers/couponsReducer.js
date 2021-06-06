import { UPDATE_COUPON } from '../actions/actionsTypes'


const initialState = {
    couponsList: [
        {
            brandName: 'Starbucks',
            couponTitle: 'Free cupcake',
            numOfCoupons: 123,
            issued: 98,
            used: 57,
            active: 'Active',
            id: '1'
        },
        {
            brandName: 'McDonald\'s',
            couponTitle: '30% meal discount',
            numOfCoupons: 123,
            issued: 274,
            used: 57,
            active: 'Active',
            id: '2'
        },
        {
            brandName: 'Children land',
            couponTitle: '1+1 Tickets',
            numOfCoupons: 123,
            issued: 0,
            used: 57,
            active: 'Inactive',
            id: '3'
        },
        {
            brandName: 'McDonald\'s',
            couponTitle: 'Free ice-creme',
            numOfCoupons: 123,
            issued: 98,
            used: 57,
            active: 'Inactive',
            id: '4'
        },
        {
            brandName: 'Starbucks',
            couponTitle: 'Free cupcake',
            numOfCoupons: 123,
            issued: 98,
            used: 57,
            active: 'Active',
            id: '5'
        },

    ]
}

const Coupons = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COUPON: {
            let updatedCouponList = state.couponsList.map((prevCoupon) => {
                if (prevCoupon.id !== action.coupon.id) {
                    // This isn't the item we care about - keep it as-is
                    return prevCoupon
                }
                // Otherwise, this is the one we want - return an updated value
                return {
                    ...action.coupon,
                    active: action.coupon.active ? 'Active' : 'Inactive'
                }
            })
            return { couponsList: updatedCouponList }
        }
        default:
            return { ...initialState }
    }
}

export default Coupons;