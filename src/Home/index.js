/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Table, Input, Button, Select, notification } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { CloseCircleOutlined, StarFilled, StarOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words'
import './index.scss'

function Index({ cacheActions }) {
  const { hasCache, getCache } = cacheActions
  const [cityParam, setCityParam] = useState('MUMBAI')
  const [tableData, setTableData] = useState(null)
  const [dataLoading, setDataLoading] = useState(false)
  const [originalData, setOriginalData] = useState(null)
  const [name, setName] = useState('')
  const [branch, setBranch] = useState('')
  const [ifsc, setIfsc] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [district, setDistrict] = useState('')
  const [address, setAddress] = useState('')
  const [isFilterActive, setIsFilterActive] = useState(false)
  const dispatch = useDispatch()
  const banks = useSelector(state => state.banks)

  useEffect(() => {
    dispatch({
      type: 'GET_DATA'
    })
  }, [])

  useEffect(() => {
    if (cityParam) {
      const url = `https://vast-shore-74260.herokuapp.com/banks?city=${cityParam}`
      const params = { city: cityParam }

      if (hasCache(url, params)) {
        console.log("i got cache")
        const data = getCache(url, params).data
        dispatch({
          type: 'SET_STATE',
          payload: {
            loading: false,
            bankList: data,
            error: null,
          }
        })
      } else {
        dispatch({
          type: 'SET_STATE',
          payload: {
            loading: true
          }
        })
        try {
          fetch(url, params)
            .then((res) => {
              return res.json()
            })
            .then(res => updateFunction(res, url, params))
        }
        catch (e) {
          dispatch({
            type: 'SET_STATE',
            payload: {
              loading: false,
              error: JSON.parse(e)
            }
          })
          notification.error({
            message: 'Something went wrong',
            description: JSON.parse(e)
          })
        }

      }
    }
  }, [cityParam])

  const updateFunction = (res, url, params) => {
    dispatch({
      type: 'SET_STATE',
      payload: {
        loading: false,
        error: null,
        bankList: res,
      }
    })
    cacheActions.setCache(url, params, res)
  }

  useEffect(() => {
    if (banks.loading) {
      setDataLoading(true)
    }
    else if (banks.bankList) {
      console.log("i got called")
      let tempData = banks.bankList
      banks.favBanksList?.map(item => {
        tempData = tempData.map(tt => tt.ifsc === item ? { ...tt, isFav: true } : tt)
      })
      setDataLoading(false)
      setTableData(tempData)
      setOriginalData(tempData)
    }
  }, [banks.loading, banks.bankList, banks.favBanksList])

  const handleFavclick = record => {
    if (record.isFav) {
      dispatch({
        type: 'REMOVE_FROM_FAV_LIST',
        payload: { ifsc: record.ifsc }
      })
    } else {
      dispatch({
        type: 'APPEND_FAV_LIST',
        payload: { ifsc: record.ifsc }
      })
    }
  }

  const columns = [
    {
      render: (text, row) => {
        return <Button type="link" style={{ padding: 0 }} onClick={() => handleFavclick(row)}>{
          row.isFav ? <StarFilled style={{ fontSize: 18 }} /> : <StarOutlined style={{ fontSize: 18 }} />
        }
        </Button>
      }
    },
    {
      title: 'Bank Id',
      dataIndex: 'bank_id',
      width: 80,
      align: 'center'
    },
    {
      title: 'Bank Name',
      dataIndex: 'bank_name',
      render: (text, row) =>
        name ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffca80', padding: 0 }}
            searchWords={[name]}
            autoEscape
            textToHighlight={text}
          />
        ) : (
          text
        ),
    },
    {
      title: 'Branch',
      dataIndex: 'branch',
      render: (text, row) =>
        branch ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffca80', padding: 0 }}
            searchWords={[branch]}
            autoEscape
            textToHighlight={text}
          />
        ) : (
          text
        ),
    },
    {
      title: 'IFSC Code',
      dataIndex: 'ifsc',
      width: 130,
      render: (text, row) =>
        ifsc ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffca80', padding: 0 }}
            searchWords={[ifsc]}
            autoEscape
            textToHighlight={text}
          />
        ) : (
          text
        ),
    },
    {
      title: 'City',
      dataIndex: 'city',
      width: 110,
      render: (text, row) =>
        city ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffca80', padding: 0 }}
            searchWords={[city]}
            autoEscape
            textToHighlight={text}
          />
        ) : (
          text
        ),
    },
    {
      title: 'District',
      dataIndex: 'district',
      render: (text, row) =>
        district ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffca80', padding: 0 }}
            searchWords={[district]}
            autoEscape
            textToHighlight={text}
          />
        ) : (
          text
        ),
    },
    {
      title: 'State',
      dataIndex: 'state',
      render: (text, row) =>
        state ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffca80', padding: 0 }}
            searchWords={[state]}
            autoEscape
            textToHighlight={text}
          />
        ) : (
          text
        ),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: 380,
      render: (text, row) =>
        address ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffca80', padding: 0 }}
            searchWords={[address]}
            autoEscape
            textToHighlight={text}
          />
        ) : (
          text
        ),
    }
  ]

  const filterRecords = ({ name, branch, city, ifsc, address, state, district }) => {
    console.log(name, branch, city, ifsc, state, district, address)
    let tempList = originalData
    let tempFilter = false

    if (name) {
      tempFilter = true
      tempList =
        tempList &&
        tempList.filter(item =>
          item.bank_name && item.bank_name.toLowerCase().includes(name.toLowerCase()),
        )
    }
    if (branch) {
      tempFilter = true
      tempList =
        tempList &&
        tempList.filter(
          item => item.branch && item.branch?.toLowerCase().includes(branch.toLowerCase()),
        )
    }
    if (ifsc) {
      tempFilter = true
      tempList = tempList && tempList.filter(item => item.ifsc?.toLowerCase().includes(ifsc.toLowerCase()))
    }
    if (city) {
      tempFilter = true
      tempList =
        tempList &&
        tempList.filter(
          item => item.city?.toLowerCase().includes(city.toLowerCase()),
        )
    }
    if (district) {
      tempFilter = true
      tempList =
        tempList &&
        tempList.filter(item => item.district && item.district.toLowerCase().includes(district.toLowerCase()))
    }
    if (state) {
      tempFilter = true
      tempList =
        tempList &&
        tempList.filter(item => item.state?.toLowerCase().includes(state.toLowerCase()))
    }
    if (address) {
      tempFilter = true
      tempList =
        tempList &&
        tempList.filter(item => item.address && item.address.toLowerCase().includes(address.toLowerCase()))
    }
    setIsFilterActive(tempFilter)
    setTableData(tempList)
  }

  const resetFilter = () => {
    setName('')
    setAddress('')
    setBranch('')
    setIfsc('')
    setCity('')
    setDistrict('')
    setState('')
    setIsFilterActive(false)
  }

  const filterHandler = e => {
    const tempName = e.target.name
    const value = e.target.value
    switch (tempName) {
      case 'name':
        setName(value)
        break
      case 'branch':
        setBranch(value)
        break
      case 'city':
        setCity(value)
        break
      case 'ifsc':
        setIfsc(value)
        break
      case 'state':
        setState(value)
        break
      case 'address':
        setAddress(value)
        break
      case 'district':
        setDistrict(value)
        break
      default:
        break
    }
    filterRecords({
      name: tempName === 'name' ? value : name,
      branch: tempName === 'branch' ? value : branch,
      city: tempName === 'city' ? value : city,
      ifsc: tempName === 'ifsc' ? value : ifsc,
      state: tempName === 'state' ? value : state,
      district: tempName === 'district' ? value : district,
      address: tempName === 'address' ? value : address,
    })
  }

  const tableFilterStyles = { margin: '0px 0px 0px 6px', width: 136 }
  const labelStyle = { width: 60, textAlign: 'right' }
  const container = { display: 'flex', alignItems: 'center' }
  const filterHeader = (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto',
      zIndex: 2,
      height: '64px',
      width: '98%',
    }}>
      <span style={container}>
        <span style={labelStyle}>Name :</span>
        <Input
          size="small"
          name="name"
          placeholder="Search Name"
          allowClear
          value={name}
          onChange={e =>
            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
      <span style={container}>
        <span style={labelStyle}>Branch :</span>
        <Input
          size="small"
          allowClear
          name="branch"
          placeholder="Search Branch"
          value={branch}
          onChange={e =>
            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
      <span style={container}>
        <span style={labelStyle}>IFSC :</span>
        <Input
          size="small"
          name="ifsc"
          allowClear
          placeholder="Search IFSC Code"
          value={ifsc}
          onChange={e =>
            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
      <span style={container}>
        <span style={labelStyle}>City :</span>
        <Input
          size="small"
          name="city"
          placeholder="Search City"
          allowClear
          value={city}
          onChange={e =>
            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
      <span style={container}>
        <span style={labelStyle}>District :</span>
        <Input
          size="small"
          name="district"
          placeholder="Search Discrict"
          allowClear
          value={district}
          onChange={e =>
            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
      <span style={container}>
        <span style={labelStyle}>State :</span>
        <Input
          size="small"
          name="state"
          placeholder="Search State"
          allowClear
          value={state}
          onChange={e =>
            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
      <span style={container}>
        <span style={labelStyle}>Address :</span>
        <Input
          size="small"
          name="address"
          placeholder="Search Address"
          allowClear
          value={address}
          onChange={e =>
            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
    </div>
  )

  return (
    <>
      <div style={{ width: '100%', height: 80, backgroundColor: '#f9f9f9', padding: 28, fontSize: 16 }}>
        Klaar assignment
        </div>
      <div className='modify-table' style={{ width: '95%', alignSelf: 'center', margin: '30px auto' }}>
        <div style={{ width: '100%', padding: '10px 0 10px 10px', display: 'flex', justifyContent: 'space-between' }}>
          <Select value={cityParam} onChange={e => setCityParam(e)} style={{ width: 180 }} >
            <Select.Option value="MUMBAI">Mumbai</Select.Option>
            <Select.Option value="DELHI">Delhi</Select.Option>
            <Select.Option value="NOIDA">Noida</Select.Option>
            <Select.Option value="JAIPUR">Jaipur</Select.Option>
            <Select.Option value="LUCKNOW">Lucknow</Select.Option>
          </Select>

          {isFilterActive ? (
            <Button
              type="link"
              style={{ marginLeft: '10px', color: '#FEBB27' }}
              onClick={resetFilter}
              size="small"
            >
              Clear Filters
              <CloseCircleOutlined />
            </Button>
          ) : null}
        </div>
        <Table
          loading={dataLoading}
          dataSource={tableData}
          rowKey={record => record.ifsc}
          title={() => { return filterHeader }}
          columns={columns}
          pagination={{
            defaultPageSize: 20,
            showSizeChanger: true,
            pageSizeOptions: ['20', '30', '50', '100'],
            position: 'top',
          }}
        />
      </div>
    </>
  )
}

export default Index
