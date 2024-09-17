import React, { useState } from 'react';
import './css/ClientForm.css';  // Import the CSS file

function ClientForm() {
    const [formData, setFormData] = useState({
        companyName: '',
        clientName: '',
        title: '',
        phone: '',
        email: '',
        applicationsUsed: {
          crm: false,
          marketingAutomation: false,
          mdm: false,
          dataWarehouse: false,
        },
        feedType: 'full',
        cusipAgreement: 'no',
        frequency: 'weekly',
        fileFormat: 'CSV',
        lineBreak: 'LF',
        compression: 'ZIP',
        encryption: 'no',
        sftp: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
          setFormData({
            ...formData,
            applicationsUsed: {
              ...formData.applicationsUsed,
              [name]: checked
            }
          });
        } else if (type === 'radio') {
          setFormData({
            ...formData,
            [name]: value
          });
        } else {
          setFormData({
            ...formData,
            [name]: value
          });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
      };
    
      return (
        <div className="App">
          <h1>Feed Request Form</h1>
          <form onSubmit={handleSubmit}>
            
            {/* Client Information Section */}
            <div className="form-section">
              <h2>Client Information</h2>
              <div className="form-group">
                <label>Company Name:</label>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Client Name:</label>
                <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Title/Role:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>
    
            {/* Applications Used Section */}
            <div className="form-section">
              <h2>Applications Used</h2>
              <div >
                <input type="checkbox" name="crm" checked={formData.applicationsUsed.crm} onChange={handleChange} /> CRM
                <input type="checkbox" name="marketingAutomation" checked={formData.applicationsUsed.marketingAutomation} onChange={handleChange} /> Marketing Automation
                <input type="checkbox" name="mdm" checked={formData.applicationsUsed.mdm} onChange={handleChange} /> MDM
                <input type="checkbox" name="dataWarehouse" checked={formData.applicationsUsed.dataWarehouse} onChange={handleChange} /> Data Warehouse
              </div>
            </div>
    
            {/* Feed Options Section */}
            <div className="feed-options">
                <h2>Feed Options</h2>
                <div className="form-section">
                    <div className="form-group">
                        <label>Feed Type:</label>
                        <label><input type="radio" name="feedType" value="full" checked={formData.feedType === 'full'} onChange={handleChange} /> Full</label>
                        <label><input type="radio" name="feedType" value="delta" checked={formData.feedType === 'delta'} onChange={handleChange} /> Delta</label>
                        <label><input type="radio" name="feedType" value="full_delta" checked={formData.feedType === 'full_delta'} onChange={handleChange} /> Full & Delta</label>
                    </div>
                </div>
                <div className="form-section">
                    <div className="form-group">
                        <label>Feed Type:</label>
                        <label><input type="radio" name="feedType" value="full" checked={formData.feedType === 'full'} onChange={handleChange} /> Full</label>
                        <label><input type="radio" name="feedType" value="delta" checked={formData.feedType === 'delta'} onChange={handleChange} /> Delta</label>
                        <label><input type="radio" name="feedType" value="full_delta" checked={formData.feedType === 'full_delta'} onChange={handleChange} /> Full & Delta</label>
                    </div>
                </div>
                <div className="form-section">
                    <div className="form-group">
                        <label>Feed Type:</label>
                        <label><input type="radio" name="feedType" value="full" checked={formData.feedType === 'full'} onChange={handleChange} /> Full</label>
                        <label><input type="radio" name="feedType" value="delta" checked={formData.feedType === 'delta'} onChange={handleChange} /> Delta</label>
                        <label><input type="radio" name="feedType" value="full_delta" checked={formData.feedType === 'full_delta'} onChange={handleChange} /> Full & Delta</label>
                    </div>
                </div>
            </div>
    
            {/* CUSIP Section */}
            <div className="form-section">
              <h2>CUSIP Global Services</h2>
              <div className="form-group">
                <label>Do you currently have an agreement with CUSIP Global Services?</label>
                <label><input type="radio" name="cusipAgreement" value="yes" checked={formData.cusipAgreement === 'yes'} onChange={handleChange} /> Yes</label>
                <label><input type="radio" name="cusipAgreement" value="no" checked={formData.cusipAgreement === 'no'} onChange={handleChange} /> No</label>
              </div>
            </div>
    
            {/* Frequency Section */}
            <div className="form-section">
              <h2>Frequency and Delivery</h2>
              <div className="form-group">
                <label>Frequency:</label>
                <select name="frequency" value={formData.frequency} onChange={handleChange}>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
    
            {/* File Format Section */}
            <div className="form-section">
              <h2>File Format</h2>
              <div className="form-group">
                <label>File Format:</label>
                <select name="fileFormat" value={formData.fileFormat} onChange={handleChange}>
                  <option value="CSV">CSV</option>
                  <option value="TXT">TXT</option>
                </select>
              </div>
              <div className="form-group">
                <label>Line Break:</label>
                <select name="lineBreak" value={formData.lineBreak} onChange={handleChange}>
                  <option value="LF">LF (Unix)</option>
                  <option value="CRLF">CRLF (Windows)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Compression:</label>
                <select name="compression" value={formData.compression} onChange={handleChange}>
                  <option value="ZIP">ZIP</option>
                  <option value="GZIP">GZIP</option>
                </select>
              </div>
            </div>
    
            {/* Encryption Section */}
            <div className="form-section">
              <h2>Encryption and Transfer</h2>
              <div className="form-group">
                <label>Encrypt files with PGP encryption?</label>
                <label><input type="radio" name="encryption" value="yes" checked={formData.encryption === 'yes'} onChange={handleChange} /> Yes</label>
                <label><input type="radio" name="encryption" value="no" checked={formData.encryption === 'no'} onChange={handleChange} /> No</label>
              </div>
              <div className="form-group">
                <label><input type="checkbox" name="sftp" checked={formData.sftp} onChange={handleChange} /> Use SFTP</label>
              </div>
            </div>
    
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
export default ClientForm;
