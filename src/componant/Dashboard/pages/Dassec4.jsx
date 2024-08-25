import React from 'react'
import { dasdat1 } from '../../Data/Data'
export default function Dassec4() {
  return (
    <>
       {dasdat1.map((dasdat1data,dashkey6) => (
 <div key={dashkey6}>
                            <div className="d-flex flex-wrap align-items-center justify-content-between mt-5 mb-4">
                            <h3 className="title">Latest Deposits</h3>
                            <div className="nice-select btn--round" tabIndex="0">
                            <select className="nice-select dashselect w-100 h-50"><option>Select Plan</option><option>Silver Plan</option><option>Gold Plan</option><option>Platium Plan</option></select></div>
                        </div>
                        <div className="navtab1">
               <table className="table transection__table">
                                <thead>
                                    <tr>
                                        <th>{dasdat1data.button1.tabledata.head.tx1}</th>
                                        <th>{dasdat1data.button1.tabledata.head.tx2}</th>
                                        <th>{dasdat1data.button1.tabledata.head.tx3}</th>
                                        <th>{dasdat1data.button1.tabledata.head.tx4}</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={dasdat1data.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{dasdat1data.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{dasdat1data.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{dasdat1data.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{dasdat1data.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={dasdat1data.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{dasdat1data.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{dasdat1data.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{dasdat1data.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{dasdat1data.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={dasdat1data.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{dasdat1data.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{dasdat1data.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{dasdat1data.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{dasdat1data.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={dasdat1data.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{dasdat1data.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{dasdat1data.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{dasdat1data.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{dasdat1data.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={dasdat1data.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{dasdat1data.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{dasdat1data.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{dasdat1data.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{dasdat1data.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                 
                                </tbody>
                            </table>
      </div>
 </div>
         ))
           
       
         }
    </>
 
  )
}
