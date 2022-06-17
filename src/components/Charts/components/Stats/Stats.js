import React from "react";
import './Stats.css'

const Stats = ({list}) => {
    return(
        <div className ="stats mt5">
            <table id="customers">
                <tbody>
                <tr>
                    <th className="left-end">Collection</th>
                    <th>Volume</th>
                    <th>Trades</th>
                    <th className="right-end">Floor</th>
                </tr>   
                </tbody>
                <tbody>
                {

                    list.map((item, index) => {
                        return (
                            <tr 
                            key = {index}>
                                <td>{item.collection_name}</td>
                                <td>{item.volume}</td>
                                <td>{item.trades}</td>
                                <td>{item.floor}</td>
                            </tr>
                        )
                })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Stats;