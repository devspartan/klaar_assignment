/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Table, Input, Button } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words'
import './index.scss'

function Index() {
  const [tableData, setTableData] = useState(null)
  const [originalData, setOriginalData] = useState(null)
  const [tempObj, setTempObj] = useState(null)
  const [name, setName] = useState('')
  const [branch, setBranch] = useState('')
  const [ifsc, setIfsc] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [district, setDistrict] = useState('')
  const [address, setAddress] = useState('')
  const [isFilterActive, setIsFilterActive] = useState(false)

  useEffect(() => {
    getText()
  }, [])

  useEffect(() => {
    if (tempObj) {
      setTableData(tempObj)
      setOriginalData(tempObj)
    }
  }, [tempObj])

  const getText = async (file) => {
    let myObject = await fetch('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI');
    console.log(myObject)
    let myText = await myObject.text();
    setTempObj(JSON.parse(myText))
  }

  const columns = [
    {
      title: 'Bank Id',
      dataIndex: 'bank_id',
      width: 80
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
      width: 400,
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

  console.log(tableData)

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

  const inputCustom = { width: '180px', marginBottom: '8px', display: 'block' }
  const tableFilterStyles = { margin: '0px 28px 0 6px', width: 136 }
  const customLabel = {
    fontSize: '17px',
    color: '#000',
    marginRight: '12px',
    marginBottom: '12px',
  }

  const filterHeader = (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      whiteSpace: 'nowrap',
      zIndex: 2,
      height: '28px',
      width: '100%',
      padding: '4px 12px'
    }}>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span>Name :</span>
        <Input
          size="small"
          name="name"
          placeholder="Search Name"
          allowClear
          onChange={e =>
            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span>Branch :</span>
        <Input
          size="small"
          allowClear
          name="branch"
          placeholder="Search Branch"
          onChange={e =>
            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span>IFSC :</span>
        <Input
          size="small"
          name="ifsc"
          allowClear
          placeholder="Search IFSC Code"
          onChange={e =>
            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span>City :</span>
        <Input
          size="small"
          name="city"
          placeholder="Search City"
          allowClear
          onChange={e =>

            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span>District :</span>
        <Input
          size="small"
          name="district"
          placeholder="Search Discrict"
          allowClear

          onChange={e =>
            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span>State :</span>
        <Input
          size="small"
          name="state"
          placeholder="Search State"
          allowClear

          onChange={e =>
            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span>Address :</span>
        <Input
          size="small"
          name="address"
          placeholder="Search Address"
          allowClear

          onChange={e =>

            filterHandler(e)
          }
          style={tableFilterStyles}
        />
      </span>
    </div>
  )
  console.log(isFilterActive, "filter")

  return (
    <>
      <div style={{ width: '100%', height: 80, backgroundColor: '#f9f9f9', padding: 28, fontSize: 16 }}>
        Klaar assignment
        </div>
      <div className='modify-table' style={{ width: '95%', alignSelf: 'center', margin: '50px auto' }}>
        <div style={{ height: 25, width: 'fit-content', marginLeft: 'auto' }}>
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
        <Table title={() => { return filterHeader }} columns={columns} dataSource={tableData} size='middle' />
      </div>
    </>
  )
}

export default Index
