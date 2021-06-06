import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import Form from '../../components/UI/forms/form/form';

import couponAction from '../../store/actions/couponAction'

const EditCoupon = () => {

    let history = useHistory();

    const couponId = useParams().couponId
    const dispatch = useDispatch()

    const coupon = useSelector(state => state.Coupons.couponsList.find(c => c.id === couponId))
    const couponForm = {
        couponTitle: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Coupon name'
            },
            value: coupon ? coupon.couponTitle : '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
            label: 'Coupon title'

        },
        active: {
            elementType: 'checkbox',
            elementConfig: {
                type: 'text',
                placeholder: 'Active'
            },
            value: coupon ? coupon.active : false,
            validation: {
                required: false
            },
            valid: false,
            touched: false

        },
    }

    const [couponSaved, setCouponSaved] = useState(false)

    const updateCoupon = (updatedFields) => {
        dispatch(couponAction.updateCoupon({ ...coupon, ...updatedFields }))
        // history.goBack()
        setCouponSaved(true)
    }


    


    return (
        <div className="h-screen bg-bgColor px-96 py-16">
            <div className="bg-white  rounded-lg shadow-sm flex flex-col">
                <span className="text-primary text-3xl font-medium px-16 py-10 ">Edit coupon</span>

                <div className="flex flex-col items-center pb-16">
                    <div className="w-2/3 bg-bgTableHeader p-3 rounded-lg">
                        <Form formElements={couponForm} onSubmit={updateCoupon} submitBtnTitle={coupon ? 'Update coupon' : 'Save'}></Form>

                    </div>
                    {
                        couponSaved &&
                        <span className="text-active font-semibold pt-4">Coupon updated successfully!</span>
                    }
                </div>

            </div>
        </div>
    )
}

export default EditCoupon
