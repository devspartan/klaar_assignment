/* eslint-disable */
import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom'

function Error() {
  const history = useHistory()
  return (
    <>
      <div style={{ width: '100%', height: 80, backgroundColor: '#f9f9f9', padding: 28, fontSize: 16 }}>
        Klaar assignment
            </div>
      <div style={{ width: '50%', height: 440, margin: '20px auto', textAlign: 'center', padding: '36px', border: '1px solid #d9d9d9' }}>

        404 page not found
      <Button style={{ marginLeft: '20px' }} type="ghost" onClick={() => history.push('/')} >Back to home</Button>
      </div>
    </>
  )
}

export default Error
