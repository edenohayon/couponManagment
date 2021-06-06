import React from 'react'
import { useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom';

import PrimaryButton from '../../components/UI/buttons/primaryButton'
import Table from '../../components/UI/table/table'

import couponImg from '../../assets/images/coupon.PNG'

import { IoIosArrowForward } from 'react-icons/io'


const totalCoupons = 278

const Home = () => {

    const history = useHistory();
    const couponsList = useSelector(state => state.Coupons.couponsList)

    const tableHead = [
        {
            Header: 'Brand name',
            accessor: 'brandName',
        },
        {
            Header: 'Coupon title',
            accessor: 'couponTitle',

        },
        {
            Header: 'Coupons',
            accessor: 'numOfCoupons',
            Cell: ({ value }) => <p><span>{value}/</span><span className="font-normal">{totalCoupons}</span></p>,
            width: 100
        },
        {
            Header: 'Issued',
            accessor: 'issued',
            Cell: ({ value }) => <span className={`${value > 0 ? 'text-issued' : 'text-used'}`}>{value}</span>,
            width: 100
        },
        {
            Header: 'Used',
            accessor: 'used',
            Cell: ({ value }) => <span className="text-used">{value}</span>,
            width: 100
        },
        {
            Header: 'Status',
            accessor: 'active',
            Cell: ({ value }) => <span className={`${value === 'Active' ? 'text-active' : 'text-inactive'}`}>{value}</span>,
            width: 100
        },
        {
            Header: ' ',
            Cell: () => <IoIosArrowForward size={30} />,
            width: 50
        }
    ]

    const addNewCoupon = () => {
        console.log('add new coupon')
        // history.push(`/editCoupon/`);
    }

    const editBrandByIndex = (couponIndex) => {
        history.push(`/editCoupon/${couponsList[couponIndex].id}`);
    }


    return (
        <div className="h-full bg-bgColor px-24 py-16">
            <div className="bg-white rounded-lg shadow-sm">

                <div className=" flex justify-between items-center px-16 py-10 ">
                    <div className="flex items-baseline">
                        <img src={couponImg} alt="" />
                        <span className="text-primary text-3xl font-normal">Coupon management</span>
                    </div>
                    <PrimaryButton title="+ Add new coupon" clickHandler={addNewCoupon} />
                </div>

                <Table tableBody={couponsList} tableHead={tableHead} clickHandler={(index) => editBrandByIndex(index)} />



            </div>

        </div>
    )
}

export default Home
