import React from 'react';
import uniqid from 'uniqid';

export default function Row({ columnsState, row }) {

    return (
        <>
            <tr>
                {
                    columnsState.map(({ dataField }) => {

                        return (
                            <React.Fragment key={uniqid()}>
                                <td>
                                    {
                                        Object.entries(row).map((entry) => {
                                            return (
                                                (dataField === entry[0]) ? entry[1] : null
                                            )
                                        })
                                    }
                                </td>
                            </React.Fragment>
                        )
                    })
                }
            </tr>
        </>
    )
}