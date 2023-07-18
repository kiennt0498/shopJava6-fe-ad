import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import Column from "antd/es/table/Column";
import { Button, Modal, Space, Table, Tag } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { BiEdit, BiSolidTrash } from "react-icons/bi";

class ListCategory extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [
        { categoryId: 1, name: "hat", status: 0 },
        { categoryId: 2, name: "hat 2", status: 1 },
        { categoryId: 3, name: "hat 3", status: 0 },
        { categoryId: 4, name: "hat 4", status: 1 },
        { categoryId: 5, name: "hat 5", status: 0 },
      ],
      category: {},
    };
  }

  editCategory = (data) => {
    console.log(data);
  };

  openDeleteModal = (data) => {
    this.setState({ ...this.state, category: data });

    console.log(data);

    const message = "Do you want to delete the category " + data.name;

    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteCategory,
      okText: "Delete",
      cancelText: "Cancel",
    });
  };

  deleteCategory = () => {
    console.log(this.state.category);
  };

  render() {
    const { navigate } = this.props.router;
    return (
      <div>
        <HeaderContent title="List Category" navigate={navigate} />

        <Table dataSource={this.state.dataSource} rowKey="categoryId">
          <Column
            title="Category ID"
            key="categoryId"
            dataIndex="categoryId"
            align="center"
            width={40}
          ></Column>

          <Column
            title="Name"
            key="name"
            dataIndex="name"
            align="center"
          ></Column>

          <Column
            title="Status"
            key="status"
            dataIndex="status"
            align="center"
            render={(_, { status }) => {
              let color = status === 0 ? "green" : "volcano";
              let name = status === 0 ? "Visible" : "Invisible";

              return <Tag color={color}>{name}</Tag>;
            }}
          ></Column>

          <Column
            title="Action"
            key="action"
            align="center"
            width={200}
            render={(_, record) => (
              <Space size="middle">
                <Button
                  key={record.key}
                  type="primary"
                  size="small"
                  onClick={() => this.editCategory(record)}
                >
                  <BiEdit /> Edit
                </Button>
                <Button
                  key={record.key}
                  type="primary"
                  danger
                  size="small"
                  onClick={() => this.openDeleteModal(record)}
                >
                  <BiSolidTrash /> Delete
                </Button>
              </Space>
            )}
          ></Column>
        </Table>
      </div>
    );
  }
}

export default withRouter(ListCategory);
