import React from 'react'
import Cache from 'react-api-cache'
import Index from '.'

function WithCache() {
    return (
        <Cache>
            {
                ({ store, actions }) => (
                    <div>
                        <Index cacheActions={actions} />
                    </div>
                )
            }
        </Cache>
    )
}

export default WithCache
