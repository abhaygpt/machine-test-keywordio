import React from 'react'

const Table = () => {
  const items = [{Group: "Male", Clicks : "348", Cost : "USD12528", Conversions : "42", Revenue : "USD62118"},
  {Group: "Female", Clicks : "692", Cost : "USD24912", Conversions : "35", Revenue : "USD5175"},
  {Group: "Unknown", Clicks : "105", Cost : "USD3943", Conversions : "3", Revenue : "USD4489"},
  {Group: "Total", Clicks : "1145", Cost : "USD41383", Conversions : "80", Revenue : "USD71782"},]
  return (
    <div className='tableformat'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        Ad Insights
                    </tr>
                    <tr>
                        <th scope="col">Group</th>
                        <th scope="col">Clicks</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Conversions</th>
                        <th scope="col">Revenue</th>
                    </tr>
                </thead>

                {
                    items.map((item) => {
                        return (


                            <tbody>
                                <tr>

                                    <td>{item.Group}</td>
                                    <td>{item.Clicks}</td>
                                    <td>{item.Cost}</td>
                                    <td>{item.Conversions}</td>
                                    <td>{item.Revenue}</td>
                                </tr>

                            </tbody>
                        )
                    })
                }
            </table>

           

           

        </div >
  )
}

export default Table