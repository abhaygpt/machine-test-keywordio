import React, { useState } from 'react'
import Textform from './Textform'
import Mediaform from './Mediaform'
import Table from './Table'
import Createads from './Createads'
import Chart from './Chart'


const Dasboard = () => {
    const list = [

        { Campaigns: 'Cosmetics', Clicks: '712', Cost: 'USD4272', Conversions: '8', Revenue: 'USD16568' },
        { Campaigns: 'Serums', Clicks: '3961', Cost: 'USD27331', Conversions: '115', Revenue: 'USD362526' },
        { Campaigns: 'Facewash', Clicks: '9462', Cost: 'USD76831', Conversions: '123', Revenue: 'USD266800' },
        { Campaigns: 'Shampoos', Clicks: '439', Cost: 'USD2151', Conversions: '5', Revenue: 'USD11029' },
        { Campaigns: 'Conditioners', Clicks: '1680', Cost: 'USD3864', Conversions: '49', Revenue: 'USD175245' },
        { Campaigns: 'Fashwash2', Clicks: '4978', Cost: 'USD29370', Conversions: '189', Revenue: 'USD623106' },
        { Campaigns: 'Total', Clicks: '26510', Cost: 'USD143819', Conversions: '489', Revenue: 'USD1573563' },
    ]




    let [status, setstatus] = useState(false)


    localStorage.setItem("showdata1", JSON.stringify(list))

    const [showdata, setshowdata] = useState(() => {
        let localdata = localStorage.getItem("showdata1")
        if (localdata != null) {
            return JSON.parse(localdata)
        } else {
            return []
        }
    })


    let changestatus = () => {
        setstatus(false)

    }

    let changetabel = () => {
        setstatus(true)
    }


    /// Sorting Starts   


    const clicklowtohigh = () => {
        const sortUsers = showdata.sort((a, b) => {
            return a.Clicks - b.Clicks

        });
        console.log(showdata)
        setshowdata([...showdata, sortUsers])
    }


    const clickhightolow = () => {
        const sortedUsers = showdata.sort((a, b) => {
            return b.Clicks - a.Clicks

        });
        console.log(showdata)
        setshowdata([...showdata, sortedUsers])
        //   localStorage.setItem("showdata", JSON.stringify(sortedUsers))
    }

    return (
        <div className='row'>
            <div className='col-lg-6'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            Ad Insights
                        </tr>
                        <tr>
                            <th scope="col">
                            Campaigns
                            </th>

                            <th scope="col">
                                <a className="nav-link dropdown-toggle tog" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Click
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li><button className="dropdown-item" onClick={clicklowtohigh}>Low to high</button></li>
                                    <li><a className="dropdown-item" onClick={clickhightolow}>High to low</a></li>

                                </ul>
                            </th>
                            <th scope="col">
                            Cost
                            </th>
                            <th scope="col">
                            Conversions
                            </th>
                            <th scope="col">
                                Revenue
                            </th>
                        </tr>
                    </thead>

                    {
                        showdata.map((item) => {
                            return (


                                <tbody>
                                    <tr>

                                        <td>{item.Campaigns}</td>
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
            </div>
            <div className='col-lg-6'>
                <div className="">
                    <div className="d-flex justify-content-between ">
                        <h3>Ad Insights</h3>
                        <><a className="nav-link dropdown-toggle tog" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Clicks
                        </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                <li><a className="dropdown-item" onClick={changestatus}>Pie Chart</a></li>
                                <li><a className="dropdown-item" onClick={changetabel}>Table</a></li>

                            </ul>
                        </>

                    </div>
                    {status === false ? (<Chart />) : (<Table />)}

                </div>
            </div>




        </div >

    )
}

export default Dasboard