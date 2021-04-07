import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { StarFilled, StarOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Breadcrumb } from 'antd'


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const block = { display: 'flex', flexDirection: 'column', }
const label = { width: '50%', fontSize: 16, fontWeight: 600, textAlign: 'right' }
const textCol = { marginLeft: 20, width: '50%', fontSize: 16 }
const container = { display: 'flex', marginBottom: '5px' }

function Index() {
    const [loading, setLoading] = useState(false)
    const [bankObj, setbankObj] = useState(null)
    const dispatch = useDispatch()
    const bankState = useSelector(state => state.banks)
    const queryParams = useQuery().get('ifsc')

    // console.log(queryParams, "queryParams")
    useEffect(() => {
        if (bankState) {
            if (bankState.bankList.length === 0) {
                dispatch({
                    type: 'GET_DATA'
                })
            }
        }
    }, [])

    useEffect(() => {
        if (bankState.loading) {
            setLoading(true)
        } else if (bankState) {
            const tempObj = bankState?.bankList.filter(item => item.ifsc === queryParams)
            setbankObj(tempObj[0])
            setLoading(false)
        }
    }, [bankState.loading, bankState.bankList, bankState.error])

    const handleFavclick = record => {
        // console.log("button handler")
        if (record.isFav) {
            dispatch({
                type: 'REMOVE_FROM_FAV_LIST',
                payload: { ifsc: record.ifsc }
            })
            setbankObj({ ...bankObj, isFav: false })
        } else {
            dispatch({
                type: 'APPEND_FAV_LIST',
                payload: { ifsc: record.ifsc }
            })
            setbankObj({ ...bankObj, isFav: true })
        }
    }

    return (
        <>
            <div style={{ width: '100%', height: 80, backgroundColor: '#f9f9f9', padding: 28, fontSize: 16 }}>
                Klaar assignment
            </div>
            <div style={{ width: '70%', margin: '20px auto' }}>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/" style={{ color: '#1C8FFA' }}>Home</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Profile
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div style={{ padding: '24px', width: '70%', margin: '40px auto', alignSelf: 'center', border: '1px solid #d9d9d9', boxShadow: '0 1px 1px 0 rgb(242, 242, 242)', height: 440 }}>
                {loading ? "Loading...." :
                    bankObj ?
                        <div style={block}>
                            <div style={container}>
                                <Button type="link" onClick={() => handleFavclick(bankObj)} style={{ marginLeft: 'auto' }}> {
                                    bankObj.isFav ? <StarFilled style={{ fontSize: 20 }} /> :
                                        <StarOutlined style={{ fontSize: 20 }} />}</Button>
                            </div>
                            <div style={container}>
                                <div style={label}>Bank Name </div>
                                <div style={textCol}>: {bankObj.bank_name}</div>
                            </div>
                            <div style={container}>
                                <div style={label}>Branch </div>
                                <div style={textCol}>: {bankObj.branch}</div>
                            </div>
                            <div style={container}>
                                <div style={label}>IFSC Code </div>
                                <div style={textCol}>: {bankObj.ifsc} </div>
                            </div>
                            <div style={container}>
                                <div style={label}>City </div>
                                <div style={textCol}>: {bankObj.city}</div>
                            </div>
                            <div style={container}>
                                <div style={label}>District </div>
                                <div style={textCol}>: {bankObj.district}</div>
                            </div>
                            <div style={container}>
                                <div style={label}>State </div>
                                <div style={textCol}>: {bankObj.state}</div>
                            </div>
                            <div style={container}>
                                <div style={label}>Address </div>
                                <div style={textCol}>: {bankObj.address}</div>
                            </div>
                        </div>
                        : <div>
                            Please select a profile from table
                    </div>
                }
            </div>

        </>
    )
}

export default Index
