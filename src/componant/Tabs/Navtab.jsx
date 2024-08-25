import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { section10data } from '../Data/Data';
function Navtab() {
  return (
    <>
          {section10data.map((section10data1, mnlotttab) => (
     <Tabs key={mnlotttab}>
    <TabList>
      <Tab>Last Deposit</Tab>
      <Tab>Last Widthdraw</Tab>
    </TabList>

    <TabPanel>
      <div className="navtab1">
               <table className="table transection__table">
                                <thead>
                                    <tr>
                                        <th>{section10data1.button1.tabledata.head.tx1}</th>
                                        <th>{section10data1.button1.tabledata.head.tx2}</th>
                                        <th>{section10data1.button1.tabledata.head.tx3}</th>
                                        <th>{section10data1.button1.tabledata.head.tx4}</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={section10data1.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{section10data1.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{section10data1.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{section10data1.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{section10data1.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={section10data1.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{section10data1.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{section10data1.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{section10data1.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{section10data1.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={section10data1.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{section10data1.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{section10data1.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{section10data1.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{section10data1.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={section10data1.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{section10data1.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{section10data1.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{section10data1.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{section10data1.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={section10data1.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{section10data1.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{section10data1.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{section10data1.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{section10data1.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                 
                                </tbody>
                            </table>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="navtab1">
               <table className="table transection__table">
                                <thead>
                                    <tr>
                                        <th>{section10data1.button1.tabledata.head.tx1}</th>
                                        <th>{section10data1.button1.tabledata.head.tx2}</th>
                                        <th>{section10data1.button1.tabledata.head.tx3}</th>
                                        <th>{section10data1.button1.tabledata.head.tx4}</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={section10data1.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{section10data1.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{section10data1.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{section10data1.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{section10data1.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={section10data1.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{section10data1.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{section10data1.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{section10data1.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{section10data1.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={section10data1.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{section10data1.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{section10data1.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{section10data1.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{section10data1.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={section10data1.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{section10data1.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{section10data1.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{section10data1.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{section10data1.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                    <tr>
                                        <td data-label="User Name">
                                            <div className="user d-flex flex-wrap align-items-center">
                                                <div className="thumb">
                                                    <img src={section10data1.button1.tabledata.tbody.tr.img1} alt="dashboard" />
                                                    </div>
                                                <p className="name">{section10data1.button1.tabledata.tbody.tr.tx1}</p>
                                            </div>
                                        </td>
                                        <td data-label="Amount"><span className="amount">{section10data1.button1.tabledata.tbody.tr.tx2}</span></td>
                                        <td data-label="Wallet"><span className="wallet">{section10data1.button1.tabledata.tbody.tr.tx3}</span></td>
                                        <td data-label="Date"><span className="date">{section10data1.button1.tabledata.tbody.tr.tx4}</span></td>
                                    </tr>
                                 
                                </tbody>
                            </table>
      </div>
    </TabPanel>
  </Tabs>
  ))}
  </>
  )
}

export default Navtab

 
 
 