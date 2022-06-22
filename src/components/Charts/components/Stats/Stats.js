import React from "react";
import './Stats.css'
import ether from './ether.png'

const Stats = ({urlRedirect, list}) => {
    return(
        <div className ="stats mt5">
            <table id="customers">
                <tbody>
                <tr>
                    <th className="left-end">Collection</th>
                    <th>Volume</th>
                    <th>Total Trades</th>
                    <th className="right-end">Floor</th>
                </tr>   
                </tbody>
                <tbody>
                {

                    list.map((item, index) => {
                        return (
                                <tr key = {index} 
                                onClick = {()=> urlRedirect(item.collection_url)}>
                                    <td>{item.collection_name}</td>
                                    <td>{item.volume}</td>
                                    <td>{item.trades}</td>
                                    <td className= 'floor'><div className="floor-block">
                                    <img className='eth' src={ether} />{item.floor.slice(1)}
                                    </div></td>
                                    {/* <img src={ether} /> */}
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