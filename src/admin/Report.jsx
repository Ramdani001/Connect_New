import React, { useRef, useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import DataTable, { createTheme } from 'react-data-table-component';
import axios from 'axios';
Chart.register(...registerables);
 
const Report = () => {
  // State untuk menyimpan data transaksi dan bulan yang dipilih
  const [url, setUrl] = useState('http://www.tempat-transit.cloud:3000/api/v1/transaksi/trans');
  const [transData, setTransData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(0); 
  
  // Get Month Data
  const [getJan, seGetJan] = useState([]);
  const [getFeb, seGetFeb] = useState([]);
  const [getMarc, seGetMarc] = useState([]);
  const [getApr, seGetApr] = useState([]);
  const [getMay, seGetMay] = useState([]);
  const [getJun, seGetJun] = useState([]);
  const [getJul, seGetJul] = useState([]);
  const [getAug, seGetAug] = useState([]);
  const [getSep, seGetSep] = useState([]);
  const [getOct, seGetOct] = useState([]);
  const [getNov, seGetNov] = useState([]);
  const [getDes, seGetDes] = useState([]);


  const [datYears, setDateYears] = useState([]);

  const getTrans = async () => {
      try {
          const response = await axios.get(url);

          const res = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/years");
          setDateYears(res.data);

          // Get Month
          const getJan = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/getJan");
          const getFeb = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/getFeb");
          const getMarc = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/getMarc");
          const getApr = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/getJApr");
          const getMay = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/getMay");
          const getJun = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/getJun");
          const getJul = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/getJul");
          const getAug = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/getAug");
          const getSep = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/getSep");
          const getOct = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/getOct");
          const getNov = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/getNov");
          const getDes = await axios.get("http://www.tempat-transit.cloud:3000/api/v1/count/getDes");

          setTransData(response.data);
      } catch (error) {
          if (error.response) {
              console.error('Response error:', error.response.status);
              console.error('Response data:', error.response.data);
          } else if (error.request) {
              console.error('Request error:', error.request);
          } else {
              console.error('Error:', error.message);
          }
      }
  };

  createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#fff',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });

  const columns = [
    {
        name: 'No',
        selector: (row, index) => index + 1,
        sortable: true
    },
    {
        name: 'Id Transaksi',
        selector: row => row.id_trans,
        sortable: true
    },
    {
        name: 'Customer',
        selector: row => row.nama_pengirim,
        sortable: true
    },
    {
        name: 'Name Product',
        selector: row => row.title,
        sortable: true
    },
    {
        name: 'Type Product',
        selector: row => row.type,
        sortable: true
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: true
    },
    {
        name: 'Status',
        cell: row => {
            switch (row.status) {
                case 1:
                    return <span>Unpaid</span>;
                case 2:
                    return <span>Confirmation</span>;
                case 3:
                    return <span>Paid</span>;
                default:
                    return <span>Unknown</span>;
            }
        },
        sortable: false
    },
  ];

  useEffect(() => {
    getTrans();
  }, []);

  const canvasRef = useRef(null);

  const data = [
    { years: "Januari", month_num: '01', count: 0 },
    { years: "Februari", month_num: '02', count: 0 },
    { years: "Maret", month_num: '03', count: 0 },
    { years: "April", month_num: '04', count: 0 },
    { years: "Mei", month_num: '05', count: 0 },
    { years: "Juni", month_num: '06', count: 0 },
    { years: "Juli", month_num: '07', count: 0 },
    { years: "Agustus", month_num: '08', count: 9 },
    { years: "September", month_num: '09', count: 0 },
    { years: "Oktober", month_num: '10', count: 0 },
    { years: "November", month_num: '11', count: 0 },
    { years: "Desember", month_num: '12', count: 220 },
  ];

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const filteredData = selectedMonth === 0 ? datYears : datYears.filter(row => row.month === selectedMonth);
      console.log(transData);
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: filteredData.map(row => row.date),
          datasets: [
            {
              label: `Penjualan ${selectedMonth === 0 ? 'Tahun 2024' : filteredData[0]?.date}`,
              data: filteredData.map(row => row.count),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],    
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
      });
 
      return () => {
        myChart.destroy();
      };
    }
  }, [datYears, selectedMonth]);

  return (
    <div className="w-full p-10 grid flex">
      <div className='w-full p-2 h-[400px]'>
        <canvas ref={canvasRef} className='w-full p-2 bg-white' height="400" style={{width:100}}
 />
      </div>
      <div className='flex justify-between items-center'>
        <div>
          <select 
            name="filter_grafik" 
            id="filter_grafik" 
            className='px-10 py-1 shadow-md text-left'
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
          >
            <option value="0">Filter Grafik</option>
            <option value="1">Januari</option>
            <option value="2">Februari</option>
            <option value="3">Maret</option>
            <option value="4">April</option>
            <option value="5">Mei</option>
            <option value="6">Juni</option>
            <option value="7">Juli</option>
            <option value="8">Agustus</option>
            <option value="9">September</option>
            <option value="10">Oktober</option>
            <option value="11">November</option>
            <option value="12">Desember</option>
          </select>
        </div>
        <div className='flex gap-4 w-full h-full justify-end p-2'>
          <button className='rounded-md shadow-md px-5 bg-green-400 text-white'>Excel</button>
          <button className='rounded-md shadow-md px-5 bg-blue-400 text-white'>Pdf</button>
        </div>
      </div>
      <DataTable
        className="h-full w-full border rounded-md shadow-md overflow-auto"
        columns={columns}
        data={transData}
        pagination
        paginationPerPage={5} 
        responsive
        theme="solarized"
      />
    </div>
  );
};

export default Report;
