import { Table } from "antd";

function App() {
  const columns = [
    {
      title: "From To",
      render: (record) => (
        <>
          {record.from}
          <br />
          {record.to}
        </>
      ),
      responsive: ["xs"],
    },
    {
      title: "From",
      dataIndex: "from",
      sorter: (a, b) => a.from.length - b.from.length,
      sortDirections: ["descend", "ascend"],
      responsive: ["sm"]
    },
    {
      title: "To",
      dataIndex: "to",
      sorter: (a, b) => a.to - b.to,
      sortDirections: ["descend", "ascend"],
      responsive: ["sm"]
    },
    {
      title: "Subject",
      dataIndex: "subject",
      sorter: (a, b) => a.subject.length - b.subject.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
      sortDirections: ["descend", "ascend"],
    },
  ];

  const data = [
    {
      key: "1",
      from: "aaa@example.com",
      to: "zzz.zzz@example.com",
      subject: "[ HR-888 ] Notice of official announcement",
      date: "0:20",
    },
    {
      key: "2",
      from: "bbb.bbbb@example.com",
      to: "yyy.yyy@example.com",
      subject: `[web:333] "Web Contact"`,
      date: "0:20",
    },
  ];
  return (
    <div className="App">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

export default App;
