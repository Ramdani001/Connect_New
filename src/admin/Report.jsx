import React, { useRef, useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import DataTable, { createTheme } from 'react-data-table-component';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
Chart.register(...registerables);
 
const Report = () => {
  // State untuk menyimpan data transaksi dan bulan yang dipilih
  const [url, setUrl] = useState('http://www.tech-in-dynamic.site:3000/api/v1/transaksi/trans');
  const [transData, setTransData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("00");

  // PDF
  const componentPDF = useRef();
  // CSV
  const [getCSV, seGetCSV] = useState([]);
  const [datYears, setDateYears] = useState([]);

  // Const Day
  const [daysShow, setDaysShow] = useState(false);

  const getTrans = async () => {
    try {
      const response = await axios.get(url);

      const res = await axios.get("http://www.tech-in-dynamic.site:3000/api/v1/count/years");
      setDateYears(res.data);

      const resCSV = await axios.get("http://www.tech-in-dynamic.site:3000/api/v1/transaksi/getCSV");
      seGetCSV(resCSV.data);

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

  const [totalDays, setTotalDays] = useState(0);

  const canvasRef = useRef(null);

  const [myChart, setMyChart] = useState();
  useEffect(() => {
    const res = async () => {
      if (canvasRef.current) {
        const date = "2024-" + selectedMonth + "-01";
        selectedMonth !== "00" ? setDaysShow(() => true) : setDaysShow(() => false);

        const today = new Date();
        const currentMonth = Number(selectedMonth) - 1;

        const currentYear = today.getFullYear();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        setTotalDays(daysInMonth);

        // Get Data Month Transaction
        const resMonth =  selectedMonth !== "00" ? await axios.get("http://www.tech-in-dynamic.site:3000/api/v1/transaksi/getAllMonth?date=" + date) :  await axios.get("http://www.tech-in-dynamic.site:3000/api/v1/count/years");
        // selectedMonth !== "00" ? setTransData(resMonth.data) : "";
        setTransData(resMonth.data)
        // Get Data Month Transaction
        console.log(date);

        // Get Month

        const res = selectedMonth !== "00" ? await axios.get("http://www.tech-in-dynamic.site:3000/api/v1/count/getFilterMonth?date=" + date) : await [];
        const ctx = canvasRef.current.getContext('2d');
        const filteredData = selectedMonth === "00" ? datYears : res.data.filter(row => row.date);

        const my = new Chart(ctx, {
          type: 'line',
          data: {
            labels: filteredData.map(row => row.date),
            datasets: [
              {
                label: `Penjualan ${selectedMonth === "00" ? 'Tahun 2024' : filteredData[0]?.date}`,
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
        setMyChart(my);
      }
    }
    res();
    if (myChart) {
      myChart.destroy();
    }
  }, [datYears, selectedMonth]);

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Report Transaction"
  });

  // Header CSV
  const headers = [
    { label: "No", key: "no" },
    { label: "Id Transaksi", key: "id_transaksi" },
    { label: "Product Name", key: "product_Name" },
    { label: "Product Type", key: "product_Type" },
    { label: "Customer", key: "Customer" },
    { label: "Price", key: "price" },
    { label: "Status", key: "status" }
  ];

  const  [selectedDays, setSelectedDays] = useState(0);

  useEffect( () => {
    if(selectedDays > 0){
        const dy = async () => {
          const date = "2024-" + selectedMonth + "-01";
        const daysVal = `2024-${selectedMonth}-${selectedDays}`;
        const res = await axios.get("http://www.tech-in-dynamic.site:3000/api/v1/count/getFilterDays?days=" + daysVal);
        
        const resDays = selectedDays !== 0 ? await axios.get("http://www.tech-in-dynamic.site:3000/api/v1/transaksi/getAllDays?date=" + daysVal) : await axios.get("http://www.tech-in-dynamic.site:3000/api/v1/count/getFilterMonth?date=" + date);
        console.log(resDays);

        selectedDays !== 0 ? setTransData(resDays.data) : setTransData(resDays.data);
        
          const ctx = canvasRef.current.getContext('2d');
          const filteredData = res.data.filter(row => row.hours);

          const my = new Chart(ctx, {
            type: 'line',
            data: {
              labels: filteredData.map(row => row.hours+":00"),
              datasets: [
                {
                  label: `Penjualan ${daysVal}`,
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
          setMyChart(my);
      }
      dy();
      if (myChart) {
        myChart.destroy();
      }
    }
  }, [selectedDays])

  return (
    <div className="w-full p-10 grid flex">
      <div className='w-full p-2 h-[400px]'>
        <canvas ref={canvasRef} className='w-full p-2 bg-white' height="400" style={{ width: 100 }}
        />
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <select
            name="filter_grafik"
            id="filter_grafik"
            className='px-10 py-1 shadow-md text-left'
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="00">Filter Grafik</option>
            <option value="01">Januari</option>
            <option value="02">Februari</option>
            <option value="03">Maret</option>
            <option value="04">April</option>
            <option value="05">Mei</option>
            <option value="06">Juni</option>
            <option value="07">Juli</option>
            <option value="08">Agustus</option>
            <option value="09">September</option>
            <option value="10">Oktober</option>
            <option value="11">November</option>
            <option value="12">Desember</option>
          </select>


          <select
            disabled={daysShow ? false : true}
            name="filter_grafik"
            id="filter_grafik"
            className='px-5 py-1 shadow-md text-left'
            value={selectedDays}
            onChange={(e) => setSelectedDays(e.target.value)}
          >
            <option selected>Filter Day</option>
            {Array.from({ length: totalDays }, (_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}

          </select>
        </div>
        <div className='flex gap-4 w-full h-full justify-end p-2'>
          <CSVLink data={getCSV} headers={headers} separator={";"} filename={"Trabsaction Report.csv"} onClick={() => { }} className='rounded-md shadow-md px-5 bg-green-400 text-white'>Excel</CSVLink>
          <button className='rounded-md shadow-md px-5 bg-blue-400 text-white' onClick={generatePDF}>Pdf</button>
        </div>
      </div>
      <DataTable
        className="h-[300px] w-full border rounded-md shadow-md overflow-auto"
        columns={columns}
        data={transData}
        pagination
        paginationPerPage={5}
        responsive
        theme="solarized"
      />
      <div ref={componentPDF} style={{ width: "100%" }} className='absolute opacity-o -z-10 left-0 p-5'>
        <h1 className='text-center font-olive text-4xl'>Report Transaction</h1>

        <div className='top-[10%] absolute margin-auto left-[30%] h-full'>
          <img src="images/logo.png" alt="" className='opacity-10' width={500} />
        </div>

        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="border-2">No</th>
              <th className="border-2">Id Transaksi</th>
              <th className="border-2">Customer</th>
              <th className="border-2">Product Name</th>
              <th className="border-2">Price</th>
              <th className="border-2">Type Product</th>
              <th className="border-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {transData.map((item, index) => (
              <tr key={index}>
                <td className="border-2 p-3 text-center">
                  {index + 1}
                </td>
                <td className="border-2 p-3">
                  {item.id_trans}
                </td>
                <td className="border-2 p-3">
                  {item.nama_pengirim}
                </td>
                <td className="border-2 p-3">
                  {item.title}
                </td>
                <td className="border-2 p-3">
                  {item.price}
                </td>
                <td className="border-2 p-3">
                  {item.type}
                </td>
                <td className="border-2 p-3">
                  {item.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Report;
