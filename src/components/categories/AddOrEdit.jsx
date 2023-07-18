import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import HeaderContent from "../common/HeaderContent";

class AddOrEdit extends Component {
  onSubmitForm = (values) => {
    console.log(values);
  };

  render() {
    const { navigate } = this.props.router;
    return (
      <div>
        <HeaderContent title="Add New Category" navigate={navigate} />
        <Form layout="vertical" className="Form" onFinish={this.onSubmitForm}>
          <Row>
            <Col md={12}>
              <Form.Item label="Category ID" name="categoryid">
                <Input readOnly></Input>
              </Form.Item>

              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input name" }]}
              >
                <Input></Input>
              </Form.Item>

              <Form.Item label="Status" name="status" initialValue={"0"}>
                <Select>
                  <Select.Option value="0">Visible</Select.Option>
                  <Select.Option value="1">Invisible</Select.Option>
                </Select>
              </Form.Item>
              <Divider />
              <Button
                htmlType="submit"
                type="primary"
                style={{ float: "right" }}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default withRouter(AddOrEdit);
